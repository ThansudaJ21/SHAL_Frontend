<template>
  <div class="bg-primary-50 min-h-screen">
    <DesktopeNavbar />
    <div class="space-y-6 px-32 py-8">
      <slot />
    </div>
  </div>
</template>

<script>
import DesktopeNavbar from "@/components/navbar/desktop-navbar/desktop-navbar.vue";

export default {
  name: "DesktopeNavbar",
  components: {
    DesktopeNavbar,
  },
};
</script>
