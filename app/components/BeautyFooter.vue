<!--
  BeautyFooter.vue
  Component for displaying the website footer with contact information, CTA section and social links
-->
<template>
  <!-- CTA section -->
  <footer
    class="relative w-full py-20 overflow-hidden"
    style="background: radial-gradient(circle, #563C34 0%, #402E28 30%, #16080E 100%)"
  >
    <div class="container mx-auto px-4 max-w-[1080px] relative z-10">
      <!-- Section content -->
      <div class="flex flex-col lg:flex-row items-center justify-between">
        <div class="lg:w-1/2 mb-10 lg:mb-0">
          <h2 class="text-main-white2 text-5xl font-bold font-raleway mb-6">
            Остались <span class="pink-text-gradient">вопросы?</span>
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

    <div class="container mx-auto px-4 max-w-[1080px]">
      <!-- Bottom links -->
      <div class="mt-12 pt-8 border-t border-main-gray">
        <div class="flex flex-wrap justify-between items-center">
          <div class="flex items-center gap-4">
            <span class="text-main-gray font-roboto text-sm">г. Мурманск, ул. Юбилейная 9-32</span>
            <span class="text-main-gray font-roboto text-sm mx-4">|</span>
            <div class="flex space-x-3">
              <a
                href="#"
                class="w-8 h-8 rounded-full bg-[#563C34] flex items-center justify-center hover:bg-[#93BA73] transition-colors"
                aria-label="ВКонтакте"
              ><svg
                class="w-4 h-4 fill-current"
                viewBox="0 0 24 24"
              ><path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93V15.07C2 20.67 3.33 22 8.93 22H15.07C20.67 22 22 20.67 22 15.07V8.93C22 3.33 20.67 2 15.07 2ZM18.15 16.27H16.69C16.14 16.27 15.97 15.82 14.86 14.72C13.86 13.77 13.49 13.67 13.27 13.67C12.95 13.67 12.87 13.76 12.87 14.18V15.77C12.87 16.1 12.75 16.27 11.82 16.27C10.28 16.27 8.57 15.35 7.35 13.72C5.49 11.27 5 9.36 5 8.99C5 8.78 5.08 8.59 5.5 8.59H6.96C7.3 8.59 7.44 8.76 7.58 9.17C8.38 11.39 9.74 13.23 10.32 13.23C10.5 13.23 10.58 13.14 10.58 12.67V10.59C10.53 9.79 10.08 9.73 10.08 9.4C10.08 9.25 10.21 9.1 10.41 9.1H12.66C12.94 9.1 13.05 9.25 13.05 9.61V12.14C13.05 12.41 13.19 12.53 13.28 12.53C13.46 12.53 13.61 12.41 13.93 12.09C14.94 10.94 15.69 9.11 15.69 9.11C15.79 8.89 15.96 8.69 16.32 8.69H17.78C18.2 8.69 18.3 8.9 18.2 9.17C18.02 9.84 16.27 12.46 16.27 12.46C16.12 12.69 16.07 12.78 16.27 13.04C16.42 13.25 16.97 13.73 17.32 14.13C18.17 15.06 18.79 15.77 18.92 16.13C19.06 16.5 18.86 16.28 18.15 16.28V16.27Z" /></svg></a>
              <a
                href="#"
                class="w-8 h-8 rounded-full bg-[#563C34] flex items-center justify-center hover:bg-[#93BA73] transition-colors"
                aria-label="Telegram"
              ><svg
                class="w-4 h-4 fill-current"
                viewBox="0 0 24 24"
              ><path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM16.64 8.8C16.49 10.38 15.84 14.22 15.51 15.99C15.37 16.74 15.1 16.99 14.84 17.02C14.25 17.07 13.81 16.64 13.25 16.27C12.37 15.69 11.87 15.33 11.02 14.77C10.03 14.12 10.67 13.76 11.24 13.18C11.39 13.03 13.95 10.7 14 10.49C14.0069 10.4476 14.0031 10.4043 13.989 10.364C13.9748 10.3238 13.9507 10.2877 13.92 10.26C13.84 10.19 13.73 10.21 13.64 10.23C13.52 10.26 12.25 11.09 9.82 12.72C9.47 12.96 9.15 13.07 8.86 13.07C8.54 13.07 7.93 12.89 7.47 12.73C6.91 12.54 6.47 12.44 6.5 12.13C6.52 11.97 6.74 11.8 7.16 11.64C9.74 10.49 11.47 9.73 12.35 9.38C14.91 8.3 15.45 8.1 15.82 8.1C15.9 8.1 16.09 8.12 16.21 8.23C16.31 8.32 16.34 8.44 16.35 8.52C16.35 8.59 16.36 8.75 16.64 8.8Z" /></svg></a>
              <a
                href="#"
                class="w-8 h-8 rounded-full bg-[#563C34] flex items-center justify-center hover:bg-[#93BA73] transition-colors"
                aria-label="Instagram"
              ><svg
                class="w-4 h-4 fill-current"
                viewBox="0 0 24 24"
              ><path
                d="M16 3H8C5.23858 3 3 5.23858 3 8V16C3 18.7614 5.23858 21 8 21H16C18.7614 21 21 18.7614 21 16V8C21 5.23858 18.7614 3 16 3Z"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                fill="none"
              /><path
                d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                fill="none"
              /><path
                d="M17.5 6.5H17.51"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              /></svg></a>
            </div>
          </div>
          <div class="text-xs text-main-gray font-roboto">
            © 2025 Николе. Все права защищены.
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
/**
 * Footer component with CTA, contact information, social media links and working hours
 * Displays copyright information and site links
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
 * Scrolls to quiz section
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
    // Log error and show message to user
    console.error("Form submission error:", error);
    alert("Произошла ошибка при отправке заявки. Пожалуйста, попробуйте еще раз.");
  }
  finally {
    isSubmitting.value = false;
  }
};
</script>
