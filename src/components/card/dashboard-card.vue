<template>
  <div
    class="
      h-fit
      lg:w-[363px]
      md:w-full
      rounded-3xl
      bg-white
      outline outline-1 outline-[#dbeafe] outline-offset-0
      drop-shadow-md
      hover:drop-shadow-xl
      p-6
    "
  >
    <div class="flex gap-x-4 items-center">
      <div
        class="
          w-[72px]
          h-[72px]
          bg-primary-100
          rounded-full
          flex
          items-center
          justify-center
        "
      >
        <slot class="w-12 h-12" />
      </div>
      <div class="space-y-0.5">
        <p class="text-neutral-900 text-base leading-[19px]">{{ title }}</p>
        <p class="text-primary-900 text-[28px] leading-[34px]">{{ amount }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "DashboardCard",
  props: {
    title: {
      type: String,
      required: false,
    },
    amount: {
      type: String,
      required: false,
    },
  },
});
</script>
