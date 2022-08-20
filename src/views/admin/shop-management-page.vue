<template>
  <DesktopLayout>
    <p class="text-black font-semibold text-[32px] leading-10">
      Shop Management
    </p>
    <Form @change="handleSearchSubmit">
      <IconTextField
        type="text"
        name="shopNameSearch"
        placeholder="What are you looking for?"
        :showError="false"
      />
    </Form>
    <div class="bg-white rounded-[20px] space-y-6 p-4">
      <TabGroup>
        <TabList
          class="
            flex
            space-x-12
            w-full
            h-[51px]
            border-b-[1px] border-solid border-b-neutral-500
          "
        >
          <Tab
            class="w-16 h-full text-base text-center leading-[19px]"
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
            class="w-16 h-full text-base text-center leading-[19px]"
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
              Enabled
            </button>
          </Tab>
          <Tab
            class="w-16 h-full text-base text-center leading-[19px]"
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
              Disabled
            </button>
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <table class="table-fixed w-full h-fit">
              <thead>
                <tr
                  class="
                    w-1/5
                    h-[42px]
                    text-center text-black
                    font-semibold
                    bg-primary-100
                  "
                >
                  <td>No.</td>
                  <td>Name</td>
                  <td>Status</td>
                  <td>Action</td>
                </tr>
              </thead>
              <tbody>
                <tr v-if="shops.length == 0">
                  <td
                    colspan="4"
                    class="
                      text-center text-xl
                      leading-6
                      font-medium
                      text-neutral-500
                    "
                  >
                    No match found
                  </td>
                </tr>
                <tr
                  v-for="(shop, index) in shops"
                  :key="shop"
                  class="
                    w-1/5
                    h-[42px]
                    text-center text-black
                    odd:bg-white
                    even:bg-primary-100
                  "
                >
                  <td class="p-4">{{ index + 1 }}</td>
                  <td class="p-4">{{ shop.shopName }}</td>
                  <td class="p-4">
                    <span
                      class="rounded-[9px] px-4 py-2"
                      :class="[
                        shop.shopStatus == 'Disable'
                          ? 'text-error-600 bg-error-200'
                          : shop.shopStatus == 'Enable'
                          ? 'text-success-600 bg-success-200'
                          : '',
                      ]"
                    >
                      {{ shop.shopStatus }}
                    </span>
                  </td>
                  <td class="p-4">
                    <div class="space-x-4 flex justify-center">
                      <span
                        class="cursor-pointer"
                        @click="
                          () => {
                            this.$router.push({
                              name: 'ShopApprovalPage',
                              params: { id: shop.id },
                            });
                          }
                        "
                      >
                        <PencilIcon />
                      </span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </TabPanel>
          <TabPanel>
            <table class="table-fixed w-full h-fit">
              <thead>
                <tr
                  class="
                    w-1/5
                    h-[42px]
                    text-center text-black
                    font-semibold
                    bg-primary-100
                  "
                >
                  <td>No.</td>
                  <td>Name</td>
                  <td>Status</td>
                  <td>Action</td>
                </tr>
              </thead>
              <tbody>
                <tr v-if="shopEnabled.length == 0">
                  <td
                    colspan="4"
                    class="
                      text-center text-xl
                      leading-6
                      font-medium
                      text-neutral-500
                    "
                  >
                    No match found
                  </td>
                </tr>
                <tr
                  v-for="(shop, index) in shopEnabled"
                  :key="shop"
                  class="
                    w-1/5
                    h-[42px]
                    text-center text-black
                    odd:bg-white
                    even:bg-primary-100
                  "
                >
                  <td class="p-4">{{ index + 1 }}</td>
                  <td class="p-4">{{ shop.shopName }}</td>
                  <td class="p-4">
                    <span
                      class="rounded-[9px] px-4 py-2"
                      :class="[
                        shop.shopStatus == 'Disable'
                          ? 'text-error-600 bg-error-200'
                          : shop.shopStatus == 'Enable'
                          ? 'text-success-600 bg-success-200'
                          : '',
                      ]"
                    >
                      {{ shop.shopStatus }}
                    </span>
                  </td>
                  <td class="p-4">
                    <div class="space-x-4 flex justify-center">
                      <span
                        class="cursor-pointer"
                        @click="
                          () => {
                            this.$router.push({
                              name: 'ShopApprovalPage',
                              params: { id: shop.id },
                            });
                          }
                        "
                      >
                        <PencilIcon />
                      </span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </TabPanel>
          <TabPanel>
            <table class="table-fixed w-full h-fit">
              <thead>
                <tr
                  class="
                    w-1/5
                    h-[42px]
                    text-center text-black
                    font-semibold
                    bg-primary-100
                  "
                >
                  <td>No.</td>
                  <td>Name</td>
                  <td>Status</td>
                  <td>Action</td>
                </tr>
              </thead>
              <tbody>
                <tr v-if="shopDisabled.length == 0">
                  <td
                    colspan="4"
                    class="
                      text-center text-xl
                      leading-6
                      font-medium
                      text-neutral-500
                    "
                  >
                    No match found
                  </td>
                </tr>
                <tr
                  v-for="(shop, index) in shopDisabled"
                  :key="shop"
                  class="
                    w-1/5
                    h-[42px]
                    text-center text-black
                    odd:bg-white
                    even:bg-primary-100
                  "
                >
                  <td class="p-4">{{ index + 1 }}</td>
                  <td class="p-4">{{ shop.shopName }}</td>
                  <td class="p-4">
                    <span
                      class="rounded-[9px] px-4 py-2"
                      :class="[
                        shop.shopStatus == 'Disable'
                          ? 'text-error-600 bg-error-200'
                          : shop.shopStatus == 'Enable'
                          ? 'text-success-600 bg-success-200'
                          : '',
                      ]"
                    >
                      {{ shop.shopStatus }}
                    </span>
                  </td>
                  <td class="p-4">
                    <div class="space-x-4 flex justify-center">
                      <span
                        class="cursor-pointer"
                        @click="
                          () => {
                            this.$router.push({
                              name: 'ShopApprovalPage',
                              params: { id: shop.id },
                            });
                          }
                        "
                      >
                        <PencilIcon />
                      </span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  </DesktopLayout>
