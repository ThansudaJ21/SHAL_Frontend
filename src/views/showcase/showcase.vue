<template>
  <div class="showcase">
    <div class="m-auto flex flex-col gap-4 px-4">
      <h1 class="mt-10 mb-8 text-2xl font-semibold text-primary-900 uppercase">
        Show Case
      </h1>

      <p>Category</p>
      <Category />

      <p>Product Card</p>
      <ProductCard :name="test" />

      <!--       <p>Dashboard Card</p>
      <DashboardCard title="Total users" amount="12,345">
        <UserOutlinedIcon />
      </DashboardCard> -->

      <p>Toggle</p>
      <Toggle />

      <p>Image Upload Field</p>
      <UploadImage name="images" :fullbox="true" />
      <UploadImage name="images" :fixbox="true" />

      <p>Textfield</p>
      <TextField
        type="text"
        name="personalID"
        placeholder="X-XXXX-XXXXX-XX-X"
        label="ID Card Number"
        :mask="'#-####-#####-##-#'"
        required
      />

      <p>Textfield with icon</p>
      <IconTextField
        type="text"
        name="product name"
        placeholder="What are you looking for?"
      />

      <p>Textarea</p>
      <TextArea name="material" placeholder="Material" label="Material" />

      <p>Dropdown</p>
      <Dropdown
        label="Category"
        name="categoryName"
        placeholder="Category"
        :options="categoryName"
        required
      />

      <p>Pagination</p>
      <Pagination />

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
        <OutlinedButton variant="default">
          <PencilIcon />
          Outlined
        </OutlinedButton>
        <DashedButton variant="default"><AddBlueIcon />Dashed</DashedButton>
        <OutlinedButton variant="error">
          <TrashOutlinedIcon />
          Outlined
        </OutlinedButton>
        <DashedButton variant="error"><TrashSolidIcon />Dashed</DashedButton>
        <TextButton variant="error"><TrashSolidIcon /></TextButton>
      </div>
    </div>
  </div>
  <!-- <BottomNavbar /> -->
</template>

<script>
import Category from "@/components/category/category.vue";
import ProductCard from "@/components/card/product-card.vue";
import DashboardCard from "@/components/card/dashboard-card.vue";
import Toggle from "@/components/toggle/toggle.vue";
import UploadImage from "@/components/image-field/upload-image.vue";
import TextField from "@/components/field/text-field/text-field.vue";
import TextArea from "@/components/field/text-area/text-area.vue";
import IconTextField from "@/components/field/icon-text-field/icon-text-field.vue";
import Dropdown from "@/components/dropdown/dropdown.vue";
import Pagination from "@/components/pagination/pagination.vue";

import PrimaryButton from "@/components/button/primary-button.vue";
import SecondaryButton from "@/components/button/secondary-button.vue";
import OutlinedButton from "@/components/button/outlined-button.vue";
import DashedButton from "@/components/button/dashed-button.vue";
import TextButton from "@/components/button/text-button.vue";
import AddWhiteIcon from "@/assets/icons/add-white.svg?inline";
import AddBlueIcon from "@/assets/icons/add-blue.svg?inline";
import UserOutlinedBlueIcon from "@/assets/icons/user-outlined-blue.svg?inline";
import PencilIcon from "@/assets/icons/pencil-alt.svg?inline";
import TrashOutlinedIcon from "@/assets/icons/trash-outlined.svg?inline";
import TrashSolidIcon from "@/assets/icons/trash-solid.svg?inline";
import UserOutlinedIcon from "@/assets/icons/user-outlined-blue.svg?inline";

export default {
  name: "Showcase",
  components: {
    Category,
    ProductCard,
    DashboardCard,
    Toggle,
    UploadImage,
    TextField,
    TextArea,
    IconTextField,
    Dropdown,
    Pagination,
    PrimaryButton,
    SecondaryButton,
    OutlinedButton,
    DashedButton,
    TextButton,
    AddWhiteIcon,
    AddBlueIcon,
    UserOutlinedBlueIcon,
    PencilIcon,
    TrashOutlinedIcon,
    TrashSolidIcon,
    UserOutlinedIcon,
  },
};
</script>
