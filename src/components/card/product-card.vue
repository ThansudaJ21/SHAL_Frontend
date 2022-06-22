<template>
  <div
    class="
      h-[216px]
      w-[164px]
      rounded-[20px]
      bg-white
      outline outline-1 outline-[#dbeafe] outline-offset-0
      hover:outline-[#94c5fc]
      active:outline-[#3b82f5]
    "
    @click="click"
  >
    <img
      :src="product.imagesPath[0]"
      :alt="name"
      class="h-[148px] w-full rounded-t-[20px] object-cover"
    />

    <div class="flex flex-col h-[68px] px-4 py-2 space-y-1.5">
      <p class="text-xs text-black leading-[14px] truncate">{{product.productName}}</p>
      <p class="text-[10px] text-neutral-700 leading-3">{{product.saleTypeName}}</p>
      <p class="text-xs font-semibold text-primary-900 leading-[14px]">฿{{product.salePrice}}</p>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ProductCard",
  props: {
    product: {
      type: String,
      required: true,
    },
    click: {
      type: Function,
      required: false,
    },
  },
});
</script>
