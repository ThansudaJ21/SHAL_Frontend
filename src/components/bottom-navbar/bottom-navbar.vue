<template>
  <div
    class="
      md:hidden
      w-full
      h-14
      px-4
      py-2
      flex
      items-center
      fixed
      inset-x-0
      bottom-0
      bg-primary-900
    "
  >
    <div
      class="flex justify-center gap-x-16 w-full text-center"
      v-if="buyerPages"
    >
      <BottomNavbarItems routeName="HomePage">
        <HomeInactiveIcon v-if="$route.name != 'HomePage'" />
        <div v-else>
          <HomeActiveIcon class="inline-block" />
          <span class="block">Home</span>
        </div>
      </BottomNavbarItems>
      <BottomNavbarItems routeName="MyCartPage">
        <CartInactiveIcon v-if="$route.name != 'MyCartPage'" />
        <div v-else>
          <CartActiveIcon class="inline-block" />
          <span class="block">My Cart</span>
        </div>
      </BottomNavbarItems>
      <BottomNavbarItems routeName="BuyerProfilePage">
        <UserInactiveIcon v-if="$route.name != 'BuyerProfilePage'" />
        <div v-else>
          <UserActiveIcon class="inline-block" />
          <span class="block">Profile</span>
        </div>
      </BottomNavbarItems>
    </div>

    <div
      class="flex justify-center gap-x-16 w-full text-center"
      v-if="sellerPages"
    >
      <BottomNavbarItems routeName="MyShopPage">
        <HomeInactiveIcon v-if="$route.name != 'MyShopPage'" />
        <div v-else>
          <HomeActiveIcon class="inline-block" />
          <span class="block">Home</span>
        </div>
      </BottomNavbarItems>
      <!--       <BottomNavbarItems routeName="OrdersPage">
        <TruckInactiveIcon v-if="$route.name != 'OrdersPage'" />
        <div v-else>
          <TruckActiveIcon class="inline-block" />
          <span class="block">Orders</span>
        </div>
      </BottomNavbarItems> -->
      <BottomNavbarItems :click="() => maintain()">
        <TruckInactiveIcon class="!opacity-60" />
        <!--         <CartInactiveIcon v-if="$route.name != ''" />
        <div v-else>
          <CartActiveIcon class="inline-block" />
          <span class="block">My Cart</span>
        </div> -->
      </BottomNavbarItems>
      <BottomNavbarItems routeName="MyShopProfilePage">
        <UserInactiveIcon v-if="$route.name != 'MyShopProfilePage'" />
        <div v-else>
          <UserActiveIcon class="inline-block" />
          <span class="block">Profile</span>
        </div>
      </BottomNavbarItems>
    </div>
  </div>
</template>

<script>
import { showAlert } from "@/hooks/sweet-alert/sweet-alert.js";
import BottomNavbarItems from "@/components/bottom-navbar/bottom-navbar-items.vue";
import HomeInactiveIcon from "@/assets/icons/home-outlined.svg?inline";
import HomeActiveIcon from "@/assets/icons/home-solid.svg?inline";
import CartInactiveIcon from "@/assets/icons/cart-outlined.svg?inline";
import CartActiveIcon from "@/assets/icons/cart-solid.svg?inline";
import TruckInactiveIcon from "@/assets/icons/truck-outlined.svg?inline";
import TruckActiveIcon from "@/assets/icons/truck-solid.svg?inline";
import UserInactiveIcon from "@/assets/icons/user-outlined-white.svg?inline";
import UserActiveIcon from "@/assets/icons/user-solid-white.svg?inline";
import PrimaryButton from "../button/primary-button.vue";

export default {
  name: "BottomNavbar",
  components: {
    BottomNavbarItems,
    HomeInactiveIcon,
    HomeActiveIcon,
    CartInactiveIcon,
    CartActiveIcon,
    TruckInactiveIcon,
    TruckActiveIcon,
    UserInactiveIcon,
    UserActiveIcon,
    PrimaryButton,
  },
  data() {
    return {
      buyerPages: ["HomePage", "BuyerProfilePage"],
      sellerPages: ["MyShopPage", "MyShopProfilePage"],
    };
  },
  computed: {
    buyerPages() {
      if (this.buyerPages.includes(this.$route.name)) {
        return true;
      } else {
        return false;
      }
    },
    sellerPages() {
      if (this.sellerPages.includes(this.$route.name)) {
        return true;
      } else {
        return false;
      }
    },
  },
  methods: {
    maintain() {
      showAlert("error", "Maintenance", "");
    },
  },
};
</script>