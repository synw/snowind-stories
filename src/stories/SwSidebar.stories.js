import '../assets/index.css';
import { createTemplateNoPadding } from "./utils";
import SidebarWidget from "./widgets/SidebarWidget.vue";

export default {
  title: 'Layout/Sidebar',
  component: SidebarWidget,
};

const Template = (args) => ({
  components: { SidebarWidget },
  setup() {
    return { args };
  },
  template: createTemplateNoPadding(`
  <sidebar-widget :cssClass="args.cssClass"></sidebar-widget>
  `),
});

export const Sidebar = Template.bind({});
Sidebar.argTypes = {
  cssClass: {
    name: "Css classes",
    type: "string",
    description: "Apply css classes to the sidebar. Ex: bg-primary text-primary-r w-24",
    control: { type: 'text', required: false },
    defaultValue: '',
  },
}
