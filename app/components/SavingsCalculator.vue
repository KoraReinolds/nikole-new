<!--
  SavingsCalculator.vue
  Re-export of ProgressBar to maintain compatibility with existing imports.
  This component is kept for backward compatibility.
-->
<template>
  <div class="savings-calculator">
    <div class="flex items-center mb-2">
      <span class="text-lg">За {{ timePeriod }} {{ yearLabel }} вы сэкономите от</span>
      <span class="ml-2 text-lg font-bold px-3 py-1 bg-[#4CAF50] text-white rounded-md">{{ calculatedSavings }}</span>
      <span class="ml-2 text-lg">рублей</span>
    </div>

    <div class="flex items-center">
      <span class="text-lg mr-4">Посчитайте выгоду →</span>
      <div class="flex-grow max-w-md">
        <ProgressBar
          v-model="timePeriod"
          :min="1"
          :max="5"
          :height="12"
          width="100%"
          :interactive="true"
          :show-labels="true"
          :labels="['1 год', '2 года', '3 года', '4 года', '5 лет']"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
/**
 * Component for calculating potential savings over time with interactive time period selection
 * Uses ProgressBar for the slider functionality
 */
import { ref, computed } from "vue";
import ProgressBar from "./ProgressBar.vue";

const props = defineProps({
  /**
   * Base annual savings amount
   */
  baseAmount: {
    type: Number,
    default: 6000,
  },
  /**
   * Multiplier for additional years (can represent inflation or additional savings)
   */
  yearlyMultiplier: {
    type: Number,
    default: 1.1,
  },
});

// Current time period in years
const timePeriod = ref(2);

/**
 * Correct grammatical form of "year" in Russian based on number
 */
const yearLabel = computed(() => {
  // Russian grammar rules for years
  if (timePeriod.value === 1) {
    return "год";
  }
  else if (timePeriod.value >= 2 && timePeriod.value <= 4) {
    return "года";
  }
  else {
    return "лет";
  }
});

/**
 * Calculate savings based on selected time period and base amount
 */
const calculatedSavings = computed(() => {
  let total = 0;
  for (let i = 0; i < Math.round(timePeriod.value); i++) {
    total += props.baseAmount * Math.pow(props.yearlyMultiplier, i);
  }
  return Math.round(total);
});
</script>
