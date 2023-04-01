import {
  getCommentStyle,
  getSlotIndices,
  updateSlot,
  getSlots,
  updateSlots,
  getSlotNames,
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

const newFileContent2 = `some content
/* start slot1 */ new content 1 /* end slot1 */
some more content
/* start slot2 */ new content 2 /* end slot2 */
`;

describe("infuser", () => {
  test("returns empty comment style for unknown extensions", () => {
    expect(getCommentStyle(".txt")).toEqual(null);
  });
});

describe("getSlotIndices", () => {
  test("returns start and end indices for existing slot", () => {
    const result = getSlotIndices(fileContent, "slot1", commentStyle);
    expect(result).toEqual({
      startIndexLeft: 13,
      startIndexRight: 30,
      endIndexLeft: 45,
      endIndexRight: 60,
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
    const replaced = updateSlot(
      fileContent,
      "slot1",
      " new content 1 ",
      commentStyle
    );
    expect(replaced).toEqual(newFileContent);
  });
});

describe("getSlotNames", () => {
  test("returns an array of slot names", () => {
    const slotNames = getSlotNames(fileContent, commentStyle);
    expect(slotNames).toEqual(["slot1", "slot2"]);
  });

  test("returns an empty array if no slots found", () => {
    const slotNames = getSlotNames("no slots in this content", commentStyle);
    expect(slotNames).toEqual([]);
  });
});

describe("getSlots", () => {
  test("returns all slots when no slotNames are provided", () => {
    const slots = getSlots(fileContent, [], commentStyle);
    expect(slots).toHaveLength(2);
    expect(slots[0].slotName).toBe("slot1");
    expect(slots[0].content).toBe(" old content 1 ");
    expect(slots[1].slotName).toBe("slot2");
    expect(slots[1].content).toBe(" old content 2 ");
  });

  test("returns specified slots when slotNames are provided", () => {
    const slots = getSlots(fileContent, ["slot2"], commentStyle);
    expect(slots).toHaveLength(1);
    expect(slots[0].slotName).toBe("slot2");
    expect(slots[0].content).toBe(" old content 2 ");
  });
});

describe("updateSlots", () => {
  test("updates content of specified slots", () => {
    const updatedFileContent = updateSlots(
      fileContent,
      [{ slotName: "slot1", newContent: " new content 1 " }],
      commentStyle
    );
    expect(updatedFileContent).toEqual(newFileContent);
  });

  test("updates content of multiple slots", () => {
    const updatedFileContent = updateSlots(
      fileContent,
      [
        { slotName: "slot1", newContent: " new content 1 " },
        { slotName: "slot2", newContent: " new content 2 " },
      ],
      commentStyle
    );

    expect(updatedFileContent).toEqual(newFileContent2);
  });

  test("ignores non-existing slots and logs error", () => {
    const consoleErrorSpy = jest
      .spyOn(console, "error")
      .mockImplementation(() => {});

    const updatedFileContent = updateSlots(
      fileContent,
      [{ slotName: "non-existing-slot", newContent: " new content " }],
      commentStyle
    );

    expect(updatedFileContent).toEqual(fileContent);
    expect(consoleErrorSpy).toHaveBeenCalledWith(
      'Error updating slot "non-existing-slot":',
      "Content not found between /* start non-existing-slot */ and /* end non-existing-slot */"
    );

    consoleErrorSpy.mockRestore();
  });
});
