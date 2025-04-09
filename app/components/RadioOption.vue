<!--
  RadioOption.vue
  Reusable component for radio button inputs with consistent styling
-->
<template>
  <label class="flex items-center cursor-pointer">
    <div class="relative">
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
      class="ml-4 text-lg text-[#232A36] font-medium"
      :class="{ 'text-gray-400': disabled }"
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
});

defineEmits(["update:modelValue"]);
</script>
