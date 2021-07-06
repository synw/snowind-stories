import '../assets/index.css';
import Button from './Button.vue';
import { createTemplate } from './utils';

export default {
  component: Button,
  title: "Widgets/Buttons",
};

const Template = (args) => ({
  setup() {
    return { args };
  },
  template: createTemplate(`
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
    control: { type: 'radio' },
    options: ["xs", "sm", "normal", "xl"],
  }
}

const Template2 = (args) => ({
  components: { Button },
  setup() {
    return { args };
  },
  template: `
  <div class="bg-background text-foreground dark:bg-background-dark dark:text-foreground-dark">
    <div class="p-8" :class="{'text-xs':args.size === 'xs','text-sm':args.size === 'sm','text-xl':args.size === 'xl'}">
      <Button :class="'btn '+args.cssClass+' '+args.colorVariant" />
    </div>
  </div>`,
});

export const Types = Template2.bind({});
Types.argTypes = {
  ...Overview.argTypes,
  cssClass: {
    name: "Css classes",
    type: "string",
    description: "Apply css classes to the button. Ex: hover:text-red-500 dark:hover:text-secondary",
    control: { type: 'text', required: false },
    defaultValue: '',
  },
  colorVariant: {
    name: "Color variants",
    options: ['primary', 'secondary', 'neutral', 'light', 'danger', 'warning', 'success'],
    control: { type: 'select' }
  },
}