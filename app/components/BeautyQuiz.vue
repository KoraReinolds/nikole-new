<!--
  BeautyQuiz.vue
  Component for displaying a multi-step quiz about beauty and hair removal services
-->
<template>
  <div class="quiz-container w-full h-full">
    <div class="container mx-auto px-4 max-w-[1080px] h-full relative z-10 flex">
      <!-- Left side with flower vase image -->
      <div class="bottom-14 absolute -left-[208px]">
        <img
          src="/images/promo-flowers-2.png"
          alt="Цветы в вазе"
          class="w-[425px] object-contain relative z-10"
        >
      </div>

      <!-- Right side with quiz content -->
      <div class="pt-[120px] pb-16 flex flex-col w-full">
        <!-- Quiz header -->
        <h2 class="text-add2-black text-6xl font-bold font-raleway mb-10">
          Ответьте на 5 вопросов<br>
          и получите <span class="text-add2-sat">подарок</span>
        </h2>

        <div class="mb-8 flex gap-16 w-full h-full">
          <!-- Progress bar -->
          <div class="relative h-4 min-w-[555px] mt-3">
            <ProgressBar
              :model-value="currentStep"
              :min="1"
              :max="totalSteps"
              width="555px"
              :height="18"
              bg-color="bg-[#454B57]"
              progress-color="bg-sup2-white2"
              :track-padding="2"
            />
          </div>

          <div class="flex flex-col flex-grow w-full h-full">
            <!-- Quiz content - changes based on current step -->
            <div class="flex-grow w-full">
              <!-- Step 1: Age question -->
              <div
                v-if="currentStep === 1"
                class="quiz-step"
              >
                <QuizHeading>Сколько Вам лет?</QuizHeading>
                <div class="space-y-4 ml-4">
                  <RadioOption
                    v-model="userAnswers.age"
                    value="under18"
                  >
                    До 18
                  </RadioOption>
                  <RadioOption
                    v-model="userAnswers.age"
                    value="over18"
                  >
                    Больше 18
                  </RadioOption>
                </div>
              </div>

              <!-- Step 2: Problems selection -->
              <div
                v-if="currentStep === 2"
                class="quiz-step"
              >
                <QuizHeading>Какие из проблем вам знакомы?</QuizHeading>
                <div class="space-y-4 mt-6 bg-[#FFBCAD] p-6 rounded-lg max-w-[500px]">
                  <CheckboxOption
                    v-model="userAnswers.problems"
                    value="frequent_shaving"
                  >
                    Частое бритье
                  </CheckboxOption>
                  <CheckboxOption
                    v-model="userAnswers.problems"
                    value="embarrassment"
                  >
                    Стеснение
                  </CheckboxOption>
                  <CheckboxOption
                    v-model="userAnswers.problems"
                    value="pain"
                  >
                    Боль при эпиляции
                  </CheckboxOption>
                  <CheckboxOption
                    v-model="userAnswers.problems"
                    value="safety_concerns"
                  >
                    Сомневаюсь в безопасности
                  </CheckboxOption>
                  <CheckboxOption
                    v-model="userAnswers.problems"
                    value="no_problems"
                  >
                    Никаких проблем
                  </CheckboxOption>
                </div>
              </div>

              <!-- Step 3: Zone selection with checkboxes -->
              <div
                v-if="currentStep === 3"
                class="quiz-step"
              >
                <QuizHeading>
                  Выберите зоны эпиляции
                </QuizHeading>

                <div class="space-y-4 mt-6 bg-[#FFBCAD] p-6 rounded-lg max-w-[500px]">
                  <CheckboxOption
                    v-model="userAnswers.zones"
                    value="legs"
                  >
                    Ноги
                  </CheckboxOption>

                  <CheckboxOption
                    v-model="userAnswers.zones"
                    value="bikini"
                  >
                    Бикини
                  </CheckboxOption>

                  <CheckboxOption
                    v-model="userAnswers.zones"
                    value="face"
                  >
                    Лицо
                  </CheckboxOption>

                  <CheckboxOption
                    v-model="userAnswers.zones"
                    value="arms"
                  >
                    Руки
                  </CheckboxOption>

                  <CheckboxOption
                    v-model="userAnswers.zones"
                    value="back"
                  >
                    Спина
                  </CheckboxOption>

                  <CheckboxOption
                    v-model="userAnswers.zones"
                    value="stomach"
                  >
                    Живот
                  </CheckboxOption>
                </div>
              </div>

              <!-- Step 4: Method selection with comparison table and calculator -->
              <div
                v-if="currentStep === 4"
                class="quiz-step"
              >
                <QuizHeading>
                  Выберите способ
                </QuizHeading>

                <div class="my-8 flex">
                  <div class="flex flex-1 justify-between text-start">
                    <div class="w-[160px] text-gray-600 font-medium text-sm">
                      безопасность
                    </div>
                    <div class="w-[160px] text-gray-600 font-medium text-sm">
                      эффективность
                    </div>
                  </div>
                </div>

                <div class="space-y-3">
                  <!-- Electro-epilation option -->
                  <MethodOption
                    v-model="userAnswers.method"
                    value="electro"
                    label="Электроэпиляция"
                    tooltip-text="Электроэпиляция — это метод удаления волос, при котором используется электрический ток для разрушения волосяных фолликулов. Процедура обеспечивает долгосрочный результат и подходит для любого типа кожи и волос."
                    :safety-value="85"
                    :efficiency-value="95"
                  >
                    <template #price>
                      <div class="text-sm text-gray-600">
                        <div v-if="timePeriod === 0">
                          {{ new Intl.NumberFormat('ru-RU').format(methodTotalCosts.electro) }} ₽
                        </div>
                        <div v-else-if="timePeriod === 1">
                          {{ new Intl.NumberFormat('ru-RU').format(methodTotalCosts.electro) }} ₽
                        </div>
                        <div v-else>
                          {{ new Intl.NumberFormat('ru-RU').format(totalCostsByPeriod.electro) }} ₽
                        </div>
                      </div>
                    </template>
                  </MethodOption>

                  <!-- Sugaring option -->
                  <MethodOption
                    v-model="userAnswers.method"
                    value="sugaring"
                    label="Шугаринг"
                    tooltip-text="Шугаринг — метод удаления волос с помощью густой сахарной пасты. Удаляет волосы вместе с корнем, но они отрастают снова через несколько недель. Подходит для чувствительной кожи."
                    :safety-value="75"
                    :efficiency-value="40"
                  >
                    <template #price>
                      <div class="text-sm text-gray-600">
                        <div v-if="timePeriod === 0">
                          {{ new Intl.NumberFormat('ru-RU').format(methodTotalCosts.sugaring) }} ₽
                        </div>
                        <div v-else-if="timePeriod === 1">
                          {{ new Intl.NumberFormat('ru-RU').format(methodTotalCosts.sugaring * 12) }} ₽
                        </div>
                        <div v-else>
                          {{ new Intl.NumberFormat('ru-RU').format(totalCostsByPeriod.sugaring) }} ₽
                        </div>
                      </div>
                    </template>
                  </MethodOption>

                  <!-- Laser epilation option -->
                  <MethodOption
                    v-model="userAnswers.method"
                    value="laser"
                    label="Лазерная эпиляция"
                    tooltip-text="Лазерная эпиляция — метод удаления волос с помощью лазерного луча, который воздействует на пигмент волоса. Эффективен для темных волос, но может быть менее эффективен для светлых или седых волос."
                    :safety-value="50"
                    :efficiency-value="75"
                    :disabled="!allowLaser"
                  >
                    <template #price>
                      <div class="text-sm text-gray-600">
                        <div v-if="timePeriod === 0">
                          {{ new Intl.NumberFormat('ru-RU').format(methodTotalCosts.laser) }} ₽
                        </div>
                        <div v-else-if="timePeriod === 1">
                          {{ new Intl.NumberFormat('ru-RU').format(methodTotalCosts.laser * 2) }} ₽
                        </div>
                        <div v-else>
                          {{ new Intl.NumberFormat('ru-RU').format(totalCostsByPeriod.laser) }} ₽
                        </div>
                      </div>
                    </template>
                  </MethodOption>
                </div>

                <!-- Time period selector -->
                <div
                  v-if="showCalculator"
                  class="mt-8"
                >
                  <div class="bg-main-white2 rounded-lg shadow-sm p-3">
                    <div class="flex space-x-1">
                      <button
                        v-for="period in [0, 1, 2, 3, 4, 5]"
                        :key="period"
                        class="py-1 px-2 text-sm rounded transition-all"
                        :class="[
                          timePeriod === period
                            ? 'bg-[#94475E] text-white font-medium font-bold'
                            : 'bg-main-white text-add2-black font-bold',
                        ]"
                        @click="timePeriod = period"
                      >
                        {{ period === 0 ? '1 сеанс' : period === 1 ? '1 год' : period + ' ' + (period <= 4 ? 'года' : 'лет') }}
                      </button>
                    </div>
                    <div class="mt-4 text-sm">
                      <p
                        v-if="mostEconomicalMethod"
                        class="font-medium text-add2-black"
                      >
                        Самый выгодный вариант: <b class="text-[#94475E]">{{ mostEconomicalMethod.label }}</b>
                      </p>
                      <p class="text-add2-black mt-1">
                        {{ mostEconomicalExplanation }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Final Step - Contact Information & Reward -->
              <div
                v-if="currentStep === 5"
                class="quiz-step"
              >
                <QuizHeading>
                  Последний шаг
                </QuizHeading>

                <div class="grid grid-cols-2 gap-6 mb-8 mt-6">
                  <!-- <label class="border rounded-lg p-4 cursor-pointer hover:border-[#FF6B9C] transition-all flex flex-col">
                    <input
                      v-model="userAnswers.reward"
                      type="radio"
                      value="free_session"
                      class="form-radio h-5 w-5 text-[#FF6B9C] self-start"
                    >
                    <div class="mt-3">
                      <h4 class="text-lg font-medium">Бесплатный пробный сеанс</h4>
                      <p class="text-gray-600 text-sm mt-1">
                        Попробуйте любую процедуру бесплатно
                      </p>
                    </div>
                  </label>

                  <label class="border rounded-lg p-4 cursor-pointer hover:border-[#FF6B9C] transition-all flex flex-col">
                    <input
                      v-model="userAnswers.reward"
                      type="radio"
                      value="consultation"
                      class="form-radio h-5 w-5 text-[#FF6B9C] self-start"
                    >
                    <div class="mt-3">
                      <h4 class="text-lg font-medium">Персональная консультация</h4>
                      <p class="text-gray-600 text-sm mt-1">
                        Детальный разбор вашей ситуации от мастера с опытом 13+ лет
                      </p>
                    </div>
                  </label> -->
                </div>

                <div class="space-y-4 mt-8">
                  <p class="text-lg text-[#232A36]">
                    Персональные рекомендации уже готовы! Оставьте свой номер телефона и забирайте их в нашем Telegram боте:
                  </p>
                  <div>
                    <input
                      v-model="userAnswers.phone"
                      placeholder="Введите номер телефона"
                      type="number"
                      class="px-4 py-2 border bg-white text-[#232A36] placeholder:text-[#232A36] border-gray-300 rounded-lg w-full max-w-md text-lg"
                    >
                  </div>

                  <div class="flex gap-4">
                    <button
                      class="mt-6 py-3 px-8 font-bold bg-gray-200 text-[#232A36] text-xl font-roboto rounded-md hover:bg-gray-300 transition-all shadow-lg flex items-center"
                      @click="prevStep"
                    >
                      <svg
                        class="w-6 h-6 mr-2"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
                      </svg>
                      Назад
                    </button>
                    <button
                      class="mt-6 py-3 px-8 font-bold bg-[#229ED9] text-white text-xl font-roboto rounded-md hover:bg-opacity-90 transition-all shadow-lg flex items-center"
                      @click="submitQuiz"
                    >
                      <svg
                        class="w-6 h-6 mr-2"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z" />
                      </svg>
                      Забрать подарок
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <!-- Navigation buttons -->
            <div
              v-if="currentStep < 5"
              class="flex justify-start gap-16 mt-6 transform -translate-x-[208px]"
            >
              <div
                v-if="currentStep > 1"
                class="w-36 h-14 px-10 py-4 bg-gradient-to-b bg-zinc-600 rounded-tl rounded-tr rounded-bl-[20px] rounded-br-[20px] inline-flex justify-center items-center gap-2.5 overflow-hidden cursor-pointer"
                @click="prevStep"
              >
                <div class="justify-start text-white text-2xl font-normal font-roboto">
                  Назад
                </div>
              </div>
              <div
                class="w-36 h-14 px-10 py-4 bg-gradient-to-b bg-zinc-600 rounded-tl rounded-tr rounded-bl-[20px] rounded-br-[20px] inline-flex justify-center items-center gap-2.5 overflow-hidden cursor-pointer"
                :class="{ 'opacity-50 cursor-not-allowed': !canProceed }"
                :disabled="!canProceed"
                @click="nextStep"
              >
                <div class="justify-start text-white text-2xl font-normal font-roboto">
                  Далее
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
/**
 * Beauty Quiz component for guiding users through a personalized hair removal quiz
 * Collects user preferences and subtly guides them toward electro-epilation
 */
import { ref, computed, watch, onMounted } from "vue";
import RadioOption from "./RadioOption.vue";
import CheckboxOption from "./CheckboxOption.vue";
import QuizHeading from "./QuizHeading.vue";
import ProgressBar from "./ProgressBar.vue";
import MethodOption from "./MethodOption.vue";

// Quiz storage key for localStorage
const STORAGE_KEY = "beauty_quiz_answers";

// Define quiz steps and state
const currentStep = ref(1);
const totalSteps = 5;

// Default user answers
const defaultAnswers = {
  age: null,
  problems: ["no_problems"],
  zones: [],
  method: null,
  zone: null,
  contactMethod: null,
  phone: null,
  reward: null,
};

// User answers storage
const userAnswers = ref({ ...defaultAnswers });

// Time period for savings calculation
const timePeriod = ref(2);

// Define base prices per zone for each method
const zonePrices = {
  electro: {
    legs: 8000,
    bikini: 6000,
    face: 3000,
    arms: 5000,
    back: 7000,
    stomach: 4000,
  },
  sugaring: {
    legs: 2500,
    bikini: 2000,
    face: 800,
    arms: 1500,
    back: 2000,
    stomach: 1200,
  },
  laser: {
    legs: 5000,
    bikini: 4000,
    face: 2000,
    arms: 3000,
    back: 4500,
    stomach: 2500,
  },
};

/**
 * Load saved quiz data from localStorage
 */
const loadSavedQuizData = () => {
  try {
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (savedData) {
      const parsedData = JSON.parse(savedData);

      // Restore user answers
      userAnswers.value = { ...defaultAnswers, ...parsedData.userAnswers };

      // Restore other state
      if (parsedData.currentStep) {
        currentStep.value = parsedData.currentStep;
      }

      if (parsedData.timePeriod) {
        timePeriod.value = parsedData.timePeriod;
      }
    }
  }
  catch (error) {
    console.error("Error loading saved quiz data:", error);
  }
};

/**
 * Save current quiz state to localStorage
 */
const saveQuizData = () => {
  try {
    const dataToSave = {
      userAnswers: userAnswers.value,
      currentStep: currentStep.value,
      timePeriod: timePeriod.value,
    };

    localStorage.setItem(STORAGE_KEY, JSON.stringify(dataToSave));
  }
  catch (error) {
    console.error("Error saving quiz data:", error);
  }
};

// Watch for changes to save automatically
watch([userAnswers, currentStep, timePeriod], () => {
  saveQuizData();
}, { deep: true });

// Load saved data on component mount
onMounted(() => {
  loadSavedQuizData();
});

// Computed properties for quiz logic
const allowLaser = computed(() => {
  // Only allow laser if user is over 18
  return userAnswers.value.age === "over18";
});

const canProceed = computed(() => {
  // Check if current step has required answers
  switch (currentStep.value) {
    case 1:
      return !!userAnswers.value.age;
    case 2:
      return userAnswers.value.problems && userAnswers.value.problems.length > 0;
    case 3:
      return !!userAnswers.value.zones && userAnswers.value.zones.length > 0;
    case 4:
      return !!userAnswers.value.method;
    case 5:
      return !!userAnswers.value.reward && validatePhone();
    default:
      return true;
  }
});

/**
 * Validates phone number input
 * @returns {boolean} If the phone is valid
 */
const validatePhone = () => {
  if (!userAnswers.value.phone) return false;

  // Проверяем, что номер содержит как минимум 10 цифр
  const digitsOnly = userAnswers.value.phone.replace(/\D/g, "");
  return digitsOnly.length >= 10;
};

/**
 * Move to the next quiz step if validation passes
 */
const nextStep = () => {
  if (canProceed.value && currentStep.value < totalSteps) {
    currentStep.value++;
    saveQuizData();
  }
};

/**
 * Move to the previous quiz step
 */
const prevStep = () => {
  if (currentStep.value > 1) {
    currentStep.value--;
    saveQuizData();
  }
};

/**
 * Submit the quiz results
 */
const submitQuiz = () => {
  if (!userAnswers.value.reward || !validatePhone()) {
    alert("Пожалуйста, выберите подарок и введите номер телефона");
    return;
  }

  // Here you would typically send the data to your backend
  console.log("Quiz submitted with answers:", userAnswers.value);

  // For now, just show alert
  alert("Спасибо за прохождение теста! Мы отправили вам ссылку на Telegram бота в SMS.");

  // After successful submission, you might want to clear the storage
  // localStorage.removeItem(STORAGE_KEY);
};

// Computed properties for calculator
const showCalculator = computed(() => {
  return userAnswers.value.zones.length > 0;
});

const methodTotalCosts = computed(() => {
  const costs = {
    electro: 0,
    sugaring: 0,
    laser: 0,
  };

  // Calculate initial costs for each method
  for (const zone of userAnswers.value.zones) {
    costs.electro += zonePrices.electro[zone];
    costs.sugaring += zonePrices.sugaring[zone];
    costs.laser += zonePrices.laser[zone];
  }

  return costs;
});

const totalCostsByPeriod = computed(() => {
  const costs = {
    electro: methodTotalCosts.value.electro,
    sugaring: methodTotalCosts.value.sugaring * 12 * timePeriod.value,
    laser: methodTotalCosts.value.laser * 2 * timePeriod.value,
  };

  // Calculate electro costs with 5% discount per year
  if (timePeriod.value > 1) {
    let electroCost = methodTotalCosts.value.electro;
    for (let year = 1; year < timePeriod.value; year++) {
      if (year === 1) {
        electroCost += methodTotalCosts.value.electro * 0.95; // 5% discount
      }
      // After 2 years, no cost for electro
    }
    costs.electro = electroCost;
  }

  return costs;
});

const mostEconomicalMethod = computed(() => {
  const methods = [
    { id: "electro", label: "Электроэпиляция", cost: totalCostsByPeriod.value.electro },
    { id: "sugaring", label: "Шугаринг", cost: totalCostsByPeriod.value.sugaring },
    { id: "laser", label: "Лазерная эпиляция", cost: totalCostsByPeriod.value.laser },
  ];

  return methods.reduce((min, current) =>
    current.cost < min.cost ? current : min,
  );
});

const mostEconomicalExplanation = computed(() => {
  if (timePeriod.value === 0) {
    return "Шугаринг является самым доступным вариантом для разовой процедуры";
  }
  else if (timePeriod.value === 1) {
    return "Электроэпиляция требует меньше сеансов в год по сравнению с другими методами";
  }
  else if (timePeriod.value <= 3) {
    return "Электроэпиляция становится выгоднее с каждым годом благодаря меньшему количеству поддерживающих процедур";
  }
  else {
    return "После 3 лет электроэпиляция требует минимальных поддерживающих процедур, что делает её самым экономичным вариантом в долгосрочной перспективе";
  }
});
</script>

<style scoped>
.quiz-container {
  position: relative;
}

.quiz-step {
  max-width: 700px;
  height: 100%;
}

/* Tooltip styles */
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
  background: white;
  transform: rotate(45deg);
  box-shadow: -2px 2px 3px rgba(0, 0, 0, 0.05);
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
</style>
