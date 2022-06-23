<template>
  <Form
    :initial-values="
      this.$store.getters.getProduct && this.$store.getters.getProduct.p2
    "
    @submit="handleBeautySubmit"
    v-if="category == 'BEAUTY'"
  >
    <FormWrapper label="Attribute">
      <template #body>
        <TextField
          type="text"
          name="brand"
          label="Brand"
          placeholder="eg. MAYBELLINE, Olay, etc."
        />
        <TextField
          type="text"
          name="countryOfOrigin"
          label="Country of Origin"
          placeholder="eg. Thailand, China, etc."
        />
      </template>
      <template #footer>
        <PrimaryButton type="submit"> Next </PrimaryButton>
      </template>
    </FormWrapper>
  </Form>

  <Form
    :initial-values="
      this.$store.getters.getProduct && this.$store.getters.getProduct.p2
    "
    @submit="handleFashionSubmit"
    v-else-if="category == 'FASHION'"
  >
    <FormWrapper label="Attribute">
      <template #body>
        <TextField
          type="text"
          name="brand"
          label="Brand"
          placeholder="eg. Converse, Uniqlo, etc."
        />
        <TextField
          type="text"
          name="size"
          label="Size"
          placeholder="eg. S, M, L, etc."
        />
        <TextField
          type="text"
          name="weight"
          label="Weight"
          placeholder="Weight"
        />
        <TextArea
          type="text"
          name="material"
          placeholder="Material"
          label="Material"
        />
        <TextField
          type="text"
          name="countryOfOrigin"
          label="Country of Origin"
          placeholder="eg. Thailand, China, etc."
        />
      </template>

      <template #footer>
        <PrimaryButton type="submit"> Next </PrimaryButton>
      </template>
    </FormWrapper>
  </Form>

  <Form
    :initial-values="
      this.$store.getters.getProduct && this.$store.getters.getProduct.p2
    "
    @submit="handleElectronicSubmit"
    v-else-if="category == 'ELECTRONIC'"
  >
    <FormWrapper label="Attribute">
      <template #body>
        <TextField
          type="text"
          name="brand"
          label="Brand"
          placeholder="eg. Samsung, Xiaomi, etc."
        />
        <TextField
          type="text"
          name="size"
          label="Size"
          placeholder="eg. S, M, L, etc."
        />
        <TextField
          type="text"
          name="weight"
          placeholder="Weight"
          label="Weight"
          class="min-w-[218px]"
        />
        <TextArea
          type="text"
          name="materialCountry"
          placeholder="Material country"
          label="Material Country"
        />
        <TextField
          type="text"
          name="countryOfOrigin"
          label="Country of Origin"
          placeholder="eg. Thailand, China, etc."
        />
      </template>
      <template #footer>
        <PrimaryButton type="submit"> Next </PrimaryButton>
      </template>
    </FormWrapper>
  </Form>

  <Form
    :initial-values="
      this.$store.getters.getProduct && this.$store.getters.getProduct.p2
    "
    @submit="handleToySubmit"
    v-else-if="category == 'TOY'"
  >
    <FormWrapper label="Attribute">
      <template #body>
        <TextField
          type="text"
          name="brand"
          label="Brand"
          placeholder="eg. LEGO, etc."
        />
        <TextField
          type="text"
          name="recommendedAge"
          label="Recommended Age"
          placeholder="eg. More than 2 years old, etc."
        />
        <TextArea
          type="text"
          name="material"
          placeholder="Material"
          label="Material"
        />
        <TextField
          type="text"
          name="countryOfOrigin"
          label="Country of Origin"
          placeholder="eg. Thailand, China, etc."
        />
      </template>
      <template #footer>
        <PrimaryButton type="submit"> Next </PrimaryButton>
      </template>
    </FormWrapper>
  </Form>

  <Form
    :initial-values="
      this.$store.getters.getProduct && this.$store.getters.getProduct.p2
    "
    @submit="handleHealthSubmit"
    v-else-if="category == 'HEALTH'"
  >
    <FormWrapper label="Attribute">
      <template #body>
        <TextField
          type="text"
          name="brand"
          label="Brand"
          placeholder="eg. BRANDS, Ensure, etc."
        />
        <TextField
          type="text"
          name="fda"
          label="FDA license number"
          placeholder="eg. LTO-3000005964683"
        />
        <TextField
          type="text"
          name="countryOfOrigin"
          label="Country of Origin"
          placeholder="eg. Thailand, China, etc."
        />
      </template>
      <template #footer>
        <PrimaryButton type="submit"> Next </PrimaryButton>
      </template>
    </FormWrapper>
  </Form>

  <Form
    :initial-values="
      this.$store.getters.getProduct && this.$store.getters.getProduct.p2
    "
    @submit="handleSportsSubmit"
    v-else-if="category == 'SPORTS'"
  >
    <FormWrapper label="Attribute">
      <template #body>
        <TextField
          type="text"
          name="brand"
          label="Brand"
          placeholder="eg. Adidas, etc."
        />
        <TextField
          type="text"
          name="size"
          label="Size"
          placeholder="eg. 36, 37, 38, etc."
        />
        <TextField
          type="text"
          name="weight"
          placeholder="Weight"
          label="Weight"
          class="min-w-[218px]"
        />
        <TextArea
          type="text"
          name="material"
          placeholder="Material"
          label="Material"
        />
        <TextField
          type="text"
          name="countryOfOrigin"
          label="Country of Origin"
          placeholder="eg. Thailand, China, etc."
        />
      </template>
      <template #footer>
        <PrimaryButton type="submit"> Next </PrimaryButton>
      </template>
    </FormWrapper>
  </Form>

  <Form
    :initial-values="
      this.$store.getters.getProduct && this.$store.getters.getProduct.p2
    "
    @submit="handleHomeSubmit"
    v-else-if="category == 'HOME'"
  >
    <FormWrapper label="Attribute">
      <template #body>
        <TextField
          type="text"
          name="brand"
          label="Brand"
          placeholder="eg. LOTUS, TOTO, etc."
        />
        <TextField
          type="text"
          name="size"
          label="Size"
          placeholder="eg. 3.5', 5', 6', etc."
        />
        <TextField
          type="text"
          name="weight"
          placeholder="Weight"
          label="Weight"
          class="min-w-[218px]"
        />
        <TextArea
          type="text"
          name="material"
          placeholder="Material"
          label="Material"
        />
        <TextField
          type="text"
          name="countryOfOrigin"
          label="Country of Origin"
          placeholder="eg. Thailand, China, etc."
        />
      </template>
      <template #footer>
        <PrimaryButton type="submit"> Next </PrimaryButton>
      </template>
    </FormWrapper>
  </Form>

  <Form
    :initial-values="
      this.$store.getters.getProduct && this.$store.getters.getProduct.p2
    "
    @submit="handlePetsSubmit"
    v-else-if="category == 'PETS'"
  >
    <FormWrapper label="Attribute">
      <template #body>
        <TextField
          type="text"
          name="brand"
          label="Brand"
          placeholder="eg. SmartHeart, Me-O, etc."
        />
        <TextField
          type="text"
          name="size"
          label="Size"
          placeholder="eg. 10 kg., 20 kg., etc."
        />
        <TextField
          type="text"
          name="weight"
          placeholder="Weight"
          label="Weight"
          class="min-w-[218px]"
          regex="numberOnly"
        />
        <TextArea
          type="text"
          name="material"
          placeholder="Material"
          label="Material"
        />
        <TextField
          type="text"
          name="countryOfOrigin"
          label="Country of Origin"
          placeholder="eg. Thailand, China, etc."
        />
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
import TextField from "@/components/field/text-field/text-field.vue";
import TextArea from "@/components/field/text-area/text-area.vue";
import PrimaryButton from "@/components/button/primary-button.vue";

