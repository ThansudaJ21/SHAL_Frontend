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
        <component :is="category.icon" class="inline-block" />
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
import BeautyIcon from "@/assets/icons/category-beauty.svg?inline";
import FashionIcon from "@/assets/icons/category-fashion.svg?inline";
import ElectronicsIcon from "@/assets/icons/category-electronics.svg?inline";
import ToysIcon from "@/assets/icons/category-toys.svg?inline";
import HealthIcon from "@/assets/icons/category-health.svg?inline";
import SportsIcon from "@/assets/icons/category-sports.svg?inline";
import HomeIcon from "@/assets/icons/category-home.svg?inline";
import PetsIcon from "@/assets/icons/category-pets.svg?inline";

export default {
  name: "Category",
  components: {
    BeautyIcon,
    FashionIcon,
    ElectronicsIcon,
    ToysIcon,
    HealthIcon,
    SportsIcon,
    HomeIcon,
    PetsIcon,
  },
  data() {
    return {
      categoryItems,
    };
  },
};
</script>