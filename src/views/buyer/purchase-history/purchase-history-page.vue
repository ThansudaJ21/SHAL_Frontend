<template>
  <MobileLayout
    title="Purchase History"
    :image="this.$store.getters.getUser.pictureUrl"
  >
  </MobileLayout>
</template>

<script>
import AuthServices from "@/services/auth/auth-service";
import MobileLayout from "@/components/layout/mobile-app-layout.vue";
import Category from "@/components/category/category.vue";
import ShopIcon from "@/assets/icons/shop-outlined.svg?inline";
import PrimaryButton from "@/components/button/primary-button.vue";
import HistoryIcon from "@/assets/icons/history.svg?inline";

export default {
  name: "PurchaseHistoryPage",
  components: {
    MobileLayout,
    Category,
    ShopIcon,
    PrimaryButton,
    HistoryIcon,
  },
  data() {
    return {
      userId: "",
      picture: "",
      name: "",
    };
  },
};
</script>