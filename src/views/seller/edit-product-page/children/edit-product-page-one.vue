<template>
  <Form
    :validation-schema="schema"
    @submit="handleProductSubmit"
    :initial-values="
      this.$store.getters.getProduct && this.$store.getters.getProduct.p1
    "
  >
    <FormWrapper label="Basic Information">
      <template #body>
        {{ productEditName }}
        <TextLabel label="Product Images" required />
        <UploadImage name="productImages" :fixbox="true" :max="8" />
        <TextField
          type="text"
          name="productName"
          v-model="productEditName"
          placeholder="Product Name"
          label="Product Name"
          :minLength="2"
          :maxLength="20"
          required
        />
        <TextArea
          type="text"
          name="productDetails"
          placeholder="Product Details"
          label="Product Details"
          :minLength="15"
          :maxLength="2500"
          required
          v-model="productDetails"
        />
        <TextLabel label="Sale Type" required />
        <Field v-slot="{ field }" name="saleTypeName" v-model="defaultCategory">
          <select
            v-bind="field"
            class="custom-select w-full h-[42px]"
            v-model="defaultSaleType"
          >
            <option class="select-selected" value="SALE">Sale Only</option>
            <option class="select-selected" value="AUCTION">
              Auction Only
            </option>
            <option class="select-selected" value="AUCTIONANDSALE">
              Sale and Auction
            </option>
          </select>
        </Field>
        <div>
          <TextLabel label="Category" required class="mt-4" />
          <Field
            v-slot="{ field }"
            name="categoryName"
            v-model="defaultCategory"
          >
            <select
              v-bind="field"
              class="custom-select w-full h-[42px]"
              v-model="defaultCategory"
            >
              <option
                :value="category.order"
                v-for="category in categories"
                :key="category.order"
              >
                {{ category.categoryName }}
              </option>
            </select>
          </Field>
        </div>
      </template>
      <template #footer>
        <PrimaryButton type="submit"> Next </PrimaryButton>
      </template>
    </FormWrapper>
  </Form>
</template>

<script>
import { Form, Field } from "vee-validate";
import * as yup from "yup";
import ProductService from "@/services/product/product-service";
import UtilService from "@/services/util-service";
import FormWrapper from "@/components/form/form-wrapper.vue";
import UploadImage from "@/components/image-field/upload-image.vue";
import TextLabel from "@/components/field/text-label.vue";
import TextField from "@/components/field/text-field/text-field.vue";
import TextArea from "@/components/field/text-area/text-area.vue";
import Dropdown from "@/components/dropdown/dropdown.vue";
import PrimaryButton from "@/components/button/primary-button.vue";

export default {
  name: "EditProductPageOne",
  components: {
    Form,
    Field,
    FormWrapper,
    TextLabel,
    TextField,
    TextArea,
    UploadImage,
    Dropdown,
    PrimaryButton,
  },
  data() {
    const schema = yup.object().shape({
      productImages: yup
        .mixed()
        .required("Please upload the product image at least 1 image"),
      productName: yup
        .string()
        .required("Please fill the product name")
        .min(2, "The minimum length must be at least 2"),
      productDetails: yup
        .string()
        .required("Please fill the product details")
        .min(15, "The minimum length must be at least 15"),
    });

    return {
      schema,
      product: null,
      productEditName: "",
      productDetails: "",
      categories: [],
      categoryName: [],
      defaultCategory: 1,
      defaultSaleType: "SALE",
    };
  },
  methods: {
    handleProductSubmit(product) {
      let imageArray = [];
      for (let index = 0; index < product.productImages.length; index++) {
        UtilService.uploadImage(product.productImages[index].value).then(
          (res) => {
            imageArray.push(res.data);
          }
        );
      }
      let pageOne = {
        productName: product.productName,
        details: product.productDetails,
        category: product.categoryName,
        categoryName: this.categoryName[product.categoryName - 1],
        imagesPath: imageArray,
        saleTypeName: product.saleTypeName,
      };
      console.log(pageOne);
      this.$store
        .dispatch("setProduct", {
          ...this.$store.getters.getProduct,
          p1: pageOne,
        })
        .then(() => {
          this.$router.push({ name: "AddProductPageTwo" });
        });
    },
  },
  created() {
    ProductService.getProduct(this.$route.params.id).then((res) => {
      this.product = res.data.data.getProduct;
      this.productEditName = this.product.productName;
      this.productDetails = this.product.details;
    });
    ProductService.getAllCategory().then((res) => {
      this.categories = res.data.data.getAllCategory;
      this.categories.pop();
      for (
        let index = 0;
        index < res.data.data.getAllCategory.length;
        index++
      ) {
        this.categoryName.push(res.data.data.getAllCategory[index].name);
      }
      try {
        this.defaultCategory = this.$store.getters.getProduct.p1.category;
      } catch (error) {
        this.defaultCategory = 1;
      }
      try {
        this.defaultSaleType = this.$store.getters.getProduct.p1.saleType;
      } catch (error) {
        this.defaultSaleType = "SALE";
      }
    });
  },
};
</script>

<style>
.custom-select {
  @apply h-[42px] !rounded-[20px] !border-neutral-500 !p-0 !placeholder-neutral-500  hover:border-neutral-500 border-2;
}

.select option {
  border: 1px solid #1f3a89;
  box-shadow: 0px 8px 15px 0px rgba(190, 219, 254, 0.2);
  @apply z-10 mt-2 rounded-[20px] py-0;
}

.select-selected {
  @apply !h-6 !py-0 !px-4 !text-sm leading-[17px] !text-neutral-600 hover:bg-primary-100 hover:!text-black;
}
</style>