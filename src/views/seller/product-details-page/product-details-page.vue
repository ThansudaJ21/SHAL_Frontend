<template>
  <div class="md:hidden bg-primary-50 min-h-screen" v-if="product">
    <div class="static">
      <slide
        :data="slide"
        class="h-[258px] w-full object-contain"
        :time="5000"
        :spot="false"
      />
      <div class="absolute top-2 w-full flex justify-between px-4">
        <div class="items-start">
          <div
            @click="() => this.$router.push({ name: 'SellerShopPage' })"
            class="
              !w-8
              !h-8
              !px-[0px]
              bg-neutral-50
              rounded-full
              !min-w-8 !min-h-8
              flex
              justify-center
              items-center
            "
          >
            <BackIcon />
          </div>
        </div>
        <div class="items-end gap-x-2 flex">
          <div
            @click="
              () =>
                this.$router.push({
                  name: 'EditProductPageOne',
                  params: { id: this.$route.params.id },
                })
            "
            class="
              !w-8
              !h-8
              !px-[0px]
              bg-primary-100
              rounded-full
              !min-w-8 !min-h-8
              flex
              justify-center
              items-center
            "
          >
            <PencilIcon />
          </div>
          <div
            @click="deleteProduct"
            class="
              !w-8
              !h-8
              !px-[0px]
              border-error-500
              bg-white
              rounded-full
              !min-w-8 !min-h-8
              flex
              justify-center
              items-center
            "
          >
            <TrashIcon />
          </div>
        </div>
      </div>
    </div>

    <div class="space-y-2 px-2 pt-2 pb-4">
      <FormWrapper variant="details">
        <template #body>
          <p class="text-base leading-[19px] text-black">
            {{ product.productName }}
          </p>
          <p class="text-lg leading-[19px] font-semibold text-primary-900">
            ฿{{ product.salePrice }}
          </p>
          <p class="text-xs leading-[14px] text-neutral-700">
            {{ product.saleTypeName }} / {{ product.productStatus }}
          </p>
        </template>
      </FormWrapper>
      <FormWrapper variant="details">
        <template #body>
          <p class="text-sm leading-[17px] font-semibold text-black">
            Variations
          </p>
          <p class="text-sm leading-[17px] text-black">
            <span
              v-for="(variation, index) in product.variations"
              :key="variation"
              >{{ variation.variationName }} {{ variation.options.length
              }}<span v-if="index < product.variations.length - 1">, </span>
            </span>
          </p>
          <!--           <img
            v-for="productIMG in product.imagePath"
            :key="productIMG"
            :src="productIMG"
            class="w-11 h-12 border-[1px] boder-solid border-primary-100"
          /> -->
          <div class="w-full gap-x-2 flex items-center">
            <ShoppingBagIcon />
            <div>
              <div>
                <p class="text-sm leading-[17px] text-black">Total Storage</p>
              </div>
              <div>
                <p class="text-[10] leading-3 text-neutral-900">
                  {{ product.storage }} items available
                </p>
              </div>
            </div>
          </div>
        </template>
      </FormWrapper>
      <FormWrapper variant="details">
        <template #body>
          <p
            class="
              text-sm
              leading-[17px]
              font-semibold
              text-black
              flex
              items-center
              gap-x-2
            "
          >
            <TruckIcon /> Shipping
          </p>
          <div v-for="shipment in product.shipments" :key="shipment">
            <p class="text-xs leading-[14px] text-black">
              {{ shipment }}
            </p>
            <p class="text-xs leading-[14px] text-black">Cost: ฿35</p>
          </div>
        </template>
      </FormWrapper>
      <FormWrapper variant="details">
        <template #body>
          <p class="text-sm leading-[17px] font-semibold text-black">
            Product Details
          </p>
          <hr class="border-primary-100 border-[1px]" />
          <div class="flex gap-x-4">
            <div
              class="
                w-[94px]
                text-xs
                leading-[14px]
                text-neutral-700 text-start
              "
            >
              Category
            </div>
            <div
              class="
                w-fit
                text-xs
                leading-[14px]
                text-black text-start
                break-all
              "
            >
              {{ product.category }}
            </div>
          </div>
          <div
            class="flex gap-x-4"
            v-for="attribute in product.productAttribute"
            :key="attribute"
          >
            <div
              class="
                w-[94px]
                text-xs
                leading-[14px]
                text-neutral-700 text-start
              "
            >
              {{ attribute.attribute.attribute }}
            </div>
            <div
              class="
                w-fit
                text-xs
                leading-[14px]
                text-black text-start
                break-all
              "
            >
              {{ attribute.text }}
            </div>
          </div>
          <hr class="border-primary-100 border-[1px]" />
          <p class="text-xs leading-[14px] text-black">{{ product.details }}</p>
        </template>
      </FormWrapper>
    </div>
  </div>
</template>

<script>
import slide from "@wyhaya/vue-slide";
import { Form } from "vee-validate";
import ProductService from "@/services/product/product-service";
import FormWrapper from "@/components/form/form-wrapper.vue";
import TextLabel from "@/components/field/text-label.vue";
import PrimaryButton from "@/components/button/primary-button.vue";
import ShoppingBagIcon from "@/assets/icons/shopping-bag-black.svg?inline";
import TruckIcon from "@/assets/icons/truck-outlined-black.svg?inline";
import BackIcon from "@/assets/icons/chevron-solid-left.svg?inline";
import PencilIcon from "@/assets/icons/pencil-alt.svg?inline";
import TrashIcon from "@/assets/icons/trash-outlined.svg?inline";
import TextButton from "@/components/button/text-button.vue";
import { showAlert } from "@/hooks/sweet-alert/sweet-alert.js";

export default {
  name: "ProductDetailsPageForSeller",
  components: {
    slide,
    Form,
    FormWrapper,
    TextLabel,
    PrimaryButton,
    ShoppingBagIcon,
    TruckIcon,
    BackIcon,
    PencilIcon,
    TrashIcon,
    TextButton,
  },
  data() {
    return {
      slide: [],
      product: null,
    };
  },
  created() {
    ProductService.getProduct(this.$route.params.id).then((res) => {
      this.product = res.data.data.getProduct;
      let content = res.data.data.getProduct.imagesPath;
      for (let index = 0; index < content.length; index++) {
        this.slide.push(content[index]);
      }
    });
  },
  methods: {
    deleteProduct() {
      showAlert(
        "delete",
        "Confirmation",
        "Are you sure to delete this product?"
      ).then((res) => {
        if (res.isConfirmed) {
          let productStatus = {
            id: this.$route.params.id,
            productStatus: "DELETED",
          };
          ProductService.updateProductStatus(productStatus).then(() => {
            this.$router.push({ name: "SellerShopPage" });
          });
        }
      });
    },
  },
  mounted() {
    liff
      .init({
        liffId: process.env.VUE_APP_LINELIFF_SELLER_PRODUCT_DETAILS,
      })
      .then(() => {
        if (!liff.isLoggedIn()) {
          liff.login();
        } else {
          liff
            .getProfile()
            .then(() => {
              this.name = liff.getDecodedIDToken().name;
              this.userId = liff.getDecodedIDToken().sub;
              this.picture = liff.getDecodedIDToken().picture;
            })
            .catch((err) => console.error(err));
        }
      });
  },
};
</script>