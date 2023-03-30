import {
  getDefaultCommentStyle,
  getSlotIndices,
  replaceContentInString,
  getSlots,
  updateSlots,
} from "./lib";

const commentStyle = {
  start: "/* start $ */",
  end: "/* end $ */",
};

const fileContent = `some content
/* start slot1 */ old content 1 /* end slot1 */
some more content
/* start slot2 */ old content 2 /* end slot2 */
`;

const newFileContent = `some content
/* start slot1 */ new content 1 /* end slot1 */
some more content
/* start slot2 */ old content 2 /* end slot2 */
`;

describe("infuser", () => {
  test("returns empty comment style for unknown extensions", () => {
    expect(getDefaultCommentStyle(".txt")).toEqual(null);
  });
});

describe("getSlotIndices", () => {
  test("returns start and end indices for existing slot", () => {
    const result = getSlotIndices(fileContent, "slot1", commentStyle);
    expect(result).toEqual({
      startIndex: 13,
      endIndex: 60,
      startComment: "/* start slot1 */",
      endComment: "/* end slot1 */",
    });
  });

  test("throws an error for non-existing slot", () => {
    expect(() =>
      getSlotIndices(fileContent, "non-existing-slot", commentStyle)
    ).toThrow(
      "Content not found between /* start non-existing-slot */ and /* end non-existing-slot */"
    );
  });
});

describe("replaceContentInString", () => {
  test("replaces content in existing slot", () => {
    const replaced = replaceContentInString(
      fileContent,
      "slot1",
      " new content 1 ",
      commentStyle
    );
    expect(replaced).toEqual(newFileContent);
  });
});

describe("getSlots", () => {
  test("returns all slots when no slotNames are provided", () => {
    const slots = getSlots(fileContent, [], commentStyle);
    expect(slots).toHaveLength(2);
    expect(slots[0].slotName).toBe("slot1");
    expect(slots[0].content).toBe("old content 1");
    expect(slots[1].slotName).toBe("slot2");
    expect(slots[1].content).toBe("old content 2");
  });

  test("returns specified slots when slotNames are provided", () => {
    const slots = getSlots(fileContent, ["slot2"], commentStyle);
    expect(slots).toHaveLength(1);
    expect(slots[0].slotName).toBe("slot2");
    expect(slots[0].content).toBe("old content 2");
  });
});

// describe("updateSlots", () => {
//   test("updates specified slots with new content", () => {
//     const newFileContent = updateSlots(
//       fileContent,
//       [
//         { slotName: "slot1", newContent: "New content for slot 1." },
//         { slotName: "slot2", newContent: "New content for slot 2." },
//       ],
//       {
//         start: "/* infuser start",
//         end: "/* infuser end",
//       }
//     );
//     expect(newFileContent).toBe(`
// /* infuser start slot1 */
// New content for slot 1.
// /* infuser end slot1 */

// /* infuser start slot2 */
// New content for slot 2.
// /* infuser end slot2 */
// `);
//   });

//   test("handles errors when updating slots", () => {
//     const newFileContent = updateSlots(
//       fileContent,
//       [
//         {
//           slotName: "non-existent",
//           newContent: "New content for non-existent slot.",
//         },
//       ],
//       {
//         start: "/* infuser start",
//         end: "/* infuser end",
//       }
//     );
//     expect(newFileContent).toBe(fileContent);
//     expect(console.error).toHaveBeenCalledWith(
//       'Error updating slot "non-existent": Content not found between /* infuser start non-existent $ */ and /* infuser end non-existent $ */'
//     );
//   });
// });
