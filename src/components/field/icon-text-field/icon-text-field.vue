<template>
  <div class="flex h-auto flex-col">
    <TextLabel :label="label" :required="required" />
    <div class="relative">
      <BaseField
        :name="name"
        :type="type"
        :errors="errors.length"
        :touched="meta.touched"
        :placeholder="placeholder"
        :disabled="disabled"
        :required="required"
        :value="valueField"
        :readOnly="readOnly"
        :maxLength="maxLength"
        :mask="mask"
        @change="$emit('change')"
      />
      <span class="absolute top-0 right-4 flex h-full items-center">
        <SearchIcon />
      </span>
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
import SearchIcon from "@/assets/icons/search.svg?inline";

export default {
  name: "IconTextField",
  components: {
    TextLabel,
    TextMessage,
    BaseField,
    SearchIcon,
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
    readOnly: {
      type: Boolean,
      required: false,
      default: false,
    },
    maxLength: {
      type: Number,
      required: false,
    },
    mask: {
      type: String,
      required: false,
    },
  },
};
</script>
