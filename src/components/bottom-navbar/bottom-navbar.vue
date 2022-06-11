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
    <div class="flex justify-center gap-x-16 w-full text-center">
      <BottomNavbarItems routeName="BuyerHomePage">
        <HomeInactiveIcon v-if="$route.name != 'BuyerHomePage'" />
        <div v-else>
          <HomeActiveIcon class="inline-block" />
          <span class="block">Home</span>
        </div>
      </BottomNavbarItems>
      <BottomNavbarItems routeName="Showcase">
        <CartInactiveIcon v-if="$route.name != 'Showcase'" />
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
    <!--    </div>
 
    <div v-if="isSeller">
      <div class="flex justify-center gap-x-16 w-full text-center">
        <BottomNavbarItems routeName="home">
          <HomeInactiveIcon v-if="$route.name != 'home'" />
          <div v-else>
            <HomeActiveIcon class="inline-block" />
            <span class="block">Home</span>
          </div>
        </BottomNavbarItems>
        <BottomNavbarItems routeName="showcase">
          <TruckInactiveIcon v-if="$route.name != 'showcase'" />
          <div v-else>
            <TruckActiveIcon class="inline-block" />
            <span class="block">Delivery</span>
          </div>
        </BottomNavbarItems>
        <BottomNavbarItems routeName="home">
          <UserInactiveIcon v-if="$route.name != 'home'" />
          <div v-else>
            <UserActiveIcon class="inline-block" />
            <span class="block">Profile</span>
          </div>
        </BottomNavbarItems>
      </div>
    </div>
 -->
  </div>
</template>

<script>
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
  /*   props: {
    type: {
      type: String,
      default: "button",
      validator: (prop) => ["button", "submit", "reset"].includes(prop),
      required: false,
    },
    click: {
      type: Function,
      required: false,
    },
  }, */
};
</script>