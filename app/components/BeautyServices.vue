<!--
  BeautyServices.vue
  Component for displaying beauty services and testimonials
-->
<template>
  <div class="relative w-full overflow-hidden">
    <!-- Services Section -->
    <div
      class="scroll-container bg-[#FFFAE4] py-20 overflow-hidden"
      :class="{ 'h-screen': isMobile }"
    >
      <div class="container mx-auto px-4 max-w-[1080px]">
        <!-- Section title -->
        <h2 class="text-3xl md:text-5xl font-bold font-raleway text-additional-black mb-8 md:mb-16 text-center">
          Наши <span class="pink-text-gradient py-1">услуги</span>
        </h2>

        <!-- Service type switcher -->
        <div class="flex justify-center mb-6 md:mb-10 overflow-x-auto pb-2">
          <div class="bg-white rounded-full p-1.5 md:p-2 inline-flex shadow-md">
            <button
              v-for="group in servicesGroups"
              :key="group.title"
              :class="[
                'py-1.5 md:py-2 px-3 md:px-6 rounded-full font-medium transition-colors duration-200 text-xs sm:text-base whitespace-nowrap',
                activeServiceType === group.title
                  ? 'bg-[#93BA73] text-white'
                  : 'text-gray-700 hover:bg-gray-100',
              ]"
              @click="activeServiceType = group.title"
            >
              {{ group.title }}
            </button>
            <button
              :class="[
                'py-1.5 md:py-2 px-3 md:px-6 rounded-full font-medium transition-colors duration-200 text-xs sm:text-base whitespace-nowrap',
                activeServiceType === 'Все'
                  ? 'bg-[#93BA73] text-white'
                  : 'text-gray-700 hover:bg-gray-100',
              ]"
              @click="activeServiceType = 'Все'"
            >
              Все услуги
            </button>
          </div>
        </div>

        <!-- Services carousel for mobile -->
        <div class="md:hidden relative">
          <div class="overflow-hidden">
            <div
              class="flex transition-transform duration-500 ease-in-out"
              :style="{ transform: `translateX(-${currentServiceSlide * 100}%)` }"
            >
              <div
                v-for="(service, index) in filteredServices"
                :key="index"
                class="w-full flex-shrink-0 px-2"
              >
                <div class="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform h-full flex flex-col">
                  <div class="p-4 flex flex-col h-full">
                    <div class="flex flex-col justify-between items-start mb-2">
                      <h3 class="text-xl font-bold font-raleway text-additional-black">
                        {{ service.title }}
                      </h3>
                      <span class="text-xs font-medium bg-[#FFFAE4] text-[#563C34] px-2 py-1 rounded mt-1">
                        {{ service.category }}
                      </span>
                    </div>
                    <p class="text-gray-700 mb-4 font-roboto flex-grow text-sm">
                      {{ service.description }}
                    </p>
                    <div class="flex justify-between items-center">
                      <p class="text-xl font-medium text-[#563C34] font-roboto">
                        от {{ service.price }} ₽
                      </p>
                      <button class="py-1.5 px-3 bg-[#93BA73] text-white text-sm font-medium rounded hover:bg-opacity-90 transition-all font-roboto">
                        Подробнее
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Carousel navigation -->
          <div class="flex justify-center mt-4">
            <button
              class="w-8 h-8 rounded-full bg-main-gray bg-opacity-60 flex items-center justify-center hover:bg-opacity-100 transition-all mx-2"
              @click="prevServiceSlide"
            >
              <svg
                class="w-4 h-4"
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

            <div class="font-medium text-additional-black text-sm">
              {{ currentServiceSlide + 1 }}/{{ filteredServices.length }}
            </div>

            <button
              class="w-8 h-8 rounded-full bg-main-gray bg-opacity-60 flex items-center justify-center hover:bg-opacity-100 transition-all mx-2"
              @click="nextServiceSlide"
            >
              <svg
                class="w-4 h-4"
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

        <!-- Services grid for desktop -->
        <div class="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          <div
            v-for="(service, index) in filteredServices"
            :key="index"
            class="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-[1.02]"
          >
            <div class="p-6 h-full flex flex-col">
              <div class="flex flex-col justify-between items-start mb-2">
                <h3 class="text-2xl font-bold font-raleway text-additional-black">
                  {{ service.title }}
                </h3>
                <span class="text-xs font-medium bg-[#FFFAE4] text-[#563C34] px-2 py-1 rounded">
                  {{ service.category }}
                </span>
              </div>
              <p class="text-gray-700 mb-4 font-roboto flex-grow self-center">
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
      class="relative scroll-container relative w-full pt-[7vh] md:py-20 min-h-[500px] md:max-h-[634px]"
      style="background: radial-gradient(circle, #563C34 0%, #402E28 30%, #16080E 100%)"
      :class="{ 'h-screen': isMobile }"
    >
      <div class="absolute left-0 w-full bottom-[5vh] md:bottom-14">
        <!-- Left side with flower vase image (moved to background) -->
        <div class="h-[38px] w-full bg-[#FFFAE4]" />
        <div class="h-[16px] w-full bg-[#A78B75]" />
      </div>
      <div class="bottom-10 absolute -right-[161px] z-0 w-full left-0 overflow-hidden">
        <!-- <span class="absolute left-[22%] opacity-90 bottom-[6%] text-white text-sm md:text-xl font-normal font-roboto">
        ----▶
      </span> -->
        <div class="relative max-w-[1240px] mx-auto flex items-end justify-end">
          <img
            src="/images/testimonials.png"
            alt="Цветы в вазе"
            class="w-[50vh] bottom-[1vh] md:w-[425px] object-contain
            md:translate-y-[10px] translate-y-[20px] md:-translate-x-[800px]"
          >
          <!-- <img
            src="/images/testimonials.png"
            alt="Николе профстудия"
            class="absolute md:-bottom-[150px] left-[100px] md:-left-[200px] md:w-[530px]"
          > -->
        </div>
      </div>

      <div class="mx-auto max-w-[1080px]">
        <!-- Section title -->
        <h2 class="text-3xl md:text-5xl font-bold font-raleway text-main-white2 mb-[2vh] md:mb-16 text-center md:text-end w-full px-4 text-[clamp(1.25rem,6.5vw,2.5rem)]">
          <span class=" text-[clamp(1.25rem,12.5vw,3.5rem)]">
            Более <span class="pink-text-gradient">100</span><br>
          </span>
          довольных клиентов
        </h2>
        <div class="container mx-auto px-4 max-w-[1080px] flex flex-col md:flex-row md:justify-end relative">
          <!-- Testimonials slider -->
          <div class="relative w-full md:w-[800px]">
            <!-- Testimonial cards with navigation arrows on sides for mobile -->
            <div class="md:overflow-hidden relative">
              <!-- Left arrow for mobile -->
              <button
                class="absolute -left-4 top-1/2 transform -translate-y-1/2 z-10 md:hidden w-8 h-8 rounded-full bg-main-gray bg-opacity-60 flex items-center justify-center hover:bg-opacity-100 transition-all"
                @click="prevSlide"
              >
                <svg
                  class="w-4 h-4"
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

              <div
                class="flex transition-transform duration-500 ease-in-out"
                :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
              >
                <div
                  v-for="(testimonial, index) in testimonials"
                  :key="index"
                  class="w-full flex-shrink-0 pl-0 md:pl-4 flex items-center justify-center"
                  :class="{ 'h-[60vh]': isMobile }"
                >
                  <TestimonialCard
                    class="mx-1"
                    :username="testimonial.username"
                    :date="testimonial.date"
                    :rating="testimonial.rating"
                    :service="testimonial.service"
                    :text="testimonial.text"
                  />
                </div>
              </div>

              <!-- Right arrow for mobile -->
              <button
                class="absolute -right-4 top-1/2 transform -translate-y-1/2 z-10 md:hidden w-8 h-8 rounded-full bg-main-gray bg-opacity-60 flex items-center justify-center hover:bg-opacity-100 transition-all"
                @click="nextSlide"
              >
                <svg
                  class="w-4 h-4"
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

            <!-- Slider navigation for desktop and page counter/button for mobile -->
            <div class="flex flex-row justify-center md:justify-end items-center mt-[2vh] md:mt-8">
              <div class="flex items-center justify-center w-full">
                <!-- Left arrow button (desktop only) -->
                <button
                  class="hidden md:flex w-10 h-10 rounded-full bg-main-gray bg-opacity-60 items-center justify-center hover:bg-opacity-100 transition-all mx-4"
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

                <!-- Page numbers -->
                <div class="font-medium text-main-white text-base md:text-lg">
                  {{ currentSlide + 1 }}/{{ testimonials.length }}
                </div>

                <!-- Right arrow button (desktop only) -->
                <button
                  class="hidden md:flex w-10 h-10 rounded-full bg-main-gray bg-opacity-60 items-center justify-center hover:bg-opacity-100 transition-all mx-4"
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
              <div class="shrink-0 mt-2">
                <a
                  href="https://dikidi.ru/ru/profile/olga_evdokimova_171403/reviews"
                  target="_blank"
                  class="display-block py-2 px-3 md:px-8 md:py-4 bg-[#93BA73] text-additional-black text-sm md:text-xl md:text-base font-bold rounded hover:bg-opacity-90 transition-all font-roboto"
                >
                  Посмотреть все отзывы
                </a>
              </div>
            </div>
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

