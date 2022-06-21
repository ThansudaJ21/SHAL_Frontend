<template>
  <div class="rounded-2xl bg-white space-y-4 px-2 py-4">
    <p
      v-if="label"
      class="flex justify-start text-base leading-[19px] text-neutral-900"
      :class="[
        labelCenter && 'justify-center',
        headerColor && '!text-primary-900 font-semibold',
      ]"
    >
      {{ label }}
      <span class="text-error-500" v-if="required">&nbsp;*</span>
    </p>
    <div
      :class="[
        variant === 'form' && 'space-y-1',
        variant === 'details' && 'space-y-4',
      ]"
    >
      <slot name="body" />
    </div>
    <div>
      <slot name="footer" />
    </div>
  </div>
</template>
<script>
export default {
  name: "FormWrapper",
  props: {
    label: {
      type: String,
      required: false,
    },
    labelCenter: {
      type: Boolean,
      required: false,
      default: false,
    },
    headerColor: {
      type: Boolean,
      required: false,
      default: false,
    },
    required: {
      type: Boolean,
      required: false,
      default: false,
    },
    variant: {
      type: String,
      default: "form",
      validator: (prop) => ["form", "details"].includes(prop),
      required: false,
    },
  },
};
</script>
