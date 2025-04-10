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

              <!-- Step 2: Method selection with comparison table -->
              <div
                v-if="currentStep === 2"
                class="quiz-step"
              >
                <QuizHeading variant="dark">
                  Выберите способ
                </QuizHeading>

                <div class="mb-2 flex">
                  <div class="w-[180px]" />
                  <div class="flex flex-1 justify-between text-center">
                    <div class="w-[160px] text-gray-600 font-medium">
                      безопасность
                    </div>
                    <div class="w-[160px] text-gray-600 font-medium">
                      эффективность
                    </div>
                  </div>
                </div>

                <div class="space-y-6">
                  <!-- Electro-epilation option -->
                  <div class="flex items-center">
                    <div class="w-[180px] flex items-center">
                      <span class="inline-flex items-center justify-center w-5 h-5 mr-2 rounded-full bg-gray-200 text-gray-600">?</span>
                      <RadioOption
                        v-model="userAnswers.method"
                        value="electro"
                      >
                        Электроэпиляция
                      </RadioOption>
                    </div>
                    <div class="flex flex-1 justify-between">
                      <div class="w-[160px] px-3">
                        <!-- Safety rating -->
                        <div class="rating-bar w-full">
                          <ProgressBar
                            :model-value="85"
                            :min="0"
                            :max="100"
                            :height="18"
                            bg-color="bg-[#454B57]"
                            progress-color="bg-sup2-white2"
                            full-width
                          />
                        </div>
                      </div>
                      <div class="w-[160px] px-3">
                        <!-- Effectiveness rating -->
                        <div class="rating-bar w-full">
                          <ProgressBar
                            :model-value="95"
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

                  <!-- Sugaring option -->
                  <div class="flex items-center">
                    <div class="w-[180px] flex items-center">
                      <span class="inline-flex items-center justify-center w-5 h-5 mr-2 rounded-full bg-gray-200 text-gray-600">?</span>
                      <RadioOption
                        v-model="userAnswers.method"
                        value="sugaring"
                      >
                        Шугаринг
                      </RadioOption>
                    </div>
                    <div class="flex flex-1 justify-between">
                      <div class="w-[160px] px-3">
                        <ProgressBar
                          :model-value="75"
                          :min="0"
                          :max="100"
                          :height="18"
                          bg-color="bg-[#454B57]"
                          progress-color="bg-sup2-white2"
                          full-width
                        />
                      </div>
                      <div class="w-[160px] px-3">
                        <ProgressBar
                          :model-value="40"
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

                  <!-- Laser epilation option -->
                  <div class="flex items-center">
                    <div class="w-[180px] flex items-center">
                      <span class="inline-flex items-center justify-center w-5 h-5 mr-2 rounded-full bg-gray-200 text-gray-600">?</span>
                      <RadioOption
                        v-model="userAnswers.method"
                        value="laser"
                        :disabled="!allowLaser"
                      >
                        Лазерная эпиляция
                      </RadioOption>
                    </div>
                    <div class="flex flex-1 justify-between">
                      <div class="w-[160px] px-3">
                        <ProgressBar
                          :model-value="50"
                          :min="0"
                          :max="100"
                          :height="18"
                          bg-color="bg-[#454B57]"
                          progress-color="bg-sup2-white2"
                          full-width
                        />
                      </div>
                      <div class="w-[160px] px-3">
                        <ProgressBar
                          :model-value="75"
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
              </div>

              <!-- Step 3: Zone selection with prices -->
              <div
                v-if="currentStep === 3"
                class="quiz-step"
              >
                <QuizHeading variant="dark">
                  Выберите зону
                </QuizHeading>

                <div class="grid grid-cols-2 gap-x-12 gap-y-4 mb-6">
                  <!-- Method prices -->
                  <div class="col-span-1">
                    <div
                      v-if="userAnswers.method === 'electro'"
                      class="flex items-center mb-2"
                    >
                      <span class="inline-flex items-center justify-center w-5 h-5 mr-2 rounded-full bg-gray-200 text-gray-600">?</span>
                      <span class="text-lg">Электроэпиляция</span>
                      <span class="ml-3 px-2 py-1 bg-[#B2F48E] rounded text-sm">1000 рублей</span>
                    </div>
                    <div
                      v-if="userAnswers.method === 'sugaring'"
                      class="flex items-center mb-2"
                    >
                      <span class="inline-flex items-center justify-center w-5 h-5 mr-2 rounded-full bg-gray-200 text-gray-600">?</span>
                      <span class="text-lg">Шугаринг</span>
                      <span class="ml-3 px-2 py-1 bg-[#B2F48E] rounded text-sm">5000 рублей</span>
                    </div>
                    <div
                      v-if="userAnswers.method === 'laser'"
                      class="flex items-center mb-2"
                    >
                      <span class="inline-flex items-center justify-center w-5 h-5 mr-2 rounded-full bg-gray-200 text-gray-600">?</span>
                      <span class="text-lg">Лазерная эпиляция</span>
                      <span class="ml-3 px-2 py-1 bg-[#B2F48E] rounded text-sm">3000 рублей</span>
                    </div>
                  </div>

                  <!-- Zone selection -->
                  <div class="col-span-1 grid grid-cols-2 gap-4">
                    <RadioOption
                      v-model="userAnswers.zone"
                      value="legs"
                    >
                      Ноги
                    </RadioOption>
                    <RadioOption
                      v-model="userAnswers.zone"
                      value="bikini"
                    >
                      Бикини
                    </RadioOption>
                    <RadioOption
                      v-model="userAnswers.zone"
                      value="face"
                    >
                      Лицо
                    </RadioOption>
                    <RadioOption
                      v-model="userAnswers.zone"
                      value="arms"
                    >
                      Руки
                    </RadioOption>
                    <RadioOption
                      v-model="userAnswers.zone"
                      value="back"
                    >
                      Спина
                    </RadioOption>
                    <RadioOption
                      v-model="userAnswers.zone"
                      value="stomach"
                    >
                      Живот
                    </RadioOption>
                  </div>
                </div>

                <!-- Savings calculator with interactive slider -->
                <div class="mt-8">
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
                        :height="18"
                        bg-color="bg-[#454B57]"
                        progress-color="bg-sup2-white2"
                        width="100%"
                        :interactive="true"
                        :show-labels="true"
                        :labels="['1 год', '2 года', '3 года', '4 года', '5 лет']"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <!-- Final Steps - Contact Information -->
              <div
                v-if="currentStep === 4"
                class="quiz-step"
              >
                <QuizHeading variant="dark">
                  Выберите канал для связи
                </QuizHeading>
                <div class="space-y-4 ml-4">
                  <RadioOption
                    v-model="userAnswers.contactMethod"
                    value="telegram"
                  >
                    Telegram
                  </RadioOption>
                  <RadioOption
                    v-model="userAnswers.contactMethod"
                    value="whatsapp"
                  >
                    WhatsApp
                  </RadioOption>
                  <RadioOption
                    v-model="userAnswers.contactMethod"
                    value="phone"
                  >
                    Телефон
                  </RadioOption>
                </div>

                <div
                  v-if="userAnswers.contactMethod"
                  class="mt-8"
                >
                  <label class="block text-lg mb-2">Ваш номер телефона:</label>
                  <input
                    v-model="userAnswers.phone"
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    class="px-4 py-2 border border-gray-300 rounded-lg w-full max-w-md text-lg"
                  >
                </div>
              </div>

              <!-- Final Step - Reward & Submit -->
              <div
                v-if="currentStep === 5"
                class="quiz-step"
              >
                <QuizHeading variant="dark">
                  Выберите подарок
                </QuizHeading>
                <p class="text-gray-600 mb-6">
                  За прохождение теста мы дарим вам один из подарков на выбор:
                </p>

                <div class="grid grid-cols-2 gap-6 mb-8">
                  <label class="border rounded-lg p-4 cursor-pointer hover:border-[#FF6B9C] transition-all flex flex-col">
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
                  </label>
                </div>

                <button
                  class="py-3 px-8 font-bold bg-[#FF6B9C] text-white text-xl font-roboto rounded-md hover:bg-opacity-90 transition-all shadow-lg"
                  @click="submitQuiz"
                >
                  Получить подарок
                </button>
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
import { ref, computed } from "vue";
import RadioOption from "./RadioOption.vue";
import QuizHeading from "./QuizHeading.vue";
import ProgressBar from "./ProgressBar.vue";
/**
 * RatingBar and SavingsCalculator are kept for backward compatibility
 * with existing code that might import them, but we're now using ProgressBar directly
 */

