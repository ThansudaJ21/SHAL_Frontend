<template>
  <UploadImageGridLayout v-if="fields.length">
    <div
      class="relative shrink flex gap-x-4"
      :class="[
        fullbox
          ? 'w-full h-[128px] object-contain'
          : fixbox
          ? 'h-[72px] object-cover'
          : '',
      ]"
    >
      <img
        class="rounded-2xl border-[1px] border-solid border-primary-900"
        :class="[
          fullbox
            ? 'w-full h-[128px] object-contain'
            : fixbox
            ? 'w-[72px] h-[72px] object-cover'
            : '',
        ]"
        v-for="(image, idx) in fields"
        :key="idx"
        :src="image.value.preview"
      />
      <div class="absolute top-2 right-2">
        <button @click="remove(idx)" class="hover:pointer-cursor">
          <TrashIcon :key="idx" />
        </button>
      </div>
    </div>

    <div
      class="
        flex
        items-center
        justify-center
        rounded-2xl
        border-[1px] border-solid border-primary-900
        bg-neutral-50
        p-4
      "
      :class="[
        fullbox ? 'w-full h-[128px]' : fixbox ? 'w-[72px] h-[72px]' : '',
      ]"
      v-if="fields.length < max"
    >
      <div class="absolute items-center">
        <ImageUploadIcon />
        <p class="text-[8px] text-primary-900 text-center">{{ label }}</p>
      </div>
      <FieldArray :name="name" key-path="id">
        <input
          type="file"
          class="h-full w-full cursor-pointer opacity-0"
          accept="image/jpeg, image/png"
          @change="onChange"
        />
      </FieldArray>
    </div>
  </UploadImageGridLayout>

  <div
    class="
      flex
      items-center
      justify-center
      rounded-2xl
      border-[1px] border-solid border-primary-900
      bg-neutral-50
      p-4
    "
    :class="[fullbox ? 'w-full h-[128px]' : fixbox ? 'w-[72px] h-[72px]' : '']"
    v-if="!fields.length"
  >
    <div class="absolute items-center">
      <ImageUploadIcon />
      <p class="text-[8px] text-primary-900 text-center">{{ label }}</p>
    </div>
    <input
      type="file"
      class="h-full w-full cursor-pointer opacity-0"
      accept="image/jpeg, image/png"
      @change="onChange"
    />
  </div>
</template>

<script>
import { FieldArray, useFieldArray } from "vee-validate";
import { showAlert } from "@/hooks/sweet-alert/sweet-alert";
import UploadImageGridLayout from "./upload-image-grid-layout.vue";
import ImageUploadIcon from "@/assets/icons/image-uploader.svg?inline";
import TrashIcon from "@/assets/icons/trash-solid.svg?inline";

export default {
  name: "UploadImage",
  components: { ImageUploadIcon, TrashIcon, FieldArray, UploadImageGridLayout },
  props: {
    name: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: false,
    },
    fullbox: {
      type: Boolean,
      required: true,
    },
    fixbox: {
      type: Boolean,
      required: true,
    },
    max: {
      type: Number,
      required: false,
    },
  },
  data() {
    const { fields, push, remove } = useFieldArray(this.name);
    return {
      fields,
      push,
      remove,
    };
  },
  methods: {
    onChange(e) {
      const file = e.target.files[0];
      if (!["image/jpeg", "image/jpg", "image/png"].includes(file.type)) {
        showAlert(
          "error",
          "Sorry, the format of the file is invalid",
          "Format of file must be JPEG JPG PNG"
        );
      } else {
        this.push({
          value: e.target.files[0],
          preview: URL.createObjectURL(e.target.files[0]),
        });
      }
    },
  },
};
</script>
