<template>
  <MobileLayout :displayName="this.name">
    <template #button> <ShoppingBagIcon /> Shopping </template>
  </MobileLayout>
</template>

<script>
import MobileLayout from "@/components/layout/mobile-app-layout.vue";
import Category from "@/components/category/category.vue";
import ShoppingBagIcon from "@/assets/icons/shopping-bag.svg?inline";

export default {
  name: "SellerProfilePage",
  components: {
    MobileLayout,
    Category,
    ShoppingBagIcon,
  },
  mounted() {
    liff
      .init({
        liffId: process.env.VUE_APP_LINELIFF_SELLER_PROFILE,
      })
      .then(() => {
        if (!liff.isLoggedIn()) {
          liff.login();
        } else {
          liff
            .getProfile()
            .then(() => {
              localStorage.setItem("userId", liff.getDecodedIDToken().sub);
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