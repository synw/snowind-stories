<template>
  <div class="flex flex-row space-x-3">
    <div class="hover:primary dark:hover:primary-dark" @mouseenter="onHover('primary')">primary</div>
    <div
      class="hover:secondary dark:hover:secondary-dark"
      @mouseenter="onHover('secondary')"
    >secondary</div>
    <div class="hover:neutral dark:hover:neutral-dark" @mouseenter="onHover('neutral')">neutral</div>
    <div class="hover:light dark:hover:light-dark" @mouseenter="onHover('light')">light</div>
    <div class="hover:success dark:hover:success-dark" @mouseenter="onHover('success')">success</div>
    <div class="hover:warning dark:hover:warning-dark" @mouseenter="onHover('warning')">warning</div>
    <div class="hover:danger dark:hover:danger-dark" @mouseenter="onHover('danger')">danger</div>
    <div
      class="hover:background dark:hover:background-dark"
      @mouseenter="onHover('background')"
    >background</div>
  </div>
</template>


<script lang="ts">
import { cssPanelContent } from "../utils";

export default {
  setup() {
    function onHover(s: string) {
      //console.log("HOVER", s)
      const html = `<div class="hover:${s} dark:hover:${s}-dark">${s}</div>`;
      cssPanelContent.value = html
    }

    return {
      onHover,
    }
  },
}
</script>

<style lang="sass" scoped>
div
  & div
    @apply p-2 rounded cursor-help
</style>