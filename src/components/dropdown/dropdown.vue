<template>
  <div class="h-auto w-full">
    <TextLabel :label="label" :required="required" />
    <Field type="text" :name="name" v-slot="{ field }">
      <v-select
        v-bind="field"
        :class="{ error: errors.length && meta.touched }"
        :name="name"
        :options="options"
        :placeholder="placeholder"
        :searchable="false"
        :clearable="false"
        transition="none"
        :disabled="disabled"
      >
        <template #open-indicator="{ attributes }">
          <ArrowIcon v-bind="attributes" class="h-auto w-4" />
        </template>
        <template v-slot:option="option">
          <div class="flex w-full items-center">
            <span class="w-full">{{ option.label }}</span>
            <CheckIcon
              v-if="
                typeof value == 'object'
                  ? value.code == option.code
                  : value == option.label
              "
              class="h-5 w-5"
            />
          </div>
        </template>
      </v-select>
    </Field>
    <div class="h-[17px]" v-if="showError">
      <TextMessage v-if="meta.touched" :name="name" />
    </div>
  </div>
</template>

<script>
import CheckIcon from "@/assets/icons/check.svg?inline";
import ArrowIcon from "@/assets/icons/arrow.svg?inline";
import TextLabel from "../field/text-label.vue";
import TextMessage from "../field/text-message.vue";
import { Field, useField } from "vee-validate";

export default {
  name: "Dropdown",
  components: { TextLabel, TextMessage, Field, CheckIcon, ArrowIcon },
  props: {
    name: {
      type: String,
      required: true,
    },
    options: {
      type: Array,
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
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data() {
    const { errors, value, meta } = useField(this.name);
    return {
      errors,
      value,
      meta,
    };
  },
  watch: {
    value(newValue) {
      this.$emit("change", newValue);
    },
  },
};
</script>

<style>
.vs__dropdown-toggle {
  @apply h-[42px] !rounded-full !border-neutral-500 !p-0 !placeholder-neutral-500  hover:border-neutral-500;
}
.error .vs__dropdown-toggle {
  @apply !border-error-500 !text-error-500 placeholder-error-500 focus:!border-error-500 focus:!ring-2 focus:!ring-error-200;
}

.vs--disabled .vs__dropdown-toggle {
  @apply !cursor-default !border-neutral-500 !bg-neutral-100;
}

.vs--disabled .vs__dropdown-toggle .vs__open-indicator {
  @apply !cursor-default !bg-neutral-100;
}
.vs__selected-options {
  @apply h-full !p-0;
}

.vs__search {
  @apply !m-0 !py-0 !px-4 !text-sm !leading-[17px] text-neutral-900 !placeholder-neutral-400;
}

.error .vs__dropdown-toggle .vs__search {
  @apply !placeholder-error-500;
}

.vs--disabled .vs__dropdown-toggle .vs__search {
  @apply !cursor-default !bg-neutral-100 !placeholder-neutral-500;
}

.vs__actions {
  @apply !px-4 !py-0;
}

.vs__selected {
  @apply !m-0 h-full !px-4 !text-sm !leading-[17px];
}

.vs--open > div {
  @apply !border-primary-900 ring-2 ring-primary-200;
}

.error .vs__dropdown-toggle {
  @apply !ring-error-200 focus:!border-error-500 focus:!ring-2;
}

.vs--open > ul {
  border: 1px solid #1f3a89;
  box-shadow: 0px 8px 15px 0px rgba(190, 219, 254, 0.2);
  @apply z-10 mt-2 rounded-full py-0;
}

.vs--open > ul > li {
  height: 36px !important;
  display: flex !important;
  align-items: center !important;
}

.vs__dropdown-option {
  @apply !h-6 !py-0 !px-4 !text-sm leading-[17px] !text-neutral-600 hover:bg-primary-100 hover:!text-black;
}

.vs__dropdown-option--highlight {
  @apply !bg-primary-100 !text-black;
}

.vs__no-options {
  @apply !h-6 !py-0 !px-4 !text-sm leading-[17px] !text-neutral-500 !bg-neutral-100 cursor-default;
}
</style>
