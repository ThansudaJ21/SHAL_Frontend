<template>
  <ErrorMessage
    class="
      flex
      justify-self-start
      text-[14px]
      font-normal
      leading-[17px]
      text-error-500
    "
    :name="name"
  />
</template>

<script>
import { ErrorMessage } from "vee-validate";

export default {
  name: "TextMessage",
  components: { ErrorMessage },
  props: {
    name: {
      type: String,
      required: true,
    },
  },
};
</script>
