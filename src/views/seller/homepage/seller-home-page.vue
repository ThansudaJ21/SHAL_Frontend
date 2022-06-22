<template>
  <MobileLayout title="MY SHOP">
    <p class="text-[14px] leading-[17px] text-black uppercase">CATEGORY</p>
    <div class="overflow-x-auto flex gap-x-4">
      <router-link
        v-for="category in this.categoryItems"
        :key="category.name"
        :to="{
          name: 'SellerFilterCategoryPage',
          query: { category: category.pageName },
        }"
        class="
          h-20
          min-w-[80px]
          bg-primary-800
          border-4 border-primary-400
          rounded-tl-[40px] rounded-br-[14px]
          flex
          items-center
        "
      >
        <Category :category="category" />
      </router-link>
    </div>
    <div class="flex w-full h-8">
      <p class="flex justify-start items-center text-xs leading-[14px] h-full">
        Products
      </p>
      <div class="flex justify-end w-full">
        <PrimaryButton
          class="w-fit h-8 text-[10px] leading-3 font-normal"
          :click="() => this.$router.push({ name: 'AddProductPageOne' })"
        >
          <AddWhiteIcon /> Add New Product
        </PrimaryButton>
      </div>
    </div>
    <div class="space-y-6 px-4">
      <TabGroup>
        <TabList class="flex space-x-12 w-full h-[30px] bg-white rounded-t-lg">
          <Tab
            class="w-1/3 h-full text-base text-center leading-[19px]"
            v-slot="{ selected }"
            as="template"
          >
            <button
              :class="[
                selected
                  ? 'border-b-2 border-solid border-b-primary-900 text-primary-900 focus:outline-none'
                  : 'text-black',
              ]"
            >
              All
            </button>
          </Tab>
          <Tab
            class="w-1/3 h-full text-base text-center leading-[19px]"
            v-slot="{ selected }"
            as="template"
          >
            <button
              :class="[
                selected
                  ? 'border-b-2 border-solid border-b-primary-900 text-primary-900 focus:outline-none'
                  : 'text-black',
              ]"
            >
              Publish
            </button>
          </Tab>
          <Tab
            class="w-1/3 h-full text-base text-center leading-[19px]"
            v-slot="{ selected }"
            as="template"
          >
            <button
              :class="[
                selected
                  ? 'border-b-2 border-solid border-b-primary-900 text-primary-900 focus:outline-none'
                  : 'text-black',
              ]"
            >
              Hidden
            </button>
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel class="grid grid-cols-2 gap-4">
            <div
              v-if="products.length == 0"
              class="
                col-span-2
                text-center text-xl
                leading-6
                font-medium
                text-neutral-500
              "
            >
              No match found
            </div>
            <ProductCard
              v-for="product in products"
              :key="product.id"
              :product="product"
            />
          </TabPanel>
          <TabPanel class="grid grid-cols-2 gap-4">
            <span
              v-if="productActive.length == 0"
              class="
                col-span-2
                text-center text-xl
                leading-6
                font-medium
                text-neutral-500
                w-full
              "
            >
              No match found
            </span>
            <ProductCard
              v-for="product in productActive"
              :key="product.id"
              :product="product"
            />
          </TabPanel>
          <TabPanel class="grid grid-cols-2 gap-4">
            <span
              v-if="productHidden.length == 0"
              class="
                col-span-2
                text-center text-xl
                leading-6
                font-medium
                text-neutral-500
                w-full
              "
            >
              No match found
            </span>
            <ProductCard
              v-for="product in productHidden"
              :key="product.id"
              :product="product"
            />
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  </MobileLayout>
</template>

<script>
import { showAlert } from "@/hooks/sweet-alert/sweet-alert.js";
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";
import { categoryItems } from "@/components/category/category-items.js";
import ProductService from "@/services/product/product-service";
import ShopService from "@/services/shop/shop-service";
import MobileLayout from "@/components/layout/mobile-app-layout.vue";
import Category from "@/components/category/category.vue";
import ProductCard from "@/components/card/product-card.vue";
import PrimaryButton from "@/components/button/primary-button.vue";
import AddWhiteIcon from "@/assets/icons/add-white.svg?inline";

export default {
  name: "SellerHomePage",
  components: {
    MobileLayout,
    Category,
    TabGroup,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
    ProductCard,
    PrimaryButton,
    AddWhiteIcon,
  },
  data() {
    return {
      category: "",
      productName: "",
      productStatus: "",
      products: [],
      productActive: [],
      productHidden: [],
      categoryItems,
    };
  },
  async created() {
    let id = 2;
    await ShopService.getRegisterShop(id).then(async (res) => {
      if (res.data.data.getRegisterShop.shopStatus == "Disable") {
        showAlert(
          "error",
          "This shop is not approved",
          "Please wait for admin approve this shop."
        ).then((res) => {
          if (res.isConfirmed) {
            this.$router.push({ name: "BuyerHomePage" });
          }
        });
      } else {
        await ProductService.getAllProduct(id).then((res) => {
          console.log(res.data.data);
          this.products = res.data.data.getAllProduct;
          let content = res.data.data.getAllProduct;
          for (let index = 0; index < content.length; index++) {
            if (content[index].productStatus == "ACTIVE") {
              this.productActive.push(content[index]);
            } else if (content[index].productStatus == "HIDDEN") {
              this.productHidden.push(content[index]);
            }
          }
        });
      }
    });
  },
  methods: {
    goToCategory() {
      console.log();
    },
  },
};
</script>