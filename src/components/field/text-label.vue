<template>
  <label class="flex text-[14px] font-semibold leading-[17px] text-black">
    {{ label }}
    <span class="text-error-500" v-if="required">&nbsp;*</span>
  </label>
</template>

<script>
export default {
  name: "TextLabel",
  props: {
    label: {
      type: String,
      required: true,
    },
    required: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
};
</script>
