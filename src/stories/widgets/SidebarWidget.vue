<template>
  <div class="flex flex-row" style="height: 100vh">
    <sw-sidebar v-model:opened="model" name="sidebar1" class="flex flex-col h-full" :class="css">
      <div class="flex-grow mt-5 ml-6 space-y-6">
        <div>
          1
          <span v-if="model === true" class="ml-3">Page 1</span>
        </div>
        <div>
          2
          <span v-if="model === true" class="ml-3">Page 2</span>
        </div>
        <div>
          3
          <span v-if="model === true" class="ml-3">Page 3</span>
        </div>
      </div>
      <div class="flex-none h-12 mb-3 text-center cursor-pointer" @click="model = !model">
        <div v-if="model === false">Open</div>
        <div v-else>Close</div>
      </div>
    </sw-sidebar>
    <div class="w-full bg-light text-light-r dark:bg-light-dark dark:text-light-r-dark">
      <div class="m-5">
        Is the sidebar open?
        <b>{{ model }}</b>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, reactive, ref } from 'vue'
import SwSidebar from '@snowind/sidebar'

export default {
  components: {
    SwSidebar,
  },
  props: {
    isOpened: {
      type: Boolean,
      default: false,
    },
    cssClass: {
      type: String,
      default: '',
    },
  },

  setup(props: any) {
    props = reactive(props)
    const model = ref(props.isOpened)

    const css = computed<string>(() => {
      let c = 'bg-secondary text-secondary-r'
      if (props.cssClass !== '')
        c = props.cssClass

      return c
    })

    return {
      model,
      css,
    }
  },
}
</script>
