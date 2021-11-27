<template>
  <div class="mb-3 text-xl">Background only</div>
  <div class="flex flex-row space-x-3">
    <div class="block-primary">block-primary</div>
    <div class="block-secondary">block-secondary</div>
    <div class="block-neutral">block-neutral</div>
    <div class="block-light">block-light</div>
    <div class="block-success">block-success</div>
    <div class="block-warning">block-warning</div>
    <div class="block-danger">block-danger</div>
    <div class="block-background">block-background</div>
  </div>
  <div class="mt-3 mb-5 text-xl">Background and text</div>
  <div class="flex flex-row space-x-3">
    <div class="primary">primary</div>
    <div class="secondary">secondary</div>
    <div class="neutral">neutral</div>
    <div class="light">light</div>
    <div class="success">success</div>
    <div class="warning">warning</div>
    <div class="danger">danger</div>
    <div class="background">background</div>
  </div>
</template>

<style lang="sass" scoped>
div
  & div
    @apply p-2 rounded
</style>