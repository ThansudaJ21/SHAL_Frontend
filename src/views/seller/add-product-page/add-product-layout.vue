<template>
  <MobileLayout title="Add New Product">
    <router-view />
  </MobileLayout>
</template>

<script>
import MobileLayout from "@/components/layout/mobile-app-layout.vue";

export default {
  name: "AddProductLayout",
  components: {
    MobileLayout,
  },
};
</script>