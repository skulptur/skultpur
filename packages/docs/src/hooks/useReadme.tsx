import { packages } from "../data/packages";
import { useMarkdown } from "../hooks/useMarkdown";
import { updateSlots, getSlot } from "infuser";

export type LibraryReadmeProp = {
  libraryName: keyof typeof packages;
};

export function useReadme({ libraryName }: LibraryReadmeProp) {
  const pkg = packages[libraryName];

  const updates = [
    {
      slotName: "title",
      newContent: "",
    },
    {
      slotName: "footer",
      newContent: "",
    },
  ];
  if (pkg.private) {
    updates.push({
      slotName: "installation",
      newContent: "",
    });
  }

  const updatedReadme = updateSlots(pkg.readme, updates, "md");

  // this remove first occurence is a quick and dirty way to remove the title
  // it is so we can style the title differently more easily
  const content = useMarkdown(updatedReadme);
  const footerSlot = getSlot(pkg.readme, "footer", "md");
  const footer = useMarkdown(footerSlot ? footerSlot.content : "");
  return {
    title: libraryName,
    content,
    footer,
  };
}
