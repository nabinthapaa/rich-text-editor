import { type Editor, type Range } from "@tiptap/react";
import {
  AlignCenter,
  AlignJustifyIcon,
  AlignLeft,
  AlignRight,
  Bold,
  Code2,
  DivideIcon,
  Heading1Icon,
  Heading2Icon,
  Heading3Icon,
  IndentDecrease,
  IndentIncrease,
  ItalicIcon,
  List,
  ListOrdered,
  QuoteIcon,
  Redo,
  StrikethroughIcon,
  Undo2,
} from "lucide-react";

export interface Suggestions {
  title: string;
  command: ({ editor, range }: { editor: Editor; range: Range }) => void;
  icon?: React.ReactNode;
  //eslint-disable-next-line
  attrs?: Record<string, any>;
}

export interface SuggestionGroups {
  [key: string]: Suggestions[];
}

export const suggestions: SuggestionGroups = {
  "Basic Styles": [
    {
      title: "Bold",
      command: ({ editor, range }) => {
        editor.chain().focus().deleteRange(range).setMark("bold").run();
      },
      icon: <Bold size={24} />,
    },
    {
      title: "Italic",
      command: ({ editor, range }) => {
        editor.chain().focus().deleteRange(range).setMark("italic").run();
      },
      icon: <ItalicIcon size={24} />,
    },
    {
      title: "Strike Through",
      command: ({ editor, range }) => {
        editor.chain().focus().deleteRange(range).setMark("strike").run();
      },
      icon: <StrikethroughIcon size={24} />,
    },
  ],
  Heading: [
    {
      title: "Heading 1",
      command: ({ editor, range }) => {
        editor
          .chain()
          .focus()
          .deleteRange(range)
          .setNode("heading", { level: 1 })
          .run();
      },
      icon: <Heading1Icon size={24} />,
      attrs: {
        "data-test-id": "insert-heading1",
      },
    },
    {
      title: "Heading 2",
      command: ({ editor, range }) => {
        editor
          .chain()
          .focus()
          .deleteRange(range)
          .setNode("heading", { level: 2 })
          .run();
      },
      icon: <Heading2Icon size={24} />,
    },
    {
      title: "Heading 3",
      command: ({ editor, range }) => {
        editor
          .chain()
          .focus()
          .deleteRange(range)
          .setNode("heading", { level: 3 })
          .run();
      },
      icon: <Heading3Icon size={24} />,
    },
  ],
  "Text Alignment": [
    {
      title: "Align Left",
      command: ({ editor, range }) => {
        editor.chain().focus().deleteRange(range).setTextAlign("left").run();
      },
      icon: <AlignLeft size={24} />,
    },
    {
      title: "Align Right",
      command: ({ editor, range }) => {
        editor.chain().focus().deleteRange(range).setTextAlign("right").run();
      },
      icon: <AlignRight size={24} />,
    },
    {
      title: "Align Center",
      command: ({ editor, range }) => {
        editor.chain().focus().deleteRange(range).setTextAlign("center").run();
      },
      icon: <AlignCenter size={24} />,
    },
    {
      title: "Justify",
      command: ({ editor, range }) => {
        editor.chain().focus().deleteRange(range).setTextAlign("justify").run();
      },
      icon: <AlignJustifyIcon size={24} />,
    },
  ],
  List: [
    {
      title: "Numbered List",
      command: ({ editor, range }) => {
        editor.chain().focus().deleteRange(range).toggleOrderedList().run();
      },
      icon: <ListOrdered size={24} />,
    },
    {
      title: "List",
      command: ({ editor, range }) => {
        editor.chain().focus().deleteRange(range).toggleBulletList().run();
      },
      icon: <List size={24} />,
    },
    {
      title: "Indent List",
      command: ({ editor, range }) => {
        editor
          .chain()
          .focus()
          .deleteRange(range)
          .sinkListItem("listItem")
          .run();
      },
      icon: <IndentIncrease size={24} />,
    },
    {
      title: "Outdent List",
      command: ({ editor, range }) => {
        editor
          .chain()
          .focus()
          .deleteRange(range)
          .liftListItem("listItem")
          .run();
      },
      icon: <IndentDecrease size={24} />,
    },
  ],
  Extras: [
    {
      title: "Code",
      command: ({ editor, range }) => {
        editor.chain().focus().deleteRange(range).toggleCodeBlock().run();
      },
      icon: <Code2 size={24} />,
    },
    {
      title: "Quotes",
      command: ({ editor, range }) => {
        editor.chain().focus().deleteRange(range).toggleBlockquote().run();
      },
      icon: <QuoteIcon size={24} />,
    },
    {
      title: "Divider",
      command: ({ editor, range }) => {
        editor.chain().focus().deleteRange(range).setHorizontalRule().run();
      },
      icon: <DivideIcon size={24} />,
    },
  ],
  History: [
    {
      title: "Undo",
      command: ({ editor, range }) => {
        editor.chain().focus().deleteRange(range).undo().run();
      },
      icon: <Undo2 size={24} />,
    },
    {
      title: "Redo",
      command: ({ editor, range }) => {
        editor.chain().focus().deleteRange(range).redo().run();
      },
      icon: <Redo size={24} />,
    },
  ],
};
