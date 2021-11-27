<template>
  <button
    class="text-sm cursor-pointer btn border-light dark:border-light-dark hover:secondary dark:hover:secondary-dark txt-neutral"
    @click="onClick()"
  >Documentation</button>
</template>

<script lang="js">
import { defineComponent, toRefs } from "vue";

export default defineComponent({
  props: {
    link: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const { link } = toRefs(props);
    const base = import.meta.env.PROD ?
      "https://synw.github.io/snowind/"
      : "http://localhost:3000/";

    function onClick() {
      window.open(base + link.value, '_blank').focus();
    }

    return {
      base,
      onClick,
    }
  }
});
</script>