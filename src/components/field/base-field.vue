<template>
  <Field :name="name" :type="type" v-slot="{ field }" :value="value">
    <input
      v-bind="field"
      v-facade="mask"
      :type="type"
      class="
        outline-none
        h-[42px]
        w-full
        rounded-full
        border-[1px]
        px-4
        py-2
        text-[14px]
        font-normal
        leading-[17px]
        focus:text-black focus:placeholder-transparent
        disabled:!border-neutral-500
        disabled:bg-neutral-100
        disabled:!placeholder-neutral-500
      "
      :class="[
        errors && touched
          ? '!border-error-500 bg-white text-error-500 placeholder-error-500 focus:ring-2 focus:ring-error-200'
          : '!border-neutral-500 text-black placeholder-neutral-500 focus:!border-primary-900 focus:!ring-2 focus:!ring-primary-200',
      ]"
      :placeholder="placeholder"
      :disabled="disabled"
      :readOnly="readOnly"
      :required="required"
      :minLength="minLength"
      :maxLength="maxLength"
      v-on:keypress="regexInput(regex, $event)"
      @change="$emit('change')"
      @blur="$emit('blur')"
      @focus="$emit('focus')"
    />
  </Field>
</template>

<script>
import { Field } from "vee-validate";

export default {
  name: "BaseField",
  components: { Field },
  props: {
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
      default: "text",
      validator: (prop) =>
        ["text", "search", "password", "file"].includes(prop),
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
    value: {
      type: String,
      required: false,
    },
    readOnly: {
      type: Boolean,
      required: false,
      default: false,
    },
    minLength: {
      type: Number,
      required: false,
    },
    maxLength: {
      type: Number,
      required: false,
    },
    mask: {
      type: String,
      required: false,
    },
    regex: {
      type: String,
      required: false,
    },
  },
  methods: {
    regexInput(regex, event) {
      if (regex == "combine") {
        this.isLetterOrNumber(event);
      } else if (regex == "textOnly") {
        this.isLetterOnly(event);
      } else if (regex == "numberOnly") {
        this.isNumberOnly(event);
      } else if (regex == "houseNumber") {
        this.isHouseNumber(event);
      }
    },
    isLetterOrNumber(e) {
      let char = String.fromCharCode(e.keyCode);
      if (/^[A-Za-z0-9_-]+$/.test(char)) return true;
      else e.preventDefault();
    },
    isLetterOnly(e) {
      let char = String.fromCharCode(e.keyCode);
      if (/^[A-Za-z-]+$/.test(char)) return true;
      else e.preventDefault();
    },
    isNumberOnly(e) {
      let char = String.fromCharCode(e.keyCode);
      if (/^[0-9]+$/.test(char)) return true;
      else e.preventDefault();
    },
    isHouseNumber(e) {
      let char = String.fromCharCode(e.keyCode);
      if (/^[0-9_/]+$/.test(char)) return true;
      else e.preventDefault();
    },
  },
};
</script>
