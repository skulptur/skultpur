import { readFile as fsReadFile, writeFile as fsWriteFile } from "fs/promises";
import { extname } from "path";

type CommentStyle = { start: string; end: string };

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

export async function updateFile(
  filePath: string,
  updates: Array<{ slotName: string; newContent: string }>,
  commentStyle?: CommentStyle // we try to infer
) {
  const file = await readFile(filePath, commentStyle);
  const fileContent = updateSlots(file.fileContent, updates, file.commentStyle);
  return await fsWriteFile(filePath, fileContent, "utf-8");
}
