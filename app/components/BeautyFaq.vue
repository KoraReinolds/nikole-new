<!--
  BeautyFaq.vue
  Component for displaying frequently asked questions in an accordion format
-->
<template>
  <div class="relative w-full py-20 bg-[#FFFAE4] relative">
    <div class="container mx-auto px-4 max-w-[1080px]">
      <!-- Section title -->
      <h2 class="text-5xl font-bold font-raleway text-additional-black mb-16 text-center">
        Часто задаваемые <span class="pink-text-gradient">вопросы</span>
      </h2>

      <!-- FAQ Accordion -->
      <div class="space-y-4 max-w-3xl mx-auto">
        <div
          v-for="(item, index) in faqItems"
          :key="index"
          class="bg-white rounded-lg shadow-md overflow-hidden"
        >
          <!-- Accordion header -->
          <button
            class="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-all"
            @click="toggleAccordion(index)"
          >
            <h3 class="text-xl font-medium font-raleway text-additional-black">
              {{ item.question }}
            </h3>
            <svg
              class="w-5 h-5 transform transition-transform"
              :class="activeIndex === index ? 'rotate-180' : ''"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          <!-- Accordion content -->
          <div
            class="px-6 overflow-hidden transition-all duration-300 ease-in-out"
            :class="activeIndex === index ? 'max-h-[500px] py-4' : 'max-h-0'"
          >
            <p class="text-gray-700 font-roboto">
              {{ item.answer }}
            </p>
          </div>
        </div>
      </div>

      <!-- Decorative elements -->
      <div class="absolute top-20 right-0 opacity-20">
        <svg
          width="200"
          height="200"
          viewBox="0 0 200 200"
        >
          <path
            d="M180,100 C180,144.18 144.18,180 100,180 C55.82,180 20,144.18 20,100 C20,55.82 55.82,20 100,20 C144.18,20 180,55.82 180,100"
            fill="none"
            stroke="#FF4A81"
            stroke-width="2"
          />
        </svg>
      </div>
      <div class="absolute bottom-20 left-0 opacity-20">
        <svg
          width="150"
          height="150"
          viewBox="0 0 150 150"
        >
          <path
            d="M30,75 L120,75"
            stroke="#93BA73"
            stroke-width="4"
          />
          <path
            d="M75,30 L75,120"
            stroke="#93BA73"
            stroke-width="4"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script setup>
/**
 * FAQ component with accordion functionality
 * Displays common questions and answers about beauty services
 */
import { ref } from "vue";

/**
 * Currently active accordion index
 * @type {Ref<number|null>}
 */
const activeIndex = ref(null);

/**
 * Toggle accordion open/close state
 * @param {number} index - Index of the accordion to toggle
 */
const toggleAccordion = (index) => {
  if (activeIndex.value === index) {
    activeIndex.value = null;
  }
  else {
    activeIndex.value = index;
  }
};

/**
 * FAQ items data
 * @type {Array<{question: string, answer: string}>}
 */
const faqItems = ref([
  {
    question: "Какой метод эпиляции самый эффективный?",
    answer: "Лазерная эпиляция считается наиболее эффективным методом для долгосрочного удаления волос. Она воздействует на фолликулы волос, замедляя или полностью останавливая их рост. Для достижения наилучших результатов обычно требуется 6-8 сеансов.",
  },
  {
    question: "Больно ли делать лазерную эпиляцию?",
    answer: "Современные диодные лазеры оснащены системой охлаждения, что делает процедуру практически безболезненной. Многие клиенты описывают ощущения как легкое покалывание или пощипывание. Чувствительность зависит от индивидуальных особенностей и обрабатываемой зоны.",
  },
  {
    question: "Как подготовиться к процедуре эпиляции?",
    answer: "За 24 часа до процедуры необходимо побрить волосы в зоне обработки. Не рекомендуется загорать и использовать автозагар в течение 2 недель до и после процедуры. Следует отказаться от использования скрабов, ретиноидов и других активных средств за 3-4 дня до сеанса.",
  },
  {
    question: "Сколько времени занимает одна процедура?",
    answer: "Продолжительность сеанса зависит от обрабатываемой зоны. Например, эпиляция подмышек займет около 15 минут, а ног полностью — до часа. Перед первым визитом мы проводим бесплатную консультацию, где подробно расскажем о процедуре и ответим на все вопросы.",
  },
  {
    question: "Как часто нужно проходить процедуры?",
    answer: "Оптимальный интервал между процедурами лазерной эпиляции составляет 4-6 недель для лица и 6-8 недель для тела. Это связано с циклами роста волос. Для шугаринга и восковой эпиляции рекомендуемый интервал — 3-4 недели.",
  },
  {
    question: "Есть ли противопоказания к эпиляции?",
    answer: "Основные противопоказания включают беременность, сахарный диабет в стадии декомпенсации, онкологические заболевания, обострение герпеса в зоне обработки, наличие татуировок в зоне удаления волос. Перед процедурой мы проводим консультацию для выявления всех противопоказаний.",
  },
]);
</script>
