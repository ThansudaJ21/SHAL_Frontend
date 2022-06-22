<template>
  <div class="flex h-auto w-full flex-col">
    <TextLabel :label="label" :required="required" />
    <div>
      <BaseField
        :name="name"
        :type="type"
        :errors="errors.length"
        :touched="meta.touched"
        :placeholder="placeholder"
        :disabled="disabled"
        :required="required"
        :value="valueField"
        :minLength="minLength"
        :maxLength="maxLength"
        :mask="mask"
        :regex="regex"
        @change="$emit('change')"
        @blur="$emit('blur')"
        @focus="$emit('focus')"
      />
    </div>
    <div class="h-[17px]" v-if="showError">
      <TextMessage v-if="meta.touched" :name="name" />
    </div>
  </div>
</template>

<script>
import { useField } from "vee-validate";
import TextLabel from "../text-label.vue";
import TextMessage from "../text-message.vue";
import BaseField from "../base-field.vue";

export default {
  name: "TextField",
  components: {
    TextLabel,
    TextMessage,
    BaseField,
  },
  data() {
    const { errors, value, meta } = useField(this.name);
    return {
      errors,
      value,
      meta,
    };
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    disabled: {
      type: Boolean,
      required: false,
    },
    type: {
      type: String,
      required: true,
    },
    showError: {
      type: Boolean,
      required: false,
      default: true,
    },
    required: {
      type: Boolean,
      required: false,
      default: false,
    },
    valueField: {
      type: String,
      required: false,
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
};
</script>
