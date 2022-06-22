<template>
  <span class="justify-center w-full text-center" @click="click">
    <span class="inline-block">
      <img :src="category.icon" />
    </span>
    <span
      class="block text-[8px] text-white uppercase tracking-wider leading-3"
    >
      {{ category.name }}
    </span>
  </span>
</template>

<script>
export default {
  name: "Category",
  props: {
    category: {
      type: Object,
      required: false,
    },
  },
};
</script>