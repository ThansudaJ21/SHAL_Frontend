<template>
  <div class="flex items-center justify-center gap-x-4">
    <button
      @click="() => prevPage()"
      :disabled="pageIndex === 1"
      class="disabled:cursor-not-allowed"
    >
      <ChevronLeftIcon />
    </button>

    <div v-if="totalPage < 5" class="flex gap-x-4">
      <PaginationButton
        v-for="(page, index) in totalPage"
        :key="index"
        :click="() => handlePageChange(page)"
        :currentPage="pageIndex"
        :page="page"
        fillBackground
      />
    </div>

    <div v-if="totalPage >= 5" class="flex gap-x-4">
      <PaginationButton
        :click="() => handlePageChange(1)"
        :currentPage="pageIndex"
        :page="1"
        fillBackground
      />

      <button v-if="pageIndex >= 4" class="h-6 w-6 hover:cursor-default">
        . . .
      </button>

      <div v-if="pageIndex <= 3" class="flex gap-x-4">
        <PaginationButton
          v-for="item in [2, 3, 4, 5]"
          :key="item"
          :click="() => handlePageChange(item)"
          :currentPage="pageIndex"
          :page="item"
          fillBackground
        />
      </div>

      <div v-else-if="pageIndex > totalPage - 3" class="flex gap-x-4">
        <PaginationButton
          v-for="item in [totalPage - 3, totalPage - 2, totalPage - 1]"
          :key="item"
          :click="() => handlePageChange(item)"
          :currentPage="pageIndex"
          :page="item"
          fillBackground
        />
      </div>

      <div v-else class="flex gap-x-4">
        <PaginationButton
          v-for="item in [0, 1, 2]"
          :key="item"
          :click="() => handlePageChange(pageIndex + item - 1)"
          :currentPage="pageIndex"
          :page="pageIndex + item - 1"
          fillBackground
        />
      </div>

      <button
        v-if="pageIndex <= totalPage - 3"
        class="h-6 w-6 hover:cursor-default"
      >
        . . .
      </button>

      <PaginationButton
        :click="() => handlePageChange(totalPage)"
        :currentPage="pageIndex"
        :page="totalPage"
        fillBackground
      />
    </div>

    <button
      @click="() => nextPage()"
      class="disabled:cursor-not-allowed"
      :disabled="pageIndex === totalPage"
    >
      <ChevronLeftIcon class="tranform rotate-180" />
    </button>
  </div>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";
import PaginationButton from "./pagination-button.vue";
import ChevronLeftIcon from "../../assets/icons/chevron-solid-left.svg?inline";

export default defineComponent({
  name: "Pagination",
  components: {
    PaginationButton,
    ChevronLeftIcon,
  },
  props: {
    pageIndex: {
      type: Number,
      required: true,
    },
    totalPage: {
      type: Number,
      required: true,
    },
    isActive: {
      type: Boolean,
      required: true,
    },
    toggleNextPage: {
      type: Number,
      required: true,
    },
  },
    methods: {
    handlePageChange(page) {
      this.$emit('handlePageChange', parseInt(page))
    },
    nextPage() {
      this.$emit('nextPage')
    },
    prevPage() {
      this.$emit('prevPage')
    }
  }
});
</script>
