<template>
  <div class="mb-3 text-xl">Background only</div>
  <div class="flex flex-row space-x-3">
    <div class="block-primary" @mouseenter="onHoverBlock('primary')">block-primary</div>
    <div class="block-secondary" @mouseenter="onHoverBlock('secondary')">block-secondary</div>
    <div class="block-neutral" @mouseenter="onHoverBlock('neutral')">block-neutral</div>
    <div class="block-light" @mouseenter="onHoverBlock('light')">block-light</div>
    <div class="block-success" @mouseenter="onHoverBlock('success')">block-success</div>
    <div class="block-warning" @mouseenter="onHoverBlock('warning')">block-warning</div>
    <div class="block-danger" @mouseenter="onHoverBlock('danger')">block-danger</div>
    <div class="block-background" @mouseenter="onHoverBlock('background')">block-background</div>
  </div>
  <div class="mt-3 mb-5 text-xl">Background and text</div>
  <div class="flex flex-row space-x-3">
    <div class="primary" @mouseenter="onHover('primary')">primary</div>
    <div class="secondary" @mouseenter="onHover('secondary')">secondary</div>
    <div class="neutral" @mouseenter="onHover('neutral')">neutral</div>
    <div class="light" @mouseenter="onHover('light')">light</div>
    <div class="success" @mouseenter="onHover('success')">success</div>
    <div class="warning" @mouseenter="onHover('warning')">warning</div>
    <div class="danger" @mouseenter="onHover('danger')">danger</div>
    <div class="background" @mouseenter="onHover('background')">background</div>
  </div>
</template>

<script lang="ts">
import { cssPanelContent } from "../utils";

export default {
  setup() {
    function onHoverBlock(s: string) {
      //console.log("HOVER", s)
      const html = `<div class="block-${s}">block-${s}</div>`;
      cssPanelContent.value = html
    }

    function onHover(s: string) {
      //console.log("HOVER", s)
      const html = `<div class="${s}">${s}</div>`;
      cssPanelContent.value = html
    }

    return {
      onHoverBlock,
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