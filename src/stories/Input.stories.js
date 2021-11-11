import "../assets/index.css";
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
  template: `
  <div class="p-5">
    <div class="text-2xl mb-5">Input with validation</div>
    <InputWidget :inlineLabel="args.inlineLabel" />
  </div>
  `,
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
