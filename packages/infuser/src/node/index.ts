import { readFile as fsReadFile, writeFile as fsWriteFile } from "fs/promises";
import { extname } from "path";
import { SlotUpdate } from "../lib/types";
import { CommentStyle, getCommentStyle, updateSlots } from "../lib/lib";

/**
Reads the content of a file and returns it, along with the comment style used to identify slots in the file
@param filePath - The path to the file to read
@param commentStyle - (optional) The style of comments used to identify slots in the file; if not provided, the default comment style for the file extension will be used
@returns An object containing the content of the file and the comment style used to identify slots in the file
@throws An error if no default comment style is available for the file extension and no comment style is provided
*/

export async function readFile(filePath: string, commentStyle?: CommentStyle) {
  commentStyle = commentStyle || getCommentStyle(extname(filePath))!;
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
  updates: Array<SlotUpdate>,
  commentStyle?: CommentStyle // we try to infer
) {
  const file = await readFile(filePath, commentStyle);
  const fileContent = updateSlots(file.fileContent, updates, file.commentStyle);
  return await fsWriteFile(filePath, fileContent, "utf-8");
}
