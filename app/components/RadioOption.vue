<!--
  RadioOption.vue
  Reusable component for radio button inputs with consistent styling
-->
<template>
  <label :class="['flex gap-4 items-center cursor-pointer h-[7vh] md:h-12', { 'flex-row-reverse': flexRowReverse }]">
    <div class="relative min-w-[4vh] min-h-[4vh] md:min-w-8 md:min-h-8 flex items-center justify-center">
      <input
        :value="value"
        :checked="modelValue === value"
        type="radio"
        class="sr-only"
        :disabled="disabled"
        @change="$emit('update:modelValue', value)"
      >
      <div
        class="w-5 h-5 p-[2px] bg-zinc-600 rounded-[55px] inline-flex justify-start items-center gap-2.5"
      >
        <div
          v-if="modelValue === value"
          class="w-4 h-4 relative bg-[#ADDB88] rounded-[55px] shadow-[0px_0px_17px_0px_rgba(173,219,136,1.00)]"
        />
      </div>
    </div>
    <span
      :class="[
        'text-sm md:text-lg font-medium mt-1',
        { 'text-gray-400': disabled },
        { 'font-bold': textBold },
      ]"
      :style="textColor ? { color: textColor } : { color: '#232A36' }"
    >
      <slot />
    </span>
  </label>
</template>

<script setup>
/**
 * A reusable radio button component with consistent styling
 */
defineProps({
  /**
   * The value of the radio button
   */
  value: {
    type: [String, Number, Boolean],
    required: true,
  },
  /**
   * The v-model value for the radio group
   */
  modelValue: {
    type: [String, Number, Boolean],
    required: true,
  },
  /**
   * Whether the radio button is disabled
   */
  disabled: {
    type: Boolean,
    default: false,
  },
  /**
   * Whether to reverse the flex direction (radio on the right)
   */
  flexRowReverse: {
    type: Boolean,
    default: false,
  },
  /**
   * Custom text color
   */
  textColor: {
    type: String,
    default: "",
  },
  /**
   * Whether to make the text bold
   */
  textBold: {
    type: Boolean,
    default: false,
  },
});

defineEmits(["update:modelValue"]);
</script>
