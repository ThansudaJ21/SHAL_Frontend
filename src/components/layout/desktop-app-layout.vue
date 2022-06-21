<template>
  <div class="bg-primary-50 min-h-screen">
    <DesktopNavbar />
    <div class="space-y-6 lg:px-32 md:px-4 py-8 hidden md:block">
      <slot />
    </div>
  </div>
</template>

<script>
import DesktopNavbar from "@/components/navbar/desktop-navbar/desktop-navbar.vue";

export default {
  name: "DesktopLayout",
  components: {
    DesktopNavbar,
  },
};
</script>
