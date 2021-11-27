import "../assets/index.css";
import { createTemplate, createTemplateWithPanel, cssPanelContent } from "./utils";
import ColorsWidget from "./widgets/ColorsWidget.vue";
import ColorTextVariantsWidget from "./widgets/ColorTextVariantsWidget.vue";
import ColorBlockVariantsWidget from "./widgets/ColorBlockVariantsWidget.vue";
import ColorHoverVariantsWidget from "./widgets/ColorHoverVariantsWidget.vue";

export default {
  title: "Colors",
};

const Template = args => ({
  components: { ColorsWidget },
  setup() {
    cssPanelContent.value = null;
    return { args, cssPanelContent };
  },
  template: createTemplateWithPanel(`
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
    cssPanelContent.value = null;
    return { args, cssPanelContent };
  },
  template: createTemplateWithPanel(`
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
    cssPanelContent.value = null;
    return { args, cssPanelContent };
  },
  template: createTemplateWithPanel(`
    <div class="text-2xl mb-5">Block variants</div>
    <color-block-variants-widget />
  `),
});
export const BlockVariants = Template2.bind({});
BlockVariants.parameters = {
  controls: { hideNoControlsWarning: true },
};

const Template3 = args => ({
  components: { ColorHoverVariantsWidget },
  setup() {
    cssPanelContent.value = null;
    return { args, cssPanelContent };
  },
  template: createTemplateWithPanel(`
    <div class="text-2xl mb-5">Hover variants</div>
    <color-hover-variants-widget />
  `),
});
export const HoverVariants = Template3.bind({});
HoverVariants.parameters = {
  controls: { hideNoControlsWarning: true },
};
