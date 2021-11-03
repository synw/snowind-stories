<template>
  <sw-header
    class="w-full h-16 bg-primary text-primary-r dark:bg-primary-dark dark:text-primary-r-dark"
    @togglemenu="isMenuVisible = !isMenuVisible"
  >
    <template #mobile-back>
      <i-ion-arrow-back-outline class="inline-flex ml-2 text-3xl" v-if="!isHome"></i-ion-arrow-back-outline>
    </template>
    <template #mobile-branding>
      <div
        class="inline-flex flex-row items-center h-full pt-1 ml-2 text-2xl truncate"
        @click="$router.push('/')"
      >
        <img alt="Snowind logo" src="@/assets/logo.png" v-if="isHome" class="inline-block mx-3" />
        <span class="text-lg">Snowind</span>
      </div>
    </template>
    <template #branding>
      <div class="flex flex-row items-center h-full" @click="$router.push('/')">
        <img alt="Snowind logo" src="@/assets/logo.png" class="inline-block mx-3" />
        <span class="text-lg">Snowind Stories</span>
      </div>
    </template>
    <template #menu>
      <div class="flex flex-row items-center justify-end h-full space-x-1">
        <button class="border-none btn" @click="$router.push('/page')">Page 1</button>
        <div class="px-5 text-lg cursor-pointer" @click="user.toggleDarkMode()">
          <i-fa-solid-moon v-if="user.isDarkMode"></i-fa-solid-moon>
          <i-fa-solid-sun v-else></i-fa-solid-sun>
        </div>
      </div>
    </template>
  </sw-header>
  <sw-mobile-menu
    :is-visible="isMenuVisible"
    class="bg-neutral text-neutral-r dark:bg-neutral-dark dark:text-neutral-r-dark"
  >
    <div class="flex flex-col p-3 space-y-5">
      <router-link to="/page" @click="closeMenu()">Page 1</router-link>
    </div>
  </sw-mobile-menu>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import { SwHeader, SwMobileMenu } from "@snowind/header";
import router from '@/router';
import { user } from "@/state";

export default defineComponent({
  components: {
    SwHeader,
    SwMobileMenu,
  },
  setup() {
    const isMenuVisible = ref(false);

    const isHome = computed<boolean>(() => router.currentRoute.value.path == "/");

    function closeMenu() {
      isMenuVisible.value = false;
    }

    return {
      isMenuVisible,
      isHome,
      user,
      closeMenu,
    }
  }
})
</script>