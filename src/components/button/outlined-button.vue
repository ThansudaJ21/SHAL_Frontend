<template>
  <BaseButton
    class="
      border-solid border-2
      disabled:border-neutral-200
      disabled:bg-neutral-100
      disabled:text-neutral-500
    "
    :class="[
      variant === 'default' &&
        'border-primary-900  text-primary-900 hover:bg-primary-100 active:bg-primary-300',
      variant === 'error' &&
        'border-error-500 text-error-500 hover:bg-error-100 active:bg-error-300',
    ]"
    :click="click"
    :type="type"
  >
    <template v-slot:icon />
    <slot />
  </BaseButton>
</template>

<script>
import { defineComponent } from "vue";
import BaseButton from "./base-button.vue";

export default defineComponent({
  name: "OutlinedButton",
  components: { BaseButton },
  props: {
    type: {
      type: String,
      default: "button",
      validator: (prop) => ["button", "submit", "reset"].includes(prop),
      required: false,
    },
    variant: {
      type: String,
      default: "default",
      validator: (prop) => ["default", "error"].includes(prop),
      required: false,
    },
    click: {
      type: Function,
      required: false,
    },
  },
});
</script>
