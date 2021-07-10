import "../assets/index.css";
import ColorsWidget from "./widgets/ColorsWidget.vue";

export default {
  title: "Design/Colors",
};

const Template = args => ({
  components: { ColorsWidget },
  setup() {
    return { args };
  },
  template: `
  <colors-widget />
  `,
});
export const Snowind = Template.bind({});
Snowind.parameters = {
  controls: { hideNoControlsWarning: true },
};
