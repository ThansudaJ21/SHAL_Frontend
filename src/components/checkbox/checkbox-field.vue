<template>
  <div>
    <Checkbox
      :type="type"
      :name="name"
      :label="label"
      :checkValue="checkValue"
      :disabled="disabled"
      v-model="checked"
    />

    <TextField
      class="mt-[10px] ml-[64px] flex w-[208px]"
      type="text"
      :name="otherName"
      :placeholder="placeholder"
      :disabled="disableField()"
    />
    <span>{{ checked || "null" }}</span>
  </div>
</template>
<script>
import TextField from "../field/text-field/text-field.vue";
import Checkbox from "../checkbox/checkbox.vue";
import { useField } from "vee-validate";
import { ref } from "vue";

export default {
  name: "CheckboxField",
  components: {
    TextField,
    Checkbox,
  },
  data() {
    const { value, meta } = useField(this.otherName);
    return {
      value,
      meta,
    };
  },
  props: {
    name: {
      type: String,
      required: true,
    },

    type: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    checkValue: {
      type: String,
      required: false,
    },
    placeholder: {
      type: String,
      required: true,
    },
    otherName: {
      type: String,
      required: true,
    },
    disabled: {
      type: Boolean,
      required: false,
    },
  },
  setup() {
    const checked = ref(false);
    function disableField() {}
    return { disableField, checked };
  },
};
</script>
