<template>
  <div
    class="
      h-[246px]
      w-40
      rounded-[20px]
      bg-white
      hover:border-[#94c5fc] hover:rounded-[20px]
      active:border-[#3b82f5] active:rounded-[20px]
    "
    @click="click"
  >
    <img
      :src="product.imagesPath[0]"
      :alt="name"
      class="h-40 w-40 rounded-t-[20px] object-cover"
    />

    <div class="flex flex-col h-[86px] px-4 py-2 space-y-1.5">
      <p class="text-xs text-black leading-[14px] truncate">
        {{ product.productName }}
      </p>
      <div
        class="flex"
        v-if="
          product.saleTypeName == 'Sale only' ||
          product.saleTypeName == 'Auction and Sale'
        "
      >
        <p class="text-sm font-semibold text-primary-900 leading-[14px]">
          ฿{{ Number(product.salePrice).toLocaleString() }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import MoneyIcon from "@/assets/icons/money.svg?inline";
import GavelIcon from "@/assets/icons/money.svg?inline";

export default defineComponent({
  name: "SalesHistoryCard",
  components: {
    MoneyIcon,
    GavelIcon,
  },
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
