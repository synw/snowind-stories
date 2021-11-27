<template>
  <div class="flex flex-row space-x-3">
    <div class="txt-primary" @mouseenter="onHover('primary')">txt-primary</div>
    <div class="txt-secondary" @mouseenter="onHover('secondary')">txt-secondary</div>
    <div class="txt-neutral" @mouseenter="onHover('neutral')">txt-neutral</div>
    <div class="txt-light" @mouseenter="onHover('light')">txt-light</div>
    <div class="txt-success" @mouseenter="onHover('success')">txt-success</div>
    <div class="txt-warning" @mouseenter="onHover('warning')">txt-warning</div>
    <div class="txt-danger" @mouseenter="onHover('danger')">txt-danger</div>
    <div class="txt-background" @mouseenter="onHover('background')">txt-background</div>
  </div>
</template>


<script lang="ts">
import { cssPanelContent } from "../utils";

export default {
  setup() {
    function onHover(s: string) {
      //console.log("HOVER", s)
      const html = `<div class="txt-${s}">txt-${s}</div>`;
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
    @apply cursor-help
</style>