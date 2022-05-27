<template>
  <BaseButton
    class="
      bg-primary-900
      text-white
      hover:bg-primary-700
      active:bg-primary-500
      disabled:bg-neutral-100 disabled:text-neutral-500
    "
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
  name: "PrimaryButton",
  components: { BaseButton },
  props: {
    type: {
      type: String,
      default: "button",
      validator: (prop) => ["button", "submit", "reset"].includes(prop),
      required: false,
    },
    click: {
      type: Function,
      required: false,
    },
  },
});
</script>