import { ref, shallowRef, computed } from "vue";
import TestimonialCard from "./TestimonialCard.vue";

defineProps({
  isMobile: {
    type: Boolean,
    default: false,
  },
});

/**
 * Array of beauty services with details
 * @type {Array<{title: string, description: string, price: string}>}
 */
const servicesGroups = ref([
  {
    title: "Восковая эпиляция",
    description: "Классический метод удаления волос с использованием премиальных восков",
    price: "900",
  },
  {
    title: "Шугаринг",
    description: "Натуральное удаление волос сахарной пастой. Подходит для чувствительной кожи",
    price: "800",
  },
  {
    title: "Электроэпиляция",
    description: "Перманентное удаление волос с помощью электрического тока. Идеально для небольших зон",
    price: "1 200",
  },
]);

/**
 * Currently active service type filter
 * @type {Ref<string>}
 */
const activeServiceType = ref("Все");

/**
 * Current service slide index for mobile carousel
 * @type {Ref<number>}
 */
const currentServiceSlide = ref(0);

/**
 * Method to go to next service slide
 */
const nextServiceSlide = () => {
  if (currentServiceSlide.value < filteredServices.value.length - 1) {
    currentServiceSlide.value++;
  }
  else {
    currentServiceSlide.value = 0;
  }
};

/**
 * Method to go to previous service slide
 */
const prevServiceSlide = () => {
  if (currentServiceSlide.value > 0) {
    currentServiceSlide.value--;
  }
  else {
    currentServiceSlide.value = filteredServices.value.length - 1;
  }
};

/**
 * Array of specific beauty services offered by the salon
 * @type {Array<{title: string, description: string, price: string, category: string}>}
 */
const services = ref([
  {
    title: "Глубокое бикини/подмышки/голени",
    description: "Комплексная процедура депиляции для трех зон",
    price: "2 100",
    category: "Шугаринг",
  },
  {
    title: "Электроэпиляция (пробная)",
    description: "Ознакомительная процедура для оценки эффективности",
    price: "500",
    category: "Электроэпиляция",
  },
  {
    title: "Глубокое бикини/подмышки/ноги полностью",
    description: "Комплексная процедура для максимального комфорта",
    price: "2 500",
    category: "Шугаринг",
  },
  {
    title: "Бикини глубокое",
    description: "Тщательная обработка зоны глубокого бикини",
    price: "1 200",
    category: "Шугаринг",
  },
  {
    title: "Электроэпиляция (тело)",
    description: "Процедура для различных зон тела",
    price: "1 500",
    category: "Электроэпиляция",
  },
  {
    title: "Подмышки",
    description: "Быстрая и комфортная процедура",
    price: "400",
    category: "Шугаринг",
  },
  {
    title: "Электроэпиляция (лицо)",
    description: "Бережная обработка чувствительных зон лица",
    price: "800",
    category: "Электроэпиляция",
  },
  {
    title: "Голени",
    description: "Гладкая кожа ног на длительное время",
    price: "800",
    category: "Шугаринг",
  },
  {
    title: "Зона паха (воск)",
    description: "Быстрая процедура с использованием воска",
    price: "600",
    category: "Восковая эпиляция",
  },
  {
    title: "Ноги полностью",
    description: "Комплексная депиляция ног от щиколотки до бедра",
    price: "1 200",
    category: "Шугаринг",
  },
  {
    title: "Зона над верхней губой",
    description: "Деликатная обработка нежной зоны лица",
    price: "300",
    category: "Шугаринг",
  },
  {
    title: "Лицо полностью",
    description: "Комплексная процедура для всех зон лица",
    price: "900",
    category: "Шугаринг",
  },
  {
    title: "Руки",
    description: "Депиляция рук до локтя или полностью",
    price: "700",
    category: "Шугаринг",
  },
]);

