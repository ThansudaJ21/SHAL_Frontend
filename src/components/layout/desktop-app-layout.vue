<template>
  <div class="bg-primary-50 min-h-screen">
    <DesktopNavbar />
    <div class="space-y-6 px-32 py-8">
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
