import { type Editor, ReactRenderer } from "@tiptap/react";
import tippy from "tippy.js";
import { CommandsList } from "./CommandList";
import { suggestions, SuggestionGroups } from "./suggestionLists";
import { KeyboardEvent } from "react";

interface Command {
  editor: Editor;
  range: Range;
  //eslint-disable-next-line
  props: Record<string, any>;
}

function flattenSuggestions(data: SuggestionGroups) {
  const commands = [];
  for (const [, command] of Object.entries(data)) {
    commands.push(command);
  }
  return commands;
}

const suggestion = {
  items: ({ query }: { query: string }) => {
    return flattenSuggestions(suggestions)
      .flat()
      .filter((item) => item.title.toLowerCase().includes(query.toLowerCase()))
      .slice(0, 10);
  },

  char: "/",
  allowSpaces: true,
  startOfLine: true,
  command: ({ editor, range, props }: Command) => {
    props.command({ editor, range, props });
  },

  render: () => {
    //eslint-disable-next-line
    let component: ReactRenderer<CommandsList, any>;

    //eslint-disable-next-line
    let popup: any;

    return {
      //eslint-disable-next-line
      onStart: (props: Record<string, any>) => {
        component = new ReactRenderer(CommandsList, {
          props,
          editor: props.editor,
        });

        if (!props.clientRect) {
          return;
        }

        popup = tippy(props.editor.options.element, {
          getReferenceClientRect: props.clientRect,
          appendTo: () => document.body,
          content: component.element,
          showOnCreate: true,
          interactive: true,
          trigger: "auto",
          placement: "bottom-start",
        });
      },

      //eslint-disable-next-line
      onUpdate(props: Record<string, any>) {
        component.updateProps(props);

        if (!props.clientRect) {
          return;
        }

        popup.setProps({
          getReferenceClientRect: props.clientRect,
        });
      },

      //eslint-disable-next-line
      onKeyDown({ event }: any) {
        if (event.key === "Escape") {
          popup.hide();
          return true;
        }
        if (component.ref)
          return component.ref?.onKeyDown(event as KeyboardEvent);
        return false;
      },

      onExit() {
        component.destroy();
        popup.destroy();
      },
    };
  },
};

export default suggestion;
