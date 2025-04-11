<!--
  BeautyServices.vue
  Component for displaying beauty services and testimonials
-->
<template>
  <div class="relative w-full overflow-hidden">
    <!-- Services Section -->
    <div class="bg-[#FFFAE4] py-20">
      <div class="container mx-auto px-4 max-w-[1080px]">
        <!-- Section title -->
        <h2 class="text-5xl font-bold font-raleway text-additional-black mb-16 text-center">
          Наши <span class="pink-text-gradient py-1">услуги</span>
        </h2>

        <!-- Services grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          <img
            src="/images/services.png"
            alt="Сервисы"
            class="max-w-sm w-full object-contain absolute -bottom-[120px] z-10 right-0 translate-x-full"
          >
          <div
            v-for="(service, index) in services"
            :key="index"
            class="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-[1.02]"
          >
            <!-- <div class="h-48 overflow-hidden">
              <img
                :src="service.image"
                :alt="service.title"
                class="w-full h-full object-cover"
              >
            </div> -->
            <div class="p-6">
              <h3 class="text-2xl font-bold font-raleway text-additional-black mb-2">
                {{ service.title }}
              </h3>
              <p class="text-gray-700 mb-4 font-roboto">
                {{ service.description }}
              </p>
              <div class="flex justify-between items-center">
                <p class="text-2xl font-medium text-[#563C34] font-roboto">
                  от {{ service.price }} ₽
                </p>
                <button class="py-2 px-4 bg-[#93BA73] text-white font-medium rounded hover:bg-opacity-90 transition-all font-roboto">
                  Подробнее
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Testimonials Section -->
    <div
      class="relative w-full py-20 max-w-[1080px] mx-auto"
      style="background: radial-gradient(circle, #563C34 0%, #402E28 30%, #16080E 100%)"
    >
      <!-- Section title -->
      <h2 class="text-5xl font-bold font-raleway text-main-white2 mb-16 text-end w-full px-4">
        Более <span class="pink-text-gradient">300</span> <br>довольных клиентов
      </h2>
      <div class="container mx-auto px-4 max-w-[1080px] flex justify-end relative">
        <img
          src="/images/testimonials.png"
          alt="Николе профстудия"
          class="absolute -bottom-[135px] -left-[100px] w-[400px]"
        >
        <!-- Testimonials slider -->
        <div class="relative w-[800px]">
          <!-- Testimonial cards -->
          <div class="overflow-hidden">
            <div
              class="flex transition-transform duration-500 ease-in-out"
              :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
            >
              <div
                v-for="(testimonial, index) in testimonials"
                :key="index"
                class="w-full flex-shrink-0 pl-4"
              >
                <div class="bg-white rounded-lg shadow-lg p-8">
                  <div class="flex items-center mb-4">
                    <div>
                      <h3 class="text-xl font-bold font-raleway text-additional-black">
                        {{ testimonial.name }}
                      </h3>
                      <div class="flex text-[#FFD700]">
                        <span
                          v-for="i in 5"
                          :key="i"
                        >
                          <svg
                            class="w-5 h-5"
                            :class="i <= testimonial.rating ? 'fill-current' : 'text-gray-300'"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                  <p class="text-gray-700 italic font-roboto">
                    {{ testimonial.text }}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Slider navigation with dots and arrows in one row -->
          <div class="flex justify-center items-center mt-8">
            <!-- Left arrow button -->
            <button
              class="w-10 h-10 rounded-full bg-main-gray bg-opacity-60 flex items-center justify-center hover:bg-opacity-100 transition-all mx-4"
              @click="prevSlide"
            >
              <svg
                class="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <!-- Dots -->
            <button
              v-for="(_, index) in testimonials"
              :key="index"
              class="w-3 h-3 rounded-full mx-1 bg-main-white"
              :class="currentSlide === index ? 'bg-main-gray' : 'bg-main bg-opacity-40'"
              @click="goToSlide(index)"
            />

            <!-- Right arrow button -->
            <button
              class="w-10 h-10 rounded-full bg-main-gray bg-opacity-60 flex items-center justify-center hover:bg-opacity-100 transition-all mx-4"
              @click="nextSlide"
            >
              <svg
                class="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
/**
 * Component for displaying the salon's beauty services and testimonials
 * Shows service cards with images, descriptions, pricing and client reviews
 */

import { ref } from "vue";

/**
 * Array of beauty services with details
 * @type {Array<{title: string, description: string, price: string, image: string}>}
 */
const services = ref([
  {
    title: "Восковая эпиляция",
    description: "Классический метод удаления волос с использованием премиальных восков",
    price: "900",
    image: "/images/service-wax.jpg",
  },
  {
    title: "Шугаринг",
    description: "Натуральное удаление волос сахарной пастой. Подходит для чувствительной кожи",
    price: "800",
    image: "/images/service-sugar.jpg",
  },
  {
    title: "Электроэпиляция",
    description: "Перманентное удаление волос с помощью электрического тока. Идеально для небольших зон",
    price: "1 200",
    image: "/images/service-electro.jpg",
  },
]);

/**
 * Current slide index
 * @type {Ref<number>}
 */
const currentSlide = ref(0);

/**
 * Array of client testimonials
 * @type {Array<{name: string, rating: number, text: string, avatar: string}>}
 */
const testimonials = ref([
  {
    name: "Екатерина М.",
    rating: 5,
    text: "Прохожу курс лазерной эпиляции уже 4 месяца. Результат превзошел все ожидания! Волосы стали намного тоньше и их стало гораздо меньше. Процедура практически безболезненная. Рекомендую всем!",
    avatar: "/images/avatar-1.jpg",
  },
  {
    name: "Анна К.",
    rating: 5,
    text: "Хожу к мастеру Наталье уже больше года. Всегда приветлива и внимательна. Подробно рассказывает о процедурах и даёт полезные советы по уходу за кожей. Салон очень уютный, всегда чисто.",
    avatar: "/images/avatar-2.jpg",
  },
  {
    name: "Мария Д.",
    rating: 4,
    text: "Делала фотоэпиляцию. Понравился индивидуальный подход и внимание к деталям. Результатом довольна, хотя процедура немного болезненная. Обязательно продолжу курс!",
    avatar: "/images/avatar-3.jpg",
  },
]);

/**
 * Go to the next slide
 */
const nextSlide = () => {
  if (currentSlide.value < testimonials.value.length - 1) {
    currentSlide.value++;
  }
  else {
    currentSlide.value = 0;
  }
};

/**
 * Go to the previous slide
 */
const prevSlide = () => {
  if (currentSlide.value > 0) {
    currentSlide.value--;
  }
  else {
    currentSlide.value = testimonials.value.length - 1;
  }
};

/**
 * Go to a specific slide
 * @param {number} index - The slide index to go to
 */
const goToSlide = (index) => {
  currentSlide.value = index;
};
</script>
