<!--
  BeautyPromo.vue
  Component for displaying a promotional section for beauty/hair removal services with quiz
-->
<template>
  <div class="relative flex flex-col items-start overflow-hidden">
    <!-- First promo section -->
    <div class="relative h-[1070px] md:h-[1070px] h-screen w-full background-container">
      <div
        class="container mx-auto px-4 md:px-24 max-w-[1240px] h-full relative z-10 flex flex-col"
      >
        <!-- Header section with logo and navigation -->
        <div
          class="w-full relative md:mb-8 md:mt-12 h-[18vh] md:h-auto"
        >
          <div class="flex justify-start items-center h-full">
            <!-- Logo on the left -->
            <div class="md:min-w-[288px] mr-12 md:-ml-4">
              <img
                src="/images/logo.png"
                alt="Николе профстудия"
                class="h-[10vh] md:h-36"
              >
            </div>

            <div class="grow" />

            <!-- Desktop Menu -->
            <div class="hidden md:flex items-center gap-12">
              <button
                class="text-main text-3xl font-normal font-roboto hover:text-opacity-80 transition-all cursor-pointer"
                @click="scrollToServices"
              >
                Услуги
              </button>
              <button
                class="text-main text-3xl font-normal font-roboto hover:text-opacity-80 transition-all cursor-pointer"
                @click="scrollToContacts"
              >
                Контакты
              </button>
            </div>

            <!-- Mobile Hamburger Menu -->
            <div class="md:hidden">
              <button
                class="text-main text-3xl"
                @click="toggleMobileMenu"
              >
                <svg
                  v-if="!isMobileMenuOpen"
                  class="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                <svg
                  v-else
                  class="w-8 h-8"
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
          </div>

          <!-- Mobile Menu Dropdown -->
          <div
            v-if="isMobileMenuOpen"
            class="md:hidden absolute top-full left-0 right-0 bg-[#16080E] bg-opacity-95 backdrop-blur-sm z-50"
          >
            <div class="container mx-auto px-4 py-4">
              <button
                class="w-full text-left text-main text-2xl font-normal font-roboto py-2 hover:text-opacity-80 transition-all"
                @click="scrollToServices"
              >
                Услуги
              </button>
              <button
                class="w-full text-left text-main text-2xl font-normal font-roboto py-2 hover:text-opacity-80 transition-all"
                @click="scrollToContacts"
              >
                Контакты
              </button>
              <div class="text-main-white2 text-2xl font-normal font-roboto py-2">
                Мурманск, <span class="text-main text-xl">ул Юбилейная 9-32</span>
              </div>
            </div>
          </div>
        </div>

        <div class="flex flex-col lg:flex-row">
          <!-- Left Content Section with Glass Effect -->
          <div :class="['w-full lg:w-[920px] z-10 flex flex-col justify-center', { 'glass-container': isMobile }]">
            <!-- Main Headline -->
            <h1 class="text-main-white2 text-[clamp(1.25rem,6vw,2.5rem)] md:text-7xl font-bold font-raleway mt-16 mb-8 md:mb-[64px]">
              Гладкая кожа <span class="pink-text-gradient font-bold">НАВСЕГДА</span><br>
              <span class="text-[clamp(1rem,5vw,2.5rem)] md:text-6xl">без боли и лишних сеансов</span>
            </h1>

            <!-- Bullet Points -->
            <ul class="space-y-2 md:space-y-4 text-main-white2 text-sm md:text-3xl font-normal ml-4">
              <li class="flex items-start">
                <span class="mr-2 hidden md:inline">•</span>
                <span>с <span class="pink-text-gradient font-bold">выгодой от 10.000</span> рублей за весь курс</span>
              </li>
              <li class="flex items-start">
                <span class="mr-2 hidden md:inline">•</span>
                <span>от мастера с <span class="pink-text-gradient font-bold">опытом 13+ лет</span> в центре Мурманска</span>
              </li>
            </ul>

            <!-- <div class="flex items-start"> -->
            <div class="space-y-2 md:space-y-4 mb-4 md:mb-12 text-main-white2 text-sm md:text-4xl font-semibold mt-[96px]">
              <!-- <span class="mr-2 hidden md:inline">•</span> -->
              <span>Пройдите опрос и получите <span class="green-text-gradient font-bold">подарок</span></span>
            </div>
            <div class="flex gap-16">
              <ul class="space-y-1 md:space-y-2 text-main-white2 text-sm md:text-2xl font-normal w-[390px]">
                <li class="flex items-start text-end">
                  <!-- <span class="mr-1 md:mr-2">•</span> -->
                  <span class="w-full"><span class="green-text-gradient font-bold">бесплатный</span> пробный сеанс</span>
                </li>
                <li class="flex items-start text-end">
                  <!-- <span class="mr-1 md:mr-2">•</span> -->
                  <span><span class="green-text-gradient font-bold">персональные</span> рекомендации по уходу за кожей</span>
                </li>
              </ul>
              <!-- CTA Button with Reflection -->
              <div class="relative scale-75 md:scale-100 my-auto">
                <div class="button-firefly-container">
                  <div :class="{ 'button-with-reflection': isMobile }">
                    <!-- Butterfly Decoration -->
                    <!-- <div class="absolute butterfly-pulse w-[50px] md:w-[100px] -top-[50px] -left-[50px] gift-pulse hidden">
                      <img
                        src="/images/butterfly.png"
                        alt="Декоративная бабочка"
                        class="w-full h-full"
                      >
                    </div> -->
                    <button
                      class="w-[340px] h-[90px] py-2 px-4 md:py-4 md:px-8 font-bold bg-sup2-white text-additional-black text-xl md:text-3xl font-roboto rounded-md hover:bg-opacity-90 transition-all shadow-lg button-glow button-pulse"
                      @click="scrollToQuiz"
                    >
                      Получить подарок
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Image Section -->
        <div class="absolute -right-[750px] bottom-0">
          <!-- <div
            class="absolute top-0 left-0 z-10"
            :style="{
              width: '100%',
              height: '100%',
              background: 'linear-gradient(to bottom, rgba(22, 8, 14, 1.0) 0%, rgba(148, 119, 12, 0.0) 20%)',
            }"
          /> -->
          <img
            src="/images/main.png"
            alt="Женщина"
            class="object-cover z-10 max-w-none h-full opacity-70"
          >
        </div>
      </div>
    </div>
  </div>

  <!-- Second block - Quiz section -->
  <div
    id="quiz-section"
    ref="quizSection"
    class="relative h-[1000px] md:h-[1000px] h-screen w-full quiz-background"
  >
    <BeautyQuiz />

    <div class="absolute bottom-0 left-0 w-full bottom-14">
      <div class="h-[38px] w-full bg-[#FFFAE4]" />
      <div class="h-[16px] w-full bg-[#A78B75]" />
    </div>
  </div>

  <!-- <BeautyServices ref="servicesSection" />

  <BeautyFaq />

  <BeautyContacts ref="contactsSection" />

  <BeautyFooter /> -->
