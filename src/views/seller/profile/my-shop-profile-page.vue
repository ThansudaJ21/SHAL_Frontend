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
            this.$router.push({ name: 'PurchaseHistoryPage' });
          }
        "
      >
        <HistoryIcon /> Auction History
      </PrimaryButton>
      <PrimaryButton
        class="!bg-white !text-black !items-start !justify-start"
        :click="
          () => {
            this.$router.push({ name: 'PurchaseHistoryPage' });
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
import Category from "@/components/category/category.vue";
import ShoppingBagIcon from "@/assets/icons/shopping-bag.svg?inline";

export default {
  name: "MyShopProfilePage",
  components: {
    MobileLayout,
    Category,
    ShoppingBagIcon,
  },
};
</script>