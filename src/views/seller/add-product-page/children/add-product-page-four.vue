<template>
  <Form
    @submit="handleProductSubmit"
    :initial-values="
      this.$store.getters.getProduct && this.$store.getters.getProduct.p4
    "
  >
    <FormWrapper label="Sales Information">
      <template #body>
        <!--  <Dropdown
          label="Sale Type"
          name="saleType"
          placeholder="saleType"
          :options="categoryName"
          required
        /> -->
        <TextLabel label="Sale Type" required />
        <select
          v-model="currentStatus"
          class="custom-select w-full h-[42px]"
          placeholder="saleType"
        >
          <option class="select-selected" value="Sale Only">Sale Only</option>
          <option class="select-selected" value="Auction Only">
            Auction Only
          </option>
          <option class="select-selected" value="Sale and Auction">
            Sale and Auction
          </option>
        </select>
        <div>
          <TextLabel label="Sale Price" required />
          <div class="flex gap-x-2">
            <p
              class="flex items-center text-sm leading-[17px] text-black w-fit"
            >
              ฿
            </p>
            <BaseField
              type="text"
              name="salePrice"
              placeholder="Sale Price"
              :minLength="1"
              regex="numberOnly"
            />
          </div>
        </div>
        <div
          v-if="
            currentStatus == 'Auction Only' ||
            currentStatus == 'Sale and Auction'
          "
        >
          <TextLabel label="Starting bid" required />
          <div class="flex gap-x-2">
            <p
              class="flex items-center text-sm leading-[17px] text-black w-fit"
            >
              ฿
            </p>
            <BaseField
              type="text"
              name="startingBid"
              placeholder="Starting bid"
              :minLength="1"
              regex="numberOnly"
            />
          </div>
        </div>
        <TextField
          type="text"
          name="storage"
          placeholder="Storage"
          label="Storage"
          :minLength="1"
          class="min-w-[218px]"
          regex="numberOnly"
          required
        />
        <div
          class="flex gap-x-1.5"
          v-if="
            currentStatus == 'Auction Only' ||
            currentStatus == 'Sale and Auction'
          "
        >
          <TextField
            type="text"
            name="auctionPeriod"
            placeholder="Auction Time"
            label="Auction Period"
            :minLength="1"
            class="min-w-[218px]"
            regex="numberOnly"
            required
          />
          <Dropdown
            label="Unit of Time"
            name="unitOfTime"
            placeholder="Minute"
            :options="categoryName"
            class="min-w-[119px]"
            required
          />
        </div>
        <div
          class="flex gap-x-1.5"
          v-if="
            currentStatus == 'Auction Only' ||
            currentStatus == 'Sale and Auction'
          "
        >
          <TextField
            type="text"
            name="nextAuction"
            placeholder="Next Auction Time"
            label="Next Auction in"
            :minLength="1"
            class="min-w-[218px]"
            regex="numberOnly"
          />
          <Dropdown
            label="Unit of Time"
            name="unitOfTime"
            placeholder="Minute"
            :options="categoryName"
            class="min-w-[119px]"
          />
        </div>
      </template>
      <template #footer>
        <PrimaryButton type="submit"> Next </PrimaryButton>
      </template>
    </FormWrapper>
  </Form>
</template>

<script>
import { Form } from "vee-validate";
import * as yup from "yup";
import ProductService from "@/services/product/product-service";
import FormWrapper from "@/components/form/form-wrapper.vue";
import BaseField from "@/components/field/base-field.vue";
import TextField from "@/components/field/text-field/text-field.vue";
import Dropdown from "@/components/dropdown/dropdown.vue";
import PrimaryButton from "@/components/button/primary-button.vue";
import TextLabel from "@/components/field/text-label.vue";

export default {
  name: "AddProductPageFour",
  components: {
    Form,
    FormWrapper,
    TextLabel,
    BaseField,
    TextField,
    Dropdown,
    PrimaryButton,
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
      /* schema, */
      currentStatus: "Sale Only",
    };
  },
  methods: {
    handleProductSubmit(product) {
      let pageFour = {
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
      this.$store
        .dispatch("setProduct", {
          ...this.$store.getters.getProduct,
          p4: pageFour,
        })
        .then(() => {
          this.$router.push({ name: "AddProductPageFive" });
        });
    },
  },
};
</script>