<!--
  BeautyServiceForm.vue
  Component for service selection form popup
-->
<template>
  <div
    v-if="isOpen"
    class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
    @click="closeModal"
  >
    <div
      class="bg-white p-[2vh] md:p-8 rounded-lg shadow-xl max-w-md w-full"
      @click.stop
    >
      <div class="flex justify-between items-center mb-[2vh] md:mb-6">
        <h3 class="text-xl md:text-2xl font-bold font-raleway text-additional-black">
          {{ serviceTitle ? `Запись на ${serviceTitle}` : 'Выбор услуги' }}
        </h3>
        <button
          class="text-gray-500 hover:text-gray-700"
          @click="closeModal"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
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

      <form @submit.prevent="submitForm">
        <!-- <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-medium mb-2 font-roboto"
            for="name"
          >
            Имя*
          </label>
          <input
            id="name"
            v-model="form.name"
            type="text"
            class="w-full bg-white text-additional-black px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#93BA73] focus:border-transparent font-roboto"
            required
          >
        </div> -->

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

        <!-- <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-medium mb-2 font-roboto"
            for="message"
          >
            Комментарий
          </label>
          <textarea
            id="message"
            v-model="form.message"
            rows="3"
            class="w-full bg-white text-additional-black px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#93BA73] focus:border-transparent font-roboto"
          />
        </div> -->

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
          <span v-else>Записаться</span>
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

/**
 * Props for the component
 */
const props = defineProps({
  /**
   * Controls visibility of the modal
   * @type {boolean}
   */
  isOpen: {
    type: Boolean,
    default: false,
  },

  /**
   * Title of the selected service
   * @type {string}
   */
  serviceTitle: {
    type: String,
    default: "",
  },
});

/**
 * Emitted events
 */
const emit = defineEmits(["close", "submit"]);

/**
 * Form submission state
 * @type {Ref<boolean>}
 */
const isSubmitting = ref(false);

/**
 * Form data object
 * @type {Ref<{name: string, phone: string, message: string, agreement: boolean, service: string}>}
 */
const form = ref({
  name: "",
  phone: "",
  message: "",
  agreement: false,
  service: "",
});

/**
 * Watch for changes in the service title prop
 */
watch(() => props.serviceTitle, (newValue) => {
  form.value.service = newValue;
});

/**
 * Close the modal
 */
const closeModal = () => {
  emit("close");
};

/**
 * Handles form submission
 */
const submitForm = async () => {
  isSubmitting.value = true;

  try {
    // Simulating API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Emit submission event with form data
    emit("submit", { ...form.value });

    // Reset form after successful submission
    form.value = {
      name: "",
      phone: "",
      message: "",
      agreement: false,
      service: props.serviceTitle,
    };

    // Close the modal
    closeModal();

    // Show success message
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
