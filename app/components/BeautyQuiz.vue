<!--
  BeautyQuiz.vue
  Component for displaying a multi-step quiz about beauty and hair removal services
-->
<template>
  <div class="quiz-container w-full h-screen md:h-full">
    <div class="container mx-auto max-w-[1080px] h-full relative z-10 flex">
      <!-- Left side with flower vase image (moved to background) -->
      <div class="bottom-14 absolute -left-[208px] z-0">
        <img
          src="/images/quiz.png"
          alt="Цветы в вазе"
          class="w-[50vh] md:w-[425px] object-contain"
        >
      </div>

      <!-- Right side with quiz content -->
      <div class="pt-[5vh] md:pt-[120px] pb-8 md:pb-16 flex flex-col w-full h-full relative z-10">
        <!-- Quiz header -->
        <div class="relative w-full md:w-[630px] px-4">
          <h2 class="text-add2-black text-[clamp(1.25rem,6.5vw,2.5rem)] md:text-6xl font-bold font-raleway mb-[5vh] md:mb-10">
            Ответьте<br class="hidden md:block">
            на 5 вопросов<br>
            и получите <span class="text-add2-sat">подарок</span>
          </h2>
          <div class="absolute bottom-[32px] -right-[140px] h-[140px] w-[140px] gift-pulse hidden md:block">
            <img
              src="/images/gift.png"
              alt="Подарок"
              class="w-full h-full"
            >
          </div>
        </div>

        <div class="flex flex-col w-full h-full">
          <!-- Progress and heading container -->
          <div class="flex flex-grow items-start">
            <div class="flex items-start justify-between gap-4 md:gap-16 md:my-4 md:my-8 flex-wrap md:flex-nowrap">
              <!-- Progress steps -->
              <div class="relative flex items-center md:min-w-[300px] px-4">
                <div
                  v-for="step in totalSteps"
                  :key="step"
                  class="flex items-center"
                >
                  <div
                    class="w-[4vh] h-[4vh] md:w-8 md:h-8 mx-1 rounded-full flex items-center justify-center cursor-pointer transition-all font-medium text-sm md:text-base"
                    :class="[
                      step < currentStep ? 'bg-[#94475E] text-white'
                      : step === currentStep ? 'bg-[#ADDB88] text-add2-black ring-2 ring-add2-black'
                        : 'bg-[#454B57] text-gray-300',
                    ]"
                    @click="goToStep(step)"
                  >
                    {{ step }}
                  </div>
                  <div
                    v-if="step < totalSteps"
                    class="w-6 md:w-16 h-1"
                    :class="step < currentStep ? 'bg-[#94475E]' : 'bg-[#454B57]'"
                  />
                </div>
              </div>

              <!-- Step content container -->
              <div class="flex-grow">
                <!-- Single content block with conditional glass effect -->
                <div class="glass-container md:glass-container-none">
                  <!-- Step 1: Age question -->
                  <div v-if="currentStep === 1">
                    <QuizHeading>Сколько Вам лет?</QuizHeading>
                    <div class="space-y-2 md:space-y-4 mt-4 md:p-6 rounded-lg max-w-full md:max-w-[500px]">
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
                  <div v-if="currentStep === 2">
                    <QuizHeading
                      :show-back-button="true"
                      @back="prevStep"
                    >
                      Какие из проблем вам знакомы?
                    </QuizHeading>
                    <div class="space-y-2 md:space-y-4 mt-4 md:p-6 rounded-lg max-w-full md:max-w-[500px]">
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
                  <div v-if="currentStep === 3">
                    <QuizHeading
                      :show-back-button="true"
                      @back="prevStep"
                    >
                      Выберите зоны эпиляции
                    </QuizHeading>
                    <div class="space-y-2 md:space-y-4 mt-4 md:p-6 rounded-lg max-w-full md:max-w-[500px]">
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

                  <!-- Step 4: Method selection -->
                  <div v-if="currentStep === 4">
                    <QuizHeading
                      :show-back-button="true"
                      @back="prevStep"
                    >
                      Выберите метод эпиляции
                    </QuizHeading>
                    <div class="space-y-2 md:space-y-4 mt-4 md:p-6 rounded-lg max-w-full md:max-w-[500px]">
                      <!-- Electro epilation option -->
                      <MethodOption
                        v-model="userAnswers.method"
                        value="electro"
                        label="Электроэпиляция"
                        tooltip-text="Электроэпиляция — метод удаления волос с помощью электрического тока, который воздействует на волосяной фолликул. Это единственный метод, который обеспечивает перманентное удаление волос."
                        :safety-value="90"
                        :efficiency-value="95"
                      />

                      <!-- Sugaring option -->
                      <MethodOption
                        v-model="userAnswers.method"
                        value="sugaring"
                        label="Шугаринг"
                        tooltip-text="Шугаринг — метод удаления волос с помощью густой сахарной пасты. Удаляет волосы вместе с корнем, но они отрастают снова через несколько недель. Подходит для чувствительной кожи."
                        :safety-value="75"
                        :efficiency-value="40"
                      />

                      <!-- Laser epilation option -->
                      <MethodOption
                        v-model="userAnswers.method"
                        value="laser"
                        label="Лазерная эпиляция"
                        tooltip-text="Лазерная эпиляция — метод удаления волос с помощью лазерного луча, который воздействует на пигмент волоса. Эффективен для темных волос, но может быть менее эффективен для светлых или седых волос."
                        :safety-value="50"
                        :efficiency-value="75"
                        :disabled="!allowLaser"
                      />
                    </div>
                  </div>

                  <!-- Final Step - Contact Information & Reward -->
                  <div v-if="currentStep === 5">
                    <QuizHeading
                      :show-back-button="true"
                      @back="prevStep"
                    >
                      Последний шаг
                    </QuizHeading>
                    <div class="space-y-2 md:space-y-4 mt-4 md:p-6 rounded-lg max-w-full md:max-w-[500px]">
                      <div class="flex items-center gap-2 md:gap-4">
                        <img
                          src="/images/gift.png"
                          alt="Подарок"
                          class="w-10 h-10 md:w-16 md:h-16 hidden md:block"
                        >
                        <p class="text-sm md:text-lg text-[#232A36] leading-tight">
                          Персональные рекомендации уже готовы! Оставьте свой номер телефона и забирайте их в нашем Telegram боте:
                        </p>
                      </div>
                      <div class="flex items-center gap-2">
                        <input
                          v-model="userAnswers.phone"
                          placeholder="Введите номер телефона"
                          type="number"
                          class="px-3 py-2 md:px-4 md:py-2 border bg-white text-[#232A36] placeholder:text-[#232A36] border-gray-300 rounded-lg w-full max-w-md text-base text-sm md:text-lg"
                        >
                        <a
                          href="#"
                          class="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-[#229ED9] hover:bg-opacity-90 transition-all"
                        >
                          <span class="sr-only">Telegram</span>
                          <svg
                            class="w-5 h-5 md:w-6 md:h-6 fill-white"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM16.64 8.8C16.49 10.38 15.84 14.22 15.51 15.99C15.37 16.74 15.1 16.99 14.84 17.02C14.25 17.07 13.81 16.64 13.25 16.27C12.37 15.69 11.87 15.33 11.02 14.77C10.03 14.12 10.67 13.76 11.24 13.18C11.39 13.03 13.95 10.7 14 10.49C14.0069 10.4476 14.0031 10.4043 13.989 10.364C13.9748 10.3238 13.9507 10.2877 13.92 10.26C13.84 10.19 13.73 10.21 13.64 10.23C13.52 10.26 12.25 11.09 9.82 12.72C9.47 12.96 9.15 13.07 8.86 13.07C8.54 13.07 7.93 12.89 7.47 12.73C6.91 12.54 6.47 12.44 6.5 12.13C6.52 11.97 6.74 11.8 7.16 11.64C9.74 10.49 11.47 9.73 12.35 9.38C14.91 8.3 15.45 8.1 15.82 8.1C15.9 8.1 16.09 8.12 16.21 8.23C16.31 8.32 16.34 8.44 16.35 8.52C16.35 8.59 16.36 8.75 16.64 8.8Z" />
                          </svg>
                        </a>
                      </div>

                      <template v-if="userAnswers.method === 'laser'">
                        <p class="text-sm md:text-lg text-[#232A36] mt-2 md:mt-4 leading-tight">
                          К сожалению, лазерная эпиляция временно не оказывается. Мы сообщим вам, когда услуга станет доступна.
                        </p>
                        <p class="text-sm md:text-lg text-[#232A36] leading-tight">
                          Подпишитесь на наши соцсети, чтобы следить за новостями и акциями:
                        </p>
                        <div class="flex gap-2 md:gap-4">
                          <a
                            href="#"
                            class="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-[#229ED9] hover:bg-opacity-90 transition-all"
                          >
                            <span class="sr-only">Telegram</span>
                            <svg
                              class="w-4 h-4 md:w-6 md:h-6 fill-white"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM16.64 8.8C16.49 10.38 15.84 14.22 15.51 15.99C15.37 16.74 15.1 16.99 14.84 17.02C14.25 17.07 13.81 16.64 13.25 16.27C12.37 15.69 11.87 15.33 11.02 14.77C10.03 14.12 10.67 13.76 11.24 13.18C11.39 13.03 13.95 10.7 14 10.49C14.0069 10.4476 14.0031 10.4043 13.989 10.364C13.9748 10.3238 13.9507 10.2877 13.92 10.26C13.84 10.19 13.73 10.21 13.64 10.23C13.52 10.26 12.25 11.09 9.82 12.72C9.47 12.96 9.15 13.07 8.86 13.07C8.54 13.07 7.93 12.89 7.47 12.73C6.91 12.54 6.47 12.44 6.5 12.13C6.52 11.97 6.74 11.8 7.16 11.64C9.74 10.49 11.47 9.73 12.35 9.38C14.91 8.3 15.45 8.1 15.82 8.1C15.9 8.1 16.09 8.12 16.21 8.23C16.31 8.32 16.34 8.44 16.35 8.52C16.35 8.59 16.36 8.75 16.64 8.8Z" />
                            </svg>
                          </a>
                          <a
                            href="#"
                            class="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-[#4C75A3] hover:bg-opacity-90 transition-all"
                          >
                            <span class="sr-only">VK</span>
                            <svg
                              class="w-4 h-4 md:w-6 md:h-6 fill-white"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93V15.07C2 20.67 3.33 22 8.93 22H15.07C20.67 22 22 20.67 22 15.07V8.93C22 3.33 20.67 2 15.07 2ZM18.15 16.27H16.69C16.14 16.27 15.97 15.82 14.86 14.72C13.86 13.77 13.49 13.67 13.27 13.67C12.95 13.67 12.87 13.76 12.87 14.18V15.77C12.87 16.1 12.75 16.27 11.82 16.27C10.28 16.27 8.57 15.35 7.35 13.72C5.49 11.27 5 9.36 5 8.99C5 8.78 5.08 8.59 5.5 8.59H6.96C7.3 8.59 7.44 8.76 7.58 9.17C8.38 11.39 9.74 13.23 10.32 13.23C10.5 13.23 10.58 13.14 10.58 12.67V10.59C10.53 9.79 10.08 9.73 10.08 9.4C10.08 9.25 10.21 9.1 10.41 9.1H12.66C12.94 9.1 13.05 9.25 13.05 9.61V12.14C13.05 12.41 13.19 12.53 13.28 12.53C13.46 12.53 13.61 12.41 13.93 12.09C14.94 10.94 15.69 9.11 15.69 9.11C15.79 8.89 15.96 8.69 16.32 8.69H17.78C18.2 8.69 18.3 8.9 18.2 9.17C18.02 9.84 16.27 12.46 16.27 12.46C16.12 12.69 16.07 12.78 16.27 13.04C16.42 13.25 16.97 13.73 17.32 14.13C18.17 15.06 18.79 15.77 18.92 16.13C19.06 16.5 18.86 16.28 18.15 16.28V16.27Z" />
                            </svg>
                          </a>
                        </div>
                      </template>

                      <div class="flex flex-col md:flex-row gap-2 md:gap-4">
                        <button
                          class="mt-4 md:mt-6 py-2 md:py-3 px-4 md:px-8 font-bold bg-gray-200 text-[#232A36] text-base md:text-xl font-roboto rounded-md hover:bg-gray-300 transition-all shadow-lg flex items-center justify-center"
                          @click="prevStep"
                        >
                          <svg
                            class="w-4 h-4 md:w-6 md:h-6 mr-2"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
                          </svg>
                          Назад
                        </button>
                        <button
                          class="mt-4 md:mt-6 py-2 md:py-3 px-4 md:px-8 font-bold bg-[#229ED9] text-white text-base md:text-xl font-roboto rounded-md hover:bg-opacity-90 transition-all shadow-lg flex items-center justify-center"
                          @click="submitQuiz"
                        >
                          <svg
                            class="w-4 h-4 md:w-6 md:h-6 mr-2"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z" />
                          </svg>
                          {{ userAnswers.method === 'laser' ? 'Отправить' : 'Забрать подарок' }}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Navigation buttons -->
          <div
            v-if="currentStep < 5"
            class="flex justify-end w-full mt-6 transform md:translate-x-[10px] mb-[45px] md:mb-4 scale-75 md:scale-100"
          >
            <!-- <div
              class="relative cursor-pointer"
              @click="prevStep"
            >
              <img
                src="/images/quiz_btn.png"
                alt="Кнопка назад"
                class="w-36 h-14 object-cover"
              >
              <span class="absolute right-4 top-0 opacity-90 bottom-0 w-1/2 flex items-center justify-center text-white text-sm md:text-xl font-normal font-roboto">
                Назад
              </span>
            </div> -->
            <div
              class="relative cursor-pointer hidden md:block"
              @click="nextStep"
            >
              <img
                src="/images/quiz_btn.png"
                alt="Кнопка далее"
                class="w-36 h-14 object-cover"
              >
              <span class="absolute right-4 top-0 opacity-90 bottom-0 w-1/2 flex items-center justify-center text-white text-sm md:text-xl font-normal font-roboto">
                ----▶
              </span>
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

