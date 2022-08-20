<template>
  <Field v-slot="{ field }" :name="name">
    <div @click="click" class="flex items-center inline-block">
      <div>
        <input
          v-bind="field"
          type="checkbox"
          :value="value"
          v-model="model"
          :id="value"
          class="
            my-3
            mr-4
            h-5
            w-5
            border-[1px]
            !border-neutral-500
            checked:!border-primary-900 checked:!bg-primary-900
          "
        />
      </div>
      <div>
        <label
          v-if="withInput == true"
          :class="[
            model == true ? 'text-black' : 'text-neutral-500',
          ]"
          class="text-start text-sm font-normal leading-[17px]"
          for="value"
          >{{ value }}</label
        >
        <label
          v-else
          :class="[model.includes(value) ? 'text-black' : 'text-neutral-500']"
          class="text-start text-sm font-normal leading-[17px]"
          for="value"
          >{{ value }}</label
        >
      </div>
    </div>
  </Field>
  <div v-if="withInput == true">
    <TextField
      v-if="model == true"
      class="flex w-full"
      type="text"
      :name="nameField"
      :label="labelField"
      :valueField="valueField"
      :placeholder="placeholderField"
      required
    />
  </div>
</template>
<script>
import { Field } from "vee-validate";

export default {
  name: "Checkbox",
  components: {
    Field,
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
    labelField: {
      type: String,
    },
    valueField: {
      type: String,
    },
    nameField: {
      type: String,
    },
    placeholderField: {
      type: String,
    },
    withInput: {
      type: Boolean,
      default: false,
    },
    click: {
      type: Function,
    },
    model: {
      type: String,
    },
  },
};
</script>
