<!--
  BeautyCta.vue
  Component for displaying call-to-action section with quiz and contact form
-->
<template>
  <div class="relative w-full py-20 bg-[#563C34] overflow-hidden">
    <div class="container mx-auto px-4 max-w-[1080px] relative z-10">
      <!-- Section content -->
      <div class="flex flex-col lg:flex-row items-center justify-between">
        <div class="lg:w-1/2 mb-10 lg:mb-0">
          <h2 class="text-5xl font-bold font-raleway text-white mb-6">
            Остались <span class="text-[#FFFAE4]">вопросы?</span>
          </h2>
          <p class="text-xl text-white font-roboto mb-10">
            Оставьте заявку на консультацию, и мы перезвоним вам в течение 15 минут,
            чтобы ответить на все вопросы и подобрать оптимальное решение.
          </p>

          <div class="flex flex-col sm:flex-row gap-4 mb-12">
            <button
              class="py-4 px-8 font-bold bg-[#93BA73] text-white text-lg font-roboto rounded-md hover:bg-opacity-90 transition-all shadow-lg"
              @click="scrollToQuiz"
            >
              Пройти тест
            </button>
            <button
              class="py-4 px-8 font-bold bg-transparent border-2 border-white text-white text-lg font-roboto rounded-md hover:bg-white hover:bg-opacity-10 transition-all"
              @click="showForm = true"
            >
              Оставить заявку
            </button>
          </div>

          <div class="text-white font-roboto">
            <div class="flex items-center mb-2">
              <svg
                class="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span>+7 (999) 123-45-67</span>
            </div>
            <div class="flex items-center">
              <svg
                class="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <span>info@nikole.ru</span>
            </div>
          </div>
        </div>

        <!-- Contact form -->
        <div
          v-if="showForm"
          class="lg:w-1/2 bg-white p-8 rounded-lg shadow-xl max-w-md w-full"
        >
          <h3 class="text-2xl font-bold font-raleway text-additional-black mb-6">
            Оставить заявку
          </h3>

          <form @submit.prevent="submitForm">
            <div class="mb-4">
              <label
                class="block text-gray-700 text-sm font-medium mb-2 font-roboto"
                for="phone"
              >
                Телефон*
              </label>
              <input
                id="phone"
                v-model="form.phone"
                type="tel"
                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#93BA73] focus:border-transparent font-roboto"
                required
              >
            </div>

            <div class="mb-6">
              <label class="flex items-start">
                <input
                  v-model="form.agreement"
                  type="checkbox"
                  class="mt-1 mr-2"
                  required
                >
                <span class="text-xs text-gray-600 font-roboto">
                  Я согласен на обработку персональных данных в соответствии с <a
                    href="#"
                    class="text-[#93BA73] hover:underline"
                  >политикой конфиденциальности</a>
                </span>
              </label>
            </div>

            <button
              type="submit"
              class="w-full py-3 bg-[#93BA73] text-white font-medium rounded-md hover:bg-opacity-90 transition-all font-roboto"
              :disabled="isSubmitting"
            >
              <span v-if="isSubmitting">Отправка...</span>
              <span v-else>Отправить</span>
            </button>
          </form>
        </div>

        <!-- Image / Alternate content when form is hidden -->
        <div
          v-else
          class="lg:w-1/2 flex justify-center"
        >
          <!-- <img
            src="/images/cta-image.png"
            alt="Консультация"
            class="max-w-sm w-full object-contain"
          > -->
        </div>
      </div>
    </div>

    <!-- Background decorative elements -->
    <div class="absolute top-0 right-0 opacity-10">
      <svg
        width="400"
        height="400"
        viewBox="0 0 400 400"
      >
        <circle
          cx="200"
          cy="200"
          r="150"
          fill="none"
          stroke="#FFFAE4"
          stroke-width="2"
        />
        <circle
          cx="200"
          cy="200"
          r="120"
          fill="none"
          stroke="#FFFAE4"
          stroke-width="2"
        />
        <circle
          cx="200"
          cy="200"
          r="90"
          fill="none"
          stroke="#FFFAE4"
          stroke-width="2"
        />
      </svg>
    </div>
    <div class="absolute bottom-0 left-0 opacity-10">
      <svg
        width="300"
        height="300"
        viewBox="0 0 300 300"
      >
        <rect
          x="50"
          y="50"
          width="200"
          height="200"
          fill="none"
          stroke="#FFFAE4"
          stroke-width="2"
        />
        <rect
          x="80"
          y="80"
          width="140"
          height="140"
          fill="none"
          stroke="#FFFAE4"
          stroke-width="2"
        />
        <rect
          x="110"
          y="110"
          width="80"
          height="80"
          fill="none"
          stroke="#FFFAE4"
          stroke-width="2"
        />
      </svg>
    </div>
  </div>
</template>

<script setup>
/**
 * CTA component with contact form and call-to-action buttons
 * Allows users to take a quiz or leave contact information for consultation
 */
import { ref } from "vue";

/**
 * Controls visibility of the contact form
 * @type {Ref<boolean>}
 */
const showForm = ref(false);

/**
 * Form submission state
 * @type {Ref<boolean>}
 */
const isSubmitting = ref(false);

/**
 * Form data object
 * @type {Ref<{name: string, phone: string, message: string, agreement: boolean}>}
 */
const form = ref({
  name: "",
  phone: "",
  message: "",
  agreement: false,
});

/**
 * Emits event to parent to scroll to quiz section
 */
const scrollToQuiz = () => {
  document.getElementById("quiz-section").scrollIntoView({ behavior: "smooth" });
};

/**
 * Handles form submission
 */
const submitForm = async () => {
  isSubmitting.value = true;

  try {
    // Simulating API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Reset form after successful submission
    form.value = {
      name: "",
      phone: "",
      message: "",
      agreement: false,
    };

    // Hide form and show success message
    showForm.value = false;
    alert("Спасибо! Ваша заявка отправлена. Мы свяжемся с вами в ближайшее время.");
  }
  catch (error) {
    alert("Произошла ошибка при отправке заявки. Пожалуйста, попробуйте еще раз.");
  }
  finally {
    isSubmitting.value = false;
  }
};
</script>
