import "../assets/index.css";
import { createTemplate, createTemplateWithPanel, cssPanelContent } from "./utils";
import ColorsWidget from "./widgets/ColorsWidget.vue";
import ColorTextVariantsWidget from "./widgets/ColorTextVariantsWidget.vue";
import ColorBlockVariantsWidget from "./widgets/ColorBlockVariantsWidget.vue";
import ColorHoverVariantsWidget from "./widgets/ColorHoverVariantsWidget.vue";
import ColorResponsiveVariantsWidget from "./widgets/ColorResponsiveVariantsWidget.vue";

export default {
  title: "Colors utilities",
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

const Template4 = args => ({
  components: { ColorResponsiveVariantsWidget },
  setup() {
    cssPanelContent.value = null;
    return { args, cssPanelContent };
  },
  template: createTemplateWithPanel(`
    <div class="text-2xl mb-5">Responsive variants</div>
    <color-responsive-variants-widget />
  `),

});
export const ResponsiveVariants = Template4.bind({});
ResponsiveVariants.parameters = {
  controls: { hideNoControlsWarning: true },
  viewport: {
    defaultViewport: 'iphone5',
  },
};

const Template5 = args => ({
  setup() {
    return { args };
  },
  template: createTemplate(`
    <div class="text-2xl mb-5">Custom color block</div>
    <div :class="args.cssClass" class="p-3">Lorem ipsum</div>
  `),
});
export const Customize = Template5.bind({});
Customize.argTypes = {
  cssClass: {
    name: "Css classes",
    type: "string",
    description: "Apply css classes to the button. Ex: hover:text-red-500 dark:hover:text-secondary",
    defaultValue: "primary hover:success dark:hover:danger-dark",
    control: { type: "text" },
  },
}
