import '../assets/index.css';
import SwitchWidget from "./SwitchWidget.vue";
import { createTemplate } from './utils';

export default {
  component: SwitchWidget,
  title: "Widgets/Switch",
};

const Template = (args) => ({
  components: { SwitchWidget },
  setup() {
    return { args };
  },
  template: createTemplate(`
  <div class="flex flex-row space-x-8">
    <div><SwitchWidget :big="args.big" css="w-max align-middle inline-block" :checked="true" />&nbsp;Default</div>
    <div><SwitchWidget :big="args.big" css="w-max align-middle inline-block primary" :checked="true" />&nbsp;Primary</div>
    <div><SwitchWidget :big="args.big" css="w-max align-middle inline-block secondary" :checked="true" />&nbsp;Secondary</div>
    <div><SwitchWidget :big="args.big" css="w-max align-middle inline-block warning" :checked="true" />&nbsp;Warning</div>
    <div><SwitchWidget :big="args.big" css="w-max align-middle inline-block danger" :checked="true" />&nbsp;Danger</div>
  </div>
  `),
});

export const Overview = Template.bind({});
Overview.argTypes = {
  big: {
    name: "Big",
    type: "boolean",
    defaultValue: false
  }
}

const Template2 = (args) => ({
  components: { SwitchWidget },
  setup() {
    return { args };
  },
  template: createTemplate(`
  <SwitchWidget :big="args.big" :has-label="args.labelText" :css="'w-max align-middle inline-block '+args.colorVariant" />
  `),
});

export const Types = Template2.bind({});
Types.argTypes = {
  big: {
    name: "Big",
    type: "boolean",
    defaultValue: false
  },
  labelText: {
    name: "Clickable label",
    type: "boolean",
    defaultValue: true
  },
  colorVariant: {
    name: "Color variant",
    options: ['default', 'primary', 'secondary', 'danger', 'warning'],
    control: { type: 'select' }
  }
}