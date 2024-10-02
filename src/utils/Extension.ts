import { Extension } from "@tiptap/core";
import Suggestion from "@tiptap/suggestion";
import suggestion from "./suggestion";

const Commands = Extension.create({
  name: "commands",

  addOptions() {
    return {
      suggestion,
    };
  },

  addProseMirrorPlugins() {
    return [
      Suggestion({
        editor: this.editor,
        ...this.options.suggestion,
      }),
    ];
  },
});

export default Commands;
