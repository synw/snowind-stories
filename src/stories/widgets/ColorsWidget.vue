<template>
  <div class="grid grid-flow-col gap-8 mt-5 auto-cols-max">
    <div class="inline-block">
      <div class="color-block primary" @mouseenter="onHover('primary')">Text</div>
      <div class="mt-2 text-center">primary</div>
    </div>
    <div class="inline-block">
      <div class="color-block secondary" @mouseenter="onHover('secondary')">Text</div>
      <div class="mt-2 text-center">secondary</div>
    </div>
    <div class="inline-block">
      <div class="color-block neutral" @mouseenter="onHover('neutral')">Text</div>
      <div class="mt-2 text-center">neutral</div>
    </div>
    <div class="inline-block">
      <div class="color-block light" @mouseenter="onHover('light')">Text</div>
      <div class="mt-2 text-center">light</div>
    </div>
    <div class="inline-block">
      <div class="color-block success" @mouseenter="onHover('success')">Text</div>
      <div class="mt-2 text-center">success</div>
    </div>
    <div class="inline-block">
      <div class="color-block warning" @mouseenter="onHover('warning')">Text</div>
      <div class="mt-2 text-center">warning</div>
    </div>
    <div class="inline-block">
      <div class="color-block danger" @mouseenter="onHover('danger')">Text</div>
      <div class="mt-2 text-center">danger</div>
    </div>
    <div class="inline-block">
      <div class="color-block background" @mouseenter="onHover('background')">Text</div>
      <div class="mt-2 text-center">background</div>
    </div>
  </div>
</template>

<script lang="ts">
import { cssPanelContent } from "../utils";

export default {
  setup() {
    function onHover(s: string) {
      //console.log("HOVER", s)
      const html = `<div class="${s}">Text</div>`;
      cssPanelContent.value = html
    }

    function endHover() {
      cssPanelContent.value = ""
    }

    return {
      onHover,
      endHover,
    }
  },
}
</script>

<style lang="sass" scoped>
.color-block
  @apply w-16 rounded-md text-center p-3 cursor-help
</style>
