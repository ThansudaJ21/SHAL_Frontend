<template>
  <MobileLayout
    title="Sales History"
    :image="this.$store.getters.getMyShop.shopLogoImagePath"
    ><div class="grid grid-cols-2 gap-4">
      <SalesHistoryCard
        v-for="product in products"
        :key="product.shopId"
        :product="product.products"
      />
    </div>
  </MobileLayout>
</template>

<script>
import TradingService from "@/services/trading/trading-service";
import MobileLayout from "@/components/layout/mobile-app-layout.vue";
import SalesHistoryCard from "@/components/card/sales-history-card.vue";

export default {
  name: "SalesHistoryPage",
  components: {
    MobileLayout,
    SalesHistoryCard,
  },
  data() {
    return {
      totalPrice: 0,
      products: [],
    };
  },
  created() {
    TradingService.findProductOrderByUserIdOrProductIdOrShopId(
      null,
      null,
      this.$store.getters.getMyShop.id
    ).then((response) => {
      let data = response.data.data.findProductOrderByUserIdOrProductIdOrShopId;
      for (let index = 0; index < data.length; index++) {
        if (data[index].orderStatus == "BUY") {
          this.products.push(data[index]);
        }
      }
    });
  },
};
</script>