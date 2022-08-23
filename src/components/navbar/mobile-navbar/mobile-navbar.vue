<template>
  <nav class="bg-primary-900 rounded-b-[28px]">
    <div class="md:hidden h-fit justify-between p-4 items-center space-y-4">
      <div class="w-full flex justify-between">
        <div
          class="flex items-center"
          v-if="exceptPage || $route.name == 'SearchResultPage'"
        >
          <a @click="$router.go(-1)">
            <BackIcon />
          </a>
        </div>
        <div class="flex items-center w-6" v-if="!exceptPage"></div>
        <div class="flex items-center">
          <p class="text-base font-semibold text-white">
            {{ title }}
          </p>
        </div>
        <div class="flex items-center relative">
          <div class="rounded-full">
            <img class="w-8 h-8 rounded-full" :src="image" alt="user profile" />
          </div>
        </div>
      </div>
      <div
        class="w-full flex items-center"
        v-if="$route.name == 'HomePage' || $route.name == 'SearchResultPage'"
      >
        <Form @submit="handleProductSearch" class="w-full">
          <IconTextField
            type="text"
            name="productName"
            placeholder="What are you looking for?"
            :showError="false"
        /></Form>
      </div>
    </div>
  </nav>
</template>

<script>
import { Form } from "vee-validate";
import IconTextField from "@/components/field/icon-text-field/icon-text-field.vue";
import BackIcon from "@/assets/icons/chevron-left.svg?inline";

export default {
  name: "MobileNavbar",
  components: {
    IconTextField,
    BackIcon,
    Form,
  },
  props: {
    title: {
      type: String,
      required: false,
      default: "SHAL",
    },
    image: {
      type: String,
    },
  },
  data() {
    return {
      page: ["HomePage", "SellerShopPage", "OrdersPage"],
    };
  },
  computed: {
    exceptPage() {
      if (this.page.includes(this.$route.name)) {
        return false;
      } else {
        return true;
      }
    },
  },
  methods: {
    handleProductSearch(product) {
      this.$router.push({
        name: "SearchResultPage",
        params: { keyWord: product.productName },
      });
    },
  },
};
</script>