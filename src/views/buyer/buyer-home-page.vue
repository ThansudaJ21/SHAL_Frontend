<template>
  <MobileLayout>
    <p class="text-[14px] leading-[17px] text-black uppercase">CATEGORY</p>
    <Category />
  </MobileLayout>
</template>

<script>
import MobileLayout from "@/components/layout/mobile-app-layout.vue";
import Category from "@/components/category/category.vue";

export default {
  name: "BuyerHomePage",
  components: {
    MobileLayout,
    Category,
  },
};
</script>