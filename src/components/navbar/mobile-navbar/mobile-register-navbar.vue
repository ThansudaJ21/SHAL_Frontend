<template>
  <nav class="bg-primary-900 rounded-b-[28px]">
    <div
      class="
        md:hidden
        w-full
        h-[331px]
        bg-[url('@/assets/register-navbar-bg.jpg')]
        px-4
        py-8
        rounded-b-[28px]
        bg-cover
      "
    >
      <div class="w-full min-h-full grid items-center">
        <div>
          <p class="text-[28px] leading-[34px] font-semibold text-white mb-4">
            SHAL
          </p>
          <div>
            <p class="text-[40px] leading-[48px] font-semibold text-white">
              Welcome,
            </p>
            <p class="text-[40px] leading-[48px] font-semibold text-white">
              {{ displayName }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "MobileRegisterNavbar",
  props: {
    displayName: {
      type: String,
      required: true,
    },
  },
};
</script>