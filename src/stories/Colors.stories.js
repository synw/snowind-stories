import "../assets/index.css";
import { createTemplate } from "./utils";
import ColorsWidget from "./widgets/ColorsWidget.vue";
import ColorTextVariantsWidget from "./widgets/ColorTextVariantsWidget.vue";
import ColorBlockVariantsWidget from "./widgets/ColorBlockVariantsWidget.vue";

export default {
  title: "Colors",
};

const Template = args => ({
  components: { ColorsWidget },
  setup() {
    return { args };
  },
  template: createTemplate(`
    <div class="text-2xl mb-5">Semantic color utilities</div>
    <colors-widget />
  `),
});
export const BasicUtilities = Template.bind({});
BasicUtilities.parameters = {
  controls: { hideNoControlsWarning: true },
};

const Template1 = args => ({
  components: { ColorTextVariantsWidget },
  setup() {
    return { args };
  },
  template: createTemplate(`
    <div class="text-2xl mb-5">Text variants</div>
    <color-text-variants-widget />
  `),
});
export const TextVariants = Template1.bind({});
TextVariants.parameters = {
  controls: { hideNoControlsWarning: true },
};

const Template2 = args => ({
  components: { ColorBlockVariantsWidget },
  setup() {
    return { args };
  },
  template: createTemplate(`
    <div class="text-2xl mb-5">Block variants</div>
    <color-block-variants-widget />
  `),
});
export const BlockVariants = Template2.bind({});
BlockVariants.parameters = {
  controls: { hideNoControlsWarning: true },
};