// Define quiz steps and state
const currentStep = ref(1);
const totalSteps = 5;

// User answers storage
const userAnswers = ref({
  age: null,
  method: null,
  zone: null,
  contactMethod: null,
  phone: null,
  reward: null,
});

// Time period for savings calculation
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
 * Calculate savings based on selected time period and method
 */
const calculatedSavings = computed(() => {
  const baseAmount = getSavingsBaseAmount.value;
  const yearlyMultiplier = 1.1;

  let total = 0;
  for (let i = 0; i < Math.round(timePeriod.value); i++) {
    total += baseAmount * Math.pow(yearlyMultiplier, i);
  }
  return Math.round(total);
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
      return !!userAnswers.value.method;
    case 3:
      return !!userAnswers.value.zone;
    case 4:
      return !!userAnswers.value.contactMethod && validatePhone();
    default:
      return true;
  }
});

/**
 * Get base amount for savings calculator based on selected method
 */
const getSavingsBaseAmount = computed(() => {
  switch (userAnswers.value.method) {
    case "electro":
      return 6000;
    case "sugaring":
      return 12000;
    case "laser":
      return 8000;
    default:
      return 6000;
  }
});

/**
 * Validates phone number input
 * @returns {boolean} If the phone is valid
 */
const validatePhone = () => {
  if (!userAnswers.value.phone) return false;
  // Simple validation - can be enhanced
  return userAnswers.value.phone.length >= 10;
};

/**
 * Move to the next quiz step if validation passes
 */
const nextStep = () => {
  if (canProceed.value && currentStep.value < totalSteps) {
    currentStep.value++;
  }
};

/**
 * Move to the previous quiz step
 */
const prevStep = () => {
  if (currentStep.value > 1) {
    currentStep.value--;
  }
};

/**
 * Submit the quiz results
 */
const submitQuiz = () => {
  if (!userAnswers.value.reward) return;

  // Here you would typically send the data to your backend
  console.log("Quiz submitted with answers:", userAnswers.value);

  // For now, just show alert
  alert("Спасибо за прохождение теста! Мы свяжемся с вами в ближайшее время.");
};
</script>

<style scoped>
.quiz-container {
  position: relative;
}

.quiz-step {
  max-width: 700px;
  height: 100%;
}
</style>
