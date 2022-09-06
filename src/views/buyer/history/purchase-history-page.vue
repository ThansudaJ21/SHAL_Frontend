<template>
  <MobileLayout
    title="Purchase History"
    :image="this.$store.getters.getUser.pictureUrl"
  >
    <PurchaseHistoryCard
      v-for="cart in cartObject"
      :key="cart.shopId"
      :shopId="cart.shopId"
      :productProps="cart.productInCart"
    />
  </MobileLayout>
</template>

<script>
import { showAlert } from "@/hooks/sweet-alert/sweet-alert.js";
import TradingService from "@/services/trading/trading-service";
import MobileLayout from "@/components/layout/mobile-app-layout.vue";
import PrimaryButton from "@/components/button/primary-button.vue";
import PurchaseHistoryCard from "@/components/card/purchase-history-card.vue";

export default {
  name: "PurchaseHistoryPage",
  components: {
    MobileLayout,
    PrimaryButton,
    PurchaseHistoryCard,
  },
  data() {
    return {
      cartObject: [],
      totalPrice: 0,
    };
  },
  created() {
    let shops = [];
    let products = [];
    TradingService.findProductOrderByUserIdOrProductIdOrShopId(
      this.$store.getters.getUser.id,
      null,
      null
    ).then((response) => {
      let data = response.data.data.findProductOrderByUserIdOrProductIdOrShopId;
      for (let index = 0; index < data.length; index++) {
        let shopId = data[index].shop.id;
        products.push(shopId);
        if (!shops.includes(shopId)) {
          shops.push(shopId);
        }
      }
      for (let index = 0; index < shops.length; index++) {
        let inCart = [];
        for (let index2 = 0; index2 < data.length; index2++) {
          if (shops[index] == products[index2]) {
            inCart.push(data[index2]);
          }
        }
        this.cartObject.push({
          shopId: shops[index],
          productInCart: inCart,
        });
      }
      console.log(this.cartObject);
    });
  },
  methods: {
    buyNow() {
      showAlert("error", "Maintenance", "");
    },
  },
};
</script>