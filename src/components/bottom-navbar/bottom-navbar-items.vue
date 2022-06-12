<template>
  <router-link
    :to="{ name: routeName }"
    class="text-xs text-white opacity-60"
    exact-active-class="opacity-100"
  >
    <span class="flex justify-center items-center w-[45px] h-full" @click="click">
      <slot></slot>
    </span>
  </router-link>
</template>

<script>
export default {
  name: "BottomNavbarItems",
  props: {
    routeName: {
      type: String,
      required: true,
    },
    click: {
      type: Function,
      required: false,
    },
  },
};
</script>