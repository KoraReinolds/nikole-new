<!--
  RadioOption.vue
  Reusable component for radio button inputs with consistent styling
-->
<template>
  <label class="flex items-center cursor-pointer">
    <input
      :value="value"
      :checked="modelValue === value"
      type="radio"
      class="form-radio h-5 w-5 text-[#FF6B9C]"
      :disabled="disabled"
      @change="$emit('update:modelValue', value)"
    >
    <span
      class="ml-4 text-lg"
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

<style scoped>
/* Custom styling for radio buttons */
.form-radio {
  appearance: none;
  width: 18px;
  height: 18px;
  border: 2px solid #FF6B9C;
  border-radius: 50%;
  outline: none;
  transition: all 0.2s ease;
}

.form-radio:checked {
  background-color: #FF6B9C;
  box-shadow: inset 0 0 0 3px white;
}

.form-radio:disabled {
  border-color: #ddd;
  background-color: #f5f5f5;
}
</style>
