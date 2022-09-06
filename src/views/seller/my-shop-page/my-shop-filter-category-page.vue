<template>
  <MobileLayout :title="this.$route.query.category">
    <div
      v-if="products.length == 0"
      class="
        col-span-2
        text-center text-xl
        leading-6
        font-medium
        text-neutral-500
        w-full
      "
    >
      No match found
    </div>
    <div class="grid grid-cols-2 gap-x-4">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
        :click="() => goToProductDetail(product.id)"
      />
    </div>
  </MobileLayout>
</template>

<script>
import MobileLayout from "@/components/layout/mobile-app-layout.vue";
import ProductService from "@/services/product/product-service";
import ProductCard from "@/components/card/product-card.vue";

export default {
  name: "MyShopFilterCategoryPage",
  components: {
    MobileLayout,
    ProductCard,
  },
  data() {
    return {
      products: [],
    };
  },
  async created() {
    let id = this.$store.getters.getMyShop.id;
    await ProductService.getAllProduct(id).then((res) => {
      console.log(res.data.data.getAllProduct);
      let content = res.data.data.getAllProduct;
      for (let index = 0; index < content.length; index++) {
        if (
          content[index].category == this.$route.query.category &&
          content[index].productStatus != "DELETED"
        ) {
          this.products.push(content[index]);
        }
      }
    });
  },
  methods: {
    goToProductDetail(productID) {
      this.$router.push({
        name: "ProductDetailsPageForSeller",
        params: { id: productID },
      });
    },
  },
};
</script>