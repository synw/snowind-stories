<template>
  <div class="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3">
    <div
      class="sm:background sm:dark:background-dark primary"
      @mouseenter="onHover('primary')"
    >primary mobile only</div>
    <div
      class="sm:background sm:dark:background-dark secondary"
      @mouseenter="onHover('secondary')"
    >secondary mobile only</div>
    <div
      class="sm:background sm:dark:background-dark neutral"
      @mouseenter="onHover('neutral')"
    >neutral mobile only</div>
    <div
      class="sm:background sm:dark:background-dark light"
      @mouseenter="onHover('light')"
    >light mobile only</div>
    <div
      class="sm:background sm:dark:background-dark success"
      @mouseenter="onHover('success')"
    >success mobile only</div>
    <div
      class="sm:background sm:dark:background-dark warning"
      @mouseenter="onHover('warning')"
    >warning mobile only</div>
    <div
      class="sm:background sm:dark:background-dark danger"
      @mouseenter="onHover('danger')"
    >danger mobile only</div>
    <div
      class="sm:background sm:dark:background-dark background"
      @mouseenter="onHover('background')"
    >background mobile only</div>
  </div>
  <div class="hidden mt-5 sm:block">Resize the viewport to see the responsive variants</div>
</template>


<script lang="ts">
import { cssPanelContent } from "../utils";

export default {
  setup() {
    function onHover(s: string) {
      //console.log("HOVER", s)
      const html = `<div class="sm:background sm:dark:background-dark ${s}">${s} mobile only</div>`;
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