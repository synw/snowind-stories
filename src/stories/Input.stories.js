import '../assets/index.css';
import InputWidget from './InputWidget.vue';
import { createTemplate } from './utils';

export default {
  component: InputWidget,
  title: "Forms/Input",
};

const Template = (args) => ({
  components: { InputWidget },
  setup() {
    return { args };
  },
  template: createTemplate(`
   <InputWidget :inlineLabel="args.inlineLabel" />
  `),
});

export const Input = Template.bind({});
Input.argTypes = {
  inlineLabel: {
    name: "Inline label",
    type: "string",
    description: "Display the label inline",
    control: { type: 'text', required: false },
    defaultValue: ""
  }
}

