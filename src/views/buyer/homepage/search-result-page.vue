<template>
  <MobileLayout :image="this.picture" :displayName="this.name">
    <div class="space-y-6 px-4">
      <TabGroup>
        <TabList class="flex space-x-12 w-full h-[30px] bg-white rounded-t-lg">
          <Tab
            class="w-1/4 h-full text-base text-center leading-[19px]"
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
            class="w-1/4 h-full text-base text-center leading-[19px]"
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
              Sale & Auction
            </button>
          </Tab>
          <Tab
            class="w-1/4 h-full text-base text-center leading-[19px]"
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
              Sale
            </button>
          </Tab>
          <Tab
            class="w-1/4 h-full text-base text-center leading-[19px]"
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
              Auction
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
              :click="() => goToProductDetail(product.id)"
            />
          </TabPanel>
          <TabPanel class="grid grid-cols-2 gap-4">
            <span
              v-if="productSaleAndAuction.length == 0"
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
              v-for="product in productSaleAndAuction"
              :key="product.id"
              :product="product"
              :click="() => goToProductDetail(product.id)"
            />
          </TabPanel>
          <TabPanel class="grid grid-cols-2 gap-4">
            <span
              v-if="productSale.length == 0"
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
              v-for="product in productSale"
              :key="product.id"
              :product="product"
              :click="() => goToProductDetail(product.id)"
            />
          </TabPanel>
          <TabPanel class="grid grid-cols-2 gap-4">
            <span
              v-if="productAuction.length == 0"
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
              v-for="product in productAuction"
              :key="product.id"
              :product="product"
              :click="() => goToProductDetail(product.id)"
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
import ProductCard from "@/components/card/product-card.vue";
import PrimaryButton from "@/components/button/primary-button.vue";
import AddWhiteIcon from "@/assets/icons/add-white.svg?inline";
import AuthServices from "@/services/auth/auth-service";
import MobileLayout from "@/components/layout/mobile-app-layout.vue";
import Category from "@/components/category/category.vue";

export default {
  name: "SearchResultPage",
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
      userId: "",
      picture: "",
      name: "",
      category: "",
      productName: "",
      productStatus: "",
      products: [],
      productSaleAndAuction: [],
      productSale: [],
      productAuction: [],
      categoryItems,
    };
  },
  methods: {
    goToProductDetail(productID) {
      this.$router.push({
        name: "ProductDetailsPageForBuyer",
        params: { id: productID },
      });
    },
  },
  created() {
    ProductService.productFilter(
      {
        category: "",
        productName: this.$route.params.keyWord,
        productStatus: "",
        saleTypeName: "",
      },
      0,
      999
    ).then((response) => {
      let content = response.data.data.productFilter.content;
      console.log(content);
      for (let index = 0; index < content.length; index++) {
        if (content[index].productStatus == "ACTIVE") {
          this.products.push(content[index]);
        }
      }
      for (let index = 0; index < content.length; index++) {
        if (content[index].saleTypeName == "Auction and Sale") {
          this.productSaleAndAuction.push(content[index]);
        } else if (content[index].saleTypeName == "Sale only") {
          this.productSale.push(content[index]);
        } else if (content[index].saleTypeName == "Auction only") {
          this.productAuction.push(content[index]);
        } 
      }
    });
  },
};
</script>