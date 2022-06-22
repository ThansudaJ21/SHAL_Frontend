<template>
  <div class="flex h-auto w-full flex-col">
    <TextLabel :label="label" :required="required" />
    <BaseTextArea
      :name="name"
      :type="type"
      :errors="errors"
      :touched="meta.touched"
      :placeholder="placeholder"
      :disabled="disabled"
      :required="required"
      :value="valueField"
    />
    <div class="h-[17px]" v-if="showError">
      <TextMessage v-if="meta.touched" :name="name" />
    </div>
  </div>
</template>

<script>
import { useField } from "vee-validate";
import TextLabel from "../text-label.vue";
import TextMessage from "../text-message.vue";
import BaseTextArea from "../base-textarea.vue";

export default {
  name: "TextArea",
  components: {
    TextLabel,
    TextMessage,
    BaseTextArea,
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
    helper: {
      type: String,
      required: false,
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
  },
};
</script>