/**
 * Current testimonial slide index
 * @type {Ref<number>}
 */
const currentSlide = ref(1);

/**
 * Filtered services based on selected service type
 * @returns {Array} Filtered array of services
 */
const filteredServices = computed(() => {
  if (activeServiceType.value === "Все") {
    return services.value;
  }
  return services.value.filter(service => service.category === activeServiceType.value);
});

/**
 * Go to the next testimonial slide
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
 * Go to the previous testimonial slide
 */
const prevSlide = () => {
  if (currentSlide.value > 0) {
    currentSlide.value--;
  }
  else {
    currentSlide.value = testimonials.value.length - 1;
  }
};

// Remove unused parsingReviews function
const testimonials = shallowRef([
  {
    username: "Глагольева Ксения",
    date: "17 апреля 2025",
    rating: 5,
    service: "Глубокое бикини/подмышки/голени",
    text: "Очень приятная девушка, мне очень понравилось общение во время процедуры, сначала я переживала и стеснялась ,но потом мы разговорились и я очень расслабилась 😊 Я ходила первый раз ,осталась очень довольна результатом! Просто супер, я нашла своего мастера с первого раза  ❤️ огромное спасибо 😊 до скорой встречи ❤️😇",
  },
  {
    username: "Наталья",
    date: "22 августа 2023",
    rating: 5,
    service: "Электроэпиляция (пробная)",
    text: "Оля, спасибо большое тебе!!!!\nТы сделала то ,что мне всегда казалось невозможно!Да , пришлось походить долго,но оно того стоит!Всем советую электроэпиляцию,не бойтесь и не жалейте не время ни денег! Спасибо большое!!!! Моё лицо теперь без лишних волос.",
  },
  {
    username: "Мария",
    date: "14 июля 2023",
    rating: 5,
    service: "Глубокое бикини/подмышки/ноги полностью",
    text: "У Оли как всегда все чудесно 🤩 Спасибо 😉",
  },
  {
    username: "Яна",
    date: "25 июня 2023",
    rating: 5,
    service: "Глубокое бикини/подмышки/ноги полностью",
    text: "Спасибо большое…)))🤗🌹🌹🌹 все отлично…)))☝️☺️❣️❣️❣️\nБуду к вам всегда ходить…)))👌",
  },
  {
    username: "Надежда",
    date: "24 мая 2023",
    rating: 5,
    service: "Глубокое бикини/подмышки/голени",
    text: "Ольга , как профессионал своего дела , все оформила в лучшем виде! 👏👏👏👏👏👍\nБыстро! Качественно ! Комфортно!",
  },
  {
    username: "Марина",
    date: "12 мая 2023",
    rating: 5,
    service: "Бикини глубокое",
    text: "Любимый мастер, нежно обнимаю 🥰",
  },
  {
    username: "Наталья С.",
    date: "15 апреля 2023",
    rating: 5,
    service: "Электроэпиляция (тело)",
    text: "Спасибо за качественную процедуру. Мастер успакоила на первом же приеме, оговорила правила ухода и все тонкости данного вида эпиляции!",
  },
  {
    username: "Инна Селиванова",
    date: "22 марта 2023",
    rating: 5,
    service: "Бикини глубокое",
    text: "Оля нстолько искренняя, радушная, излучающая положительные эмоции, девушка!!! Просто чудо! Огромное спасибо!Была вчера первый раз на шугаринге! Всё прошло супер быстро, безболезненно, качественно! Спасибо за рекомендации и проделанную работу. Вы замечательный мастер!\nУспехов вам!!!!",
  },
  {
    username: "Марина",
    date: "20 марта 2023",
    rating: 5,
    service: "Подмышки",
    text: "Как обычно всё отлично 👍!!!",
  },
  {
    username: "Валентина Мамукина",
    date: "14 марта 2023",
    rating: 5,
    service: "Электроэпиляция (тело)",
    text: "Оля хороший мастер своего дела👍результатом довольны.",
  },
  {
    username: "Елена.",
    date: "21 февраля 2023",
    rating: 5,
    service: "Бикини глубокое",
    text: "Олечка - лучший специалист в своём деле! Настоящий профессионал! 👏Очень внимательная и ответственная! ☝Всём рекомендую! 👍👍👍Однозначно! \nСпасибо Олечка тебе! 🤗Бесконечно благодарна! 🙏❤",
  },
  {
    username: "Наталия",
    date: "21 февраля 2023",
    rating: 5,
    service: "Электроэпиляция (тело)",
    text: "Всё, как всегда хорошо!",
  },
  {
    username: "Николай",
    date: "11 февраля 2023",
    rating: 5,
    service: "Подмышки",
    text: "Мастер  супер мужской шугаринг рекомендую.",
  },
  {
    username: "Марина Каневская",
    date: "11 февраля 2023",
    rating: 5,
    service: "Бикини глубокое",
    text: "Супер мастер! Давно искала. Рекомендую",
  },
  {
    username: "Дина",
    date: "01 февраля 2023",
    rating: 5,
    service: "Электроэпиляция (лицо)",
    text: "Олечку знаю уже давно, она мастер своего дела.  Зная вечную проблему усиков над губой и подбородке я обратилась к Оле. Процедура электроэпиляции  мне очень понравилась.  Быстро , без особой боли. Буду двигаться к совершенству . Спасибо Олечка.",
  },
  {
    username: "Ирина",
    date: "01 февраля 2023",
    rating: 5,
    service: "Голени",
    text: "Спасибо, за чудесно проведенное время и результат!!! \nБезболезненно, будто на массаж ходила!)))",
  },
  {
    username: "Настя",
    date: "13 января 2023",
    rating: 5,
    service: "Бикини глубокое",
    text: "Отличный и очень аккуратный и внимательный мастер!!! Большое спасибо. Рекомендую!!!!!!!",
  },
  {
    username: "Александр",
    date: "09 января 2023",
    rating: 5,
    service: "Зона паха (воск)",
    text: "Всё понравилось. Быстро, качественно, профессионально. Рекомендую 👍",
  },
  {
    username: "Марина",
    date: "02 января 2023",
    rating: 5,
    service: "",
    text: "Все, как всегда, просто СУПЕР! Отека практически не было, дискомфорта не было, покраснение через сутки прошло. Олечка, спасибо огромное!!!",
  },
  {
    username: "Наталья Братухина",
    date: "23 декабря 2022",
    rating: 5,
    service: "Электроэпиляция (тело)",
    text: "Ольга, спасибо за профессионализм!!!",
  },
  {
    username: "Ольга",
    date: "09 декабря 2022",
    rating: 5,
    service: "Электроэпиляция (тело)",
    text: "Давно хожу к Ольге, на шугаринг. Теперь на электродепиляцию. Спасибо за гладкую кожу 😻",
  },
  {
    username: "Ирина",
    date: "15 ноября 2022",
    rating: 5,
    service: "Бикини глубокое",
    text: "Быстро, максимально не больно, на сколько это возможно, и эффективно! Нравится абсолютно все: от профессионализма Ольги до приятной атмосферы и интересных бесед!🙏🏼",
  },
  {
    username: "Ди",
    date: "14 ноября 2022",
    rating: 5,
    service: "Электроэпиляция (тело)",
    text: "Прекрасный мастер! Настоящий профессионал своего дела! Процедура выполнена качественно и практически безболезненно, что очень важно:) Теперь буду ходить только к Ольге❤️",
  },
  {
    username: "Анна",
    date: "09 ноября 2022",
    rating: 5,
    service: "Ноги полностью",
    text: "Огромное Вам спасибо!!!",
  },
  {
    username: "Галина",
    date: "14 октября 2022",
    rating: 5,
    service: "",
    text: "Ольга лучшая в электроэпиляции, наконец то я нашла своего грамотного мастера. Нравится абсолютно все: во вркмя процедуры комфортно, быстрая и четкая работа.Рекомендую",
  },
  {
    username: "Светлана",
    date: "08 октября 2022",
    rating: 5,
    service: "Зона над верхней губой",
    text: "Я довольна! Спасибо ))",
  },
  {
    username: "Леся",
    date: "02 сентября 2022",
    rating: 5,
    service: "Бикини глубокое",
    text: "Лучший мастер!",
  },
  {
    username: "Мария",
    date: "23 июля 2022",
    rating: 5,
    service: "Бикини глубокое",
    text: "Дорогие сомневающиеся клиенты) Отбросьте все сомнения! Что касается ээ, отличная процедура! Я мечтала избавиться от волосков на подмышках, сначала попробовала лазер, потом перерыв в пол года для подготовки  к ээ и с февраля 2022 я прихожу на процедуру раз в месяц. На сегодня, 23.07.2022, процедура заняла 8 минут на 2 подмышки! Это супер результат! Оля Мастер с Большой Буквы! Рекомендую всем, кому актуален вопрос избавления от ненужной растительности)",
  },
  {
    username: "Елена",
    date: "14 июля 2022",
    rating: 5,
    service: "Бикини глубокое",
    text: "Спасибо большое Оле за её золотые руки и мастерство!!! Она - профессионал своего дела!",
  },
  {
    username: "Василий",
    date: "13 июля 2022",
    rating: 5,
    service: "Подмышки",
    text: "Высший уравень 👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍",
  },
  {
    username: "Мария",
    date: "03 июля 2022",
    rating: 5,
    service: "Подмышки",
    text: "Всё прошло на высоте, Ольга мастер своего дела💪🏼😎 даже не заметила как лишилась растительности в подмышечных впадинах 😂🫣💪🏼",
  },
  {
    username: "Саша",
    date: "01 июля 2022",
    rating: 5,
    service: "Подмышки",
    text: "Выражаю глубокую признательность мастеру Ольге. Она знает свое дело на сто. Все было сделано на высоком уровне.  Однозначно рекомендую.",
  },
  {
    username: "Ириа",
    date: "01 июля 2022",
    rating: 5,
    service: "Бикини глубокое",
    text: "Каждый раз очень довольна процедурой.  Ольга- мастер своего дела, и очень приятный человек.",
  },
  {
    username: "Екатерина",
    date: "26 июня 2022",
    rating: 5,
    service: "Электроэпиляция (тело)",
    text: "Спасибо мастеру, за тёплый приём и ответы на все интересующие вопросы по эпиляции. Профессиональный подход к клиенту 👍",
  },
  {
    username: "Ольга",
    date: "26 июня 2022",
    rating: 5,
    service: "Бикини глубокое",
    text: "Была на процедуре шугаринга у прекрасного мастера Ольги. Знаю ее не первый год. Делает всегда свою работу на отлично. Прекрасной души человек. Поэтому девочки можете смело доверить данному мастеру своё тело и будите выглядеть бесподобно. Олечка, огромное тебе спасибо 🌹🌹🌹",
  },
  {
    username: "Виктория",
    date: "25 мая 2022",
    rating: 5,
    service: "",
    text: "Ольга,спасибо большое!все замечательно,я очень довольна 😊!",
  },
  {
    username: "Мария",
    date: "14 мая 2022",
    rating: 5,
    service: "Голени",
    text: "Была на процедуре первый раз, все понравилось) Качественно, быстро и комфортно , болезненных ощущений не было 👍 Мастера советую 😊",
  },
  {
    username: "Ивлева",
    date: "02 мая 2022",
    rating: 5,
    service: "Лицо полностью",
    text: "Все хорошо",
  },
  {
    username: "Анастасия",
    date: "02 мая 2022",
    rating: 5,
    service: "Электроэпиляция (тело)",
    text: "С таким замечательным профессионалом процедура электроэпиляции не кажется чем-то мучительным, а время пролетает незаметно. \nЕщё раз огромное спасибо, я очень довольна результатом, и мне очень приятно было с Вами познакомиться :)",
  },
  {
    username: "Ирина",
    date: "27 апреля 2022",
    rating: 5,
    service: "Подмышки",
    text: "Очень приятное знакомство! Милая очаровашка прекрасно колдует над ненавистными зарослями 😜. СПАСИБО!",
  },
  {
    username: "Кит",
    date: "14 апреля 2022",
    rating: 5,
    service: "Бикини глубокое",
    text: "Все просто замечательно .  Очень довольна результатом.",
  },
  {
    username: "Екатерина",
    date: "01 февраля 2022",
    rating: 5,
    service: "Электроэпиляция (тело)",
    text: "Отличный мастер!",
  },
  {
    username: "Тася",
    date: "21 декабря 2021",
    rating: 5,
    service: "Бикини глубокое",
    text: "Олюшка у тебя золотые ручки! Ты же знаешь, доверяю только тебе 💞",
  },
  {
    username: "Оксана",
    date: "17 декабря 2021",
    rating: 5,
    service: "Бикини глубокое",
    text: "Оля, все супер! Ты большая умничка!!!!",
  },
  {
    username: "Камила",
    date: "16 октября 2021",
    rating: 5,
    service: "Электроэпиляция (тело)",
    text: "Я очень рада, что нашла такого чуткого и трепетно относящегося к клиенту специалиста, мастер своего дела, полностью компетентна, можно довериться и быть уверенной, что всё пройдёт отлично, и после процедуры всегда на связи, это значит ей не всё равно на нас, что очень приятно",
  },
  {
    username: "Ольга",
    date: "08 октября 2021",
    rating: 5,
    service: "Бикини глубокое",
    text: "👍",
  },
  {
    username: "Анна",
    date: "07 октября 2021",
    rating: 5,
    service: "Бикини глубокое",
    text: "Ольга настоящий мастер своего дела. Просто волшебница.",
  },
  {
    username: "Анна",
    date: "11 сентября 2021",
    rating: 5,
    service: "Бикини глубокое",
    text: "Прекрасный мастер, руки просто золотые. Хорошая консультация перед процедурой. И на высшем уровне предложенная услуга.",
  },
  {
    username: "Ирина",
    date: "11 сентября 2021",
    rating: 5,
    service: "Бикини глубокое",
    text: "Олечка,ты лучший мастер шугаринга!!!💋🌹🌹🌹🌹🌹",
  },
  {
    username: "Елена",
    date: "10 сентября 2021",
    rating: 5,
    service: "Электроэпиляция (тело)",
    text: "Ольга-настоящий профессионал и очень приятный человек. Процедура проходит деликатно, быстро и совсем не больно. Кожа после процедуры гладкая и нежная. Никакого раздражения или неприятных ощущений. Результатом я очень довольна!",
  },
  {
    username: "Кристина",
    date: "27 августа 2021",
    rating: 5,
    service: "Зона над верхней губой",
    text: "Быстро и гладко! Лучший мастер👍",
  },
  {
    username: "Евгения",
    date: "24 августа 2021",
    rating: 5,
    service: "Лицо полностью",
    text: "Все понравилось,Ольга профессионал своего дела,я нашла своего мастера.",
  },
  {
    username: "Карина",
    date: "15 августа 2021",
    rating: 5,
    service: "Бикини глубокое",
    text: "Супер!!!!\nОльга очень крутой специалист!!!\nРабота, сделанная с любовью ❤️, консультация во время работы, располагающее милое общение. \nА ещё - человек с позитивной энергетикой, да и просто шикарная девушка! \nПроцедура прошла в непринужденной обстановке, я даже не поняла когда процедура закончилась. Все чистенько, гладенько, мой мужчина оценил🥰\nОт души рекомендую этого мастера👍",
  },
  {
    username: "Мария",
    date: "17 июня 2021",
    rating: 5,
    service: "Бикини глубокое",
    text: "Спасибо большое.Еще раз убедилась,насколько важен мастер.У Ольги золотые ручки!Спасибо за мастерство.",
  },
  {
    username: "Елена",
    date: "31 мая 2021",
    rating: 5,
    service: "",
    text: "Все супер!!!!Все гладко и аккуратно.Спасибо.Все понравилось",
  },
  {
    username: "Светлана",
    date: "28 мая 2021",
    rating: 5,
    service: "Бикини глубокое",
    text: "Была на процедуре первый раз. Ольга - мастер своего дела! Все сделала очень быстро и гладко! Отвлекала разговорами. Я очень довольна. Спасибо!!! Теперь я Ваша постоянная клиентка🌹🌹🌹",
  },
  {
    username: "Светлана",
    date: "28 мая 2021",
    rating: 5,
    service: "Бикини глубокое",
    text: "Все супер! Отличный мастер, только у Ольге хожу 💐😁",
  },
  {
    username: "Лилия Иванова",
    date: "13 мая 2021",
    rating: 5,
    service: "",
    text: "Отлично! Замечательный мастер!",
  },
  {
    username: "Татьяна",
    date: "01 мая 2021",
    rating: 5,
    service: "",
    text: "Хожу на депиляцию давно, но сегодня была в качестве модели и скажу, что Оля не только крутой мастер, но и учитель 👍. Пока она объясняла ученице азы депиляции, мне кажется, что я получила частичку знаний. Спасибо 🙏",
  },
  {
    username: "Людмила",
    date: "30 апреля 2021",
    rating: 5,
    service: "Глубокое бикини/подмышки/ноги полностью",
    text: "Спасибо Ольге,как всегда безупречно.А по другому и быть не может,когда человек мастер своего дела и любит свою работу.",
  },
  {
    username: "Юлия",
    date: "07 апреля 2021",
    rating: 5,
    service: "Бикини глубокое",
    text: "Спасибо за профессионализм!Все как всегда прекрасна!",
  },
  {
    username: "Елена",
    date: "02 апреля 2021",
    rating: 5,
    service: "Электроэпиляция (тело)",
    text: "Перекрасный мастер, очень деликатный и внимательный!  Если бы не Ольга, я не решилась бы на такую интимную процедуру)",
  },
  {
    username: "Татьяна Меженская",
    date: "27 марта 2021",
    rating: 5,
    service: "Подмышки",
    text: "Очень довольна работай. Молодец. Мастер своего дела.",
  },
  {
    username: "Алексей",
    date: "25 марта 2021",
    rating: 5,
    service: "Подмышки",
    text: "Все прошло замечательно. Мастер просто профессионал своего дела.",
  },
  {
    username: "Екатерина",
    date: "23 марта 2021",
    rating: 5,
    service: "Электроэпиляция (тело)",
    text: "Отлично",
  },
  {
    username: "Аня",
    date: "09 марта 2021",
    rating: 5,
    service: "Электроэпиляция (тело)",
    text: "Все отлично",
  },
  {
    username: "Мария",
    date: "05 марта 2021",
    rating: 5,
    service: "Бикини глубокое",
    text: "В очередной раз уходила от Ольги с чувством полного удовлетворения от проделанной ею работы. Прекрасный мастер своего дела, комфортная обстановка, приятная атмосфера на протяжении всей процедуры. В общем , я довольна в который раз 🙂 благодарю 🤗",
  },
  {
    username: "Айгуль",
    date: "27 февраля 2021",
    rating: 5,
    service: "",
    text: "Мастер от Бога! Спасибо за глаткую кожу и понимания!",
  },
  {
    username: "Наталья",
    date: "26 февраля 2021",
    rating: 5,
    service: "Подмышки",
    text: "Самый лучший мастер. За несколько минут приёма можно обсудить все вопросы, как с подругой. Услуга на 5 с плюсом. Консультации при необходимости всегда получаю. А самое главное, в своём плотном графике,  всегда найдётся местечко... а это так важно, если назревает супер свидание или просто срочно поднять себе настроение и самооценку. Спасибо за меня ))))",
  },
  {
    username: "Татьяна",
    date: "11 февраля 2021",
    rating: 5,
    service: "Глубокое бикини/подмышки/голени",
    text: "Всё как всегда - отлично! За час становишься обладательницей гладких ножек, подмышек и бикини! 👍 Ольга мастер своего дела! 👏 Спасибо!!!",
  },
  {
    username: "Машп",
    date: "29 января 2021",
    rating: 5,
    service: "Глубокое бикини/подмышки/голени",
    text: "У меня сегодня был не шугаринг, а сеанс психотерапии😂😂😂 вышла от Оли с мыслями-да и вправду, чего это я....спасибо🍭",
  },
  {
    username: "Олеся",
    date: "27 января 2021",
    rating: 5,
    service: "Электроэпиляция (тело)",
    text: "Сделала первую процедуру электроэпиляцию, супер! Все понравилось, а главное не больно! Спасибо мастеру Ольге, вежливая и внимательная.",
  },
  {
    username: "Наташа",
    date: "23 января 2021",
    rating: 5,
    service: "Бикини глубокое",
    text: "Обожаю эти сеансы гладкой и шелковистой кожи 💞 💞 💞\nМиллион благодарностей чуткому мастеру-профессионалу Олечке!!! 🌸🌸🌸🌸🌸\nИ желаю ещё больше постоянных клиентов! 👯👯👯👍",
  },
  {
    username: "Валерия",
    date: "23 января 2021",
    rating: 5,
    service: "Электроэпиляция (тело)",
    text: "Процедура прошла отлично. Используем обезболивающее, т.к. очень чувствительная. Все обеззараживается",
  },
  {
    username: "Руслан",
    date: "13 января 2021",
    rating: 5,
    service: "Бикини глубокое",
    text: "Ольга замечательный и внимательный мастер, все делала аккуратно и практически безболезненно. Проконсультировала по всем интересующим вопросам, дала рекомендации по уходу. Я остался довольным результатом, кожа гладкая и без раздражения. Все на высшем уровне, всем рекомендую.",
  },
  {
    username: "Ольга Капитонова",
    date: "24 декабря 2020",
    rating: 5,
    service: "",
    text: "Замечательный мастер! Быстро и качественно!",
  },
  {
    username: "Людмила Злобина",
    date: "17 декабря 2020",
    rating: 5,
    service: "",
    text: "Качественно,быстро,практически безболезненно!Ольга-профессионал в своём деле.Спасибо,что делаете женщин красивыми и уверенными в себе!",
  },
  {
    username: "Анастасия",
    date: "07 декабря 2020",
    rating: 5,
    service: "Бикини глубокое",
    text: "Все как всегда супер",
  },
  {
    username: "Ирина",
    date: "27 ноября 2020",
    rating: 5,
    service: "Лицо полностью",
    text: "Хожу сама и маму приобщила! Быстро и качественно!",
  },
  {
    username: "Елена",
    date: "19 ноября 2020",
    rating: 5,
    service: "Зона над верхней губой",
    text: "Всё замечательно!!!",
  },
  {
    username: "Светлана",
    date: "02 ноября 2020",
    rating: 5,
    service: "Бикини глубокое",
    text: "Лучший мастер своего дела!👍Работает даже в экстремальных условиях!👏Нет электричества и света-ей это не помеха!Ведь есть фонарик.😊Как всегда всё сделала быстро и качественно 🌹🌹🌹Умничка!🤗Так держать!!!😉",
  },
  {
    username: "Марина",
    date: "19 октября 2020",
    rating: 5,
    service: "Бикини глубокое",
    text: "Замечательный мастер. Быстро, качественно. Никакого раздражения. Все  замечательно.",
  },
  {
    username: "Алла",
    date: "28 сентября 2020",
    rating: 5,
    service: "Бикини глубокое",
    text: "Как всегда всё супер",
  },
  {
    username: "Just Ann",
    date: "12 сентября 2020",
    rating: 5,
    service: "Бикини глубокое",
    text: "Олечка моя любимая!!! 💕 Спасибо Тебе за то, что даришь мне красоту, радость и безмерную уверенность в себе!!! 🤗🌹 Я богиня!!! Пускай даже под одеждой))) 😉🥰",
  },
  {
    username: "Оксана",
    date: "10 сентября 2020",
    rating: 5,
    service: "Бикини глубокое",
    text: "Огромное спасибо мастеру Ольге!\nОтличный специалист. Быстро, качественно, а самое главное не больно.\nПриветливая, подобрала правильный материал для депиляции исходя из особенностей болевого порога и состояния кожи.",
  },
  {
    username: "Анна",
    date: "09 сентября 2020",
    rating: 5,
    service: "Бикини глубокое",
    text: "👍👍👍👍",
  },
  {
    username: "Мария",
    date: "04 сентября 2020",
    rating: 5,
    service: "",
    text: "Вообщем, я тоже сегодня посетила Ольгу в первый раз. Зашла, сразу сказала: я первый раз, я очень нервничаю. А она: а я нет, все будет круто) и все, волнение как рукой сняло. Не скажу, что это самая приятная процедура, которую я делала, но на самом деле все оказалось гораздо лучше чем я себе навыдумывала) Благодаря свободному общению на разные темы и профессионализму, все прошло ооочень быстро и с минимальными неприятными ощущениями) но зато эффект после..... это ощущение легкости и комфортности) ты ощущаешь себя великолепно, ухоженно, хоть этого никто и не видит, но очень придаёт уверенности. И точно знаешь что наутро не будет щетины, неприятных ощущений. Я обязательно обращусь ещё раз за этой процедурой и именно к Ольге) спасибо Вам!)",
  },
  {
    username: "Оксана",
    date: "02 августа 2020",
    rating: 5,
    service: "Подмышки",
    text: "Была сегодня у Ольги. Как всегда все супер! Быстро, не больно, качественно.",
  },
  {
    username: "Дзерасса",
    date: "31 июля 2020",
    rating: 5,
    service: "Бикини глубокое",
    text: "Я осталась довольна процедурой. Все быстро и аккуратно",
  },
  {
    username: "Екатерина",
    date: "30 июля 2020",
    rating: 5,
    service: "Бикини глубокое",
    text: "Все , как всегда,  хорошо и гладенько.  Спасибо !",
  },
  {
    username: "Галина",
    date: "29 июля 2020",
    rating: 5,
    service: "Бикини глубокое",
    text: "Все просто замечательно! Ольга мастер своего дела и просто замечательный человек! Обязательно приду снова!",
  },
  {
    username: "Макка",
    date: "29 июля 2020",
    rating: 5,
    service: "Бикини глубокое",
    text: "Вы лучшая Оль спасибо👍",
  },
  {
    username: "Жанна",
    date: "28 июля 2020",
    rating: 5,
    service: "Бикини глубокое",
    text: "👌",
  },
  {
    username: "Алина",
    date: "27 июля 2020",
    rating: 5,
    service: "Бикини глубокое",
    text: "Хорошая обстановка, мне даже захотелось поспать))\nПриятный мастер, точно знает что делает и легко может подсказать что тебе нужно по уходу, мне понравилось, у вас Ольга очень лёгкая рука, практически не было болевых ощущений, результатом довольна, приду ещё))",
  },
  {
    username: "Светлана",
    date: "13 июля 2020",
    rating: 5,
    service: "Электроэпиляция (тело)",
    text: "Все очень понравилось, спасибо мастеру Ольге все было на высшем уровне👍🏻👍🏻👍🏻👍🏻👍🏻",
  },
  {
    username: "Александра",
    date: "11 марта 2020",
    rating: 5,
    service: "Бикини глубокое",
    text: "Очень хорошее обслуживание",
  },
  {
    username: "Алина",
    date: "22 января 2020",
    rating: 5,
    service: "",
    text: "Спасибо😘 Всё превосходно 👍",
  },
  {
    username: "Александра",
    date: "19 января 2020",
    rating: 5,
    service: "Бикини глубокое",
    text: "Доброго времени суток! Я в восторге! Была на процедуре у Ольги и осталась очень довольна! Большое спасибо! Девочки, не бойтесь, мастер-класс, атмосфера-класс, результат-класс! И время визита не займёт много времени, что тоже-класс!",
  },
  {
    username: "Анастасия Куква",
    date: "28 декабря 2019",
    rating: 5,
    service: "",
    text: "Олечка,была сегодня впервые у вас на шугаринге. Очень боялась и стеснялась, но совершенно напрасно, вы прекрасный мастер, отличная работа, располагающая обстановка! Я в восторге. Все было просто супер. Спасибо вам большое!!!! Обезательно вернусь к вам снова.!!!!У вас Золотые ручки!!! С Наступающим новым годом!!!!!!",
  },
  {
    username: "Анна",
    date: "25 декабря 2019",
    rating: 5,
    service: "Руки",
    text: "Спасибо, Ольга !\nБыстро , качественно.\nС Наступающим Новым Годом 🎄🎁🥳",
  },
  {
    username: "Ольга",
    date: "24 декабря 2019",
    rating: 5,
    service: "Бикини глубокое",
    text: "Оля, как всегда на высоте. Сложно шло ударение волос, но опыт все решил. Олечка, ты профессионал!! Спасибо тебе!!",
  },
  {
    username: "Оксана",
    date: "18 декабря 2019",
    rating: 5,
    service: "Бикини глубокое",
    text: "Оч понравилась процедура электроэпиляции, ожидала,что будет больнее, но все вполне комфортно! Спасибо Олечка!)",
  },
  {
    username: "Татьяна",
    date: "18 декабря 2019",
    rating: 5,
    service: "Бикини глубокое",
    text: "Спасибо,Оленька, всё просто замечательно🌺👍🌹",
  },
  {
    username: "Надежда",
    date: "14 декабря 2019",
    rating: 5,
    service: "Подмышки",
    text: "Оля, как всегда, все замечательно 👍",
  },
  {
    username: "Гульнара Глазачева",
    date: "14 декабря 2019",
    rating: 5,
    service: "Подмышки",
    text: "Спасибо огромное!",
  },
  {
    username: "Наталия",
    date: "13 декабря 2019",
    rating: 5,
    service: "Подмышки",
    text: "Оля,спасибо.В очередной раз мне понравилось ваше обслуживание.Не скажу,что процедуры совсем безболезненны,но очень очень терпимы.В салоне комфортно,чисто,уютно,эмоционально приятно.",
  },
  {
    username: "Вера",
    date: "12 декабря 2019",
    rating: 5,
    service: "Бикини глубокое",
    text: "Честно признаться, очень боялась)) была впервые на данной процедуре. но Ольга - мастер своего дела! Да, немного неприятно,  но вполне терпимо, делается всё аккуратно, что очень немаловажно. Так что советую не бояться))",
  },
  {
    username: "Лена",
    date: "11 декабря 2019",
    rating: 5,
    service: "Бикини глубокое",
    text: "Сегодня состоялся мой дебют в этой области\nДовольна абсолютно \nПо всем критериям ставлю 5⭐\nСразу сделала ещё и голени\nВышла с прекрасным настроением\nРекомендую",
  },
  {
    username: "Екатерина",
    date: "04 декабря 2019",
    rating: 5,
    service: "Руки",
    text: "Оля - офигенная!!! Нечасто встретишь мастера, который относится к своему делу настолько серьезно и ответственно; могу бесконечно говорить, как у нее чисто, и уютно, как она качественно выполняет работу, насколько это приятный в общении, жизнерадостный и доброжелательный человек! Всегда хожу к ней с удовольствием, и ухожу красивая ))))1",
  },
  {
    username: "Светлана",
    date: "04 декабря 2019",
    rating: 5,
    service: "Бикини глубокое",
    text: "Спасибо большое! Как всегда отлично!",
  },
  {
    username: "Светлана",
    date: "26 ноября 2019",
    rating: 5,
    service: "Бикини глубокое",
    text: "Мой шугаринг как всегда был идеальным. За беседой всё прошло быстро и незаметно. Ольга лучший мастер.",
  },
  {
    username: "Айнура Искакова",
    date: "23 ноября 2019",
    rating: 5,
    service: "Бикини глубокое",
    text: "Очень довольна! Ольга профессионал в своём деле! Была у неё впервые,буду теперь постоянным клиентом ! Очень всем рекомендую!",
  },
  {
    username: "Светлана",
    date: "19 ноября 2019",
    rating: 5,
    service: "Бикини глубокое",
    text: "Спасибо Оле за красоту и терпение)))",
  },
  {
    username: "Ирина",
    date: "16 ноября 2019",
    rating: 5,
    service: "Бикини глубокое",
    text: "🔥🔥🔥💕💋",
  },
  {
    username: "Лилия",
    date: "12 ноября 2019",
    rating: 5,
    service: "",
    text: "Спасибо большое за Ваши волшебные руки! Не заметила как время пролетело, а результат обалденный! Все бархатное, нежное, необычное)",
  },
  {
    username: "Наталья",
    date: "30 октября 2019",
    rating: 5,
    service: "",
    text: "Ольга-лучший мастер! Спасибо! Все комфортно, быстро и гладко!",
  },
  {
    username: "Екатерина Трутнева",
    date: "28 октября 2019",
    rating: 5,
    service: "",
    text: "😘🌺все отлично!",
  },
  {
    username: "Наташа",
    date: "26 октября 2019",
    rating: 5,
    service: "Бикини глубокое",
    text: "😘😘😘😘очень понравилось!!!!",
  },
  {
    username: "Александра",
    date: "26 октября 2019",
    rating: 5,
    service: "Подмышки",
    text: "Как всегда все суперр) быстро и легко)",
  },
  {
    username: "Юлия",
    date: "23 октября 2019",
    rating: 5,
    service: "",
    text: "Ольга самый лучший мастер! Быстро, комфортно, легко! Спасибо Вам большое за Вас)) 🌸",
  },
  {
    username: "Юлия",
    date: "19 октября 2019",
    rating: 5,
    service: "",
    text: "Все отлично!!! Ольга мастер своего дела!!!",
  },
  {
    username: "Мария",
    date: "18 октября 2019",
    rating: 5,
    service: "Подмышки",
    text: "Приятно иметь дело с профессионалом 😉",
  },
  {
    username: "Алёна",
    date: "17 октября 2019",
    rating: 5,
    service: "Подмышки",
    text: "К Ольге хожу второй год. Она Профессионал своего дела! Возвращаешься к ней всегда с удовольствием, а уходишь ещё красивее и с чудесным настроением! Рекомендую всем всем )",
  },
  {
    username: "Ольга",
    date: "16 октября 2019",
    rating: 5,
    service: "Подмышки",
    text: "Как всегда все отлично! Спасибо за подарочек 🌺",
  },
  {
    username: "Оля",
    date: "12 октября 2019",
    rating: 5,
    service: "Бикини глубокое",
    text: "Олечка, спасибо за твою работу и приятную атмосферу. Ты профессионал своего дела и просто замечательный человек🤗",
  },
  {
    username: "Настя Онищук",
    date: "12 октября 2019",
    rating: 5,
    service: "",
    text: "Замечательный мастер!) Хожу уже к Ольге вотрой раз и  остаюсь довольной❤ всё быстренько и самое главное безболезненно!😌",
  },
  {
    username: "Ольга",
    date: "10 октября 2019",
    rating: 5,
    service: "Бикини глубокое",
    text: "Рекомендую Ольгу, как опытного мастера. Делаю глубокое бикини и голени только у неё уже несколько лет. Быстро, качественно и без сильных болевых ощущений. Спасибо!",
  },
  {
    username: "Наталья",
    date: "05 октября 2019",
    rating: 5,
    service: "Бикини глубокое",
    text: "Ольга спасибо большое за Ваш труд. Всё очень понравилось быстро,  безболезненно. Совсем не заметила как прошла процедура.  Теперь только к  Вам. ⚘⚘⚘",
  },
  {
    username: "Ирина",
    date: "30 сентября 2019",
    rating: 5,
    service: "Бикини глубокое",
    text: "Была у Ольги уже не первый раз. И как всегда все отлично👍👍👍",
  },
  {
    username: "Любовь",
    date: "30 сентября 2019",
    rating: 5,
    service: "Бикини глубокое",
    text: "Всё отлично🤗👍👍👍 быстро и качественно))) впрочем как всегда💯🔥",
  },
  {
    username: "Наталья Фаттахова",
    date: "23 сентября 2019",
    rating: 5,
    service: "",
    text: "Спасибо большое все просто чудестно))))",
  },
  {
    username: "Анастасия",
    date: "19 сентября 2019",
    rating: 5,
    service: "",
    text: "Все на высшем уровне.",
  },
  {
    username: "Елена Вольманова",
    date: "19 сентября 2019",
    rating: 5,
    service: "",
    text: "Спасибо за отличную процедуру и прекрасное общение! Уже больше года хожу на шугаринг и с каждым разом все больше убеждаюсь, что не  ошиблась в выборе именно этой процедуры, и  главное не ошиблась в выборе мастера, с которым процедура пролетает комфортно и без всякого стеснения!!!🤗",
  },
]);
</script>
