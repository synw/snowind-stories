import "../assets/index.css";
import CollapseWidget from "./widgets/CollapseWidget.vue";

export default {
  component: CollapseWidget,
  title: "Widgets/Collapse",
};

const Template = args => ({
  components: { CollapseWidget },
  setup() {
    return { args };
  },
  template: `
  <div class="p-5">
    <div class="text-2xl mb-5">Collapse</div>
    <CollapseWidget v-bind="args" />
  </div>
  `,
});

export const Collapse = Template.bind({});
Collapse.argTypes = {
  cssClass: {
    name: "Css classes",
    type: "string",
    description: "Apply css classes to the collapse. Ex: duration-500 delay-1000",
    control: { type: "text", required: false },
    defaultValue: "",
  },
}
