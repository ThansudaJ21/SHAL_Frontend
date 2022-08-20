<template>
  <Form
    @submit="handleProductSubmit"
    :initial-values="
      this.$store.getters.getProduct && this.$store.getters.getProduct.p3
    "
  >
    <FormWrapper label="Variations">
      <template #body>
        <div v-if="variationArray.includes(1)">
          <div class="flex w-full gap-x-4">
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
            name="variation_one_option_1"
            placeholder="eg: Blue, etc."
            label="Options"
            :minLength="1"
            required
          />
          <div v-for="option in optionOneCount" :key="option">
            <div class="flex w-full gap-x-4 pb-4" v-if="optionOneCount > 0">
              <BaseField
                type="text"
                :name="'variation_one_option_' + (option + 1)"
                placeholder="eg: Blue, etc."
                :minLength="1"
              />
              <div
                class="space-x-4 flex items-center"
                v-if="option == optionOneCount"
              >
                <span @click="optionOneDown">
                  <TrashOutlinedIcon />
                </span>
              </div>
            </div>
          </div>
          <DashedButton :click="optionOneUp">
            <AddIcon />Add Option
          </DashedButton>
          <TextLabel class="pt-4" label="Option Image" required />
          <UploadImage name="images" :fixbox="true" label="Option 1" />
        </div>
        <div v-if="variationArray.includes(2)">
          <hr class="border-primary-100 mb-4" />
          <div class="flex w-full gap-x-4">
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
            name="variation_two_name"
            placeholder="eg: Color, Size, etc."
            label="Name"
            :minLength="1"
            required
          />
          <TextField
            type="text"
            name="variation_two_option_1"
            placeholder="eg: Blue, etc."
            label="Options"
            :minLength="1"
            required
          />
          <div v-for="option in optionTwoCount" :key="option">
            <div class="flex w-full gap-x-4 pb-4" v-if="optionTwoCount > 0">
              <BaseField
                type="text"
                :name="'variation_two_option_' + (option + 1)"
                placeholder="eg: Blue, etc."
                :minLength="1"
              />
              <div
                class="space-x-4 flex items-center"
                v-if="option == optionTwoCount"
              >
                <span @click="optionTwoDown">
                  <TrashOutlinedIcon />
                </span>
              </div>
            </div>
          </div>
          <DashedButton :click="optionTwoUp">
            <AddIcon />Add Option
          </DashedButton>
          <hr class="border-primary-100 mt-4" />
        </div>
        <div v-if="variationArray.length != 2">
          <hr class="border-primary-100 my-4" />
          <DashedButton :click="variationUp">
            <AddIcon />Add Variation ({{ variationCount }}/2)
          </DashedButton>
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
  name: "AddProductPageThree",
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
      optionOneCount: 0,
      optionTwoCount: 0,
    };
  },
  methods: {
    handleProductSubmit(product) {
      if (product.variation_one_name) {
        var variationOne = {
          variationName: product.variation_one_name,
          options: [],
        };
        for (let index = 1; index <= this.optionOneCount; index++) {
          variationOne.options.push({
            optionName: "product.variation_one_option_ + index",
            price: 20,
            stock: 20,
            image: null,
          });
        }
        this.variationArray.push(variationOne);
      }
      if (product.variation_two_name) {
        var variationTwo = {
          variationName: product.variation_two_name,
          options: [],
        };
        for (let index = 1; index <= this.optionTwoCount; index++) {
          variationTwo.options.push({
            optionName: "product.variation_two_option_ + index",
            price: 20,
            stock: 20,
            image: null,
          });
        }
        this.variationArray.push(variationTwo);
      }
      let pageThree = {
        productName: this.$store.getters.getProduct.p1.productName,
        details: this.$store.getters.getProduct.p1.details,
        category: this.$store.getters.getProduct.p2.category,
        imagesPath: this.$store.getters.getProduct.p1.imagesPath,
        saleTypeName: this.$store.getters.getProduct.p1.saleTypeName,
        salePrice: this.$store.getters.getProduct.p2.salePrice,
        storage: this.$store.getters.getProduct.p2.storage,
        /* auction: this.$store.getters.getProduct.p2.auction, */
        productAttribute: this.$store.getters.getProduct.p2.productAttribute,
        variations: this.variationArray,
      };
      console.log(pageThree);
      this.$store
        .dispatch("setProduct", {
          ...this.$store.getters.getProduct,
          p3: pageThree,
        })
        .then(() => {
          this.$router.push({ name: "AddProductPageFour" });
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
    optionOneUp() {
      this.optionOneCount = this.optionOneCount + 1;
    },
    optionOneDown() {
      if (this.optionOneCount > 0) {
        this.optionOneCount = this.optionOneCount - 1;
      }
    },
    optionTwoUp() {
      this.optionTwoCount = this.optionTwoCount + 1;
    },
    optionTwoDown() {
      if (this.optionTwoCount > 0) {
        this.optionTwoCount = this.optionTwoCount - 1;
      }
    },
  },
};
</script>