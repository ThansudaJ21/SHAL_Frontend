<template>
  <MobileLayout
    title="Shop Registration"
    :image="this.$store.getters.getUser.pictureUrl"
  >
    <router-view />
  </MobileLayout>
</template>

<script>
import MobileLayout from "@/components/layout/mobile-app-layout.vue";

export default {
  name: "ShopRegistrationLayout",
  components: {
    MobileLayout,
  },
};
</script>