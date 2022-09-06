<template>
  <FormWrapper variant="details">
    <template #body>
      <div
        class="flex items-center gap-2 mb-4"
        @click="
          () => {
            this.$store.dispatch('setRegisterShop', shops);
            this.$router.push({
              name: 'ShopPage',
              params: { id: this.shopId },
            });
          }
        "
      >
        <div class="flex justify-between">
          <div class="flex items-center gap-x-2">
            <img :src="shops.shopLogoImagePath" class="w-8 h-8 rounded-full" />
            <p class="text-xs font-semibold">{{ shops.shopName }}</p>
            <div class="w-2"><ChevronRightIcon /></div>
          </div>
        </div>
      </div>
      <div v-for="(product, index) in products" :key="product">
        <div class="flex w-full">
          <div
            class="w-24"
            @click="
              () => {
                $router.push({
                  name: 'ProductDetailsPageForBuyer',
                  params: { id: product.id },
                });
              }
            "
          >
            <img
              :src="product.imagesPath[0]"
              class="
                rounded-lg
                border-[1px]
                w-24
                h-24
                border-primary-100
                object-cover
              "
            />
          </div>
          <div class="ml-2 w-full grid">
            <div>
              <div class="flex w-full h-6 items-center justify-between">
                <p class="text-sm text-ellipsis overflow-hidden truncate w-48">
                  {{ product.productName }}
                </p>
                <p class="text-[10px] leading-3 text-neutral-900">
                  {{ date[index] }}
                </p>
              </div>
              <div class="text-[10px] h-4 text-primary-900">
                {{ options[index] }}
              </div>
            </div>
            <div class="flex justify-between w-full items-center">
              <p
                class="
                  text-sm text-primary-900
                  font-semibold
                  items-center
                  flex
                  h-2
                  w-full
                "
              >
                ฿{{ Number(product.salePrice).toLocaleString() }}
              </p>
              <div class="flex items-center mr-2 h-2 w-2/5">
                <p class="text-sm w-full flex justify-center">
                  {{ amount[index] }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="flex justify-between">
          <p class="text-base font-semibold text-neutral-900">Total</p>
          <p class="text-sm font-semibold text-primary-900">
            ฿ {{ Number(product.salePrice * amount[index]).toLocaleString() }}
          </p>
        </div>
      </div>
    </template>
  </FormWrapper>
</template>

<script>
import { defineComponent } from "vue";
import FormWrapper from "@/components/form/form-wrapper.vue";
import shopService from "@/services/shop/shop-service";
import ProductService from "@/services/product/product-service";
import TextButton from "@/components/button/text-button.vue";
import ChevronRightIcon from "@/assets/icons/chevron-right.svg?inline";
import MinusIcon from "@/assets/icons/minus-circle.svg?inline";
import PlusIcon from "@/assets/icons/plus-circle.svg?inline";

export default defineComponent({
  name: "PurchaseHistoryCard",
  components: {
    FormWrapper,
    TextButton,
    ChevronRightIcon,
    MinusIcon,
    PlusIcon,
  },
  props: {
    productProps: {
      type: Array,
      required: false,
    },
    shopId: {
      type: Number,
      required: false,
    },
  },
  data() {
    return {
      shops: "",
      amount: [],
      products: [],
      totalPrice: [],
      options: [],
      date: [],
    };
  },
  created() {
    shopService.getRegisterShop(this.shopId).then((response) => {
      this.shops = response.data.data.getRegisterShop;
    });
    for (let index = 0; index < this.productProps.length; index++) {
      ProductService.getProduct(this.productProps[index].products.id).then(
        (response) => {
          this.products.push(response.data.data.getProduct);
          this.amount.push(this.productProps[index].quantity);
          this.date.push(this.productProps[index].dateTime.substring(0, 10));
          try {
            this.options.push(
              this.productProps[index].optionsList[0].optionName
            );
          } catch (error) {
            this.options.push("");
          }
        }
      );
    }
  },
});
</script>
