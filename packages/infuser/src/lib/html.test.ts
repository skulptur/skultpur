import { getCommentStyle, updateSlot, getSlots, getSlotNames } from "./lib";

const htmlCommentStyle = {
  start: "<!-- infuser start $ -->",
  end: "<!-- infuser end $ -->",
};

const htmlFileContent = `<!DOCTYPE html>
<html>
<head>
  <title>Page Title</title>
</head>
<body>
  <!-- infuser start slot1 -->Old content 1<!-- infuser end slot1 -->
  <!-- infuser start slot2 -->Old content 2<!-- infuser end slot2 -->
</body>
</html>
`;

const newHtmlFileContent = `<!DOCTYPE html>
<html>
<head>
  <title>Page Title</title>
</head>
<body>
  <!-- infuser start slot1 -->New content 1<!-- infuser end slot1 -->
  <!-- infuser start slot2 -->Old content 2<!-- infuser end slot2 -->
</body>
</html>
`;

describe("HTML files", () => {
  test("returns default comment style for .html files", () => {
    expect(getCommentStyle(".html")).toEqual(htmlCommentStyle);
  });

  test("replaces content in existing HTML slot", () => {
    const replaced = updateSlot(
      htmlFileContent,
      "slot1",
      "New content 1",
      htmlCommentStyle
    );
    expect(replaced).toEqual(newHtmlFileContent);
  });

  test("returns an array of HTML slot names", () => {
    const slotNames = getSlotNames(htmlFileContent, htmlCommentStyle);
    expect(slotNames).toEqual(["slot1", "slot2"]);
  });

  test("returns all HTML slots when no slotNames are provided", () => {
    const slots = getSlots(htmlFileContent, [], htmlCommentStyle);
    expect(slots).toHaveLength(2);
    expect(slots[0].slotName).toBe("slot1");
    expect(slots[0].content).toBe("Old content 1");
    expect(slots[1].slotName).toBe("slot2");
    expect(slots[1].content).toBe("Old content 2");
  });
});