export default {
  name: "AddProductPageTwo",
  components: {
    Form,
    FormWrapper,
    TextField,
    TextArea,
    PrimaryButton,
  },
  data() {
    /* const schema = yup.object().shape({
      brand: yup.string().required("Please fill brand of the product"),
      size: yup.string().required("Please fill size of the product"),
      material: yup.string().required("Please fill material of the product"),
      materialCountry: yup
        .string()
        .required("Please fill material contry of the product"),
      weight: yup.number().required("Please fill weight of the product"),
      unitOfWeight: yup.string().required("Please select unit of weight"),
      recommendedAge: yup.string().required("Please fill the recommended age"),
      fda: yup.string().required("Please fill FDA license number"),
      countryOfOrigin: yup
        .string()
        .required("Please fill country of origin of the product"),
    }); */
    return {
      /*schema,*/
      attributeCount: 0,
      attribute: [],
      category: null,
      pageOneData: null,
    };
  },
  methods: {
    handleBeautySubmit(product) {
      this.attribute.push({
        text: product.brand,
        attribute: {
          attribute: "Brand",
        },
      });
      this.attribute.push({
        text: product.countryOfOrigin,
        attribute: {
          attribute: "Country of origin",
        },
      });
      let pageTwo = {
        productName: this.$store.getters.getProduct.p1.productName,
        productDetails: this.$store.getters.getProduct.p1.productDetails,
        category: this.$store.getters.getProduct.p1.category,
        imagePath: this.$store.getters.getProduct.p1.imagePath,
        productAttribute: this.attribute,
      };
      console.log(pageTwo);
      this.$store
        .dispatch("setProduct", {
          ...this.$store.getters.getProduct,
          p2: pageTwo,
        })
        .then(() => {
          this.$router.push({ name: "AddProductPageThree" });
        });
    },
    handleFashionSubmit(product) {
      this.attribute.push({
        text: product.brand,
        attribute: {
          attribute: "Brand",
        },
      });
      this.attribute.push({
        text: product.size,
        attribute: {
          attribute: "Size",
        },
      });
      this.attribute.push({
        text: product.weight,
        attribute: {
          attribute: "Weight",
        },
      });
      this.attribute.push({
        text: product.material,
        attribute: {
          attribute: "Material",
        },
      });
      this.attribute.push({
        text: product.countryOfOrigin,
        attribute: {
          attribute: "Country of origin",
        },
      });
      let pageTwo = {
        productName: this.$store.getters.getProduct.p1.productName,
        productDetails: this.$store.getters.getProduct.p1.productDetails,
        category: this.$store.getters.getProduct.p1.category,
        imagePath: this.$store.getters.getProduct.p1.imagePath,
        productAttribute: this.attribute,
      };
      console.log(pageTwo);
      this.$store
        .dispatch("setProduct", {
          ...this.$store.getters.getProduct,
          p2: pageTwo,
        })
        .then(() => {
          this.$router.push({ name: "AddProductPageThree" });
        });
    },
    handleElectronicSubmit(product) {
      this.attribute.push({
        text: product.brand,
        attribute: {
          attribute: "Brand",
        },
      });
      this.attribute.push({
        text: product.size,
        attribute: {
          attribute: "Size",
        },
      });
      this.attribute.push({
        text: product.weight,
        attribute: {
          attribute: "Weight",
        },
      });
      this.attribute.push({
        text: product.material,
        attribute: {
          attribute: "Material",
        },
      });
      this.attribute.push({
        text: product.countryOfOrigin,
        attribute: {
          attribute: "Country of origin",
        },
      });
      let pageTwo = {
        productName: this.$store.getters.getProduct.p1.productName,
        productDetails: this.$store.getters.getProduct.p1.productDetails,
        category: this.$store.getters.getProduct.p1.category,
        imagePath: this.$store.getters.getProduct.p1.imagePath,
        productAttribute: this.attribute,
      };
      console.log(pageTwo);
      this.$store
        .dispatch("setProduct", {
          ...this.$store.getters.getProduct,
          p2: pageTwo,
        })
        .then(() => {
          this.$router.push({ name: "AddProductPageThree" });
        });
    },
    handleToySubmit(product) {
      this.attribute.push({
        text: product.brand,
        attribute: {
          attribute: "Brand",
        },
      });
      this.attribute.push({
        text: product.recommendedAge,
        attribute: {
          attribute: "Recommended Age",
        },
      });
      this.attribute.push({
        text: product.material,
        attribute: {
          attribute: "Material",
        },
      });
      this.attribute.push({
        text: product.countryOfOrigin,
        attribute: {
          attribute: "Country of origin",
        },
      });
      let pageTwo = {
        productName: this.$store.getters.getProduct.p1.productName,
        productDetails: this.$store.getters.getProduct.p1.productDetails,
        category: this.$store.getters.getProduct.p1.category,
        imagePath: this.$store.getters.getProduct.p1.imagePath,
        productAttribute: this.attribute,
      };
      console.log(pageTwo);
      this.$store
        .dispatch("setProduct", {
          ...this.$store.getters.getProduct,
          p2: pageTwo,
        })
        .then(() => {
          this.$router.push({ name: "AddProductPageThree" });
        });
    },
    handleHealthSubmit(product) {
      this.attribute.push({
        text: product.brand,
        attribute: {
          attribute: "Brand",
        },
      });
      this.attribute.push({
        text: product.size,
        attribute: {
          attribute: "Size",
        },
      });
      this.attribute.push({
        text: product.weight,
        attribute: {
          attribute: "Weight",
        },
      });
      this.attribute.push({
        text: product.material,
        attribute: {
          attribute: "Material",
        },
      });
      this.attribute.push({
        text: product.countryOfOrigin,
        attribute: {
          attribute: "Country of origin",
        },
      });
      let pageTwo = {
        productName: this.$store.getters.getProduct.p1.productName,
        productDetails: this.$store.getters.getProduct.p1.productDetails,
        category: this.$store.getters.getProduct.p1.category,
        imagePath: this.$store.getters.getProduct.p1.imagePath,
        productAttribute: this.attribute,
      };
      console.log(pageTwo);
      this.$store
        .dispatch("setProduct", {
          ...this.$store.getters.getProduct,
          p2: pageTwo,
        })
        .then(() => {
          this.$router.push({ name: "AddProductPageThree" });
        });
    },
    handleToySubmit(product) {
      this.attribute.push({
        text: product.brand,
        attribute: {
          attribute: "Brand",
        },
      });
      this.attribute.push({
        text: product.fda,
        attribute: {
          attribute: "FDA license number",
        },
      });
      this.attribute.push({
        text: product.countryOfOrigin,
        attribute: {
          attribute: "Country of origin",
        },
      });
      let pageTwo = {
        productName: this.$store.getters.getProduct.p1.productName,
        productDetails: this.$store.getters.getProduct.p1.productDetails,
        category: this.$store.getters.getProduct.p1.category,
        imagePath: this.$store.getters.getProduct.p1.imagePath,
        productAttribute: this.attribute,
      };
      console.log(pageTwo);
      this.$store
        .dispatch("setProduct", {
          ...this.$store.getters.getProduct,
          p2: pageTwo,
        })
        .then(() => {
          this.$router.push({ name: "AddProductPageThree" });
        });
    },
    handleSportsSubmit(product) {
      this.attribute.push({
        text: product.brand,
        attribute: {
          attribute: "Brand",
        },
      });
      this.attribute.push({
        text: product.size,
        attribute: {
          attribute: "Size",
        },
      });
      this.attribute.push({
        text: product.weight,
        attribute: {
          attribute: "Weight",
        },
      });
      this.attribute.push({
        text: product.material,
        attribute: {
          attribute: "Material",
        },
      });
      this.attribute.push({
        text: product.countryOfOrigin,
        attribute: {
          attribute: "Country of origin",
        },
      });
      let pageTwo = {
        productName: this.$store.getters.getProduct.p1.productName,
        productDetails: this.$store.getters.getProduct.p1.productDetails,
        category: this.$store.getters.getProduct.p1.category,
        imagePath: this.$store.getters.getProduct.p1.imagePath,
        productAttribute: this.attribute,
      };
      console.log(pageTwo);
      this.$store
        .dispatch("setProduct", {
          ...this.$store.getters.getProduct,
          p2: pageTwo,
        })
        .then(() => {
          this.$router.push({ name: "AddProductPageThree" });
        });
    },
    handleHomeSubmit(product) {
      console.log(product);
      this.attribute.push({
        text: product.brand,
        attribute: {
          attribute: "Brand",
        },
      });
      this.attribute.push({
        text: product.size,
        attribute: {
          attribute: "Size",
        },
      });
      this.attribute.push({
        text: product.weight,
        attribute: {
          attribute: "Weight",
        },
      });
      this.attribute.push({
        text: product.material,
        attribute: {
          attribute: "Material",
        },
      });
      this.attribute.push({
        text: product.countryOfOrigin,
        attribute: {
          attribute: "Country of origin",
        },
      });
      let pageTwo = {
        productName: this.$store.getters.getProduct.p1.productName,
        productDetails: this.$store.getters.getProduct.p1.productDetails,
        category: this.$store.getters.getProduct.p1.category,
        imagePath: this.$store.getters.getProduct.p1.imagePath,
        productAttribute: this.attribute,
      };
      console.log(pageTwo);
      this.$store
        .dispatch("setProduct", {
          ...this.$store.getters.getProduct,
          p2: pageTwo,
        })
        .then(() => {
          this.$router.push({ name: "AddProductPageThree" });
        });
    },
    handlePetsSubmit(product) {
      this.attribute.push({
        text: product.brand,
        attribute: {
          attribute: "Brand",
        },
      });
      this.attribute.push({
        text: product.size,
        attribute: {
          attribute: "Size",
        },
      });
      this.attribute.push({
        text: product.weight,
        attribute: {
          attribute: "Weight",
        },
      });
      this.attribute.push({
        text: product.material,
        attribute: {
          attribute: "Material",
        },
      });
      this.attribute.push({
        text: product.countryOfOrigin,
        attribute: {
          attribute: "Country of origin",
        },
      });
      let pageTwo = {
        productName: this.$store.getters.getProduct.p1.productName,
        productDetails: this.$store.getters.getProduct.p1.productDetails,
        category: this.$store.getters.getProduct.p1.category,
        imagePath: this.$store.getters.getProduct.p1.imagePath,
        productAttribute: this.attribute,
      };
      console.log(pageTwo);
      this.$store
        .dispatch("setProduct", {
          ...this.$store.getters.getProduct,
          p2: pageTwo,
        })
        .then(() => {
          this.$router.push({ name: "AddProductPageThree" });
        });
    },
  },
  created() {
    this.pageOneData = JSON.parse(
      JSON.stringify(this.$store.getters.getProduct)
    );
    ProductService.getCategory(this.pageOneData.p1.category).then((res) => {
      this.category = res.data.data.getCategory.categoryName;
      this.attributeCount = res.data.data.getCategory.attributes.length;
    });
  },
};
</script>