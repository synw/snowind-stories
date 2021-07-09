import '../assets/index.css';
import CollapseWidget from './widgets/CollapseWidget.vue';
import { createTemplate } from './utils';

export default {
  component: CollapseWidget,
  title: "Widgets/Collapse",
};

const Template = (args) => ({
  components: { CollapseWidget },
  setup() {
    return { args };
  },
  template: createTemplate(`
   <CollapseWidget v-bind="args" />
  `),
});

export const Collapse = Template.bind({});
Collapse.argTypes = {
  cssClass: {
    name: "Css classes",
    type: "string",
    description: "Apply css classes to the collapse. Ex: duration-500 delay-1000",
    control: { type: 'text', required: false },
    defaultValue: '',
  }
}

