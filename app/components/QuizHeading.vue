<!--
  QuizHeading.vue
  Reusable component for quiz section headings with consistent styling
-->
<template>
  <div class="flex items-center gap-2 md:gap-4">
    <button
      :disabled="!showBackButton"
      class="mt-1 min-w-[4vh] min-h-[4vh] md:min-w-8 md:min-h-8 flex items-center justify-center rounded-full bg-add2-sat hover:bg-opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      @click="$emit('back')"
    >
      <svg
        class="w-4 h-4 md:w-6 md:h-6 fill-white"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
      </svg>
    </button>
    <h3
      :class="[
        textColorClass,
        'text-clamp(0.25rem,1vh,2.5rem) md:text-3xl font-bold font-montserrat text-center md:text-left w-full md:w-auto',
      ]"
    >
      {{ value }}
    </h3>
    <button
      :disabled="!showNextButton"
      class="mt-1 min-w-[4vh] min-h-[4vh] md:min-w-8 md:min-h-8 flex items-center justify-center rounded-full bg-add2-sat hover:bg-opacity-90 transition-all rotate-180"
      @click="$emit('next')"
    >
      <svg
        class="w-4 h-4 md:w-6 md:h-6 fill-white"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
      </svg>
    </button>
  </div>
</template>

<script setup>
/**
 * A reusable heading component for quiz sections
 */
import { computed } from "vue";

const props = defineProps({
  value: {
    type: String,
    required: true,
  },
  /**
   * Color variant for the heading (default: accent color)
   */
  variant: {
    type: String,
    default: "accent",
    validator: value => ["accent", "dark"].includes(value),
  },
  /**
   * Whether to show the back button
   */
  showBackButton: {
    type: Boolean,
    default: true,
  },
  /**
   * Whether to show the next button
   */
  showNextButton: {
    type: Boolean,
    default: true,
  },
});

// Computed properties
const textColorClass = computed(() => {
  return {
    accent: "text-add2-sat",
    dark: "text-[#333]",
  }[props.variant];
});

defineEmits(["back", "next"]);
</script>
