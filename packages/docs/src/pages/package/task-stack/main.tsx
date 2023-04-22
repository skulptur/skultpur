import React from "react";
import { PageLayout } from "../../../components/PageLayout";
import { createQueue, QueueProps } from "task-stack";

// Define a processing function for the queue
async function processData(item) {
  console.log(`Processing: ${item.data}`);
  // Simulate processing time
  await new Promise((resolve) => setTimeout(resolve, 1000));
}

// Configure the queue
const queueProps: QueueProps<string> = {
  processFunction: processData,
  idGenerator: () =>
    Math.random()
      .toString(36)
      .substr(2, 9),
};

// Create the queue
const queue = createQueue(queueProps);

// Add items to the queue
queue.addToQueue("Item 1");
queue.addToQueue("Item 2");

// Subscribe to events
queue.onItemAdded((item) => console.log(`Item added: ${item.data}`));
queue.onItemCompleted((id) => console.log(`Item completed: ${id}`));

// Clean up
setTimeout(() => {
  queue.dispose();
}, 5000);

export default function FilteredImagePage() {
  return (
    <PageLayout header={"task-stack: basic"}>
      hello
      {/* <SimpleGrid cols={3}>
        {testImages.map((testImage) => {
          return <img src={testImage} style={{ width: "100%" }} />;
        })}
      </SimpleGrid> */}
    </PageLayout>
  );
}
