<template>
  <MobileLayout></MobileLayout>
</template>

<script>
import MobileLayout from "@/components/layout/mobile-app-layout.vue";
import Category from "@/components/category/category.vue";

export default {
  name: "BuyerProfilePage",
  components: {
    MobileLayout,
    Category,
  },
};
</script>