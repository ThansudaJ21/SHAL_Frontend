<template>
  <label
    for="checked-toggle"
    class="inline-flex relative items-center cursor-pointer"
  >
    <input
      type="checkbox"
      value=""
      @click="click"
      id="checked-toggle"
      class="sr-only peer"
      :checked="isPublish"
    />
    <div
      class="
        w-11
        h-6
        bg-neutral-300
        rounded-full
        peer
        peer-focus:ring-2 peer-focus:ring-[#61a5f9]
        peer-checked:after:translate-x-full peer-checked:after:border-white
        after:content-['']
        after:absolute
        after:top-0.5
        after:left-[2px]
        after:bg-white
        after:border-[#cfcfd2]
        after:border
        after:rounded-full
        after:h-5
        after:w-5
        after:transition-all
        dark:border-gray-600
        peer-checked:bg-primary-700
      "
    ></div>
  </label>
</template>

<script>
export default {
  name: "Toggle",
  props: {
    isPublish: {
      type: Boolean,
      default: true,
    },
    click: {
      type: Function,
    },
  },
};
</script>