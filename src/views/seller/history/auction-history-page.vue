<template>
  <MobileLayout
    title="Auction History"
    :image="this.$store.getters.getMyShop.shopLogoImagePath"
  >
    <div class="grid grid-cols-2 gap-4">
      <AuctionHistoryCard
        v-for="product in products"
        :key="product.shopId"
        :product="product"
      />
    </div>
  </MobileLayout>
</template>

<script>
import AuctionService from "@/services/trading/auction-service";
import MobileLayout from "@/components/layout/mobile-app-layout.vue";
import AuctionHistoryCard from "@/components/card/auction-history-card.vue";

export default {
  name: "SalesHistoryPage",
  components: {
    MobileLayout,
    AuctionHistoryCard,
  },
  data() {
    return {
      totalPrice: 0,
      products: [],
    };
  },
  created() {
    AuctionService.findAuctionByUserIdOrAuctionIdOrShopId(
      null,
      null,
      this.$store.getters.getMyShop.id
    ).then((response) => {
      let data = response.data.data.findAuctionByUserIdOrAuctionIdOrShopId;
      for (let index = 0; index < data.length; index++) {
        this.products.push(data[index]);
      }
    });
  },
};
</script>