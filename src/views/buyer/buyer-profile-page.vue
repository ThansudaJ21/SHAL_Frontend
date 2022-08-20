<template>
  <MobileLayout :displayName="this.name">
    <template #button> <ShopIcon /> Start Selling </template>
  </MobileLayout>
</template>

<script>
import MobileLayout from "@/components/layout/mobile-app-layout.vue";
import Category from "@/components/category/category.vue";
import ShopIcon from "@/assets/icons/shop-outlined.svg?inline";

export default {
  name: "BuyerProfilePage",
  components: {
    MobileLayout,
    Category,
    ShopIcon,
  },
  mounted() {
    liff
      .init({
        liffId: process.env.VUE_APP_LINELIFF_BUEYR_PROFILE,
      })
      .then(() => {
        if (!liff.isLoggedIn()) {
          liff.login();
        } else {
          liff
            .getProfile()
            .then(() => {
              this.name = liff.getDecodedIDToken().name;
              this.userId = liff.getDecodedIDToken().sub;
              this.picture = liff.getDecodedIDToken().picture;
            })
            .catch((err) => console.error(err));
        }
      });
  },
};
</script>