</template>

<script setup>
/**
 * Beauty promotion component for hair removal services
 * Displays main offer, benefits, and call-to-action with quiz section
 */
import { ref, onMounted, onUnmounted } from "vue";
import BeautyQuiz from "./BeautyQuiz.vue";
import BeautyContacts from "./BeautyContacts.vue";

const quizSection = ref(null);
const servicesSection = ref(null);
const contactsSection = ref(null);
const isMobileMenuOpen = ref(false);
const isMobile = ref(false);

/**
 * Updates mobile state based on window width
 * Only runs on client-side
 */
const updateMobileState = () => {
  if (import.meta.client) {
    isMobile.value = window.innerWidth <= 768;
  }
};

onMounted(() => {
  window.addEventListener("resize", updateMobileState);
});

onUnmounted(() => {
  window.removeEventListener("resize", updateMobileState);
});

/**
 * Toggles the mobile menu visibility
 */
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

/**
 * Scrolls to the quiz section smoothly
 */
const scrollToQuiz = () => {
  quizSection.value.scrollIntoView({ behavior: "smooth" });
  isMobileMenuOpen.value = false;
};

/**
 * Scrolls to the services section smoothly
 */
const scrollToServices = () => {
  servicesSection.value.$el.scrollIntoView({ behavior: "smooth" });
  isMobileMenuOpen.value = false;
};

