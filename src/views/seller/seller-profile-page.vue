<template>
  <MobileLayout>
    <template #button> <ShoppingBagIcon /> Shopping </template>
  </MobileLayout>
</template>

<script>
import MobileLayout from "@/components/layout/mobile-app-layout.vue";
import Category from "@/components/category/category.vue";
import ShoppingBagIcon from "@/assets/icons/shopping-bag.svg?inline";

export default {
  name: "SellerProfilePage",
  components: {
    MobileLayout,
    Category,
    ShoppingBagIcon,
  },
};
</script>