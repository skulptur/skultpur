import { SlotUpdate } from "./types";

/**
The style of comment delimiters for identifying slots in a file
*/
export type CommentStyle = { start: string; end: string };

const start = "infuser start";
const end = "infuser end";

const blockComment: CommentStyle = {
  start: `/* ${start} $ */`,
  end: `/* ${end} $ */`,
};

const lineComment: CommentStyle = {
  start: `// ${start} $`,
  end: `// ${end} $`,
};

const htmlComment: CommentStyle = {
  start: `<!-- ${start} $ -->`,
  end: `<!-- ${end} $ -->`,
};

const pythonComment: CommentStyle = {
  start: `# ${start} $`,
  end: `# ${end} $`,
};

const rubyComment: CommentStyle = {
  start: `=begin ${start} $`,
  end: `=end ${end} $`,
};

export const commentStyles = {
  html: htmlComment,
  md: htmlComment,
  js: blockComment,
  css: blockComment,
  ts: blockComment,
  jsx: blockComment,
  tsx: blockComment,
  scss: blockComment,
  less: blockComment,
  sass: blockComment,
  php: blockComment,
  py: pythonComment,
  rb: rubyComment,
  java: blockComment,
  c: blockComment,
  cpp: blockComment,
  cs: blockComment,
  go: blockComment,
  kt: blockComment,
  sql: lineComment,
  sh: lineComment,
} as const;

export type FileExtension = keyof typeof commentStyles;

export type CommentStyleOrFileExtension = FileExtension | CommentStyle;

const resolveCommentStyle = (
  commentStyleOrFileExtension: CommentStyleOrFileExtension
) => {
  const commentStyle =
    typeof commentStyleOrFileExtension === "string"
      ? commentStyles[commentStyleOrFileExtension]
      : commentStyleOrFileExtension;
  if (!commentStyle) {
    throw new Error("Couldn't resolve comment style.");
  }
  return commentStyle;
};

/**
Returns the default comment style for a given file extension
@param fileExtension - The extension of the file to check for a default comment style
@returns The default comment style for the given file extension, or null if none exists
*/
export function getCommentStyle(fileExtension: string): CommentStyle | null {
  return commentStyles[fileExtension.replace(/\./g, "")] || null;
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
  commentStyle: CommentStyleOrFileExtension
) {
  const resolvedCommentStyle = resolveCommentStyle(commentStyle);
  const startComment = resolvedCommentStyle.start.replace("$", slotName);
  const endComment = resolvedCommentStyle.end.replace("$", slotName);
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
export function updateSlot(
  fileContent: string,
  slotName: string,
  newContent: string,
  commentStyle: CommentStyleOrFileExtension
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
  updates: Array<SlotUpdate>,
  commentStyle: CommentStyleOrFileExtension
) {
  for (const update of updates) {
    const { slotName, newContent } = update;
    try {
      fileContent = updateSlot(fileContent, slotName, newContent, commentStyle);
    } catch (error) {
      console.error(`Error updating slot "${slotName}":`, error.message);
    }
  }

  return fileContent;
}
