<template>
  <div class="grid grid-flow-col gap-8 mt-5 auto-cols-max">
    <div class="inline-block">
      <div class="color-block primary">Text</div>
      <div class="mt-2 text-center">primary</div>
    </div>
    <div class="inline-block">
      <div
        class="color-block bg-secondary dark:bg-secondary-dark text-secondary-r dark:text-secondary-r-dark"
      >Text</div>
      <div class="mt-2 text-center">secondary</div>
    </div>
    <div class="inline-block">
      <div
        class="color-block bg-neutral dark:bg-neutral-dark text-neutral-r dark:text-neutral-r-dark"
      >Text</div>
      <div class="mt-2 text-center">neutral</div>
    </div>
    <div class="inline-block">
      <div class="color-block bg-light dark:bg-light-dark text-light-r dark:text-light-r-dark">Text</div>
      <div class="mt-2 text-center">light</div>
    </div>
    <div class="inline-block">
      <div
        class="color-block bg-success dark:bg-success-dark text-success-r dark:text-success-r-dark"
      >Text</div>
      <div class="mt-2 text-center">success</div>
    </div>
    <div class="inline-block">
      <div
        class="color-block bg-warning dark:bg-warning-dark text-warning-r dark:text-warning-r-dark"
      >Text</div>
      <div class="mt-2 text-center">warning</div>
    </div>
    <div class="inline-block">
      <div
        class="color-block bg-danger dark:bg-danger-dark text-danger-r dark:text-danger-r-dark"
      >Text</div>
      <div class="mt-2 text-center">danger</div>
    </div>
    <div class="inline-block">
      <div
        class="color-block bg-background dark:bg-background-dark text-foreground dark:text-foreground-dark"
      >Text</div>
      <div class="mt-2 text-center">background</div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.color-block
  @apply w-16 rounded-md text-center p-3
</style>
