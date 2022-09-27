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
      <p class="text-[10px] text-neutral-700 leading-3">
        {{ product.saleTypeName }}
      </p>
      <div class="flex" v-if="product.saleTypeName == 'Sale only'">
        <p class="text-sm font-semibold text-primary-900 leading-[14px]">
          ฿{{ Number(product.salePrice).toLocaleString() }}
        </p>
      </div>
      <div
        class="flex justify-between"
        v-if="product.saleTypeName == 'Auction only'"
      >
        <p class="text-sm font-semibold text-primary-900 leading-[14px]">
          ฿{{ Number(product.auction.startingBid).toLocaleString() }}
        </p>
        <!--  <p
          class="text-[10px] text-neutral-500"
          v-if="
            product.saleTypeName == 'Auction only' ||
            product.saleTypeName == 'Auction and Sale'
          "
        >
          {{ toHHMMSS(timerCount) }}
        </p> -->
      </div>
      <div v-if="product.saleTypeName == 'Auction and Sale'">
        <p
          class="
            text-xs
            font-normal
            text-white
            leading-[14px]
            bg-primary-900
            rounded-sm
            px-1
            py-0.5
          "
        >
          Buy Now ฿{{ Number(product.salePrice).toLocaleString() }}
        </p>
        <p class="text-sm font-semibold text-primary-900 leading-[14px]">
          ฿{{ Number(product.auction.startingBid).toLocaleString() }}
        </p>
        <!--  <p
          class="text-[10px] text-neutral-500"
          v-if="
            product.saleTypeName == 'Auction only' ||
            product.saleTypeName == 'Auction and Sale'
          "
        >
          {{ toHHMMSS(timerCount) }}
        </p> -->
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import MoneyIcon from "@/assets/icons/money.svg?inline";
import GavelIcon from "@/assets/icons/money.svg?inline";

export default defineComponent({
  name: "ProductCard",
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
  data() {
    return {
      timerCount: 0,
      timeUnit: 0,
    };
  },
  watch: {
    timerCount: {
      handler(value) {
        if (value > 0) {
          setTimeout(() => {
            this.toHHMMSS(this.timerCount--);
          }, 1000);
        }
      },
      immediate: true,
    },
  },
  created() {
    try {
      if (this.product.auction.timeUnitForAuctionPeriod == "minute") {
        this.timeUnit = 60;
      } else if (this.product.auction.timeUnitForAuctionPeriod == "second") {
        this.timeUnit = 1;
      } else if (this.product.auction.timeUnitForAuctionPeriod == "hour") {
        this.timeUnit = 3600;
      }
      this.timerCount =
        parseInt(this.product.auction.timeUnitForAuctionPeriod) * this.timeUnit;
    } catch (error) {
      this.timerCount = 0;
    }
  },
  methods: {
    toHHMMSS(secs) {
      var sec_num = parseInt(secs, 10);
      var hours = Math.floor(sec_num / 3600);
      var minutes = Math.floor(sec_num / 60) % 60;
      var seconds = sec_num % 60;

      return [hours, minutes, seconds]
        .map((v) => (v < 10 ? "0" + v : v))
        .filter((v, i) => v !== "00" || i > 0)
        .join(":");
    },
  },
});
</script>
