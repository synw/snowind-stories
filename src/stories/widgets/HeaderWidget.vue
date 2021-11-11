<template>
  <div>
    <sw-header
      class="h-12 bg-primary text-primary-r dark:bg-primary-dark dark:text-primary-r-dark"
      @togglemenu="isMenuVisible = !isMenuVisible"
    >
      <template #branding>
        <div class="ml-5 text-lg" v-html="branding"></div>
      </template>
      <template #mobile-branding>
        <div class="ml-5 text-lg" v-html="mobileBranding"></div>
      </template>
      <template #mobile-back>
        <icon icon="eva:arrow-back-outline" class="ml-3 text-2xl" />
      </template>
      <template #menu>
        <div class="flex flex-row items-center justify-end h-full space-x-1">
          <button class="border-none btn" @click="closeMenu()">Page 1</button>
          <button class="border-none btn" @click="closeMenu()">Page 2</button>
        </div>
      </template>
    </sw-header>
    <sw-mobile-menu
      :is-visible="isMenuVisible"
      class="bg-neutral text-neutral-r dark:bg-neutral-dark dark:text-neutral-r-dark"
    >
      <div class="flex flex-col p-3 space-y-5">
        <button class="border-none btn">Page 1</button>
        <button class="border-none btn">Page 2</button>
      </div>
    </sw-mobile-menu>
  </div>
</template>

<script lang="ts">
import { ref } from "vue"
import { Icon } from '@iconify/vue';
import { SwHeader, SwMobileMenu } from "@snowind/header";
import { user } from "@/state";

export default {
  components: {
    SwHeader,
    SwMobileMenu,
    Icon,
  },
  props: {
    branding: {
      type: String,
      default: "Branding",
    },
    menu: {
      type: String,
    },
    mobileBranding: {
      type: String,
    },
    mobileBack: {
      type: String,
    },
    menuIcon: {
      type: String,
    },
  },

  setup() {
    const isMenuVisible = ref(false);

    function closeMenu() {
      isMenuVisible.value = false;
    }

    return {
      isMenuVisible,
      closeMenu,
      user,
    }
  },
}
</script>
