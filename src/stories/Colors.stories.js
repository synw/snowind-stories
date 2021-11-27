import "../assets/index.css";
import { createTemplate, createTemplateWithPanel, cssPanelContent } from "./utils";
import DocButton from "./components/DocButton.vue";
import ColorsWidget from "./widgets/ColorsWidget.vue";
import ColorTextUtilsWidget from "./widgets/ColorTextUtilsWidget.vue";
import ColorBlockUtilsWidget from "./widgets/ColorBlockUtilsWidget.vue";
import ColorHoverVariantsWidget from "./widgets/ColorHoverVariantsWidget.vue";
import ColorResponsiveVariantsWidget from "./widgets/ColorResponsiveVariantsWidget.vue";

export default {
  title: "Colors",
};

const Template = args => ({
  components: { ColorsWidget, DocButton },
  setup() {
    cssPanelContent.value = null;
    return { args, cssPanelContent };
  },
  template: createTemplateWithPanel(`
    <div class="text-2xl mb-8">Semantic color utilities
      <doc-button class="float-right" link="colors#configure"></doc-button>
    </div>
    <colors-widget />
    <div class="mt-5">Configure your semantic colors in <i>tailwind.config.js</i> and the
    changes will be reflected in the Storybook. All the color utilities have support for the dark mode</div>
    
  `),
});
export const BasicUtilities = Template.bind({});
BasicUtilities.parameters = {
  controls: { hideNoControlsWarning: true },
  options: { showPanel: false }
};

const Template1 = args => ({
  components: { ColorTextUtilsWidget, DocButton },
  setup() {
    cssPanelContent.value = null;
    return { args, cssPanelContent };
  },
  template: createTemplateWithPanel(`
    <div class="text-2xl mb-8">Text utilities
      <doc-button class="float-right" link="colors#textutils"></doc-button>
    </div>
    <color-text-utils-widget />
  `),
});
export const TextUtilities = Template1.bind({});
TextUtilities.parameters = {
  options: { showPanel: false },
};

const Template2 = args => ({
  components: { ColorBlockUtilsWidget, DocButton },
  setup() {
    cssPanelContent.value = null;
    return { args, cssPanelContent };
  },
  template: createTemplateWithPanel(`
    <div class="text-2xl mb-5">Background utilities
      <doc-button class="float-right" link="colors#blockutils"></doc-button>
    </div>
    <color-block-utils-widget />
  `),
});
export const BackgroundUtilities = Template2.bind({});
BackgroundUtilities.parameters = {
  options: { showPanel: false },
};

const Template3 = args => ({
  components: { ColorHoverVariantsWidget, DocButton },
  setup() {
    cssPanelContent.value = null;
    return { args, cssPanelContent };
  },
  template: createTemplateWithPanel(`
    <div class="text-2xl mb-5">Hover variants
      <doc-button class="float-right" link="colors#hovervariants"></doc-button>
    </div>
    <color-hover-variants-widget />
  `),
});
export const HoverVariants = Template3.bind({});
HoverVariants.parameters = {
  options: { showPanel: false },
};

const Template4 = args => ({
  components: { ColorResponsiveVariantsWidget, DocButton },
  setup() {
    cssPanelContent.value = null;
    return { args, cssPanelContent };
  },
  template: createTemplateWithPanel(`
    <div class="text-2xl mb-5">Responsive variants
      <doc-button class="hidden sm:block float-right" link="colors#responsivevariants"></doc-button>
    </div>
    <color-responsive-variants-widget />
  `),

});
export const ResponsiveVariants = Template4.bind({});
ResponsiveVariants.parameters = {
  options: { showPanel: false },
  viewport: {
    defaultViewport: 'iphone6',
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
Customize.parameters = {
  options: { showPanel: true }
};
Customize.argTypes = {
  cssClass: {
    name: "Css classes",
    type: "string",
    description: "Apply css classes to the button. Ex: hover:text-red-500 dark:hover:text-secondary",
    defaultValue: "primary hover:success dark:hover:danger-dark",
    control: { type: "text" },
  },
}
