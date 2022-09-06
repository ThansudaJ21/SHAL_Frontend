<template>
  <nav class="bg-primary-900 rounded-b-[28px]">
    <div class="md:hidden h-fit justify-between p-4 items-center space-y-4">
      <div class="w-full flex justify-between">
        <div class="flex items-center">
          <a @click="$router.go(-1)">
            <BackIcon />
          </a>
        </div>
        <div class="flex items-center justify-center w-full">
          <div class="rounded-full mr-2">
            <img class="w-12 h-12 rounded-full" :src="image" alt="shop" />
          </div>
          <p class="text-base font-semibold text-white">
            {{ title }}
          </p>
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
  name: "ShopNavbar",
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
      required: false,
    },
  },
  data() {
    return {
      page: ["ShopPage"],
    };
  },
};
</script>