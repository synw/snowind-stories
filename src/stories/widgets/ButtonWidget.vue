<template>
  <button :class="classes" :label="label" :disabled="disabled" @click="onClick" v-html="label" />
</template>

<script lang="ts">
import { reactive, computed } from "vue"

export default {
  name: "ButtonWidget",
  props: {
    label: {
      type: String,
      default: "Button",
    },
    colorVariant: {
      type: String,
      default: "",
    },
    darkVariant: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },

  emits: ["click"],

  setup(props: any, { emit }) {// eslint-disable-line
    props = reactive(props)

    return {
      classes: computed(() => ({
        btn: true,
        primary: props.colorVariant === "primary",
        secondary: props.colorVariant === "secondary",
        neutral: props.colorVariant === "neutral",
        light: props.colorVariant === "light",
        danger: props.colorVariant === "danger",
        warning: props.colorVariant === "warning",
        success: props.colorVariant === "success",
      })),
      onClick() {
        emit("click")
      },
    }
  },
}
</script>
