import "../assets/index.css";
import { useScreenSize } from "@snowind/state";

export default {
  title: "State/Screen",
  control: { disable: true }
};

const Template = (args) => ({
  setup() {
    const { isMobile, isTablet, isDesktop } = useScreenSize('sm', 'xl');

    return {
      args,
      isMobile,
      isTablet,
      isDesktop,
    };
  },
  template: `
  <div class="text-2xl mb-5">Screen size</div>
  <div class="ml-8 space-y-3 border rounded-sm shadow p-3 w-max">
    <div>
      <div class="inline-block font-bold mr-2">Mobile:</div> 
      <div class="inline-block" v-if="isMobile" class="text-success font-bold">yes</div>
      <div class="inline-block" v-else class="text-danger">no</div>
    </div>
    <div>
      <div class="inline-block font-bold mr-2">Tablet:</div>
      <div class="inline-block" v-if="isTablet" class="text-success font-bold">yes</div>
      <div class="inline-block" v-else class="text-danger">no</div>
    </div>
    <div>
      <div class="inline-block font-bold mr-2">Desktop:</div>
      <div class="inline-block" v-if="isDesktop" class="text-success font-bold">yes</div>
      <div class="inline-block" v-else class="text-danger">no</div>
    </div>
  </div>
  <div class="mt-8 px-3">Change the size of the preview in the menu bar to see the mobile or tablet versions</div>
  <div class="mt-5 px-3">Read the 
  <a href="https://synw.github.io/snowind/state/screen" class="text-primary" target="_blank">documentation</a></div>
  `,
});

export const Screen = Template.bind({});
Screen.argTypes = {
  '': { control: { disable: true } },

}
