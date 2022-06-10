<template>
  <div>
    <button
      class="
        flex
        h-6
        w-6
        items-center
        justify-center
        rounded-full
        text-xs
        leading-[17px]
      "
      :class="[
        fillBackground && 'bg-primary-200 text-white',
        currentPage === page && '!bg-primary-500',
      ]"
      @click="click"
    >
      {{ page }}
      <slot />
    </button>
  </div>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: "PaginationButton",
  props: {
    click: {
      type: Function,
      required: true,
    },
    currentPage: {
      type: Number,
      required: true,
    },
    page: {
      type: Number,
      required: true,
    },
    fillBackground: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
});
</script>
