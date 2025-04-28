<!--
  BeautyContacts.vue
  Component for displaying Yandex Map location
-->
<template>
  <div class="relative w-full pt-[7vh] md:pt-[120px] pb-[5vh] md:pb-12 mobile-contact-section">
    <div class="container mx-auto px-4 md:px-12 lg:px-24 max-w-[1240px] relative z-10">
      <!-- Section content -->
      <div class="flex flex-col lg:flex-row items-center lg:items-start justify-between lg:gap-8">
        <div class="lg:w-1/2 mb-[5vh] md:mb-10 lg:mb-0">
          <h2 class="text-main-white2 text-[clamp(0.8rem,calc(var(--screen-height)*0.05),2rem)] md:text-5xl font-bold font-raleway mb-[5vh] md:mb-10 lg:mb-16 text-center lg:text-left">
            Остались <span class="pink-text-gradient">вопросы?</span>
          </h2>
          <div
            class="flex md:flex-col gap-4 items-center lg:items-start"
          >
            <p class="max-w-[444px] text-[clamp(0.8rem,calc(var(--screen-height)*0.02),1.5rem)] md:text-xl text-main-white font-roboto text-center lg:text-left">
              Оставьте заявку на консультацию, и мы перезвоним вам в течение 15 минут,
              чтобы ответить на все вопросы и подобрать оптимальное решение.
            </p>

            <button
              v-if="quizAvailable"
              class="py-4 px-8 font-bold bg-[#93BA73] text-additional-black text-[clamp(0.8rem,calc(var(--screen-height)*0.02),1.5rem)] md:text-lg font-roboto rounded-md hover:bg-opacity-90 transition-all shadow-lg"
              @click="scrollToQuiz"
            >
              Пройти тест и получить подарок
            </button>
          </div>
        </div>

        <!-- Contact form -->
        <div
          v-if="showForm"
          class="lg:w-1/2 bg-white p-[calc(var(--screen-height)*0.02)] md:p-8 rounded-lg shadow-xl max-w-md w-full"
        >
          <h3 class="text-xl md:text-2xl font-bold font-raleway text-additional-black mb-[calc(var(--screen-height)*0.02)] md:mb-6">
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
                autocomplete="tel"
                placeholder="Введите номер телефона"
                class="w-full bg-white text-additional-black px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#93BA73] focus:border-transparent font-roboto"
                required
              >
            </div>

            <!-- <div class="mb-6">
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
            </div> -->

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
  </div>
</template>

<script setup>
/**
 * Controls visibility of the contact form
 * @type {Ref<boolean>}
 */
const showForm = ref(true);

/**
 * Model for scroll disable state
 * This value is managed by the parent component
 * to detect when keyboard is open
 * @type {import('vue').Ref<boolean>}
 */
const _isScrollDisabled = defineModel("isScrollDisabled", { required: true });

const quizAvailable = defineModel("quizAvailable", { required: true });

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

<style scoped>
/* Add support for dynamic height in mobile */
@media (max-width: 768px) {
  /* Replace common vh values with calculated values */
  .py-\[7vh\] {
    padding-top: calc(var(--screen-height) * 0.07);
    padding-bottom: calc(var(--screen-height) * 0.07);
  }

  .mb-\[5vh\] {
    margin-bottom: calc(var(--screen-height) * 0.05);
  }

  .p-\[2vh\] {
    padding: calc(var(--screen-height) * 0.02);
  }

  .mb-\[2vh\] {
    margin-bottom: calc(var(--screen-height) * 0.02);
  }
}
</style>
