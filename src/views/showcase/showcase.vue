<template>
  <div>
    <div class="mx-auto flex max-w-md flex-col gap-4">
      <h1 class="mt-10 mb-8 text-2xl font-bold text-primary-900 uppercase">
        Show Case
      </h1>

      <p>Button</p>
      <div class="flex flex-wrap gap-4">
        <PrimaryButton>Primary</PrimaryButton>
        <SecondaryButton>Secondary</SecondaryButton>
        <OutlinedButton variant="default">Outlined</OutlinedButton>
        <DashedButton variant="default">Dashed</DashedButton>
        <OutlinedButton variant="error">Outlined</OutlinedButton>
        <DashedButton variant="error">Dashed</DashedButton>
      </div>

      <p>Button with icon</p>
    </div>
  </div>
</template>

<script>
import PrimaryButton from "@/components/button/primary-button.vue";
import SecondaryButton from "@/components/button/secondary-button.vue";
import OutlinedButton from "@/components/button/outlined-button.vue";
import DashedButton from "@/components/button/dashed-button.vue";

export default {
  name: "ShowCase",
  components: {
    PrimaryButton,
    SecondaryButton,
    OutlinedButton,
    DashedButton,
  },
};
</script>
