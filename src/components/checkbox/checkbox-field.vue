<template>
  <div>
    <Checkbox
      :type="type"
      :name="name"
      :label="label"
      :checkValue="checkValue"
      :disabled="disabled"
    />
    <!--  <div v-if="value"> -->
    <TextLabel :label="labelField" :required="required" />
    <TextField
      class="flex w-full"
      type="text"
      :name="otherName"
      :placeholder="placeholder"
      :disabled="
       click == false
          ? checkValue
          : checkValue !== value
      "
    />
    <!--  </div> -->
  </div>
</template>
<script>
import TextField from "../field/text-field/text-field.vue";
import Checkbox from "../checkbox/checkbox.vue";
import { useField } from "vee-validate";
import { ref } from "vue";
import TextLabel from "../field/text-label.vue";

export default {
  name: "CheckboxField",
  components: {
    TextField,
    Checkbox,
    TextLabel,
  },
  data() {
    const { value, meta } = useField(this.name);
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
    labelField: {
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
    click: {
      type: Boolean,
      required: false,
    },
    required: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
};
</script>
