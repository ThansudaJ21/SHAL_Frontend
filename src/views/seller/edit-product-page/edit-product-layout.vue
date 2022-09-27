<template>
  <MobileLayout
    title="Edit New Product"
    :image="this.$store.getters.getMyShop.shopLogoImagePath"
  >
    <router-view />
  </MobileLayout>
</template>

<script>
import MobileLayout from "@/components/layout/mobile-app-layout.vue";

export default {
  name: "EditProductLayout",
  components: {
    MobileLayout,
  },
};
</script>