<template>
  <nav class="bg-primary-900 rounded-b-[28px]">
    <div class="md:hidden h-fit justify-between p-4 items-center">
      <div class="w-full flex justify-between">
        <div class="flex items-center w-6"></div>
        <div class="flex items-center h-[32px]">
          <p class="text-base font-semibold text-white">SHAL</p>
        </div>
        <div class="flex items-center w-8"></div>
      </div>
      <div class="w-full flex justify-between mt-4 gap-x-2">
        <div class="flex items-center relative gap-x-2">
          <img
            class="w-12 h-12 rounded-full object-fill"
            src="@/assets/no-image-available.png"
            alt="user profile"
          />

          <div class="text-base font-semibold text-white truncate">
            {{ displayName }}
          </div>
        </div>
        <div class="flex items-center relative">
          <SecondaryButton :click="click">
            <div class="flex gap-1 flex items-center"><slot /></div>
          </SecondaryButton>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import SecondaryButton from "@/components/button/secondary-button.vue";

export default {
  name: "MobileProfileNavbar",
  components: {
    SecondaryButton,
  },
  props: {
    click: {
      type: Function,
      required: true,
    },
    displayName: {
      type: String,
      required: true,
    },
  },
};
</script>