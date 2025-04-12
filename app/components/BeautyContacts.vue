<!--
  BeautyContacts.vue
  Component for displaying contact information and Yandex Map
-->
<template>
  <div class="relative w-full bg-[#16080E] py-16">
    <div class="container mx-auto px-4 md:px-24 max-w-[1240px]">
      <h2 class="text-main-white2 text-4xl md:text-5xl font-bold font-raleway mb-8 text-center">
        Контакты
      </h2>

      <div class="flex flex-col md:flex-row gap-8">
        <!-- Contact Information -->
        <div class="w-full md:w-1/2 space-y-6">
          <div class="text-main-white2">
            <h3 class="text-2xl font-bold mb-4">
              Адрес
            </h3>
            <p class="text-xl">
              г. Мурманск, ул. Юбилейная, 9-32
            </p>
          </div>

          <div class="text-main-white2">
            <h3 class="text-2xl font-bold mb-4">
              Режим работы
            </h3>
            <p class="text-xl">
              Пн-Пт: 10:00 - 20:00
            </p>
            <p class="text-xl">
              Сб-Вс: 10:00 - 18:00
            </p>
          </div>

          <div class="text-main-white2">
            <h3 class="text-2xl font-bold mb-4">
              Телефон
            </h3>
            <a
              href="tel:+79000000000"
              class="text-xl hover:text-opacity-80 transition-all"
            >
              +7 (900) 000-00-00
            </a>
          </div>
        </div>

        <!-- Yandex Map -->
        <div class="w-full md:w-1/2 h-[400px] rounded-lg overflow-hidden">
          <div
            id="map"
            class="w-full h-full"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
/**
 * Contacts component with Yandex Map integration
 * Displays contact information and interactive map
 */
import { onMounted } from "vue";

/**
 * Initialize Yandex Map
 */
const initMap = () => {
  // Replace with your actual Yandex Map API key
  const apiKey = "YOUR_YANDEX_MAP_API_KEY";

  // Load Yandex Map script
  const script = document.createElement("script");
  script.src = `https://api-maps.yandex.ru/2.1/?apikey=${apiKey}&lang=ru_RU`;
  script.async = true;
  document.head.appendChild(script);

  script.onload = () => {
    // Initialize map after script is loaded
    ymaps.ready(() => {
      const map = new ymaps.Map("map", {
        center: [68.970682, 33.074981], // Murmansk coordinates
        zoom: 15,
      });

      // Add marker
      const marker = new ymaps.Placemark([68.970682, 33.074981], {
        balloonContent: "Николе профстудия",
      }, {
        preset: "islands#pinkDotIcon",
      });

      map.geoObjects.add(marker);
    });
  };
};

onMounted(() => {
  initMap();
});
</script>

<style scoped>
/* Add any additional styles here */
</style>
