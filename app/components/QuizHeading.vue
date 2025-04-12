<!--
  QuizHeading.vue
  Reusable component for quiz section headings with consistent styling
-->
<template>
  <div class="flex items-start gap-2">
    <button
      v-if="showBackButton"
      class="mt-1 w-8 h-full flex items-start justify-center hover:bg-opacity-90 transition-all"
      @click="$emit('back')"
    >
      <svg
        class="w-4 h-4 md:w-6 md:h-6 fill-add2-sat"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
      </svg>
    </button>
    <h3
      :class="[
        textColorClass,
        'text-md md:text-3xl font-bold font-montserrat',
      ]"
    >
      <slot />
    </h3>
  </div>
</template>

<script setup>
/**
 * A reusable heading component for quiz sections
 */
import { computed } from "vue";

const props = defineProps({
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
    default: false,
  },
});

// Computed properties
const textColorClass = computed(() => {
  return {
    accent: "text-add2-sat",
    dark: "text-[#333]",
  }[props.variant];
});

defineEmits(["back"]);
</script>
