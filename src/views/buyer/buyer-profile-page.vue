<template>
  <MobileLayout :image="this.picture" :displayName="this.name">
    <template #button> <ShopIcon /> Start Selling </template>
    <PrimaryButton
      class="!bg-white !text-black !items-start !justify-start"
      :click="
        () => {
          this.$router.push({ name: 'PurchaseHistoryPage' });
        }
      "
    >
      <HistoryIcon /> Purchase History
    </PrimaryButton>
  </MobileLayout>
</template>

<script>
import AuthServices from "@/services/auth/auth-service";
import liff from "@line/liff";
import MobileLayout from "@/components/layout/mobile-app-layout.vue";
import Category from "@/components/category/category.vue";
import ShopIcon from "@/assets/icons/shop-outlined.svg?inline";
import PrimaryButton from "@/components/button/primary-button.vue";
import HistoryIcon from "@/assets/icons/history.svg?inline";

export default {
  name: "BuyerProfilePage",
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
              localStorage.setItem("userId", liff.getDecodedIDToken().sub);
              this.name = liff.getDecodedIDToken().name;
              this.userId = liff.getDecodedIDToken().sub;
              this.picture = liff.getDecodedIDToken().picture;
              console.log(liff.getDecodedIDToken().picture);
              AuthServices.findByUserId(
                JSON.parse(JSON.stringify(liff.getDecodedIDToken().sub))
              ).then((response) => {
                console.log(response);
              });
            })
            .catch((err) => console.error(err));
        }
      });
  },
};
</script>