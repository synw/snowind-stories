import "../assets/index.css";
import { createTemplate } from "./utils";
import ButtonWidget from "./widgets/ButtonWidget.vue";

export default {
  title: "Widgets/Buttons",
};

const Template = args => ({
  setup() {
    return { args };
  },
  template: createTemplate(`
    <div class="text-2xl mb-5">Buttons</div>
    <div class="flex flex-row space-x-3" :class="{'text-xs':args.size === 'xs','text-sm':args.size === 'sm','text-xl':args.size === 'xl'}">
      <button class="btn" v-bind="args">Default</button>
      <button class="btn primary" v-bind="args">Primary</button>
      <button class="btn secondary" v-bind="args">Secondary</button>
      <button class="btn neutral" v-bind="args">Neutral</button>
      <button class="btn light" v-bind="args">Light</button>
      <button class="btn success" v-bind="args">Success</button>
      <button class="btn warning" v-bind="args">Warning</button>
      <button class="btn danger" v-bind="args">Danger</button>
    </div>
  `),
});
export const Overview = Template.bind({});
Overview.argTypes = {
  size: {
    name: "Size",
    control: { type: "radio" },
    options: ["xs", "sm", "normal", "xl"],
  },
}

const Template2 = args => ({
  components: { ButtonWidget },
  setup() {
    return { args };
  },
  template: createTemplate(`
    <div class="text-2xl mb-5">Custom buttons</div>
      <div :class="{'text-xs':args.size === 'xs','text-sm':args.size === 'sm','text-xl':args.size === 'xl'}">
        <button :class="'btn '+args.cssClass+' '+args.colorVariant" v-html="args.label ?? 'Button'" />
    </div>
    <div class="mt-5">Use css classes to customize the button: ex: <code>hover:primary dark:hover:primary-dark</code>:</div>  
    <button class="mt-5 btn hover:primary dark:hover:primary-dark">Hover</button>
  `),
});
export const Custom = Template2.bind({});
Custom.argTypes = {
  ...Overview.argTypes,
  label: {
    name: "Label",
    type: "string",
    description: "The button label",
    control: { type: "text", required: false },
  },
  cssClass: {
    name: "Css classes",
    type: "string",
    description: "Apply css classes to the button. Ex: hover:text-red-500 dark:hover:text-secondary",
    control: { type: "text", required: false },
  },
  colorVariant: {
    name: "Color variants",
    options: ["primary", "secondary", "neutral", "light", "danger", "warning", "success"],
    control: { type: "select" },
  },
}
