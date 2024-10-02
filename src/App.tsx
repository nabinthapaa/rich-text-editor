import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Toolbar } from "./Toolbar";
import TextAlign from "@tiptap/extension-text-align";
import Commands from "./utils/Extension.ts";
import suggestion from "./utils/suggestion.ts";
import Heading from "@tiptap/extension-heading";
import Placeholder from "@tiptap/extension-placeholder";
import FocusClasses from "@tiptap/extension-focus";
import { handleEmptyNode } from "./utils/handleEmptyNodes.ts";

const extensions = [
  StarterKit.configure({
    horizontalRule: {
      HTMLAttributes: {
        class: "hr-rule",
      },
    },
    paragraph: {
      HTMLAttributes: {
        class: "paragraph",
      },
    },
    orderedList: {
      HTMLAttributes: {
        class: "orderedList",
      },
    },
    bulletList: {
      HTMLAttributes: {
        class: "bulletList",
      },
    },
  }),
  Heading.configure({
    levels: [1, 2, 3],
    HTMLAttributes: {
      class: "heading",
    },
  }),
  TextAlign.configure({
    types: ["heading", "paragraph"],
  }),
  Placeholder.configure({
    emptyEditorClass: "is-editor-empty",
    emptyNodeClass: "is-node-empty",
    placeholder(PlaceholderProps) {
      if (typeof PlaceholderProps !== "string") {
        return handleEmptyNode(PlaceholderProps);
      }
      return PlaceholderProps;
    },
  }),
  FocusClasses.configure({
    className: "focus",
    mode: "all",
  }),
  Commands.configure({
    suggestion,
  }),
];
const test_content = `<h1>The Benefits of Daily Exercise</h1><p>Staying active is essential for both physical and mental health. Here are some key benefits of incorporating daily exercise into your routine.</p><h2>Physical Benefits</h2><ul><li><p> <strong>Increases Strength</strong>  </p></li><li><p>     Regular workouts help build and maintain muscle mass.</p></li><li><p><strong>Boosts Energy Levels</strong>  </p></li><li><p>   Exercise improves circulation, leading to increased energy.</p></li><li><p><strong>Enhances Flexibility</strong>  </p></li><li><p>   Stretching and movement improve overall flexibility.</p></li></ul><ol start="4"><li><p> <strong>Supports Weight Management</strong>  </p></li></ol><p>   Helps in maintaining or losing weight effectively.</p><h2>Mental Benefits</h2><ul><li><p><strong>Improves Mood</strong>  </p></li><li><p>  Physical activity releases endorphins, which enhance happiness.</p></li><li><p><strong>Reduces Stress</strong>  </p></li><li><p>  Exercise acts as a natural stress reliever.</p></li><li><p><strong>Enhances Focus</strong>  </p></li><li><p>  Regular movement can improve concentration and cognitive function.</p></li></ul><h2>Tips for Starting a Routine</h2><ol><li><p><strong>Set Realistic Goals</strong>  </p></li></ol><ul><li><p>   Start with small, achievable targets.</p></li></ul><ol start="2"><li><p><strong>Choose Activities You Enjoy</strong>  </p></li></ol><ul><li><p>   This will help you stay motivated.</p></li><li><p><strong>Create a Schedule</strong></p><ul><li><p>Allocate specific times in your day for exercise.</p></li></ul></li></ul><ol start="4"><li><p><strong>Mix It Up</strong>  </p><ol><li><p>Combine cardio, strength training, and flexibility exercises for a well-rounded routine.</p></li></ol></li></ol><h2>Common Myths About Exercise</h2><ul><li><p><strong>Myth: You Need a Gym Membership</strong>  </p></li><li><p>  <em>Truth:</em> You can exercise effectively at home or outdoors.</p></li><li><p><strong>Myth: Exercise Is Only for Weight Loss</strong>  </p></li><li><p>  <em>Truth:</em> It has many benefits beyond weight management.</p></li><li><p><strong>Myth: You Need to Work Out for Hours</strong>  </p></li><li><p>  <em>Truth:</em> Even short bursts of activity can be beneficial.</p></li></ul><h2>Conclusion</h2><p>Incorporating daily exercise into your life can lead to a healthier, happier you. Start small, and remember that consistency is key!</p><p></p><h3>Final Thoughts</h3><p><strong><s> What’s holding you back from starting your fitness journey?</s></strong></p><p>Consider making a change today! </p><p><em>Remember:</em> It’s never too late to start exercising. Your future self will thank you! </p><p><s>Don’t wait until tomorrow—get moving today!</s></p>`;

const Tiptap = () => {
  const editor = useEditor({
    extensions,
    content: test_content,
  });

  if (!editor) return null;

  return (
    <>
      <div className="container">
        <Toolbar editor={editor} iconSize={20} />
        <EditorContent editor={editor} className="focus:outline-none" />
      </div>
    </>
  );
};

export default Tiptap;
