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
      <p class="text-xs text-black leading-[14px] truncate">
        {{ product.productName }}
      </p>
      <p class="text-[10px] text-neutral-700 leading-3">
        {{ product.saleTypeName }}
      </p>
      <div class="flex justify-between">
        <p class="text-xs font-semibold text-primary-900 leading-[14px]">
          ฿{{ product.salePrice }}
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
    console.log(this.product);
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
