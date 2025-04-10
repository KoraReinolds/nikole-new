<!--
  BeautyServices.vue
  Component for displaying beauty services offered by the salon
-->
<template>
  <div class="relative w-full bg-[#FFFAE4] py-20">
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
          class="max-w-sm w-full object-contain absolute -bottom-[120px] z-10  right-0 translate-x-full"
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
</template>

<script setup>
/**
 * Component for displaying the salon's beauty services
 * Shows service cards with images, descriptions and pricing
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
</script>
