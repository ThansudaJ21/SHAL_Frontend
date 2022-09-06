<template>
  <MobileLayout title="My Cart" :image="this.$store.getters.getUser.pictureUrl">
    <MyCartCard
      v-for="cart in cartObject"
      :key="cart.shopId"
      :shopId="cart.shopId"
      :productProps="cart.productInCart"
    />
  </MobileLayout>
  <div
    class="
      md:hidden
      w-full
      h-12
      px-4
      flex
      items-center
      fixed
      inset-x-0
      bottom-0
      bg-primary-900
    "
  >
    <div class="flex justify-center gap-x-16 w-full">
      <div class="justify-start w-full">
        <p class="text-xs leading-[14px] text-white">Total Payment</p>
        <p class="text-sm leading-[17px] text-white text-semibold">
          ฿{{ Number(totalPrice).toLocaleString() }}
        </p>
      </div>
      <div class="flex justify-end">
        <PrimaryButton class="bg-warning-500 w-24 h-8" :click="buyNow"
          >Buy Now</PrimaryButton
        >
      </div>
    </div>
  </div>
</template>

<script>
import { showAlert } from "@/hooks/sweet-alert/sweet-alert.js";
import TradingService from "@/services/trading/trading-service";
import MobileLayout from "@/components/layout/mobile-app-layout.vue";
import PrimaryButton from "@/components/button/primary-button.vue";
import MyCartCard from "@/components/card/my-cart-card.vue";

export default {
  name: "MyCartPage",
  components: {
    MobileLayout,
    PrimaryButton,
    MyCartCard,
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
    TradingService.getAddToCartProduct(this.$store.getters.getUser.id).then(
      (response) => {
        let data = response.data.data.getAddToCartProduct;
        for (let index = 0; index < data.length; index++) {
          this.totalPrice = this.totalPrice + (data[index].totalPrice * data[index].quantity)
          let shopId = data[index].shop.id;
          products.push(shopId);
          if (!shops.includes(shopId)) {
            shops.push(shopId);
          }
        }
        console.log(shops);
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
      }
    );
  },
  methods: {
    buyNow() {
      showAlert("error", "Maintenance", "");
    },
  },
};
</script>