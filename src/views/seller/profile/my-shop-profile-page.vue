<template>
  <MobileLayout
    :displayName="this.$store.getters.getMyShop.shopName"
    :image="this.$store.getters.getMyShop.shopLogoImagePath"
  >
    <template #button> <ShoppingBagIcon /> Shopping </template>
    <div>
      <PrimaryButton
        class="!bg-white !text-black !items-start !justify-start"
        :click="
          () => {
            this.$router.push({ name: 'AuctionHistoryPage' });
          }
        "
      >
        <HistoryIcon /> Auction History
      </PrimaryButton>
    </div>
    <div>
      <PrimaryButton
        class="!bg-white !text-black !items-start !justify-start"
        :click="
          () => {
            this.$router.push({ name: 'SalesHistoryPage' });
          }
        "
      >
        <HistoryIcon /> Sales History
      </PrimaryButton>
    </div>
  </MobileLayout>
</template>

<script>
import MobileLayout from "@/components/layout/mobile-app-layout.vue";
import ShoppingBagIcon from "@/assets/icons/shopping-bag.svg?inline";
import PrimaryButton from "@/components/button/primary-button.vue";
import HistoryIcon from "@/assets/icons/history.svg?inline";

export default {
  name: "MyShopProfilePage",
  components: {
    MobileLayout,
    HistoryIcon,
    ShoppingBagIcon,
    PrimaryButton,
  },
};
</script>