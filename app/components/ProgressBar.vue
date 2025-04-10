<!--
  ProgressBar.vue
  Reusable progress bar component with customization options for various use cases
-->
<template>
  <div
    class="relative"
    :class="[fullWidth ? 'w-full' : '', `h-[${height}px]`]"
    :style="{ minWidth: minWidth }"
  >
    <div
      class="absolute rounded-lg"
      :class="[bgColor]"
      :style="{ width: width, height: `${height}px` }"
    />
    <div
      class="absolute rounded-lg transition-all duration-300"
      :class="[progressColor]"
      :style="{
        width: `${calculateProgressWidth()}px`,
        height: `${height - trackPadding * 2}px`,
        left: `${trackPadding}px`,
        top: `${trackPadding}px`,
      }"
    />

    <!-- Slider thumb for interactive sliders -->
    <div
      v-if="interactive"
      class="absolute w-5 h-5 bg-white rounded-full shadow-md cursor-pointer transform -translate-y-1/2"
      :style="{ left: `${calculateProgressWidth()}px`, top: '50%' }"
      @mousedown="startDrag"
    />

    <!-- Labels for slider -->
    <div
      v-if="showLabels && labels.length > 0"
      class="absolute bottom-[-25px] flex justify-between w-full text-sm text-gray-600"
    >
      <span
        v-for="(label, index) in labels"
        :key="index"
      >{{ label }}</span>
    </div>
  </div>
</template>

<script setup>
/**
 * Reusable progress bar component with customizable appearance and behavior
 * Can be used for progress indicators, sliders, and rating bars
 */
import { ref, computed } from "vue";

const props = defineProps({
  /**
   * Current progress value (0-100 for percentage or raw value for custom ranges)
   */
  modelValue: {
    type: Number,
    default: 0,
  },
  /**
   * Legacy value prop for backward compatibility
   */
  value: {
    type: Number,
    default: null,
  },
  /**
   * Maximum possible value
   */
  max: {
    type: Number,
    default: 100,
  },
  /**
   * Minimum possible value
   */
  min: {
    type: Number,
    default: 0,
  },
  /**
   * Fixed width of the progress bar
   */
  width: {
    type: String,
    default: "100%",
  },
  /**
   * Minimum width of the progress bar
   */
  minWidth: {
    type: String,
    default: "auto",
  },
  /**
   * Height of the progress bar in pixels
   */
  height: {
    type: Number,
    default: 8,
  },
  /**
   * Padding of the track (distance between outer and inner bars) in pixels
   */
  trackPadding: {
    type: Number,
    default: 2,
  },
  /**
   * Background color of the progress bar (CSS class)
   */
  bgColor: {
    type: String,
    default: "bg-gray-200",
  },
  /**
   * Color of the progress indicator (CSS class)
   */
  progressColor: {
    type: String,
    default: "bg-gradient-to-r from-[#8BC34A] to-[#CDDC39]",
  },
  /**
   * Whether the progress bar should take full width
   */
  fullWidth: {
    type: Boolean,
    default: false,
  },
  /**
   * Whether the progress bar is interactive (can be dragged)
   */
  interactive: {
    type: Boolean,
    default: false,
  },
  /**
   * Whether to show labels below the slider
   */
  showLabels: {
    type: Boolean,
    default: false,
  },
  /**
   * Labels to display below the slider
   */
  labels: {
    type: Array,
    default: () => [],
  },
});

const emit = defineEmits(["update:modelValue"]);

/**
 * Determine the actual current value (supports both v-model and direct value prop)
 */
const currentValue = computed(() => {
  return props.modelValue !== null && props.modelValue !== undefined
    ? props.modelValue
    : props.value !== null
      ? props.value
      : 0;
});

/**
 * Calculates the width of the progress indicator based on current value
 * @returns {Number} Width in pixels
 */
const calculateProgressWidth = () => {
  const totalWidth = typeof props.width === "string" && props.width.includes("px")
    ? parseInt(props.width)
    : 100;

  const trackWidth = totalWidth - (props.trackPadding * 2);
  const percentage = ((currentValue.value - props.min) / (props.max - props.min)) * 100;
  return (trackWidth * percentage) / 100;
};

// State for dragging functionality
const isDragging = ref(false);

/**
 * Starts the drag operation
 * @param {MouseEvent} event - The mouse event
 */
const startDrag = (event) => {
  if (!props.interactive) return;

  isDragging.value = true;

  const handleMouseMove = e => updateValueFromMousePosition(e);
  const handleMouseUp = () => {
    isDragging.value = false;
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  document.addEventListener("mousemove", handleMouseMove);
  document.addEventListener("mouseup", handleMouseUp);

  updateValueFromMousePosition(event);
};

/**
 * Updates the value based on mouse position during drag
 * @param {MouseEvent} event - The mouse event
 */
const updateValueFromMousePosition = (event) => {
  if (!isDragging.value) return;

  const container = event.currentTarget.parentElement;
  const rect = container.getBoundingClientRect();
  const offsetX = event.clientX - rect.left;

  // Calculate percentage position
  const totalWidth = rect.width - (props.trackPadding * 2);
  const percentage = Math.max(0, Math.min(100, (offsetX / totalWidth) * 100));

  // Convert percentage to value in the range
  const newValue = props.min + ((props.max - props.min) * percentage) / 100;
  emit("update:modelValue", parseFloat(newValue.toFixed(1)));
};
</script>
