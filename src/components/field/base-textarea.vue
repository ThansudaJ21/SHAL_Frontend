<template>
  <Field v-slot="{ field }" :name="name" :type="type" :required="required">
    <textarea
      v-bind="field"
      :disabled="disabled"
      rows="6"
      cols="50"
      :placeholder="placeholder"
      :class="[
        errors && touched
          ? '!border-error-500 bg-white text-error-500 placeholder-error-500 focus:ring-2 focus:ring-error-200'
          : '!border-neutral-500 text-black placeholder-neutral-500 focus:!border-primary-900 focus:!ring-2 focus:!ring-primary-200',
      ]"
      class="
        outline-none
        rounded-[15px]
        border-[1px]
        px-4
        py-2
        text-[14px]
        font-normal
        leading-[17px]
        focus:text-black focus:placeholder-transparent
        disabled:!border-neutral-500
        disabled:bg-neutral-100
        disabled:placeholder-neutral-500
      "
    >
    </textarea>
  </Field>
</template>
<script>
import { Field } from "vee-validate";

export default {
  name: "BaseTextArea",
  components: { Field },
  props: {
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    errors: {
      type: Array,
      required: true,
    },
    touched: {
      type: Boolean,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
    disabled: {
      type: Boolean,
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
