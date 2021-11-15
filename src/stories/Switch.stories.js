import "../assets/index.css";
import { createTemplate } from "./utils";
import SwitchWidget from "./widgets/SwitchWidget.vue";

export default {
  component: SwitchWidget,
  title: "Widgets/Switch",
};

const Template = args => ({
  components: { SwitchWidget },
  setup() {
    return { args };
  },
  template: createTemplate(`
    <div class="text-2xl mb-5">Switch</div>
    <div class="flex flex-row space-x-8">
      <div><switch-widget :big="args.big" css="w-max align-middle inline-block" :checked="true" />&nbsp;Default</div>
      <div><switch-widget :big="args.big" css="w-max align-middle inline-block primary" :checked="true" />&nbsp;Primary</div>
      <div><switch-widget :big="args.big" css="w-max align-middle inline-block secondary" :checked="true" />&nbsp;Secondary</div>
      <div><switch-widget :big="args.big" css="w-max align-middle inline-block warning" :checked="true" />&nbsp;Warning</div>
      <div><switch-widget :big="args.big" css="w-max align-middle inline-block danger" :checked="true" />&nbsp;Danger</div>
    </div>
  `),
});

export const Overview = Template.bind({});
Overview.argTypes = {
  big: {
    name: "Big",
    type: "boolean",
    defaultValue: false,
  },
}

const Template2 = args => ({
  components: { SwitchWidget },
  setup() {
    return { args };
  },
  template: createTemplate(`
    <div class="text-2xl mb-5">Custom switch</div>
    <switch-widget :big="args.big" :has-label="args.labelText" :css="'w-max align-middle inline-block '+args.colorVariant" />
  `),
});

export const Custom = Template2.bind({});
Custom.argTypes = {
  big: {
    name: "Big",
    type: "boolean",
    defaultValue: false,
  },
  labelText: {
    name: "Clickable label",
    type: "boolean",
    defaultValue: true,
  },
  colorVariant: {
    name: "Color variant",
    options: ["default", "primary", "secondary", "danger", "warning"],
    control: { type: "select" },
  },
}
