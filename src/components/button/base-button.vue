<template>
  <button
    :type="type"
    class="
      flex
      h-[42px]
      w-full
      min-w-[164px]
      items-center
      justify-center
      rounded-full
      py-2
      px-4
      text-sm
      font-semibold
      hover:cursor-pointer
      disabled:cursor-not-allowed disabled:bg-neutral-100
    "
    @click="click"
  >
    <span class="flex items-center gap-x-2">
      <slot />
    </span>
  </button>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "BaseButton",
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