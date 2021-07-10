<template>
  <div>
    <button class="btn" @click="model = !model" v-html="model ? 'Open' : 'Close'" />
    <div :class="css" class="mt-4">
      {{ textBlock }}
    </div>
  </div>
</template>

<script lang="ts">
import { computed, reactive, ref } from "vue"
import { textBlock } from "../utils"

export default {
  props: {
    isCollapsed: {
      type: Boolean,
      default: true,
    },
    cssClass: {
      type: String,
      default: "",
    },
  },

  setup(props: any) {
    props = reactive(props)

    const model = ref(props.isCollapsed)

    const css = computed<string>(() => {
      let c = "slide-y"
      switch (model.value) {
        case true:
          c += " slideup"
          break
        default:
          c += " slidedown"
          break
      }
      if (props.cssClass !== "")
        c += ` ${props.cssClass}`

      return c
    })

    function onClick(): void {
      model.value = !model.value
    }

    return {
      model,
      textBlock,
      onClick,
      css,
    }
  },
}
</script>