</template>

<script>
import ShopService from "@/services/shop/shop-service";
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";
import DesktopLayout from "@/components/layout/desktop-app-layout.vue";
import IconTextField from "@/components/field/icon-text-field/icon-text-field.vue";
import TextButton from "@/components/button/text-button.vue";
import PencilIcon from "@/assets/icons/pencil-alt.svg?inline";
import TrashIcon from "@/assets/icons/trash-solid.svg?inline";

export default {
  name: "ShopManagementPage",
  components: {
    DesktopLayout,
    IconTextField,
    TextButton,
    PencilIcon,
    TrashIcon,
    TabGroup,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
  },
  data() {
    return {
      shopsNameSearch: [],
      search: "",
      shopName: "",
      found: null,
      shops: null,
      shopEnabled: [],
      shopDisabled: [],
    };
  },
  methods: {
    handleSearchSubmit(values) {
      let queryText = {
        shopName: values.target.unmaskedValue,
        shopStatus: "",
      };
      ShopService.shopQueryFilter(queryText, 0, 10).then((res) => {
        this.shops = res.data.data.shopQueryFilter.content;
      });
      let queryTextEnable = {
        shopName: values.target.unmaskedValue,
        shopStatus: "ENABLE",
      };
      ShopService.shopQueryFilter(queryTextEnable, 0, 10).then((res) => {
        this.shopEnabled = res.data.data.shopQueryFilter.content;
      });
      let queryTextDisable = {
        shopName: values.target.unmaskedValue,
        shopStatus: "DISABLE",
      };
      ShopService.shopQueryFilter(queryTextDisable, 0, 10).then((res) => {
        this.shopDisabled = res.data.data.shopQueryFilter.content;
      });
    },
  },
  created() {
    this.shops = JSON.parse(JSON.stringify(this.$store.getters.getShops));
    let content = JSON.parse(JSON.stringify(this.$store.getters.getShops));
    for (let index = 0; index < content.length; index++) {
      if (content[index].shopStatus == "Enable") {
        this.shopEnabled.push(content[index]);
      } else if (content[index].shopStatus == "Disable") {
        this.shopDisabled.push(content[index]);
      }
    }
  },
  mounted() {
    liff
      .init({
        liffId: process.env.VUE_APP_LINELIFF_ADMIN_SHOP_MANAGEMENT,
      })
      .then(() => {
        if (!liff.isLoggedIn()) {
          liff.login();
        } else {
          liff
            .getProfile()
            .then(() => {
              localStorage.setItem("userId", liff.getDecodedIDToken().sub);
              this.name = liff.getDecodedIDToken().name;
              this.userId = liff.getDecodedIDToken().sub;
              this.picture = liff.getDecodedIDToken().picture;
            })
            .catch((err) => console.error(err));
        }
      });
  },
};
</script>