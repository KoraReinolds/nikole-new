<!--
  BeautyFaq.vue
  Component for displaying frequently asked questions in an accordion format with mobile-friendly popup
-->
<template>
  <div class="relative w-full py-12 md:py-20 bg-[#FFFAE4] md:h-auto h-screen overflow-hidden">
    <div class="container mx-auto px-4 max-w-[1080px] h-full flex flex-col">
      <!-- Section title -->
      <h2 class="text-3xl md:text-5xl font-bold font-raleway text-additional-black mb-8 md:mb-16 text-center">
        Часто задаваемые <span class="text-sup2-white">вопросы</span>
      </h2>

      <!-- <div class="absolute h-full w-full">
        <img
          src="/images/services.png"
          alt="Сервисы"
          class="max-w-sm w-full object-contain absolute -bottom-[120px] z-10 right-0 translate-x-full"
        >
      </div> -->

      <!-- FAQ Accordion -->
      <div class="space-y-[1vh] md:space-y-4 max-w-3xl mx-auto overflow-y-auto pb-4 flex-grow">
        <div
          v-for="(item, index) in faqItems"
          :key="index"
          class="bg-white rounded-lg shadow-md overflow-hidden"
        >
          <!-- Accordion header -->
          <button
            class="w-full px-4 md:px-6 py-[1vh] md:py-4 text-left flex justify-between items-center gap-2 hover:bg-gray-50 transition-all"
            @click="isMobile ? openPopup(index) : toggleAccordion(index)"
          >
            <h3 class="text-[clamp(0.8rem,2vh,1.5rem)] md:text-xl font-medium font-raleway text-additional-black">
              {{ item.question }}
            </h3>
            <svg
              class="w-5 h-5 flex-shrink-0 transform transition-transform text-additional-black"
              :class="{ 'rotate-180': activeIndex === index && !isMobile }"
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

          <!-- Desktop Accordion content -->
          <div
            v-if="!isMobile"
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
      <div class="absolute top-20 right-0 opacity-20 hidden md:block">
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
      <div class="absolute bottom-20 left-0 opacity-20 hidden md:block">
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

    <!-- Mobile FAQ Answer Popup -->
    <div
      v-if="activePopupIndex !== null && isMobile"
      class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
      @click.self="closePopup"
    >
      <div class="bg-white rounded-lg w-full max-w-md max-h-[80vh] overflow-hidden flex flex-col">
        <div class="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
          <h3 class="text-xl font-medium font-raleway text-additional-black pr-6">
            {{ faqItems[activePopupIndex]?.question }}
          </h3>
          <button
            class="text-gray-500 hover:text-gray-700"
            @click="closePopup"
          >
            <svg
              class="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div class="px-6 py-4 overflow-y-auto">
          <p class="text-gray-700 font-roboto">
            {{ faqItems[activePopupIndex]?.answer }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
/**
 * FAQ component with mobile-friendly popup and desktop accordion
 * Displays common questions and answers about beauty services
 */
import { ref, onMounted } from "vue";

/**
 * Currently active accordion index (for desktop view)
 * @type {Ref<number|null>}
 */
const activeIndex = ref(null);

/**
 * Currently active popup index (for mobile view)
 * @type {Ref<number|null>}
 */
const activePopupIndex = ref(null);

/**
 * Toggle accordion open/close state (for desktop)
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
 * Opens the popup for displaying FAQ answer (for mobile)
 * @param {number} index - Index of the FAQ item
 */
const openPopup = (index) => {
  activePopupIndex.value = index;
  // Prevent body scrolling when popup is open
  document.body.style.overflow = "hidden";
};

/**
 * Closes the popup
 */
const closePopup = () => {
  activePopupIndex.value = null;
  // Restore body scrolling
  document.body.style.overflow = "";
};

/**
 * Check if device is mobile based on screen width
 * @type {Ref<boolean>}
 */
const isMobile = ref(false);

/**
 * Update mobile status on window resize and initial load
 */
const checkMobile = () => {
  isMobile.value = window.innerWidth < 768;
};

onMounted(() => {
  checkMobile();
  window.addEventListener("resize", checkMobile);
});

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
