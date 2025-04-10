<!--
  BeautyTestimonials.vue
  Component for displaying client testimonials and reviews
-->
<template>
  <div class="relative w-full py-20 bg-[#A78B75]">
    <div class="container mx-auto px-4 max-w-[1080px]">
      <!-- Section title -->
      <h2 class="text-5xl font-bold font-raleway text-white mb-16 text-center">
        Отзывы <span class="text-[#FFFAE4]">клиентов</span>
      </h2>

      <!-- Testimonials slider -->
      <div class="relative">
        <!-- Slider controls -->
        <div class="absolute -left-12 top-1/2 transform -translate-y-1/2 z-10">
          <button
            class="w-10 h-10 rounded-full bg-white bg-opacity-60 flex items-center justify-center hover:bg-opacity-100 transition-all"
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
        </div>

        <div class="absolute -right-12 top-1/2 transform -translate-y-1/2 z-10">
          <button
            class="w-10 h-10 rounded-full bg-white bg-opacity-60 flex items-center justify-center hover:bg-opacity-100 transition-all"
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

        <!-- Testimonial cards -->
        <div class="overflow-hidden">
          <div
            class="flex transition-transform duration-500 ease-in-out"
            :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
          >
            <div
              v-for="(testimonial, index) in testimonials"
              :key="index"
              class="w-full flex-shrink-0 px-4"
            >
              <div class="bg-white rounded-lg shadow-lg p-8">
                <div class="flex items-center mb-4">
                  <div class="w-16 h-16 rounded-full overflow-hidden mr-4">
                    <img
                      :src="testimonial.avatar"
                      :alt="testimonial.name"
                      class="w-full h-full object-cover"
                    >
                  </div>
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

        <!-- Slider dots -->
        <div class="flex justify-center mt-8">
          <button
            v-for="(_, index) in testimonials"
            :key="index"
            class="w-3 h-3 rounded-full mx-1"
            :class="currentSlide === index ? 'bg-[#FFFAE4]' : 'bg-white bg-opacity-40'"
            @click="goToSlide(index)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
/**
 * Component for displaying client testimonials
 * Features a carousel slider with client reviews and ratings
 */
import { ref } from "vue";

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
