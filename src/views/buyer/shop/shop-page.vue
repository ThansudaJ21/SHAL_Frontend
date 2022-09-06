<template>
  <MobileLayout
    :title="this.$store.getters.getRegisterShop.shopName"
    :image="this.$store.getters.getRegisterShop.shopLogoImagePath"
  >
    <div class="mx-2 grid grid-cols-2 gap-4" v-if="products != []">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
        :click="() => goToProductDetail(product.id)"
      />
    </div>
    <div
      class="text-[20px] text-neutral-500 font-medium mx-auto my-auto"
      v-else
    >
      No match found
    </div>
  </MobileLayout>
</template>

<script>
import MobileLayout from "@/components/layout/mobile-app-layout.vue";
import Category from "@/components/category/category.vue";
import ShopIcon from "@/assets/icons/shop-outlined.svg?inline";
import ProductCard from "@/components/card/product-card.vue";
import PrimaryButton from "@/components/button/primary-button.vue";
import HistoryIcon from "@/assets/icons/history.svg?inline";
import ProductService from "@/services/product/product-service";
export default {
  name: "ShopPage",
  components: {
    MobileLayout,
    Category,
    ShopIcon,
    PrimaryButton,
    HistoryIcon,
    ProductCard,
  },
  data() {
    return {
      products: [],
    };
  },
  created() {
    ProductService.getAllProduct(this.$store.getters.getRegisterShop.id).then(
      (response) => {
        console.log(response.data.data.getAllProduct);
        this.products = response.data.data.getAllProduct;
      }
    );
  },
  methods: {
    goToProductDetail(productID) {
      this.$router.push({
        name: "ProductDetailsPageForBuyer",
        params: { id: productID },
      });
    },
  },
};
</script>