// Load saved quiz data from localStorage
const loadSavedQuizData = () => {
  try {
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      userAnswers.value = { ...defaultAnswers, ...parsedData.userAnswers };
      if (parsedData.currentStep) {
        currentStep.value = parsedData.currentStep;
      }
    }
  }
  catch (error) {
    console.error("Error loading saved quiz data:", error);
  }
};

// Save current quiz state to localStorage
const saveQuizData = () => {
  try {
    const dataToSave = {
      userAnswers: userAnswers.value,
      currentStep: currentStep.value,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(dataToSave));
  }
  catch (error) {
    console.error("Error saving quiz data:", error);
  }
};

// Watch for changes to save automatically
watch([userAnswers, currentStep], () => {
  saveQuizData();
}, { deep: true });

// Load saved data on component mount
onMounted(() => {
  loadSavedQuizData();
});

/**
 * Navigate to a specific step
 * @param {number} step - The step number to navigate to
 */
const goToStep = (step) => {
  if (step <= currentStep.value) {
    currentStep.value = step;
    saveQuizData();
  }
};

// Computed properties for quiz logic
const allowLaser = computed(() => {
  return userAnswers.value.age === "over18";
});

const canProceed = computed(() => {
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

  console.log("Quiz submitted with answers:", userAnswers.value);
  alert("Спасибо за прохождение теста! Мы отправили вам ссылку на Telegram бота в SMS.");
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

/* Glass effect styles */
.glass-container {
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 1;
  padding: 1rem;
  border-radius: 0.5rem;
}

.md\:glass-container-none {
  @media (min-width: 768px) {
    background: none;
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
    box-shadow: none;
    padding: 0;
  }
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

/* Mobile-specific styles */
@media (max-width: 768px) {
  .quiz-container {
    padding: 0 1rem;
  }

  .gift-pulse {
    display: none;
  }

  .quiz-step {
    max-width: 100%;
  }
}
</style>
