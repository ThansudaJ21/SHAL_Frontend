<template>
  <MobileLayout>
    <template #button> <ShopIcon /> Start Selling </template>
  </MobileLayout>
</template>

<script>
import MobileLayout from "@/components/layout/mobile-app-layout.vue";
import Category from "@/components/category/category.vue";
import ShopIcon from "@/assets/icons/shop-outlined.svg?inline";

export default {
  name: "BuyerProfilePage",
  components: {
    MobileLayout,
    Category,
    ShopIcon,
  },
};
</script>