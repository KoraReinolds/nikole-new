<!--
  QuizHeading.vue
  Reusable component for quiz section headings with consistent styling
-->
<template>
  <h3
    :class="[
      textColorClass,
      'text-md md:text-3xl font-bold font-montserrat',
    ]"
  >
    <slot />
  </h3>
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
});

// Computed properties
const textColorClass = computed(() => {
  return {
    accent: "text-add2-sat",
    dark: "text-[#333]",
  }[props.variant];
});
</script>
