<template>
  <Form
    @submit="handleProductSubmit"
    :initial-values="
      this.$store.getters.getProduct && this.$store.getters.getProduct.p3
    "
  >
    <FormWrapper label="Variations">
      <template #body>
        <DashedButton :click="variationUp"
          ><AddIcon />Add Variation ({{ variationCount }}/2)</DashedButton
        >
        <div v-if="variationArray.includes(1)">
          <div class="flex w-full gap-x-4 py-4">
            <p
              class="
                flex
                justify-start
                items-center
                text-sm
                leading-[17px]
                text-black
                w-full
              "
            >
              Variation 1
            </p>
            <div class="flex justify-end w-full">
              <OutlinedButton
                variant="error"
                class="w-[72px] h-7"
                :click="() => variationDown(1)"
              >
                <TrashOutlinedIcon /> Delete
              </OutlinedButton>
            </div>
          </div>
          <TextField
            type="text"
            name="variation_one_name"
            placeholder="eg: Color, Size, etc."
            label="Name"
            :minLength="1"
            required
          />
          <TextField
            type="text"
            name="variation_one_option"
            placeholder="eg: Blue, etc."
            label="Options"
            :minLength="1"
            required
          />
          <div class="flex w-full gap-x-4">
            <BaseField
              type="text"
              name="variation_two_option"
              placeholder="eg: Blue, etc."
              :minLength="1"
            />
            <div class="space-x-4 flex items-center">
              <span
                @click="
                  () => {
                    this.$router.push({ name: 'ShopApprovalPage' });
                  }
                "
              >
                <TrashOutlinedIcon />
              </span>
            </div>
          </div>
          <TextLabel label="Option Image" required />
          <UploadImage name="images" :fixbox="true" label="Option 1" />
        </div>
        <div v-if="variationArray.includes(2)">
          <div class="flex w-full gap-x-4 py-4">
            <p
              class="
                flex
                justify-start
                items-center
                text-sm
                leading-[17px]
                text-black
                w-full
              "
            >
              Variation 2
            </p>
            <div class="flex justify-end w-full">
              <OutlinedButton
                variant="error"
                class="w-[72px] h-7"
                :click="() => variationDown(2)"
              >
                <TrashOutlinedIcon /> Delete
              </OutlinedButton>
            </div>
          </div>
          <TextField
            type="text"
            name="variation_one_name"
            placeholder="eg: Color, Size, etc."
            label="Name"
            :minLength="1"
            required
          />
          <TextField
            type="text"
            name="variation_one_option"
            placeholder="eg: Blue, etc."
            label="Options"
            :minLength="1"
            required
          />
          <div class="flex w-full gap-x-4">
            <BaseField
              type="text"
              name="variation_two_option"
              placeholder="eg: Blue, etc."
              :minLength="1"
            />
            <div class="space-x-4 flex items-center">
              <span
                @click="
                  () => {
                    this.$router.push({ name: 'ShopApprovalPage' });
                  }
                "
              >
                <TrashOutlinedIcon />
              </span>
            </div>
          </div>
        </div>
      </template>
    </FormWrapper>
    <!--  <FormWrapper class="mt-4">
      <template #body>
        <p
          class="
            flex
            justify-start
            items-center
            text-base
            leading-[19px]
            text-black
            w-full
          "
        >
          White
        </p>
        <TextField
          type="text"
          name="price"
          placeholder="Price"
          label="Price"
          :minLength="1"
          regex="numberOnly"
          required
        />
        <TextField
          type="text"
          name="stock"
          placeholder="Stock"
          label="Stock"
          :minLength="1"
          regex="numberOnly"
          required
        />
      </template>
    </FormWrapper> -->
    <div class="w-full grid place-items-end">
      <PrimaryButton type="submit"> Next </PrimaryButton>
    </div>
  </Form>
</template>

<script>
import { Form } from "vee-validate";
import * as yup from "yup";
import ProductService from "@/services/product/product-service";
import AddIcon from "@/assets/icons/add-blue.svg?inline";
import FormWrapper from "@/components/form/form-wrapper.vue";
import TextLabel from "@/components/field/text-label.vue";
import BaseField from "@/components/field/base-field.vue";
import TextField from "@/components/field/text-field/text-field.vue";
import UploadImage from "@/components/image-field/upload-image.vue";
import PrimaryButton from "@/components/button/primary-button.vue";
import DashedButton from "@/components/button/dashed-button.vue";
import OutlinedButton from "@/components/button/outlined-button.vue";
import TrashOutlinedIcon from "@/assets/icons/trash-outlined.svg?inline";

export default {
  name: "EditProductPageThree",
  components: {
    Form,
    FormWrapper,
    TextLabel,
    BaseField,
    TextField,
    UploadImage,
    PrimaryButton,
    DashedButton,
    OutlinedButton,
    AddIcon,
    TrashOutlinedIcon,
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
      variationCount: 0,
      variationArray: [],
    };
  },
  methods: {
    handleProductSubmit(product) {
      let pageThree = {
        productName: this.$store.getters.getProduct.p1.productName,
        productDetails: this.$store.getters.getProduct.p1.productDetails,
        category: this.$store.getters.getProduct.p1.category,
        imagePath: this.$store.getters.getProduct.p1.imagePath,
        productAttribute: this.$store.getters.getProduct.p2.productAttribute,
        variations: [],
      };
      console.log(pageThree);
      this.$store
        .dispatch("setProduct", {
          ...this.$store.getters.getProduct,
          p3: pageThree,
        })
        .then(() => {
          this.$router.push({
            name: "EditProductPageFour",
            params: { id: this.$route.params.id },
          });
        });
    },
    variationUp() {
      if (this.variationCount < 2) {
        this.variationCount = this.variationCount + 1;
        this.variationArray.push(this.variationCount);
      }
    },
    variationDown(variation) {
      if (this.variationCount > 0) {
        this.variationCount = this.variationCount - 1;
        if (variation == 1) {
          this.variationArray.splice(this.variationArray.indexOf(1), 1);
        } else {
          this.variationArray.splice(this.variationArray.indexOf(2), 1);
        }
      }
    },
  },
};
</script>