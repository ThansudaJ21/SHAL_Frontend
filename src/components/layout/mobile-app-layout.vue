<template>
  <div class="bg-primary-50 min-h-screen">
    <!-- Register Navbar -->
    <MobileRegisterNavbar v-if="$route.name == 'RegisterPage'" />

    <!-- Profile Navbar -->
    <MobileProfileNavbar
      v-else-if="$route.name == 'BuyerProfilePage'"
      :click="() => this.$router.push({ name: 'ShopRegistrationPageOne' })"
    >
      <template v-slot:icon />
      <slot name="button" />
    </MobileProfileNavbar>

    <MobileProfileNavbar
      v-else-if="$route.name == 'SellerProfilePage'"
      :click="() => this.$router.push({ name: 'BuyerHomePage' })"
    >
      <template v-slot:icon />
      <slot name="button" />
    </MobileProfileNavbar>

    <!-- Navbar with search bar -->
    <MobileDefaultNavbar
      :title="title"
      v-else-if="
        $route.name == 'BuyerHomePage' || $route.name == 'SellerHomePage'
      "
    />

    <!-- Navbar without search bar -->
    <MobileDefaultNavbar :title="title" v-else />

    <div class="space-y-4 px-2 py-4 md:hidden">
      <slot />
    </div>
  </div>
</template>

<script>
import MobileDefaultNavbar from "@/components/navbar/mobile-navbar/mobile-navbar.vue";
import MobileProfileNavbar from "@/components/navbar/mobile-navbar/mobile-profile-navbar.vue";
import MobileRegisterNavbar from "@/components/navbar/mobile-navbar/mobile-register-navbar.vue";

export default {
  name: "MobileLayout",
  components: {
    MobileDefaultNavbar,
    MobileProfileNavbar,
    MobileRegisterNavbar,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>
