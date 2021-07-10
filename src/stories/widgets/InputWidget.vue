<template>
  <div>
    <sw-input
      id="username"
      v-model:value="form.name.val"
      v-model:isvalid="form.name.isValid"
      :validator="form.name.validator"
      placeholder="username"
      :inline-label="inlineLabel"
      :class="cssClass"
      required
    />
    <div class="mt-3 text-sm">
      <div v-if="form.name.isValid === true" class="text-success dark:text-success-dark">
        Ok
      </div>
      <div
        v-else-if="form.name.isValid === false"
        class="text-danger dark:text-danger-dark"
      >
        Type 3 characters minimum
      </div>
      <div v-else class="text-neutral dark:text-neutral-dark">
        Type a username
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { reactive } from "vue"
import SwInput from "@snowind/input"

export default {
  components: {
    SwInput,
  },
  props: {
    inlineLabel: {
      type: String,
      default: "",
    },
    cssClass: {
      type: String,
      default: "",
    },
  },

  setup() {
    const form = reactive({
      name: {
        val: "",
        isValid: null,
        validator: (v: string) => v.length > 2,
      },
    })

    return {
      form,
    }
  },

}
</script>
