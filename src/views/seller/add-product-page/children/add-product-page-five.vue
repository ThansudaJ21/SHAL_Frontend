<template>
  <Form
    @submit="handleProductSubmit"
    :initial-values="
      this.$store.getters.getProduct && this.$store.getters.getProduct.p5
    "
  >
    <FormWrapper label="Shipping (maximum 4 options)" required>
      <template #body>
        <Field v-slot="{ field }" :name="shipment">
          <div
            @click="() => addCheck(shipment)"
            class="flex items-center inline-block"
          >
            <div>
              <input
                v-bind="field"
                type="checkbox"
                :value="shipment"
                :id="shipment"
                class="
                  my-3
                  mr-4
                  h-5
                  w-5
                  border-[1px]
                  !border-neutral-500
                  checked:!border-primary-900 checked:!bg-primary-900
                "
              />
            </div>
            <div>
              <label
                :class="[
                  checkFailure.includes(fail.reason)
                    ? 'text-black'
                    : 'text-neutral-500',
                ]"
                class="text-start text-sm font-normal leading-[17px]"
                for="fail.reason"
                >{{ fail.reason }}</label
              >
            </div>
          </div>
        </Field>
      </template>
    </FormWrapper>
    <FormWrapper class="mt-4">
      <template #body>
        <div class="flex w-full gap-x-4 py-4">
          <p
            class="
              flex
              justify-start
              text-base
              leading-[19px]
              text-neutral-900
              w-full
            "
          >
            Publish Product
          </p>
          <div class="flex justify-end">
            <Toggle />
          </div>
        </div>
      </template>
      <template #footer>
        <PrimaryButton type="submit"> Submit </PrimaryButton>
      </template>
    </FormWrapper>
  </Form>
</template>

<script>
import { Form, Field } from "vee-validate";
import * as yup from "yup";
import ProductService from "@/services/shop/shop-service";
import FormWrapper from "@/components/form/form-wrapper.vue";
import PrimaryButton from "@/components/button/primary-button.vue";
import Checkbox from "@/components/checkbox/checkbox.vue";
import Toggle from "@/components/toggle/toggle.vue";

export default {
  name: "AddProductPageFive",
  components: {
    Form,
    Field,
    FormWrapper,
    PrimaryButton,
    Checkbox,
    Toggle,
  },
  data() {
    /* const schema = yup.object().shape({
      productName: yup
        .string()
        .required("Please fill the product name")
        .min(2, "The minimum length must be at least 2"),
      productDeatails: yup
        .string()
        .required("Please fill the product details")
        .min(15, "The minimum length must be at least 15"),
    }); */

    return {
      /*  schema, */
    };
  },
  methods: {
    handleProductSubmit(product) {
      let pageFive = {
        productName: this.$store.getters.getProduct.p1.productName,
        productDetails: this.$store.getters.getProduct.p1.productDetails,
        category: this.$store.getters.getProduct.p1.category,
        imagePath: this.$store.getters.getProduct.p1.imagePath,
        productAttribute: this.$store.getters.getProduct.p2.productAttribute,
        variations: this.$store.getters.getProduct.p3.variations,
        salePrice: parseInt(product.salePrice),
        storage: parseInt(product.storage),
      };
      console.log(pageFour);
      this.$store.dispatch("setProduct", {
        ...this.$store.getters.getProduct,
        p5: pageFive,
      });
      ProductService.updateShopStatus(shopStatusObject).then(() => {
        ProductService.shopFailureReason(this.$route.params.id, arr).then(
          () => {
            this.$router.push({ name: "SellerHomePage" });
          }
        );
      });
    },
    addCheck(reason) {},
  },
};
</script>