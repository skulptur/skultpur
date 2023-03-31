import { readFile as fsReadFile, writeFile as fsWriteFile } from "fs/promises";
import { extname } from "path";

/**
The style of comment delimiters for identifying slots in a file
*/
type CommentStyle = { start: string; end: string };

/**
Returns the default comment style for a given file extension
@param fileExtension - The extension of the file to check for a default comment style
@returns The default comment style for the given file extension, or null if none exists
*/
export function getDefaultCommentStyle(
  fileExtension: string
): CommentStyle | null {
  const start = "start";
  const end = "end";

  const blockComment: CommentStyle = {
    start: `/* ${start} $ */`,
    end: `/* ${end} $ */`,
  };

  const htmlComment: CommentStyle = {
    start: `<!-- ${start} $ -->`,
    end: `<!-- ${end} $ -->`,
  };

  const commentStyles: Record<string, CommentStyle> = {
    ".html": htmlComment,
    ".md": htmlComment,
    ".js": blockComment,
    ".css": blockComment,
    ".ts": blockComment,
  };

  return commentStyles[fileExtension] || null;
}

/**
Gets the start and end indices of a named slot in a file, identified by the given comment style
@param fileContent - The content of the file to search for the named slot
@param slotName - The name of the slot to search for
@param commentStyle - The style of comments used to identify the slots
@returns An object containing the start and end indices of the named slot, as well as the start and end comment delimiters
@throws An error if the named slot cannot be found in the file
*/
export function getSlotIndices(
  fileContent: string,
  slotName: string,
  commentStyle: CommentStyle
) {
  const startComment = commentStyle.start.replace("$", slotName);
  const endComment = commentStyle.end.replace("$", slotName);
  const startIndex = fileContent.indexOf(startComment);
  const endIndex = fileContent.indexOf(endComment);

  if (startIndex === -1 || endIndex === -1) {
    throw new Error(
      `Content not found between ${startComment} and ${endComment}`
    );
  }

  return {
    startIndexLeft: startIndex,
    startIndexRight: startIndex + startComment.length,
    endIndexLeft: endIndex,
    endIndexRight: endIndex + endComment.length,
    startComment,
    endComment,
  };
}

/**
Replaces the content of a named slot in a file, identified by the given comment style
@param fileContent - The content of the file to modify
@param slotName - The name of the slot to replace the content of
@param newContent - The new content to replace the slot's old content with
@param commentStyle - The style of comments used to identify the slots
@returns The modified content of the file
@throws An error if the named slot cannot be found in the file
*/
export function replaceContentInString(
  fileContent: string,
  slotName: string,
  newContent: string,
  commentStyle: CommentStyle
): string {
  const {
    startIndexLeft,
    endIndexRight,
    startComment,
    endComment,
  } = getSlotIndices(fileContent, slotName, commentStyle);

  const beforeContent = fileContent.slice(0, startIndexLeft);
  const afterContent = fileContent.slice(endIndexRight);

  return `${beforeContent}${startComment}${newContent}${endComment}${afterContent}`;
}

/**
Reads the content of a file and returns it, along with the comment style used to identify slots in the file
@param filePath - The path to the file to read
@param commentStyle - (optional) The style of comments used to identify slots in the file; if not provided, the default comment style for the file extension will be used
@returns An object containing the content of the file and the comment style used to identify slots in the file
@throws An error if no default comment style is available for the file extension and no comment style is provided
*/
export async function readFile(filePath: string, commentStyle?: CommentStyle) {
  commentStyle = commentStyle || getDefaultCommentStyle(extname(filePath));
  if (!commentStyle) {
    throw new Error(
      "No default comment style available for this file type, please specify the commentStyle param."
    );
  }

  const fileContent = await fsReadFile(filePath, "utf-8");

  return {
    fileContent,
    commentStyle,
  };
}

// escapes all but $ as we use that symbol to replace with the name
function escapeRegExp(string: string): string {
  return string.replace(/[.*+\-?^${}()|[\]\\]/g, "\\$&");
}

/**
Gets the names of all the slots in a file, identified by the given comment style
@param fileContent - The content of the file to search for slots
@param commentStyle - The style of comments used to identify the slots
@returns An array of the names of all the slots in the file
*/
export function getSlotNames(
  fileContent: string,
  commentStyle: CommentStyle
): string[] {
  const escapedStart = escapeRegExp(commentStyle.start).replace("\\$", "($)");
  const startPattern = escapedStart.replace("($)", "(\\w+)");
  const slotNamePattern = new RegExp(startPattern, "g");
  const slotNames: string[] = [];
  let match: RegExpExecArray | null;

  while ((match = slotNamePattern.exec(fileContent)) !== null) {
    const slotName = match[1];
    if (!slotNames.includes(slotName)) {
      slotNames.push(slotName);
    }
  }

  return slotNames;
}

/**
Gets the content of all the named slots in a file, identified by the given comment style
@param fileContent - The content of the file to search for slots
@param slotNames - (optional) An array of the names of the slots to get; if not provided, all slots in the file will be returned
@param commentStyle - The style of comments used to identify the slots
@returns An array of objects containing the name and content of each named slot in the file
*/
export function getSlots(
  fileContent: string,
  slotNames: string[],
  commentStyle: CommentStyle
) {
  const names = slotNames.length
    ? slotNames
    : getSlotNames(fileContent, commentStyle);
  const slots: Array<{ slotName: string; content: string }> = [];

  for (const slotName of names) {
    const { startIndexRight, endIndexLeft } = getSlotIndices(
      fileContent,
      slotName,
      commentStyle
    );
    const content = fileContent.slice(startIndexRight, endIndexLeft);
    slots.push({ slotName, content });
  }

  return slots;
}

/**
Updates the content of one or more named slots in a file, identified by the given comment style
@param fileContent - The content of the file to modify
@param updates - An array of objects containing the name and new content of each named slot to update
@param commentStyle - The style of comments used to identify the slots
@returns The modified content of the file
@throws An error if the named slot cannot be found in the file
*/
export function updateSlots(
  fileContent: string,
  updates: Array<{ slotName: string; newContent: string }>,
  commentStyle: CommentStyle
) {
  for (const update of updates) {
    const { slotName, newContent } = update;
    try {
      fileContent = replaceContentInString(
        fileContent,
        slotName,
        newContent,
        commentStyle
      );
    } catch (error) {
      console.error(`Error updating slot "${slotName}":`, error.message);
    }
  }

  return fileContent;
}

/**
Updates the content of one or more named slots (identified by the given comment style) in a file and writes the changes to disk
@param filePath - The path to the file to modify
@param updates - An array of objects containing the name and new content of each named slot to update
@param commentStyle - (optional) The style of comments used to identify the slots; if not provided, the default comment style for the file extension will be used
@returns A promise that resolves when the file has been successfully updated
@throws An error if the named slot cannot be found in the file or no default comment style is available for the file extension and no comment style is provided
*/
export async function updateFile(
  filePath: string,
  updates: Array<{ slotName: string; newContent: string }>,
  commentStyle?: CommentStyle // we try to infer
) {
  const file = await readFile(filePath, commentStyle);
  const fileContent = updateSlots(file.fileContent, updates, file.commentStyle);
  return await fsWriteFile(filePath, fileContent, "utf-8");
}
