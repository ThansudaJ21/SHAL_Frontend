<template>
  <div>
    <div class="m-auto flex max-w-md flex-col gap-4">
      <h1 class="mt-10 mb-8 text-2xl font-semibold text-primary-900 uppercase">
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
      <div class="flex flex-wrap gap-4">
        <PrimaryButton><AddWhiteIcon />Primary</PrimaryButton>
        <SecondaryButton><UserOutlinedBlueIcon />Secondary</SecondaryButton>
        <OutlinedButton variant="default"><PencilIcon />Outlined</OutlinedButton>
        <DashedButton variant="default"><AddBlueIcon />Dashed</DashedButton>
        <OutlinedButton variant="error"><TrashOutlinedIcon />Outlined</OutlinedButton>
        <DashedButton variant="error"><TrashSolidIcon />Dashed</DashedButton>
      </div>
    </div>
  </div>
</template>

<script>
import PrimaryButton from "@/components/button/primary-button.vue";
import SecondaryButton from "@/components/button/secondary-button.vue";
import OutlinedButton from "@/components/button/outlined-button.vue";
import DashedButton from "@/components/button/dashed-button.vue";
import AddWhiteIcon from "@/assets/icons/add-white.svg?inline";
import AddBlueIcon from "@/assets/icons/add-blue.svg?inline";
import UserOutlinedBlueIcon from "@/assets/icons/user-outlined-blue.svg?inline";
import PencilIcon from "@/assets/icons/pencil-alt.svg?inline";
import TrashOutlinedIcon from "@/assets/icons/trash-outlined.svg?inline";
import TrashSolidIcon from "@/assets/icons/trash-solid.svg?inline";

export default {
  name: "ShowCase",
  components: {
    PrimaryButton,
    SecondaryButton,
    OutlinedButton,
    DashedButton,
    AddWhiteIcon,
    AddBlueIcon,
    UserOutlinedBlueIcon,
    PencilIcon,
    TrashOutlinedIcon,
    TrashSolidIcon
  },
};
</script>
