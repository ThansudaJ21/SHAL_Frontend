<template>
  <DesktopLayout>
    <p class="text-black font-semibold text-[32px] leading-10">Dashboard</p>
    <div class="space-y-6 pb-6">
      <p class="text-black font-medium text-xl leading-6">Users Overall</p>
      <DashboardCard title="Total users" amount="0">
        <UserIcon />
      </DashboardCard>
    </div>
    <div class="space-y-6 pb-6">
      <p class="text-black font-medium text-xl leading-6">Shops Overall</p>
      <DashboardCard title="Total shops" :amount="totalElements">
        <ShopIcon />
      </DashboardCard>
      <div class="flex gap-6">
        <DashboardCard title="Total shops enabled" :amount="shopEnabled.length">
          <ShopEnabledIcon />
        </DashboardCard>
        <DashboardCard
          title="Total shops disabled"
          :amount="shopDisabled.length"
        >
          <ShopDisabledIcon />
        </DashboardCard>
      </div>
    </div>
  </DesktopLayout>
</template>

<script>
import ShopService from "@/services/shop/shop-service";
import DesktopLayout from "@/components/layout/desktop-app-layout.vue";
import DashboardCard from "@/components/card/dashboard-card.vue";
import UserIcon from "@/assets/icons/user-outlined-blue.svg?inline";
import ShopIcon from "@/assets/icons/shop-total.svg?inline";
import ShopEnabledIcon from "@/assets/icons/shop-enabled.svg?inline";
import ShopDisabledIcon from "@/assets/icons/shop-disabled.svg?inline";

export default {
  name: "DashboardPage",
  components: {
    DesktopLayout,
    DashboardCard,
    UserIcon,
    ShopIcon,
    ShopEnabledIcon,
    ShopDisabledIcon,
  },
  data() {
    return {
      shops: null,
      totalElements: 0,
      shopEnabled: [],
      shopDisabled: [],
    };
  },
  async created() {
    let queryText = {
      shopName: "",
      shopStatus: "",
    };
    await ShopService.shopQueryFilter(queryText, 0, 999).then(async (res) => {
      this.shops = await res.data.data.shopQueryFilter;
      this.totalElements = await res.data.data.shopQueryFilter.totalElements
      console.log(await res.data.data.shopQueryFilter);
      let content = res.data.data.shopQueryFilter.content;
      for (let index = 0; index < content.length; index++) {
        if (content[index].shopStatus == "Enable") {
          this.shopEnabled.push(content);
        } else if (content[index].shopStatus == "Disable") {
          this.shopDisabled.push(content);
        }
      }
    });
  },
};
</script>