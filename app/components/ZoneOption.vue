<!--
  ZoneOption.vue
  Компонент для отображения опции зоны эпиляции с ценой и тултипом
-->
<template>
  <div class="flex items-center relative h-11">
    <div class="w-[240px] flex items-center justify-end absolute left-[-304px]">
      <div class="tooltip-container relative mr-2">
        <span class="inline-flex items-center justify-center w-5 h-5 rounded-full cursor-help bg-add2-sat text-white font-bold">?</span>
        <div class="tooltip-text absolute left-7 top-0 bg-white p-3 rounded-lg shadow-lg z-10 w-[250px] hidden">
          <p class="text-sm text-gray-700">
            {{ tooltipText }}
          </p>
        </div>
      </div>
      <RadioOption
        :model-value="modelValue"
        :value="value"
        :disabled="disabled"
        :flex-row-reverse="true"
        text-color="#94475E"
        :text-bold="true"
        @update:model-value="$emit('update:modelValue', $event)"
      >
        {{ label }}
      </RadioOption>
      <span
        v-if="price"
        class="ml-3 px-2 py-1 bg-[#B2F48E] rounded text-sm"
      >{{ price }} рублей</span>
    </div>
    <div
      v-if="showEfficiency"
      class="flex flex-1 justify-between h-full items-center -translate-y-3"
    >
      <div class="w-[160px]">
        <div class="rating-bar w-full">
          <ProgressBar
            :model-value="efficiencyValue"
            :min="0"
            :max="100"
            :height="18"
            bg-color="bg-[#454B57]"
            progress-color="bg-sup2-white2"
            full-width
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
/**
 * Компонент для отображения опции зоны эпиляции с ценой и тултипом
 */
import { defineProps, defineEmits } from "vue";
import RadioOption from "./RadioOption.vue";
import ProgressBar from "./ProgressBar.vue";

const props = defineProps({
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
   * Отображаемое название зоны
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
   * Цена процедуры
   */
  price: {
    type: [Number, String],
    default: null,
  },
  /**
   * Показывать ли шкалу эффективности
   */
  showEfficiency: {
    type: Boolean,
    default: false,
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
</script>
