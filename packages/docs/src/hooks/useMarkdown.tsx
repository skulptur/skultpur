import React, { useState, useEffect, Fragment } from "react";
import { unified } from "unified";
import remarkParse from "remark-parse";
import { Text, Anchor, Code, Title } from "@mantine/core";
import { Prism } from "@mantine/prism";

function renderNode(node: any): React.ReactNode {
  switch (node.type) {
    case "root":
      return node.children.map(renderNode);
    case "heading":
      return (
        <Title mb="lg" key={node.position.start.offset} order={node.depth}>
          {node.children.map(renderNode)}
        </Title>
      );
    case "paragraph":
      return (
        <Text mb="lg" key={node.position.start.offset}>
          {node.children.map(renderNode)}
        </Text>
      );
    case "emphasis":
      return (
        <em key={node.position.start.offset}>
          {node.children.map(renderNode)}
        </em>
      );
    case "strong":
      return (
        <strong key={node.position.start.offset}>
          {node.children.map(renderNode)}
        </strong>
      );
    case "delete":
      return (
        <del key={node.position.start.offset}>
          {node.children.map(renderNode)}
        </del>
      );
    case "link":
      return (
        <Anchor key={node.position.start.offset} href={node.url}>
          {node.children.map(renderNode)}
        </Anchor>
      );
    case "image":
      return (
        <img key={node.position.start.offset} src={node.url} alt={node.alt} />
      );
    case "code":
      return (
        <Prism mb="lg" language={node.lang}>
          {node.value}
        </Prism>
      );

    case "inlineCode":
      return <Code key={node.position.start.offset}>{node.value}</Code>;
    case "blockquote":
      return (
        <blockquote key={node.position.start.offset}>
          {node.children.map(renderNode)}
        </blockquote>
      );
    case "list":
      const ListTag = node.ordered ? "ol" : "ul";
      return (
        <ListTag key={node.position.start.offset}>
          {node.children.map(renderNode)}
        </ListTag>
      );
    case "listItem":
      return (
        <li key={node.position.start.offset}>
          {node.children.map(renderNode)}
        </li>
      );
    case "thematicBreak":
      return <hr key={node.position.start.offset} />;
    case "table":
      return (
        <table key={node.position.start.offset}>
          <thead>
            {node.children
              .filter(
                (child: any) => child.type === "tableRow" && child.isHeader
              )
              .map(renderNode)}
          </thead>
          <tbody>
            {node.children
              .filter(
                (child: any) => child.type === "tableRow" && !child.isHeader
              )
              .map(renderNode)}
          </tbody>
        </table>
      );
    case "tableRow":
      const RowTag = node.isHeader ? "th" : "td";
      return (
        <tr key={node.position.start.offset}>
          {node.children.map((cell: any) =>
            React.createElement(
              RowTag,
              { key: cell.position.start.offset },
              cell.children.map(renderNode)
            )
          )}
        </tr>
      );
    case "text":
      return (
        <Text display="inline" key={node.position.start.offset}>
          {node.value}
        </Text>
      );
    // Add other node types as needed
    default:
      return null;
  }
}

export function renderMarkdownAst(ast: any) {
  return renderNode(ast);
}

export function useMarkdown(text: string) {
  const [Content, setContent] = useState(Fragment as any);

  useEffect(() => {
    const processor = unified().use(remarkParse);
    const ast = processor.parse(text);
    console.log(ast);
    const content = renderMarkdownAst(ast);
    setContent(content);
  }, [text]);

  return Content;
}
