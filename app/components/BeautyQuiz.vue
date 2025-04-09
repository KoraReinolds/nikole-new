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
      <div class="pt-[120px] pb-16 flex flex-col">
        <!-- Quiz header -->
        <div class="mb-8">
          <h2 class="text-add2-black text-6xl font-bold font-raleway">
            Ответьте на 5 вопросов<br>
            и получите <span class="text-add2-sat">подарок</span>
          </h2>

          <!-- Progress bar -->
          <div class="relative w-[555px] h-4 mt-10">
            <div class="absolute w-[555px] h-[18px] bg-[#454B57] rounded-lg" />
            <div
              class="absolute left-[2px] top-[2px] h-[14px] bg-sup2-white2 rounded-lg shadow-[0px_0px_0px_0px_rgba(173,219,136,1.00)]"
              :style="{ width: `${(currentStep / totalSteps) * 555 - 4}px` }"
            />
          </div>
        </div>

        <!-- Quiz content - changes based on current step -->
        <div class="flex-grow">
          <!-- Step 1: Age question -->
          <div
            v-if="currentStep === 1"
            class="quiz-step"
          >
            <h3 class="text-[#333] text-2xl font-medium mb-8">
              Сколько Вам лет?
            </h3>
            <div class="space-y-4 ml-4">
              <label class="flex items-center cursor-pointer">
                <input
                  v-model="userAnswers.age"
                  type="radio"
                  value="under18"
                  class="form-radio h-5 w-5 text-[#FF6B9C]"
                >
                <span class="ml-4 text-lg">До 18</span>
              </label>
              <label class="flex items-center cursor-pointer">
                <input
                  v-model="userAnswers.age"
                  type="radio"
                  value="over18"
                  class="form-radio h-5 w-5 text-[#FF6B9C]"
                >
                <span class="ml-4 text-lg">Больше 18</span>
              </label>
            </div>
          </div>

          <!-- Step 2: Method selection with comparison table -->
          <div
            v-if="currentStep === 2"
            class="quiz-step"
          >
            <h3 class="text-[#333] text-2xl font-medium mb-6">
              Выберите способ
            </h3>

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
                  <label class="flex items-center cursor-pointer">
                    <input
                      v-model="userAnswers.method"
                      type="radio"
                      value="electro"
                      class="form-radio h-5 w-5 text-[#FF6B9C]"
                    >
                    <span class="ml-2 text-lg">Электроэпиляция</span>
                  </label>
                </div>
                <div class="flex flex-1 justify-between">
                  <div class="w-[160px] px-3">
                    <div class="h-[8px] w-full bg-gray-200 rounded-full overflow-hidden">
                      <div
                        class="h-full bg-gradient-to-r from-[#8BC34A] to-[#CDDC39]"
                        style="width: 85%"
                      />
                    </div>
                  </div>
                  <div class="w-[160px] px-3">
                    <div class="h-[8px] w-full bg-gray-200 rounded-full overflow-hidden">
                      <div
                        class="h-full bg-gradient-to-r from-[#8BC34A] to-[#CDDC39]"
                        style="width: 95%"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <!-- Sugaring option -->
              <div class="flex items-center">
                <div class="w-[180px] flex items-center">
                  <span class="inline-flex items-center justify-center w-5 h-5 mr-2 rounded-full bg-gray-200 text-gray-600">?</span>
                  <label class="flex items-center cursor-pointer">
                    <input
                      v-model="userAnswers.method"
                      type="radio"
                      value="sugaring"
                      class="form-radio h-5 w-5 text-[#FF6B9C]"
                    >
                    <span class="ml-2 text-lg">Шугаринг</span>
                  </label>
                </div>
                <div class="flex flex-1 justify-between">
                  <div class="w-[160px] px-3">
                    <div class="h-[8px] w-full bg-gray-200 rounded-full overflow-hidden">
                      <div
                        class="h-full bg-gradient-to-r from-[#8BC34A] to-[#CDDC39]"
                        style="width: 75%"
                      />
                    </div>
                  </div>
                  <div class="w-[160px] px-3">
                    <div class="h-[8px] w-full bg-gray-200 rounded-full overflow-hidden">
                      <div
                        class="h-full bg-gradient-to-r from-[#8BC34A] to-[#CDDC39]"
                        style="width: 40%"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <!-- Laser epilation option -->
              <div class="flex items-center">
                <div class="w-[180px] flex items-center">
                  <span class="inline-flex items-center justify-center w-5 h-5 mr-2 rounded-full bg-gray-200 text-gray-600">?</span>
                  <label class="flex items-center cursor-pointer">
                    <input
                      v-model="userAnswers.method"
                      type="radio"
                      value="laser"
                      class="form-radio h-5 w-5 text-[#FF6B9C]"
                      :disabled="!allowLaser"
                    >
                    <span
                      class="ml-2 text-lg"
                      :class="{ 'text-gray-400': !allowLaser }"
                    >Лазерная эпиляция</span>
                  </label>
                </div>
                <div class="flex flex-1 justify-between">
                  <div class="w-[160px] px-3">
                    <div class="h-[8px] w-full bg-gray-200 rounded-full overflow-hidden">
                      <div
                        class="h-full bg-gradient-to-r from-[#8BC34A] to-[#CDDC39]"
                        style="width: 50%"
                      />
                    </div>
                  </div>
                  <div class="w-[160px] px-3">
                    <div class="h-[8px] w-full bg-gray-200 rounded-full overflow-hidden">
                      <div
                        class="h-full bg-gradient-to-r from-[#8BC34A] to-[#CDDC39]"
                        style="width: 75%"
                      />
                    </div>
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
            <h3 class="text-[#333] text-2xl font-medium mb-6">
              Выберите зону
            </h3>

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
                <label class="flex items-center cursor-pointer">
                  <input
                    v-model="userAnswers.zone"
                    type="radio"
                    value="legs"
                    class="form-radio h-5 w-5 text-[#FF6B9C]"
                  >
                  <span class="ml-2">Ноги</span>
                </label>
                <label class="flex items-center cursor-pointer">
                  <input
                    v-model="userAnswers.zone"
                    type="radio"
                    value="bikini"
                    class="form-radio h-5 w-5 text-[#FF6B9C]"
                  >
                  <span class="ml-2">Бикини</span>
                </label>
                <label class="flex items-center cursor-pointer">
                  <input
                    v-model="userAnswers.zone"
                    type="radio"
                    value="face"
                    class="form-radio h-5 w-5 text-[#FF6B9C]"
                  >
                  <span class="ml-2">Лицо</span>
                </label>
                <label class="flex items-center cursor-pointer">
                  <input
                    v-model="userAnswers.zone"
                    type="radio"
                    value="arms"
                    class="form-radio h-5 w-5 text-[#FF6B9C]"
                  >
                  <span class="ml-2">Руки</span>
                </label>
                <label class="flex items-center cursor-pointer">
                  <input
                    v-model="userAnswers.zone"
                    type="radio"
                    value="back"
                    class="form-radio h-5 w-5 text-[#FF6B9C]"
                  >
                  <span class="ml-2">Спина</span>
                </label>
                <label class="flex items-center cursor-pointer">
                  <input
                    v-model="userAnswers.zone"
                    type="radio"
                    value="stomach"
                    class="form-radio h-5 w-5 text-[#FF6B9C]"
                  >
                  <span class="ml-2">Живот</span>
                </label>
              </div>
            </div>

            <!-- Savings calculation -->
            <div class="mt-8">
              <div class="flex items-center mb-2">
                <span class="text-lg">За 2 года вы сэкономите от</span>
                <span class="ml-2 text-lg font-bold px-3 py-1 bg-[#4CAF50] text-white rounded-md">12000</span>
                <span class="ml-2 text-lg">рублей</span>
              </div>
              <div class="flex items-center">
                <span class="text-lg mr-2">Посчитайте выгоду →</span>
                <div class="w-[240px] h-[12px] bg-gray-200 rounded-full overflow-hidden">
                  <div
                    class="h-full bg-gradient-to-r from-[#8BC34A] to-[#CDDC39]"
                    style="width: 65%"
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
            <h3 class="text-[#333] text-2xl font-medium mb-8">
              Выберите канал для связи
            </h3>
            <div class="space-y-4 ml-4">
              <label class="flex items-center cursor-pointer">
                <input
                  v-model="userAnswers.contactMethod"
                  type="radio"
                  value="telegram"
                  class="form-radio h-5 w-5 text-[#FF6B9C]"
                >
                <span class="ml-4 text-lg">Telegram</span>
              </label>
              <label class="flex items-center cursor-pointer">
                <input
                  v-model="userAnswers.contactMethod"
                  type="radio"
                  value="whatsapp"
                  class="form-radio h-5 w-5 text-[#FF6B9C]"
                >
                <span class="ml-4 text-lg">WhatsApp</span>
              </label>
              <label class="flex items-center cursor-pointer">
                <input
                  v-model="userAnswers.contactMethod"
                  type="radio"
                  value="phone"
                  class="form-radio h-5 w-5 text-[#FF6B9C]"
                >
                <span class="ml-4 text-lg">Телефон</span>
              </label>
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
            <h3 class="text-[#333] text-2xl font-medium mb-4">
              Выберите подарок
            </h3>
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
          class="flex justify-center mt-6 space-x-4"
        >
          <button
            v-if="currentStep > 1"
            class="py-2 px-6 bg-gray-700 text-white rounded-md hover:bg-gray-800 transition-colors"
            @click="prevStep"
          >
            Назад
          </button>
          <button
            class="py-2 px-6 bg-gray-700 text-white rounded-md hover:bg-gray-800 transition-colors"
            :disabled="!canProceed"
            @click="nextStep"
          >
            Далее
          </button>
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

/* Custom styling for radio buttons */
.form-radio {
  appearance: none;
  width: 18px;
  height: 18px;
  border: 2px solid #FF6B9C;
  border-radius: 50%;
  outline: none;
  transition: all 0.2s ease;
}

.form-radio:checked {
  background-color: #FF6B9C;
  box-shadow: inset 0 0 0 3px white;
}

.form-radio:disabled {
  border-color: #ddd;
  background-color: #f5f5f5;
}

.quiz-step {
  max-width: 700px;
}
</style>