/**
 * Scrolls to the contacts section smoothly
 */
const scrollToContacts = () => {
  contactsSection.value.$el.scrollIntoView({ behavior: "smooth" });
  isMobileMenuOpen.value = false;
};
</script>

<style>
/* Define Tailwind font family classes */
.font-raleway {
  font-family: 'Raleway', sans-serif;
}

.font-roboto {
  font-family: 'Roboto', sans-serif;
}

/* Gradient text with glow effect */
.pink-text-gradient {
  background-image: linear-gradient(180deg, #FF4A81 0%, #E088A3 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  text-shadow: 0 0 10px rgba(255, 74, 129, 0.4);
  display: inline-block;
}

/* Gradient text with glow effect */
.green-text-gradient {
  background-image: linear-gradient(180deg, #66A489 0%, #8FBE7D 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  text-shadow: 0 0 10px rgba(147, 186, 115, 0.4);
  display: inline-block;
}

/* Button glow effect */
.button-glow {
  box-shadow: 0 0px 24px rgba(147, 186, 115, 0.4),
              0 0px 8px rgba(147, 186, 115, 0.6),
              0 0 0 1px rgba(147, 186, 115, 0.8);
  transition: all 0.3s ease;
  position: relative;
  z-index: 5;
}

.button-glow:hover {
  box-shadow: 0 0px 28px rgba(147, 186, 115, 0.6),
              0 0px 12px rgba(147, 186, 115, 0.8),
              0 0 0 2px rgba(147, 186, 115, 1);
  transform: translateY(-2px);
}

/* Button pulse animation */
.button-pulse {
  animation: pulse 3s ease-in-out infinite;
}

/* Butterfly pulse animation */
.butterfly-pulse {
  animation: butterflyPulse 3s ease-in-out infinite;
  filter: drop-shadow(0 0 8px rgba(147, 186, 115, 0.8));
}

@keyframes butterflyPulse {
  0% {
    transform: scale(1);
    filter: drop-shadow(0 0 8px rgba(147, 186, 115, 0.4));
  }
  50% {
    transform: scale(1.03);
    filter: drop-shadow(0 0 12px rgba(147, 186, 115, 0.7));
  }
  100% {
    transform: scale(1);
    filter: drop-shadow(0 0 8px rgba(147, 186, 115, 0.4));
  }
}
/* Butterfly pulse animation */
.gift-pulse {
  animation: giftPulse 3s ease-in-out infinite;
  filter: drop-shadow(0 0 8px rgba(147, 186, 115, 0.8));
}

@keyframes giftPulse {
  0% {
    transform: scale(1);
    filter: drop-shadow(0 0 8px rgba(148, 71, 94, 0.4));
  }
  50% {
    transform: scale(1.03);
    filter: drop-shadow(0 0 12px rgba(148, 71, 94, 0.7));
  }
  100% {
    transform: scale(1);
    filter: drop-shadow(0 0 8px rgba(148, 71, 94, 0.4));
  }
}

@keyframes pulse {
  0% {
    box-shadow: 0 0px 24px rgba(147, 186, 115, 0.4),
                0 0px 8px rgba(147, 186, 115, 0.6),
                0 0 0 1px rgba(147, 186, 115, 0.8);
  }
  50% {
    box-shadow: 0 0px 32px rgba(147, 186, 115, 0.7),
                0 0px 16px rgba(147, 186, 115, 0.8),
                0 0 0 2px rgba(147, 186, 115, 1);
  }
  100% {
    box-shadow: 0 0px 24px rgba(147, 186, 115, 0.4),
                0 0px 8px rgba(147, 186, 115, 0.6),
                0 0 0 1px rgba(147, 186, 115, 0.8);
  }
}

/* Firefly container and animation */
.button-firefly-container {
  position: relative;
  display: inline-block;
}

.button-firefly-container::before,
.button-firefly-container::after,
.button-firefly-container .button-glow::before,
.button-firefly-container .button-glow::after {
  content: "";
  position: absolute;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: rgba(147, 186, 115, 0.9);
  filter: blur(2px);
  box-shadow: 0 0 10px 2px rgba(147, 186, 115, 0.8);
  z-index: 4;
  pointer-events: none;
}

.button-firefly-container::before {
  animation: firefly1 7s linear infinite;
}

.button-firefly-container::after {
  animation: firefly2 6s linear infinite;
}

.button-firefly-container .button-glow::before {
  animation: firefly3 8s linear infinite;
}

.button-firefly-container .button-glow::after {
  animation: firefly4 9s linear infinite;
}

@keyframes firefly1 {
  0% { transform: translate(-30px, 20px); opacity: 0; }
  20% { opacity: 1; }
  40% { transform: translate(40px, -30px); opacity: 0.8; }
  60% { transform: translate(80px, 20px); opacity: 1; }
  80% { transform: translate(20px, 60px); opacity: 0.6; }
  100% { transform: translate(-30px, 20px); opacity: 0; }
}

@keyframes firefly2 {
  0% { transform: translate(50px, 40px); opacity: 0; }
  20% { transform: translate(-20px, 20px); opacity: 0.8; }
  40% { transform: translate(-40px, -30px); opacity: 1; }
  60% { transform: translate(10px, -50px); opacity: 0.6; }
  80% { transform: translate(40px, 0px); opacity: 0.8; }
  100% { transform: translate(50px, 40px); opacity: 0; }
}

@keyframes firefly3 {
  0% { transform: translate(0px, -40px); opacity: 0; }
  30% { transform: translate(60px, 0px); opacity: 1; }
  50% { transform: translate(30px, 40px); opacity: 0.8; }
  70% { transform: translate(-20px, 30px); opacity: 1; }
  100% { transform: translate(0px, -40px); opacity: 0; }
}

@keyframes firefly4 {
  0% { transform: translate(-50px, -20px); opacity: 0; }
  25% { transform: translate(0px, 40px); opacity: 0.8; }
  50% { transform: translate(50px, 0px); opacity: 1; }
  75% { transform: translate(30px, -40px); opacity: 0.6; }
  100% { transform: translate(-50px, -20px); opacity: 0; }
}

/* Background setup with rotated gradient */
.background-container {
  background-color: #16080E;
  position: relative;
}

.background-container::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(ellipse 20% 30% at 40%, #563C34 0%, #402E28 30%, #16080E 100%);
  transform: rotate(-25deg);
  z-index: 1;
}

.background-container::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(148, 119, 12, 0.0) 80%, rgba(22, 8, 14, 1.0) 100%);
  z-index: 2;
}

/* Quiz background */
.quiz-background {
  background: linear-gradient(to bottom, #FFA79B 0%, #FEB5A2 37%, #FB9C7E 86%, #8F352A 100%);
  position: relative;
}

/* Glass effect container */
.glass-container {
  background: rgba(22, 8, 14, 0.6);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 32px 16px;
  margin: 0;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.4);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

/* Button with reflection */
.button-with-reflection {
  position: relative;
  display: inline-block;
}

.button-with-reflection::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 100%;
  height: 20px;
  background: linear-gradient(180deg,
    rgba(255, 255, 255, 0.2) 0%,
    rgba(255, 255, 255, 0.1) 50%,
    rgba(255, 255, 255, 0) 100%
  );
  transform: scaleY(0.5) translateY(100%);
  filter: blur(4px);
  pointer-events: none;
}

/* Mobile-specific adjustments */
@media (max-width: 768px) {
  .background-container::before {
    transform: rotate(-15deg);
  }

  .container {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
}

/* Mobile menu animation */
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: all 0.3s ease;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
