<template>
  <div
    class="bg-primary-50 min-h-screen"
    :class="[$route.name != 'RegisterPage' ? 'mb-12' : '']"
  >
    <!-- Register Navbar -->
    <MobileRegisterNavbar
      v-if="$route.name == 'RegisterPage'"
      :displayName="displayName"
    />

    <!-- Profile Navbar -->
    <MobileProfileNavbar
      :image="image"
      v-else-if="$route.name == 'BuyerProfilePage'"
      :displayName="displayName"
    >
      <template v-slot:icon />
      <slot name="button" />
    </MobileProfileNavbar>

    <MobileProfileNavbar
      :image="image"
      v-else-if="$route.name == 'MyShopProfilePage'"
      :click="() => this.$router.push({ name: 'HomePage' })"
      :displayName="displayName"
    >
      <template v-slot:icon />
      <slot name="button" />
    </MobileProfileNavbar>

    <!-- Navbar with search bar -->
    <MobileDefaultNavbar
      :image="image"
      :title="title"
      v-else-if="
        $route.name == 'HomePage' ||
        $route.name == 'MyShopPage' ||
        $route.name == 'SearchResultPage'
      "
    />
    <MobileShopNavbar
      :title="title"
      :image="image"
      v-else-if="$route.name == 'ShopPage'"
    />
    <!-- Navbar without search bar -->
    <MobileDefaultNavbar :title="title" :image="image" v-else />

    <div class="space-y-4 px-2 py-4 md:hidden">
      <slot />
    </div>
  </div>
</template>

<script>
import MobileDefaultNavbar from "@/components/navbar/mobile-navbar/mobile-navbar.vue";
import MobileProfileNavbar from "@/components/navbar/mobile-navbar/mobile-profile-navbar.vue";
import MobileRegisterNavbar from "@/components/navbar/mobile-navbar/mobile-register-navbar.vue";
import MobileShopNavbar from "../navbar/mobile-navbar/mobile-shop-navbar.vue";

export default {
  name: "MobileLayout",
  components: {
    MobileDefaultNavbar,
    MobileProfileNavbar,
    MobileRegisterNavbar,
    MobileShopNavbar,
  },
  props: {
    title: {
      type: String,
      required: false,
    },
    displayName: {
      type: String,
      required: false,
    },
    image: {
      type: String,
      required: false,
    },
  },
};
</script>
