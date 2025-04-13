<!--
  MethodOption.vue
  Компонент для отображения опции метода эпиляции с тултипом и рейтингами
-->
<template>
  <label class="flex items-start flex-col relative glass-container">
    <div class="flex items-center justify-start">
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
      <div class="tooltip-container relative ml-2">
        <span class="inline-flex items-center justify-center w-5 h-5 rounded-full cursor-help bg-add2-sat text-white font-bold text-xs">?</span>
        <div class="tooltip-text absolute left-7 top-0 bg-white p-3 rounded-lg shadow-lg z-10 w-[250px] hidden">
          <p class="text-sm text-gray-700">
            {{ tooltipText }}
          </p>
        </div>
      </div>
    </div>
    <div class="flex flex-1 gap-4 justify-between h-full items-center w-full mt-1">
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
        <!-- <span class="w-1/2">Безопасность</span> -->
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
        <!-- <span class="w-1/2">Эффективность</span> -->
      </div>
    </div>
  </label>
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

<style scoped>
.tooltip-container {
  position: relative;
}

.tooltip-container:hover .tooltip-text {
  display: block;
  animation: fadeIn 0.3s;
}

.tooltip-text {
  position: absolute;
  left: 30px;
  top: -5px;
  background: white;
  padding: 12px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
  z-index: 10;
  width: 250px;
  display: none;
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
