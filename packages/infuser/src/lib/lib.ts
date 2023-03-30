import { readFile as fsReadFile, writeFile } from "fs/promises";
import { extname } from "path";

type CommentStyle = { start: string; end: string };

export function getDefaultCommentStyle(
  fileExtension: string
): CommentStyle | null {
  const start = "infuser start";
  const end = "infuser end";

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
    ".js": blockComment,
    ".css": blockComment,
    ".ts": blockComment,
    ".md": htmlComment,
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
    startIndex,
    endIndex: endIndex + endComment.length,
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
  const { startIndex, endIndex, startComment, endComment } = getSlotIndices(
    fileContent,
    slotName,
    commentStyle
  );

  const beforeContent = fileContent.slice(0, startIndex);
  const afterContent = fileContent.slice(endIndex);

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

export function getSlots(
  fileContent: string,
  slotNames: string[],
  commentStyle: CommentStyle
) {
  const allSlotsRegex = new RegExp(
    `${commentStyle.start}\\s*(.*?)\\s*${commentStyle.end}`,
    "gs"
  );
  let allSlots: RegExpExecArray | null;
  const slots: Array<{ slotName: string; content: string }> = [];

  if (!slotNames || slotNames.length === 0) {
    while ((allSlots = allSlotsRegex.exec(fileContent))) {
      slots.push({
        slotName: allSlots[1],
        content: allSlots[0]
          .replace(commentStyle.start, "")
          .replace(commentStyle.end, "")
          .trim(),
      });
    }
  } else {
    for (const slotName of slotNames) {
      const { startIndex, endIndex, startComment } = getSlotIndices(
        fileContent,
        slotName,
        commentStyle
      );
      const content = fileContent.slice(
        startIndex + startComment.length,
        endIndex
      );
      slots.push({ slotName, content });
    }
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
