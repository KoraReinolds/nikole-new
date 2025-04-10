<!--
  CheckboxOption.vue
  Reusable component for checkbox inputs with consistent styling
-->
<template>
  <label
    class="flex items-center cursor-pointer"
    :class="{ 'cursor-not-allowed': disabled }"
  >
    <div class="relative">
      <input
        :value="value"
        :checked="isChecked"
        type="checkbox"
        class="sr-only"
        :disabled="disabled"
        @change="toggleOption"
      >
      <div
        class="w-5 h-5 p-[2px] bg-zinc-600 rounded-[3px] inline-flex justify-start items-center gap-2.5"
        :class="{ 'opacity-50': disabled }"
      >
        <div
          v-if="isChecked"
          class="w-4 h-4 relative bg-[#ADDB88] rounded-[1px] shadow-[0px_0px_17px_0px_rgba(173,219,136,1.00)]"
        />
      </div>
    </div>
    <span
      class="ml-4 text-lg text-[#232A36] font-medium"
      :class="{
        'text-gray-400': disabled,
      }"
    >
      <slot />
    </span>
  </label>
</template>

<script setup>
/**
 * A reusable checkbox component with consistent styling
 */
import { computed, defineProps, defineEmits } from "vue";

const props = defineProps({
  /**
   * The value of the checkbox
   */
  value: {
    type: String,
    required: true,
  },
  /**
   * The v-model value for the checkbox group (array of selected values)
   */
  modelValue: {
    type: Array,
    default: () => [],
  },
  /**
   * Whether the checkbox is disabled
   */
  disabled: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["update:modelValue"]);

/**
 * Checks if the current option is selected
 */
const isChecked = computed(() => {
  return props.modelValue.includes(props.value);
});

/**
 * Toggles the selection of an option
 */
const toggleOption = () => {
  if (props.disabled) return;

  let newValue = [...props.modelValue];

  if (isChecked.value) {
    // Remove value if it's already selected
    newValue = newValue.filter(v => v !== props.value);
  }
  else {
    // If selecting "no_problems", remove all other options
    if (props.value === "no_problems") {
      newValue = ["no_problems"];
    }
    else {
      // If selecting any other option, remove "no_problems" if it was selected
      newValue = newValue.filter(v => v !== "no_problems");
      // Add the new value
      newValue.push(props.value);
    }
  }

  emit("update:modelValue", newValue);
};
</script>

<style scoped>
.checkbox-option:hover {
  background-color: rgba(0, 0, 0, 0.05);
}
</style>
