<template>
  <nav class="bg-primary-900 rounded-b-[28px]">
    <div class="md:hidden h-fit justify-between p-4 items-center space-y-4">
      <div class="w-full flex justify-between">
        <div class="flex items-center" v-if="!exceptPage">
          <a @click="$router.go(-1)">
            <BackIcon />
          </a>
        </div>
        <div
          class="flex items-center w-6"
          v-if="exceptPage"
        ></div>
        <div class="flex items-center">
          <p class="text-base font-semibold text-white">
            {{ title }}
          </p>
        </div>
        <div class="flex items-center relative">
          <div class="rounded-full">
            <img
              class="w-8 h-8 rounded-full"
              src="@/assets/logo.png"
              alt="user profile"
            />
          </div>
        </div>
      </div>
      <div class="w-full flex items-center" v-if="showPage">
        <IconTextField
          type="text"
          class="w-full"
          name="product name"
          placeholder="What are you looking for?"
          :showError="false"
        />
      </div>
    </div>
  </nav>
</template>

<script>
import IconTextField from "@/components/field/icon-text-field/icon-text-field.vue";
import BackIcon from "@/assets/icons/chevron-left.svg?inline";

export default {
  name: "MobileNavbar",
  components: {
    IconTextField,
    BackIcon,
  },
  props: {
    title: {
      type: String,
      required: false,
      default: "SHAL",
    },
  },
  data() {
    return {
      page: ["buyer_homepage"],
    };
  },
  computed: {
    exceptPage() {
      if (this.page.includes(this.$route.name)) {
        return false;
      } else {
        return true;
      }
    },
    showPage() {
      if (this.page.includes(this.$route.name)) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>