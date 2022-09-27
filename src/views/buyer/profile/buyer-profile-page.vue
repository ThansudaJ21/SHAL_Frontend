<template>
  <MobileLayout
    :image="this.$store.getters.getUser.pictureUrl"
    :displayName="this.$store.getters.getUser.displayName"
  >
    <template #button>
      <div
        v-if="shopStatus == ''"
        class="flex gap-1 flex items-center"
        @click="() => this.$router.push({ name: 'ShopRegistrationPageOne' })"
      >
        <ShopIcon /> Start Selling
      </div>
      <div
        v-if="shopStatus == 'DISABLE'"
        class="flex gap-1 flex items-center opacity-50 cursor-not-allowed"
      >
        <ShopIcon /> Start Selling
      </div>
      <div
        v-if="shopStatus == 'ENABLE'"
        class="flex gap-1 flex items-center"
        @click="
          () => {
            this.$router.push({
              name: 'MyShopPage',
              params: { id: this.$store.getters.getMyShop.id },
            });
          }
        "
      >
        <ShopIcon /> My Shop
      </div>
    </template>
    <div>
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
    </div>
  </MobileLayout>
</template>

<script>
import ShopService from "@/services/shop/shop-service";
import MobileLayout from "@/components/layout/mobile-app-layout.vue";
import ShopIcon from "@/assets/icons/shop-outlined.svg?inline";
import PrimaryButton from "@/components/button/primary-button.vue";
import HistoryIcon from "@/assets/icons/history.svg?inline";

export default {
  name: "BuyerProfilePage",
  components: {
    MobileLayout,
    ShopIcon,
    PrimaryButton,
    HistoryIcon,
  },
  data() {
    return {
      userId: "",
      picture: "",
      name: "",
      shopStatus: "",
    };
  },
  created() {
    try {
      ShopService.getShopByUserId(this.$store.getters.getUser.id).then(
        (res) => {
          this.shopStatus = res.data.data.getShopByUserId.shopStatus;
        }
      );
    } catch (error) {
      this.shopStatus = "";
    }
  },
};
</script>