<template>
  <Form
    @submit="handleProductSubmit"
    :initial-values="
      this.$store.getters.getProduct && this.$store.getters.getProduct.p4
    "
  >
    <FormWrapper label="Shipping (maximum 3 options)" required>
      <template #body>
        <div v-for="(shipment, index) in shipmentAll" :key="shipment.name">
          <Field v-slot="{ field }" :name="'shipment_' + index">
            <div
              @click="addCheck(shipment.value)"
              class="flex items-center inline-block"
            >
              <div>
                <input
                  v-bind="field"
                  type="checkbox"
                  :value="shipment.value"
                  :id="shipment.name"
                  v-model="checkShipment"
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
                    checkShipment.includes(shipment.value)
                      ? 'text-black'
                      : 'text-neutral-500',
                  ]"
                  class="text-start text-sm font-normal leading-[17px]"
                  for="shipment.name"
                  >{{ shipment.name }}</label
                >
                <br />
                <label
                  :class="[
                    checkShipment.includes(shipment.value)
                      ? 'text-black'
                      : 'text-neutral-500',
                  ]"
                  class="text-start text-sm font-normal leading-[17px]"
                  for="shipment.name"
                  >Shipping cost by weight
                  <b>{{ shipment.price }} THB</b></label
                >
              </div>
            </div>
          </Field>
        </div>
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
            <Toggle v-model="publish" :click="changePublish" />
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
import ProductService from "@/services/product/product-service";
import FormWrapper from "@/components/form/form-wrapper.vue";
import PrimaryButton from "@/components/button/primary-button.vue";
import Checkbox from "@/components/checkbox/checkbox.vue";
import Toggle from "@/components/toggle/toggle.vue";

export default {
  name: "AddProductPageFour",
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
      product: null,
      publish: true,
      checkShipment: [],
      shipmentAll: [
        {
          name: "Thailand Post - Registered Mail",
          price: 35,
          value: "REGISTEREDMAILS",
        },
        {
          name: "Thailand Post - EMS",
          price: 52,
          value: "EMS",
        },
        {
          name: "Kerry",
          price: 40,
          value: "KERRY",
        },
        {
          name: "J&T Express",
          price: 39,
          value: "J&T",
        },
        {
          name: "DHL Domestic",
          price: 50,
          value: "DHL",
        },
        {
          name: "Ninja Van",
          price: 32,
          value: "NINJA",
        },
        {
          name: "Flash Express",
          price: 35,
          value: "FLASH",
        },
      ],
      /*  schema, */
    };
  },
  methods: {
    created() {
      ProductService.getProduct(this.$route.params.id).then((res) => {
        this.product = res.data.data.getProduct;
      });
    },
    changePublish() {
      if (this.publish == true) {
        this.publish = false;
      } else {
        this.publish = true;
      }
      return this.publish;
    },
    handleProductSubmit(product) {
      var productStatus = null;
      if (this.publish == true) {
        productStatus = "ACTIVE";
      } else {
        productStatus = "HIDDEN";
      }
      let pageFour = {
        id: this.$route.params.id,
        productName: this.$store.getters.getProduct.p1.productName,
        details: this.$store.getters.getProduct.p1.details,
        category: this.$store.getters.getProduct.p2.category,
        imagesPath: JSON.parse(
          JSON.stringify(this.$store.getters.getProduct.p1.imagesPath)
        ),
        salePrice: this.$store.getters.getProduct.p2.salePrice,
        storage: this.$store.getters.getProduct.p2.storage,
        productStatus: productStatus,
        saleTypeName: this.$store.getters.getProduct.p1.saleTypeName,
        variations: JSON.parse(
          JSON.stringify(this.$store.getters.getProduct.p3.variations)
        ),
        /* auction: this.$store.getters.getProduct.p2.auction, */
        shipments: JSON.parse(JSON.stringify(this.checkShipment)),
        productAttribute: JSON.parse(
          JSON.stringify(this.$store.getters.getProduct.p2.productAttribute)
        ),
      };
      ProductService.saveProduct(1, pageFour).then((response) => {
        console.log(response);
        this.$router.push({ name: "SellerShopPage" });
      });
    },
    addCheck(shipment) {
      if (
        this.checkShipment.includes(shipment) &&
        this.checkShipment.indexOf(shipment) !== -1
      ) {
        this.checkShipment.splice(this.checkShipment.indexOf(shipment), 1);
      } else {
        if (this.checkShipment.length < 3) {
          this.checkShipment.push(shipment);
        }
      }
    },
  },
};
</script>