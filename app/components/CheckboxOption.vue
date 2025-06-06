<!--
  CheckboxOption.vue
  Reusable component for checkbox inputs with consistent styling
-->
<template>
  <label :class="['flex items-center cursor-pointer gap-4 glass-container h-[7vh] md:h-12', { 'flex-row-reverse': flexRowReverse, 'cursor-not-allowed': disabled }]">
    <div class="relative min-w-[4vh] min-h-[4vh] md:min-w-8 md:min-h-8 flex items-center justify-center">
      <input
        :value="value"
        :checked="isChecked"
        type="checkbox"
        class="sr-only mx-auto"
        :disabled="disabled"
        @change="toggleOption"
      >
      <div
        class="flex items-center justify-center w-5 h-5 p-[2px] bg-zinc-600 rounded-[3px] inline-flex justify-start items-center gap-2.5"
        :class="{ 'opacity-50': disabled }"
      >
        <div
          v-if="isChecked"
          class="w-4 h-4 relative bg-[#ADDB88] rounded-[1px] shadow-[0px_0px_17px_0px_rgba(173,219,136,1.00)]"
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
  /**
   * Whether to reverse the flex direction (checkbox on the right)
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
