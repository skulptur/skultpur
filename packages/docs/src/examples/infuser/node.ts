import { updateFile } from "infuser";

const filePath = "./example.html";
const updates = [
  {
    slotName: "header",
    newContent: "<h1>New header content</h1>",
  },
  {
    slotName: "footer",
    newContent: "<p>New footer content</p>",
  },
];

updateFile(filePath, updates)
  .then(() => {
    console.log("File successfully updated");
  })
  .catch((error) => {
    console.error("An error occurred:", error);
  });
