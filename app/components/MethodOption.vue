<!--
  MethodOption.vue
  Компонент для отображения опции метода эпиляции с тултипом и рейтингами
-->
<template>
  <div class="flex items-center relative h-9">
    <div class="w-[240px] flex items-center justify-end absolute left-[-304px]">
      <div class="tooltip-container relative mr-2">
        <span class="inline-flex items-center justify-center w-5 h-5 rounded-full cursor-help bg-add2-sat text-white font-bold text-xs">?</span>
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
        text-color="#232A36"
        :text-bold="true"
        @update:model-value="$emit('update:modelValue', $event)"
      >
        {{ label }}
      </RadioOption>
    </div>
    <div class="flex flex-1 justify-between h-full items-center -translate-y-2.5">
      <div class="w-[160px]">
        <div class="rating-bar w-full">
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
      </div>
      <div class="w-[160px]">
        <div class="rating-bar w-full">
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
      </div>
    </div>
  </div>
</template>

<script setup>
/**
 * Компонент для отображения опции метода эпиляции с тултипом и рейтингами
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
</script>
