<template>
  <div :class="{ 'dark': isDarkMode }">
    <div
      class="w-screen h-screen p-5 text-center bg-background dark:bg-background-dark text-foreground dark:text-foreground-dark"
    >
      <img alt="Vue logo" src="./assets/logo.png" class="mx-auto" />
      <button
        class="mt-8 btn"
        v-html="isDarkMode ? 'Light mode' : 'Dark mode'"
        @click="isDarkMode = !isDarkMode"
      ></button>
      <HelloWorld msg="Hello Vue 3 + TypeScript + Vite + Snowind" class="mt-8" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import HelloWorld from './components/HelloWorld.vue'

export default defineComponent({
  name: 'SnowindStories',
  components: {
    HelloWorld,
  },
  setup() {
    const isDarkMode = ref(false);

    return {
      isDarkMode
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
