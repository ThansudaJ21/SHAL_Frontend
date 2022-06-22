<template>
  <div class="font-kanit">
    <router-view />
    <BottomNavbar v-if="showPage" />
  </div>
</template>

<script>
import BottomNavbar from "@/components/bottom-navbar/bottom-navbar.vue";

export default {
  components: { BottomNavbar },
  data() {
    return {
      page: ["BuyerHomePage", "BuyerProfilePage", "SellerHomePage", "SellerProfilePage"],
    };
  },
  computed: {
    showPage() {
      if (this.page.includes(this.$route.name)) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>
