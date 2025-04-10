<!--
  RatingBar.vue
  Component for displaying rating metrics like safety and effectiveness
  This component is kept for backward compatibility.
-->
<template>
  <div class="rating-bar w-full">
    <div
      v-if="label"
      class="flex justify-between mb-1"
    >
      <span class="text-gray-600 text-sm">{{ label }}</span>
      <span
        v-if="showValue"
        class="text-gray-600 text-sm font-medium"
      >{{ value }}%</span>
    </div>
    <ProgressBar
      :model-value="value"
      :min="0"
      :max="100"
      :height="8"
      full-width
      :progress-color="progressColor"
      :bg-color="bgColor"
    />
  </div>
</template>

<script setup>
/**
 * Component for displaying rating metrics with visual indicators
 * Uses ProgressBar for the rating visualization
 */
import { defineProps } from "vue";
import ProgressBar from "./ProgressBar.vue";

const props = defineProps({
  /**
   * Rating value (0-100)
   */
  value: {
    type: Number,
    default: 0,
    validator: val => val >= 0 && val <= 100,
  },
  /**
   * Rating label
   */
  label: {
    type: String,
    default: "",
  },
  /**
   * Whether to show the numeric value
   */
  showValue: {
    type: Boolean,
    default: false,
  },
  /**
   * Custom background color class
   */
  bgColor: {
    type: String,
    default: "bg-gray-200",
  },
  /**
   * Custom progress color class
   */
  progressColor: {
    type: String,
    default: "bg-gradient-to-r from-[#8BC34A] to-[#CDDC39]",
  },
});
</script>
