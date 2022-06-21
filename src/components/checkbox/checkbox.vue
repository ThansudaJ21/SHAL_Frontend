<template>
  <label class="ml-5 flex items-center gap-x-4 my-6">
    <div class="p-[2px]">
      <Field :name="name" :type="type" :value="checkValue" v-slot="{ field }">
        <input
          v-bind="field"
          :value="checkValue"
          :type="type"
          :disabled="disabled"
          class="
            h-5
            w-5
            border-[1px]
            !border-neutral-500
            checked:!border-primary-900 checked:!bg-primary-900
          "
          :class="[
            type === 'checkbox' && 'form-checkbox rounded',
            type === 'radio' && 'form-radio',
            errors.length
              ? '!border-error-500 text-error-500 placeholder-error-500 focus:ring-2 focus:ring-error-200'
              : 'border-neutral-500 text-black placeholder-neutral-500 focus:border-primary-900 focus:ring-2 focus:ring-primary-200',
          ]"
          :checked="
            checked && checkValue !== value
              ? (value = checkValue)
              : type === 'radio'
              ? value === checkValue
              : value?.includes(checkValue)
          "
        />
      </Field>
    </div>
    <div
      :class="[
        type === 'radio' && value === checkValue && '!text-black',
        type === 'checkbox' && value?.includes(checkValue) && '!text-black',
        `text-start inline-block text-sm font-normal leading-[17px] text-neutral-500 `,
      ]"
    >
      <div>
        {{ label }}
      </div>
      <div>
        {{ label_option }}
      </div>
    </div>
  </label>
</template>
<script>
import { Field, useField } from "vee-validate";

export default {
  name: "Checkbox",
  components: {
    Field,
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
    type: {
      type: String,
      required: true,
      default: "checkbox",
      validator: (prop) => ["checkbox", "radio"].includes(prop),
    },
    label: {
      type: String,
      required: true,
    },
    label_option: {
      type: String,
      required: false,
    },
    checkValue: {
      type: String,
      required: false,
    },
    disabled: {
      type: Boolean,
      required: false,
    },
    checked: {
      type: Boolean,
      required: false,
    },
  },
};
</script>
