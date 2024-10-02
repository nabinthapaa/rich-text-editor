import { Editor } from "@tiptap/react";
import {
  AlignCenter,
  AlignLeft,
  AlignRight,
  Bold,
  Code2,
  Heading1,
  Heading2,
  Heading3,
  Italic,
  List,
  ListOrdered,
  Quote,
  Redo,
  Strikethrough,
  Undo,
} from "lucide-react";
import "./index.css";

export function Toolbar({
  editor,
  iconSize = 12,
}: {
  editor: Editor;
  iconSize?: number;
}) {
  if (!editor) {
    return null;
  }
  return (
    <>
      <div className="space-x-4 toolbar w-full control-group">
        <div className="typography space-x-1">
          <button
            className={`${editor.isActive("bold") ? "active" : ""} toolbar-button`}
            onClick={editor.chain().focus().toggleBold().run}
          >
            <Bold size={iconSize} strokeWidth={4} />
          </button>
          <button
            className={`${editor.isActive("italic") ? "active" : ""} toolbar-button`}
            onClick={editor.chain().focus().toggleItalic().run}
          >
            <Italic size={iconSize} strokeWidth={4} />
          </button>
          <button
            className={`${editor.isActive("strike") ? "active" : ""} toolbar-button`}
            onClick={editor.chain().focus().toggleStrike().run}
          >
            <Strikethrough size={iconSize} strokeWidth={4} />
          </button>
        </div>
        <div className="space-x-2 headings">
          <button
            className={`${editor.isActive("heading", { level: 1 }) ? "active" : ""} toolbar-button`}
            onClick={editor.chain().focus().toggleHeading({ level: 1 }).run}
          >
            <Heading1 size={iconSize} strokeWidth={3} />
          </button>
          <button
            className={`${editor.isActive("heading", { level: 2 }) ? "active" : ""} toolbar-button`}
            onClick={editor.chain().focus().toggleHeading({ level: 2 }).run}
          >
            <Heading2 size={iconSize} strokeWidth={3} />
          </button>
          <button
            className={`${editor.isActive("heading", { level: 3 }) ? "active" : ""} toolbar-button`}
            onClick={editor.chain().focus().toggleHeading({ level: 1 }).run}
          >
            <Heading3 size={iconSize} strokeWidth={3} />
          </button>
        </div>
        <div className="space-x-2 miscellanous">
          <button
            className={`${editor.isActive({ textAlign: "left" }) ? "active" : ""} toolbar-button`}
            onClick={editor.chain().focus().setTextAlign("left").run}
          >
            <AlignLeft size={iconSize} strokeWidth={2} />
          </button>
          <button
            className={`${editor.isActive({ textAlign: "center" }) ? "active" : ""} toolbar-button`}
            onClick={editor.chain().focus().setTextAlign("center").run}
          >
            <AlignCenter size={iconSize} strokeWidth={2} />
          </button>

          <button
            className={`${editor.isActive({ textAlign: "right" }) ? "active" : ""} toolbar-button`}
            onClick={editor.chain().focus().setTextAlign("right").run}
          >
            <AlignRight size={iconSize} strokeWidth={2} />
          </button>
          <button
            className={`${editor.isActive({ textAlign: "justify" }) ? "active" : ""} toolbar-button`}
            onClick={editor.chain().focus().setTextAlign("justify").run}
          >
            <AlignRight size={iconSize} strokeWidth={2} />
          </button>
        </div>

        <div className="space-x-2 miscellanous">
          <button
            className={`${editor.isActive("orderedList") ? "active" : ""} toolbar-button`}
            onClick={editor.chain().focus().toggleOrderedList().run}
          >
            <ListOrdered size={iconSize} strokeWidth={2} viewBox="0  0 24 24" />
          </button>
          <button
            className={`${editor.isActive("bulletList") ? "active" : ""} toolbar-button`}
            onClick={editor.chain().focus().toggleBulletList().run}
          >
            <List size={iconSize} strokeWidth={3} />
          </button>
          <button
            className={`${editor.isActive("codeBlock") ? "active" : ""} toolbar-button fill`}
            onClick={editor.chain().focus().toggleCodeBlock().run}
          >
            <Code2 size={iconSize} strokeWidth={3} />
          </button>
          <button
            className={`${editor.isActive("blockquote") ? "active" : ""} toolbar-button fill`}
            onClick={editor.chain().focus().toggleBlockquote().run}
          >
            <Quote size={iconSize} strokeWidth={2} />
          </button>
        </div>
        <div className="space-x-2 controls self-end justify-self-end">
          <button
            className={`toolbar-button disabled:bg-red-200 disabled:cursor-not-allowed`}
            onClick={editor.chain().focus().undo().run}
            disabled={!editor.can().undo()}
          >
            <Undo size={iconSize} strokeWidth={3} />
          </button>
          <button
            className={`${editor.isActive("heading", { level: 2 }) ? "active" : ""} toolbar-button disabled:bg-red-200`}
            onClick={editor.chain().focus().redo().run}
            disabled={!editor.can().redo()}
          >
            <Redo size={iconSize} strokeWidth={3} />
          </button>
        </div>
      </div>
    </>
  );
}
