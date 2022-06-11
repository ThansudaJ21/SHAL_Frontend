<template>
  <div class="bg-primary-50 min-h-screen">
    <!-- Register Navbar -->
    <MobileRegisterNavbar v-if="$route.name == 'RegisterPage'" />

    <!-- Profile Navbar -->
    <MobileProfileNavbar
      v-else-if="$route.name == 'BuyerProfilePage'"
      :click="() => this.$router.push({ name: 'ShopRegistrationPageOne' })"
    >
      <ShopIcon /> Start Selling
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

    <div class="space-y-4 px-2 py-4">
      <slot />
    </div>
  </div>
</template>

<script>
import MobileDefaultNavbar from "@/components/navbar/mobile-navbar/mobile-navbar.vue";
import MobileProfileNavbar from "@/components/navbar/mobile-navbar/mobile-profile-navbar.vue";
import MobileRegisterNavbar from "@/components/navbar/mobile-navbar/mobile-register-navbar.vue";
import ShopIcon from "@/assets/icons/shop-outlined.svg?inline";

export default {
  name: "MobileLayout",
  components: {
    MobileDefaultNavbar,
    MobileProfileNavbar,
    MobileRegisterNavbar,
    ShopIcon,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>
