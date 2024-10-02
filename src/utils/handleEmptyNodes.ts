import { type Editor } from "@tiptap/react";
import { Node } from "@tiptap/pm/model";

export function handleEmptyNode({
  node,
}: {
  editor: Editor;
  node: Node;
  pos: number;
  hasAnchor: boolean;
}) {
  switch (node.type.name) {
    case "heading":
      return `${node.type.name} ${node.attrs.level}`;
    default:
      return "Type '/' to begin editing";
  }
}
