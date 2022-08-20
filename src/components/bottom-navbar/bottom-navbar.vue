<template>
  <div
    class="
      md:hidden
      w-full
      h-12
      px-4
      flex
      items-center
      fixed
      inset-x-0
      bottom-0
      bg-primary-900
    "
  >
    <!-- <div v-if="isBuyer"> -->
    <div
      class="flex justify-center gap-x-16 w-full text-center"
      v-if="$route.name == 'HomePage' || $route.name == 'BuyerProfilePage'"
    >
      <BottomNavbarItems routeName="HomePage">
        <HomeInactiveIcon v-if="$route.name != 'HomePage'" />
        <div v-else>
          <HomeActiveIcon class="inline-block" />
          <span class="block">Home</span>
        </div>
      </BottomNavbarItems>
      <BottomNavbarItems :click="maintain">
        <CartInactiveIcon class="!opacity-60" />
        <!--         <CartInactiveIcon v-if="$route.name != ''" />
        <div v-else>
          <CartActiveIcon class="inline-block" />
          <span class="block">My Cart</span>
        </div> -->
      </BottomNavbarItems>
      <BottomNavbarItems routeName="BuyerProfilePage">
        <UserInactiveIcon v-if="$route.name != 'BuyerProfilePage'" />
        <div v-else>
          <UserActiveIcon class="inline-block" />
          <span class="block">Profile</span>
        </div>
      </BottomNavbarItems>
    </div>

    <!-- <div v-if="isSeller"> -->
    <!--     <div
      class="flex justify-center gap-x-16 w-full text-center"
      v-if="
        $route.name == 'SellerShopPage' ||
        $route.name == 'OrdersPage' ||
        $route.name == 'SellerProfilePage'
      "
    > -->
    <div
      class="flex justify-center gap-x-16 w-full text-center"
      v-if="
        $route.name == 'SellerShopPage' || $route.name == 'SellerProfilePage'
      "
    >
      <BottomNavbarItems routeName="SellerShopPage">
        <HomeInactiveIcon v-if="$route.name != 'SellerShopPage'" />
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
      <BottomNavbarItems :click="maintain">
        <TruckInactiveIcon class="!opacity-60" />
        <!--         <CartInactiveIcon v-if="$route.name != ''" />
        <div v-else>
          <CartActiveIcon class="inline-block" />
          <span class="block">My Cart</span>
        </div> -->
      </BottomNavbarItems>
      <BottomNavbarItems routeName="SellerProfilePage">
        <UserInactiveIcon v-if="$route.name != 'SellerProfilePage'" />
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
  },
  methods: {
    maintain() {
      showAlert("error", "Maintenance", "");
    },
  },
};
</script>