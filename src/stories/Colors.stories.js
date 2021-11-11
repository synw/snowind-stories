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
  <div class="text-2xl mb-5">Colors</div>
  <colors-widget />
  <div class="mt-8 px-3">Change theme to dark mode in the menu bar to see the dark colors</div>
  `,
});
export const Colors = Template.bind({});
Colors.parameters = {
  controls: { hideNoControlsWarning: true },
};
