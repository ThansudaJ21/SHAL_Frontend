<template>
  <nav class="bg-primary-900 rounded-b-[28px]">
    <div
      class="
        hidden
        md:block
        h-16
        w-full
        justify-between
        py-2
        px-8
        md:flex
        items-center
      "
    >
      <div class="flex items-center gap-x-[30px]">
        <p class="text-2xl font-semibold text-white">SHAL</p>

        <router-link
          v-for="item in this.desktopNavbarItems"
          :key="item.title"
          :to="{ name: item.pageName }"
          class="text-lg text-white opacity-60 hover:opacity-80"
          exact-active-class="opacity-100 border-b-2"
        >
          <span class="flex items-center gap-x-2">
            <component :is="item.icon" />
            {{ item.title }}
          </span>
        </router-link>
      </div>
      <div class="md:block flex items-center relative">
        <button
          class="
            max-w-[264px]
            h-9
            text-base text-primary-900
            flex
            items-center
            bg-primary-100
            hover:bg-primary-300
            active:bg-primary-500
            rounded-full
            px-1
            py-[3px]
            gap-x-2.5
          "
          id="user-menu"
          aria-label="User menu"
          aria-haspopup="true"
        >
          <div class="rounded-full">
            <img
              class="w-8 h-8 rounded-full"
              :src="this.$store.getters.getUser.pictureUrl"
              alt="user profile"
            />
          </div>
          <div class="truncate">
            {{ this.$store.getters.getUser.displayName }}
          </div>
          <div><DropdownIcon /></div>
        </button>
        <div
          id="user-menu-dropdown"
          class="
            origin-top-right
            absolute
            right-0
            mt-2
            w-40
            h-[37px]
            rounded-md
          "
        >
          <div
            class="
              py-1
              rounded-[10px]
              text-center
              bg-primary-100
              border-2 border-primary-50
              text-primary-900
              hover:bg-primary-300
              active:bg-primary-500
            "
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="user-menu"
          >
            <div
              @click="logout"
              class="w-full justify-center text-sm font-bold text-shade-black"
            >
              <div class="py-2">Logout</div>
            </div>
            <button
              class="
                w-full
                justify-center
                py-2
                text-sm
                font-bold
                text-shade-black
                hover:bg-neutral-100
              "
              @click="logout"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import liff from "@line/liff";
import { desktopNavbarItems } from "../desktop-navbar/desktop-navbar-items.js";
import DashboardIcon from "@/assets/icons/dashboard.svg?inline";
import ShopManagementIcon from "@/assets/icons/shop-solid.svg?inline";
import DropdownIcon from "@/assets/icons/chevron-down.svg?inline";

export default {
  name: "DesktopNavbar",
  components: { DashboardIcon, ShopManagementIcon, DropdownIcon },
  data() {
    return {
      desktopNavbarItems,
    };
  },
  methods: {
    logout() {
      liff.logout();
      window.location.reload();
    },
  },
};
</script>

<style scoped>
#user-menu ~ #user-menu-dropdown {
  --transform-translate-x: 0;
  --transform-translate-y: 0;
  --transform-rotate: 0;
  --transform-skew-x: 0;
  --transform-skew-y: 0;
  --transform-scale-x: 1;
  --transform-scale-y: 1;
  transform: translateX(var(--transform-translate-x))
    translateY(var(--transform-translate-y)) rotate(var(--transform-rotate))
    skewX(var(--transform-skew-x)) skewY(var(--transform-skew-y))
    scaleX(var(--transform-scale-x)) scaleY(var(--transform-scale-y));
  transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
  transition-duration: 75ms;
  opacity: 0;
  --transform-scale-x: 0;
  --transform-scale-y: 0;
}

#user-menu ~ #user-menu-dropdown:focus-within,
#user-menu:focus ~ #user-menu-dropdown {
  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
  transition-duration: 100ms;
  opacity: 1;
  --transform-scale-x: 1;
  --transform-scale-y: 1;
}
</style>