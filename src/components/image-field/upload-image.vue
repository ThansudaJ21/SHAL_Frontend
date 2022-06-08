<template>
  <UploadImageGridLayout>
    <img
      class="h-[128px] w-[128px] rounded-2xl border-[1px] object-cover"
      v-for="(image, idx) in fields"
      :key="idx"
      :src="image.value.preview"
      @click="remove(idx)"
    />
    <div
      class="
        flex
        h-[72px]
        w-[72px]
        items-center
        justify-center
        rounded-2xl
        border-[1px] border-solid border-primary-900
        bg-neutral-50
      "
    >
      <div class="absolute">
        <ImageUploadIcon />
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
</template>

<script>
import ImageUploadIcon from "@/assets/icons/image-uploader.svg?inline";
import { FieldArray, useFieldArray } from "vee-validate";
import UploadImageGridLayout from "./upload-image-grid-layout.vue";

export default {
  name: "UploadImage",
  components: { ImageUploadIcon, FieldArray, UploadImageGridLayout },
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  data() {
    const { fields, push, remove } = useFieldArray(this.name);
    return {
      fields,
      push,
      remove,
      images: [],
    };
  },
  methods: {
    onChange(e) {
      this.push({
        value: e.target.files[0],
        preview: URL.createObjectURL(e.target.files[0]),
      });
    },
  },
};
</script>
