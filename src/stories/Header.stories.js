import "../assets/index.css";
import { createTemplateNoPadding } from "./utils";
import HeaderWidget from "./widgets/HeaderWidget.vue";

export default {
  component: HeaderWidget,
  title: "Layout/Header",
};

const Template = (args) => ({
  components: { HeaderWidget },
  setup() {
    return { args };
  },
  template: createTemplateNoPadding(`
    <header-widget :branding="args.branding" :mobile-branding="args.mobileBranding ?? 'Mobile branding'"
      ></header-widget>
    <div class="mt-5 px-3">Change the size of the preview in the menu bar to see the mobile version</div>
  `),
});

export const Header = Template.bind({});
Header.argTypes = {
  branding: {
    name: "Branding",
    description: "The site branding",
    control: { type: "text", required: false },
  },
  mobileBranding: {
    name: "Mobile branding",
    description: "The site branding for mobile view",
    control: { type: "text", required: false },
  },
}