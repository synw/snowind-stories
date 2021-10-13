<template>
  <div :class="{ 'dark': user.isDarkMode.value }">
    <div class="bg-background dark:bg-background-dark text-foreground dark:text-foreground-dark">
      <div
        class="flex items-center h-16 bg-primary text-primary-r dark:bg-primary-dark dark:text-primary-r-dark"
      >
        <div class="flex-grow">
          <img alt="Snowind logo" src="./assets/logo.png" class="inline-block mx-3" />
          <span class="text-lg">Snowind template</span>
        </div>
        <div class="mr-5 text-lg cursor-pointer" @click="user.toggleDarkMode()">
          <i-fa-solid-moon v-if="user.isDarkMode.value"></i-fa-solid-moon>
          <i-fa-solid-sun v-else></i-fa-solid-sun>
        </div>
      </div>
      <div class="container mx-auto">
        <HelloWorld msg="Hello Vue 3 + TypeScript + Vite + Snowind" class="mt-8" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { user } from "@/state";
import HelloWorld from './components/HelloWorld.vue'

export default defineComponent({
  components: {
    HelloWorld,
  },
  setup() {
    return {
      user
    }
  }
})
</script>

<style lang="css">
html,
body {
  margin: 0;
  padding: 0;
}
</style>
