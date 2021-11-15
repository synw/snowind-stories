import "../assets/index.css";
import { createTemplate } from "./utils";
import InputWidget from "./widgets/InputWidget.vue";

export default {
  component: InputWidget,
  title: "Forms/Input",
};

const Template = args => ({
  components: { InputWidget },
  setup() {
    return { args };
  },
  template: createTemplate(`
    <div class="text-2xl mb-5">Input with validation</div>
    <InputWidget :inlineLabel="args.inlineLabel" />
  `),
});

export const Input = Template.bind({});
Input.argTypes = {
  inlineLabel: {
    name: "Inline label",
    type: "string",
    description: "Display the label inline",
    control: { type: "text", required: false },
    defaultValue: "",
  },
}
