<!--
  MethodOption.vue
  Компонент для отображения опции метода эпиляции с тултипом и рейтингами
-->
<template>
  <label class="flex items-start flex-col relative">
    <div class="flex items-center justify-start relative">
      <RadioOption
        :model-value="modelValue"
        :value="value"
        :disabled="disabled"
        text-color="#232A36"
        :text-bold="true"
        @update:model-value="$emit('update:modelValue', $event)"
      >
        {{ label }}
      </RadioOption>
      <div
        class="tooltip-container ml-2"
        @mouseenter="handleMouseEnter"
        @mouseleave="handleMouseLeave"
        @mousemove="handleMouseMove"
      >
        <span
          class="inline-flex items-center justify-center w-5 h-5 rounded-full cursor-help bg-add2-sat text-white font-bold text-xs"
          @click.prevent="isMobile ? openTooltipPopup() : null"
        >?</span>
      </div>
    </div>
    <!-- <div class="flex flex-1 gap-4 justify-between h-full items-center w-full mt-1">
      <div class="w-1/2 flex text-add2-black">
        <ProgressBar
          :model-value="safetyValue"
          :min="0"
          :max="100"
          :height="14"
          bg-color="bg-[#454B57]"
          progress-color="bg-sup2-white2"
          full-width
        />
      </div>
      <div class="w-1/2 flex text-add2-black">
        <ProgressBar
          :model-value="efficiencyValue"
          :min="0"
          :max="100"
          :height="14"
          bg-color="bg-[#454B57]"
          progress-color="bg-sup2-white2"
          full-width
        />
      </div>
    </div> -->
  </label>

  <!-- Teleport the tooltip to body to avoid stacking context issues -->
  <Teleport to="body">
    <div
      v-if="!isMobile && isHovered"
      class="fixed tooltip-text bg-white p-3 rounded-lg shadow-lg"
      style="z-index: 9999999 !important;"
      :style="tooltipStyle"
    >
      <p class="text-sm text-gray-700">
        {{ tooltipText }}
      </p>
    </div>
  </Teleport>
</template>

<script setup>
/**
 * Компонент для отображения опции метода эпиляции с тултипом и рейтингами
 */
import { defineProps, defineEmits, ref, onMounted, inject, provide, reactive, computed } from "vue";
import RadioOption from "./RadioOption.vue";
import ProgressBar from "./ProgressBar.vue";

const _props = defineProps({
  /**
   * Текущее выбранное значение (для v-model)
   */
  modelValue: {
    type: [String, Number, Boolean],
    required: true,
  },
  /**
   * Значение данной опции
   */
  value: {
    type: [String, Number, Boolean],
    required: true,
  },
  /**
   * Отображаемое название метода
   */
  label: {
    type: String,
    required: true,
  },
  /**
   * Подсказка в тултипе
   */
  tooltipText: {
    type: String,
    default: "",
  },
  /**
   * Оценка безопасности (0-100)
   */
  safetyValue: {
    type: Number,
    default: 50,
  },
  /**
   * Оценка эффективности (0-100)
   */
  efficiencyValue: {
    type: Number,
    default: 50,
  },
  /**
   * Отключена ли опция
   */
  disabled: {
    type: Boolean,
    default: false,
  },
});

defineEmits(["update:modelValue"]);

/**
 * Check if device is mobile based on screen width
 */
const isMobile = ref(false);

/**
 * State for hover tooltip (desktop)
 */
const isHovered = ref(false);

/**
 * Position for tooltip
 */
const tooltipPosition = reactive({
  x: 0,
  y: 0,
});

/**
 * Calculate tooltip position and style
 */
const tooltipStyle = computed(() => {
  return {
    left: `${tooltipPosition.x}px`,
    top: `${tooltipPosition.y}px`,
    width: "250px",
  };
});

/**
 * Create or get the global tooltip state manager
 */
let activeTooltip = inject("activeTooltip", null);
let closeActiveTooltip = inject("closeActiveTooltip", null);

// Create a new tooltip manager if none exists
if (!activeTooltip) {
  activeTooltip = ref(null);
  closeActiveTooltip = () => {
    activeTooltip.value = null;
    document.body.style.overflow = "";
  };
  provide("activeTooltip", activeTooltip);
  provide("closeActiveTooltip", closeActiveTooltip);
}

/**
 * Update mobile status on window resize and initial load
 */
const checkMobile = () => {
  isMobile.value = window.innerWidth < 768;
};

/**
 * Opens the tooltip popup on mobile
 */
const openTooltipPopup = () => {
  closeActiveTooltip();
  activeTooltip.value = {
    label: _props.label,
    text: _props.tooltipText,
  };
  document.body.style.overflow = "hidden";
};

/**
 * Update tooltip position based on question mark element
 */
const updateTooltipPosition = (event) => {
  if (!isMobile.value) {
    const rect = event.target.getBoundingClientRect();
    tooltipPosition.x = rect.right + 10;
    tooltipPosition.y = rect.top - 10;

    // Check if tooltip would go off-screen to the right
    const tooltipWidth = 250;
    if (tooltipPosition.x + tooltipWidth > window.innerWidth) {
      tooltipPosition.x = rect.left - tooltipWidth - 10;
    }
  }
};

/**
 * Mouse enter event handler
 */
const handleMouseEnter = (e) => {
  if (!isMobile.value) {
    isHovered.value = true;
    updateTooltipPosition(e);
  }
};

/**
 * Mouse leave event handler
 */
const handleMouseLeave = () => {
  isHovered.value = false;
};

/**
 * Mouse move event handler
 */
const handleMouseMove = (e) => {
  if (isHovered.value && !isMobile.value) {
    updateTooltipPosition(e);
  }
};

onMounted(() => {
  checkMobile();
  window.addEventListener("resize", checkMobile);
});
</script>

<style scoped>
.tooltip-container {
  position: relative;
}

.tooltip-text {
  position: fixed;
  background: white;
  padding: 12px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
  animation: fadeIn 0.3s;
}

.tooltip-text::before {
  content: '';
  position: absolute;
  left: -6px;
  top: 10px;
  width: 12px;
  height: 12px;
  z-index: 100;
  background: white;
  transform: rotate(45deg);
  box-shadow: -2px 2px 3px rgba(0, 0, 0, 0.05);
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
</style>
