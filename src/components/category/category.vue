<template>
  <div class="overflow-x-auto flex gap-x-4">
    <router-link
      v-for="category in this.categoryItems"
      :key="category.name"
      :to="{ name: category.pageName }"
      class="
        h-20
        min-w-[80px]
        bg-primary-800
        border-4 border-primary-400
        rounded-tl-[40px] rounded-br-[14px]
        flex
        items-center
      "
    >
      <span class="justify-center w-full text-center">
        <span class="inline-block">
          <img :src="category.icon" />
        </span>
        <span
          class="block text-[8px] text-white uppercase tracking-wider leading-3"
        >
          {{ category.name }}
        </span>
      </span>
    </router-link>
  </div>
</template>

<script>
import { categoryItems } from "@/components/category/category-items.js";

export default {
  name: "Category",
  data() {
    return {
      categoryItems,
    };
  },
};
</script>