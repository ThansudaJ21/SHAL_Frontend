<template>
  <Form
    :initial-values="
      this.$store.getters.getProduct && this.$store.getters.getProduct.p2
    "
    @submit="checkCategoryToSubmit"
  >
    <FormWrapper label="Attribute" v-if="category == 'BEAUTY'">
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
    </FormWrapper>
    <FormWrapper label="Attribute" v-else-if="category == 'FASHION'">
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
    </FormWrapper>
    <FormWrapper label="Attribute" v-else-if="category == 'ELECTRONIC'">
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
    </FormWrapper>
    <FormWrapper label="Attribute" v-else-if="category == 'TOY'">
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
    </FormWrapper>
    <FormWrapper label="Attribute" v-else-if="category == 'HEALTH'">
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
    <FormWrapper label="Attribute" v-else-if="category == 'SPORTS'">
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
    </FormWrapper>
    <FormWrapper label="Attribute" v-else-if="category == 'HOME'">
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
    </FormWrapper>
    <FormWrapper label="Attribute" v-else-if="category == 'PETS'">
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
    </FormWrapper>
    <FormWrapper label="Sales Information" class="mt-4">
      <template #body>
        <div v-if="saleTypeName == 'SALE' || saleTypeName == 'AUCTIONANDSALE'">
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
          v-if="saleTypeName == 'AUCTION' || saleTypeName == 'AUCTIONANDSALE'"
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
        <div class="mt-2">
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
        </div>
        <div
          class="flex gap-x-1.5"
          v-if="saleTypeName == 'AUCTION' || saleTypeName == 'AUCTIONANDSALE'"
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
          <TextLabel label="Unit of Time" required />
          <Field v-slot="{ field }" name="periodUnit" v-model="periodUnit">
            <select
              v-bind="field"
              class="custom-select w-full h-[42px]"
              v-model="periodUnit"
            >
              <option class="select-selected" value="Hour">Hour</option>
              <option class="select-selected" value="Minute">Minute</option>
              <option class="select-selected" value="Second">Second</option>
            </select>
          </Field>
        </div>
        <div
          class="flex gap-x-1.5"
          v-if="saleTypeName == 'AUCTION' || saleTypeName == 'AUCTIONANDSALE'"
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
          <Field v-slot="{ field }" name="nextUnit" v-model="nextUnit">
            <select
              v-bind="field"
              class="custom-select w-full h-[42px]"
              v-model="nextUnit"
            >
              <option class="select-selected" value="Hour">Hour</option>
              <option class="select-selected" value="Minute">Minute</option>
              <option class="select-selected" value="Second">Second</option>
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
import FormWrapper from "@/components/form/form-wrapper.vue";
import TextField from "@/components/field/text-field/text-field.vue";
import TextArea from "@/components/field/text-area/text-area.vue";
import PrimaryButton from "@/components/button/primary-button.vue";
import BaseField from "@/components/field/base-field.vue";
import Dropdown from "@/components/dropdown/dropdown.vue";
import TextLabel from "@/components/field/text-label.vue";

export default {
  name: "AddProductPageTwo",
  components: {
    Form,
    Field,
    FormWrapper,
    TextField,
    TextArea,
    PrimaryButton,
    BaseField,
    Dropdown,
    TextLabel,
  },
  data() {
    return {
      attributeCount: 0,
      attribute: [],
      saleTypeName: null,
      category: null,
      pageOneData: null,
      periodUnit: null,
      nextUnit: null,
      information: null,
    };
  },
  methods: {
    checkCategoryToSubmit(product) {
      if (this.category == "BEAUTY") {
        return this.handleBeautySubmit(product);
      } else if (this.category == "FASHION") {
        return this.handleFashionSubmit(product);
      } else if (this.category == "ELECTRONIC") {
        return this.handleElectronicSubmit(product);
      } else if (this.category == "TOY") {
        return this.handleToySubmit(product);
      } else if (this.category == "HEALTH") {
        return this.handleHealthSubmit(product);
      } else if (this.category == "SPORTS") {
        return this.handleSportsSubmit(product);
      } else if (this.category == "HOME") {
        return this.handleHomeSubmit(product);
      } else if (this.category == "PETS") {
        return this.handlePetsSubmit(product);
      }
    },
    getPageTwoObject(product) {
      if (this.$store.getters.getProduct.p1.saleTypeName == "SALE") {
        this.information = {
          productName: this.$store.getters.getProduct.p1.productName,
          details: this.$store.getters.getProduct.p1.details,
          category: this.$store.getters.getProduct.p1.categoryName,
          imagesPath: this.$store.getters.getProduct.p1.imagesPath,
          saleTypeName: this.$store.getters.getProduct.p1.saleTypeName,
          salePrice: product.salePrice,
          storage: product.storage,
          auction: null,
          productAttribute: this.attribute,
        };
      } else if (this.$store.getters.getProduct.p1.saleTypeName == "AUCTION") {
        this.information = {
          productName: this.$store.getters.getProduct.p1.productName,
          details: this.$store.getters.getProduct.p1.details,
          category: this.$store.getters.getProduct.p1.categoryName,
          imagesPath: this.$store.getters.getProduct.p1.imagesPath,
          saleTypeName: this.$store.getters.getProduct.p1.saleTypeName,
          salePrice: 0,
          storage: product.storage,
          auction: {
            startingBid: product.startingBid,
            auctionPeriod: product.auctionPeriod,
            nextAuction: product.nextAuction,
            timeUnitForAuctionPeriod: product.periodUnit,
            timeUnitForNextAuction: product.nextUnit,
          },
          productAttribute: this.attribute,
        };
      } else if (
        this.$store.getters.getProduct.p1.saleTypeName == "AUCTIONANDSALE"
      ) {
        this.information = {
          productName: this.$store.getters.getProduct.p1.productName,
          details: this.$store.getters.getProduct.p1.details,
          category: this.$store.getters.getProduct.p1.categoryName,
          imagesPath: this.$store.getters.getProduct.p1.imagesPath,
          saleTypeName: this.$store.getters.getProduct.p1.saleTypeName,
          salePrice: product.salePrice,
          storage: product.storage,
          auction: {
            startingBid: product.startingBid,
            auctionPeriod: product.auctionPeriod,
            nextAuction: product.nextAuction,
            timeUnitForAuctionPeriod: product.periodUnit,
            timeUnitForNextAuction: product.nextUnit,
          },
          productAttribute: this.attribute,
        };
      }
      return this.information;
    },
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
      let pageTwo = this.getPageTwoObject(product);
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
      let pageTwo = this.getPageTwoObject(product);
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
      let pageTwo = this.getPageTwoObject(product);
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
      let pageTwo = this.getPageTwoObject(product);
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
      let pageTwo = this.getPageTwoObject(product);
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
      let pageTwo = this.getPageTwoObject(product);
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
      let pageTwo = this.getPageTwoObject(product);
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
      let pageTwo = this.getPageTwoObject(product);
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
      let pageTwo = this.getPageTwoObject(product);
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
  async created() {
    this.pageOneData = JSON.parse(
      JSON.stringify(await this.$store.getters.getProduct)
    );
    ProductService.getCategory(this.pageOneData.p1.category).then((res) => {
      console.log(res.data.data.getCategory);
      this.category = res.data.data.getCategory.categoryName;
      this.attributeCount = res.data.data.getCategory.attributes.length;
    });
    this.saleTypeName = this.pageOneData.p1.saleTypeName;
    this.periodUnit = "Minute";
    this.nextUnit = "Minute";
  },
};
</script>