import React from "react";
import { PageLayout } from "../../../components/PageLayout";
import { createQueue, QueueProps } from "schlange";

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

// Subscribe to events
queue.onItemAdded((item) => console.log(`Item added: ${item.data}`));
queue.onItemCompleted((id) => console.log(`Item completed: ${id}`));
queue.onQueueCompleted(() => console.log(`All done!`));

// Add items to the queue
queue.addToQueue("Item 1");
queue.addToQueue("Item 2");

export default function FilteredImagePage() {
  return (
    <PageLayout header={"schlange: basic"}>
      hello
      {/* <SimpleGrid cols={3}>
        {testImages.map((testImage) => {
          return <img src={testImage} style={{ width: "100%" }} />;
        })}
      </SimpleGrid> */}
    </PageLayout>
  );
}
