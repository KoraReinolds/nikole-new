<!--
  BeautyPromo.vue
  Component for displaying a promotional section for beauty/hair removal services with quiz
-->
<template>
  <div class="scroll-container relative flex flex-col items-start overflow-hidden">
    <!-- First promo section -->
    <div
      id="container"
      class="relative h-[1070px] md:h-[1070px] h-screen w-full background-container"
    >
      <div
        class="container mx-auto px-4 md:px-12 lg:px-24 max-w-[1240px] h-full relative z-10 flex flex-col"
      >
        <!-- Header section with logo and navigation -->
        <div
          class="w-full relative md:mb-8 md:mt-12 h-[14vh] md:h-auto"
        >
          <div class="flex justify-start items-center h-full">
            <!-- Logo on the left -->
            <div class="lg:min-w-[288px] mr-12 md:-ml-4">
              <img
                src="/images/logo.png"
                alt="Николе профстудия"
                class="h-[calc(var(--screen-height)*0.1)] md:h-24"
              >
            </div>

            <div class="grow" />

            <!-- Desktop Menu -->
            <div class="hidden md:flex items-center md:gap-8 lg:gap-12 text-main md:text-2xl lg:text-3xl font-normal font-roboto">
              <button
                class="hover:text-opacity-80 transition-all cursor-pointer"
                @click="scrollToServices"
              >
                Услуги
              </button>
              <button
                class="hover:text-opacity-80 transition-all cursor-pointer"
                @click="scrollToReviews"
              >
                Отзывы
              </button>
              <button
                class="hover:text-opacity-80 transition-all cursor-pointer"
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
            class="md:hidden absolute top-full left-0 right-0 bg-[#16080E] bg-opacity-95 backdrop-blur-sm z-[100]"
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
                @click="scrollToReviews"
              >
                Отзывы
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

        <div class="flex flex-col lg:flex-rowflex flex-col lg:flex-rowflex flex-col lg:flex-rowflex flex-col lg:flex-rowflex flex-col lg:flex-rowflex flex-col lg:flex-rowflex flex-col lg:flex-rowflex flex-col lg:flex-rowflex flex-col lg:flex-rowflex flex-col lg:flex-row">
          <!-- Left Content Section with Glass Effect -->
          <div
            class="w-full lg:w-[920px] z-10 flex flex-col justify-center text-center md:text-left glass-container-main px-0 py-[calc(var(--screen-height)*0.04)] md:px-0 md:py-0"
          >
            <!-- Main Headline -->
            <h1 class="text-main-white2 text-[clamp(1.25rem,10vw,2.5rem)] md:text-5xl lg:text-7xl font-bold font-raleway mt-4 md:mt-16 leading-[1.2]">
              Гладкая кожа
              <br class="block md:hidden">
              <span class="pink-text-gradient font-bold text-[clamp(1.5rem,10vw,3.5rem)]">НАВСЕГДА</span>
              <br class="block md:hidden">
              <br class="hidden md:block">
            </h1>
            <p class="text-main-white2 text-[clamp(1rem,5vw,2.5rem)] font-bold leading-[1.4] md:text-2xl lg:text-4xl my-4 md:mb-12">
              Эпиляция без&nbsp;боли и&nbsp;лишних&nbsp;сеансов
            </p>

            <!-- Bullet Points -->
            <ul class="space-y-2 md:space-y-3 text-main-white2 text-sm md:text-3xl font-normal md:ml-4 mb-[calc(var(--screen-height)*0.06)] md:mb-0">
              <li class="flex items-start">
                <span class="mr-2 hidden md:inline">•</span>
                <span class="md:text-2xl lg:text-3xl w-full text-center md:text-left text-sm">от&nbsp;мастера <span class="pink-text-gradient font-bold">c опытом 13+ лет</span><br class="block md:hidden"></span>
              </li>
              <li class="flex items-start">
                <span class="mr-2 hidden md:inline">•</span>
                <span class="md:text-2xl lg:text-3xl w-full text-center md:text-left text-sm">
                  <!-- с&nbsp;выгодой&nbsp;10%&nbsp;</span>для&nbsp;постоянных клиентов -->
                  в&nbsp;<span class="pink-text-gradient font-bold">центре Мурманска</span>
                </span>
              </li>
            </ul>

            <!-- <div class="flex items-start"> -->
            <div class="space-y-2 md:space-y-4 mb-[calc(var(--screen-height)*0.02)] md:mb-12 text-main-white2 text-[clamp(0.5rem,calc(var(--screen-height)*0.022),3rem)] md:text-3xl lg:text-4xl font-semibold md:mt-[96px] hidden md:block">
              <!-- <span class="mr-2 hidden md:inline">•</span> -->
              <span>Пройдите опрос и&nbsp;получите <span class="green-text-gradient font-bold">подарок</span></span>
            </div>
            <div class="flex flex-start flex-col md:flex-row md:flex-row-reverse md:justify-end gap-4 md:gap-16">
              <!-- CTA Button with Reflection -->
              <div class="relative my-auto">
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
                      class="h-[calc(var(--screen-height)*0.07)] w-[70vw] max-w-[280px] lg:max-w-[340px] md:h-[90px] text-[clamp(0.7rem,6vw,1.5rem)] py-2 px-4 md:py-2 lg:py-4 md:px-4 lg:px-8 font-bold bg-sup2-white text-additional-black md:text-xl lg:text-3xl font-roboto rounded-md hover:bg-opacity-90 transition-all shadow-lg button-glow button-pulse"
                      @click="scrollToQuiz"
                    >
                      Получить подарок
                    </button>
                  </div>
                </div>
              </div>

              <!-- List of benefits -->
              <ul class="space-y-2 text-main-white2 text-sm md:text-2xl font-normal w-full md:w-[390px] w-full text-center md:text-right text-sm md:text-lg lg:text-2xl">
                <li class="flex items-start">
                  <span class="w-full"><span class="green-text-gradient font-bold">бесплатный</span> пробный сеанс</span>
                </li>
                <li class="flex items-start">
                  <span class="w-full"><span class="green-text-gradient font-bold">персональные</span> рекомендации по&nbsp;выбору&nbsp;метода эпиляции</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Right Image Section -->
        <div class="absolute -right-[850px] md:-right-[750px] bottom-0 pointer-events-none">
          <img
            src="/images/main.png"
            alt="Женщина"
            class="object-cover z-[5] max-w-none h-full opacity-50 md:opacity-70"
          >
        </div>
      </div>
    </div>
  </div>

  <!-- Second block - Quiz section -->
  <div
    id="quiz-section"
    ref="quizSection"
    class="scroll-container relative h-[1000px] md:h-[1000px] h-screen w-full quiz-background"
  >
    <BeautyQuiz
      class="container mx-auto px-4 md:px-12 lg:px-24 max-w-[1240px] h-full relative z-10 flex flex-col"
      :quiz-available="quizFinished"
    />

    <div class="absolute left-0 w-full bottom-[calc(var(--screen-height)*0.05)] md:bottom-14">
      <!-- Left side with flower vase image (moved to background) -->
      <div class="h-[38px] w-full bg-[#FFFAE4]" />
      <div class="h-[16px] w-full bg-[#A78B75]" />
    </div>
    <div class="bottom-10 absolute -right-[161px] z-0 w-full left-0 overflow-hidden">
      <!-- <span class="absolute left-[22%] opacity-90 bottom-[6%] text-white text-sm md:text-xl font-normal font-roboto">
        ----▶
      </span> -->
      <div class="max-w-[1240px] mx-auto flex items-end justify-end">
        <img
          src="/images/quiz.png"
          alt="Цветы в вазе"
          class="w-[calc(var(--screen-height)*0.5)] md:w-[625px] object-contain translate-x-[66px]"
        >
      </div>
    </div>
  </div>

  <BeautyServices
    ref="servicesSection"
    :is-mobile="isMobile"
  />

  <BeautyFaq />

  <div
    style="background:radial-gradient(circle, #563C34 0%, #402E28 30%, #16080E 100%);"
  >
    <BeautyContacts
      ref="contactsSection"
      :is-scroll-disabled="isScrollDisabled"
      :quiz-available="quizFinished"
    />

    <BeautyFooter
      class="md:h-[718px]"
    />
  </div>
</template>

<script setup>
/**
 * Beauty promotion component for hair removal services
 * Displays main offer, benefits, and call-to-action with quiz section
 */
import { ref, onMounted, onUnmounted } from "vue";
import BeautyQuiz from "./BeautyQuiz.vue";

const quizSection = ref(null);
const servicesSection = ref(null);
const contactsSection = ref(null);
const isMobileMenuOpen = ref(false);
const isMobile = ref(true);
let currentIndex = 0;
let startY = 0;
let endY = 0;
let startScrollY = 0;

const quizFinished = ref(false);

/**
 * Updates mobile state based on device characteristics
 * Uses multiple factors to better distinguish between mobile devices and desktop
 * with small screen sizes
 */
const updateMobileState = () => {
  if (import.meta.client) {
    // Get screen width and device pixel ratio
    const width = window.innerWidth;
    const pixelRatio = window.devicePixelRatio || 1;

    // Check for touch capability
    const hasTouch = "ontouchstart" in window
      || navigator.maxTouchPoints > 0
      || navigator.msMaxTouchPoints > 0;

    // Check for mobile-specific features or patterns
    const isMobileUserAgent = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    // Check if orientation is available (more common on mobile)
    const hasOrientation = typeof window.orientation !== "undefined"
      || navigator.userAgent.indexOf("IEMobile") !== -1;

    // Combined check for mobile: either small screen with touch capability OR
    // identified as mobile via user agent OR has high pixel ratio typical of mobile
    isMobile.value = (width <= 768 && hasTouch)
      || isMobileUserAgent
      || (hasOrientation)
      || (width <= 768 && pixelRatio >= 2);

    console.debug(`Device detection: width=${width}, touch=${hasTouch}, ratio=${pixelRatio}, mobile=${isMobile.value}`);
  }
};

/**
 * Sets initial screen height CSS variable
 * Used to maintain fixed layout even when keyboard opens on mobile
 * Only called once at app initialization
 */
const setInitialScreenHeight = () => {
  if (import.meta.client) {
    const screenHeight = window.innerHeight;
    document.documentElement.style.setProperty("--screen-height", `${screenHeight}px`);
  }
};

/**
 * Handles touch start event
 * @param {TouchEvent} e - Touch event
 */
const _handleTouchStart = (e) => {
  startY = e.touches[0].clientY;
  startScrollY = window.scrollY;
};

/**
 * Handles touch end event
 * @param {TouchEvent} e - Touch event
 */
const _handleTouchEnd = (e) => {
  endY = e.changedTouches[0].clientY;
  const delta = startY - endY;
  const scrollDelta = window.scrollY - startScrollY;

  // Если скролл был небольшим (менее 100px), возвращаемся к предыдущей позиции
  if (Math.abs(scrollDelta) < 100) {
    window.scrollTo({
      top: startScrollY,
      behavior: "smooth",
    });
    return;
  }

  if (Math.abs(delta) > 50) { // минимальная длина свайпа
    if (delta > 0 && currentIndex < 1) { // свайп вверх
      currentIndex++;
    }
    else if (delta < 0 && currentIndex > 0) { // свайп вниз
      currentIndex--;
    }

    // Находим все секции
    const sections = [
      document.querySelector(".background-container"),
      document.querySelector(".quiz-background"),
    ];

    if (sections[currentIndex]) {
      sections[currentIndex].scrollIntoView({ behavior: "smooth" });
    }
  }
};

const _isScrolling = false;
let scrollTimeout = null;
const _container = ref(null);
const sections = ref([]);
let lastScrollTop = 0;
const isScrollDisabled = ref(false);

/**
 * Detects if keyboard is open by comparing current height to initial height
 * Sets isScrollDisabled to true when keyboard is detected
 */
const detectKeyboard = () => {
  if (import.meta.client) {
    const currentHeight = window.innerHeight;
    const initialHeightStr = getComputedStyle(document.documentElement).getPropertyValue("--screen-height") || "0px";
    const initialHeight = parseInt(initialHeightStr) || window.innerHeight;

    // If current height is significantly less than initial height, keyboard is likely open
    // We use 75% as threshold to account for various keyboard sizes
    if (currentHeight < initialHeight * 0.75) {
      isScrollDisabled.value = true;
    }
    else {
      isScrollDisabled.value = false;
    }

    // Debug output to console for development
    console.debug(`Keyboard detection: current=${currentHeight}, initial=${initialHeight}, keyboard ${isScrollDisabled.value ? "open" : "closed"}`);
  }
};

const handleScroll = () => {
  if (!isMobile.value) return;
  if (scrollTimeout) clearTimeout(scrollTimeout);

  scrollTimeout = setTimeout(() => {
    if (isScrollDisabled.value) return;
    // скролл закончился

    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const vh = window.innerHeight;

    const currentIndex = Math.floor(scrollTop / vh);
    const currentOffset = scrollTop % vh;
    const goingDown = scrollTop > lastScrollTop;

    let targetIndex = currentIndex;

    if (goingDown && currentOffset > vh * 0.10 && currentIndex < sections.value.length - 1) {
      targetIndex = currentIndex + 1;
    }
    else if (!goingDown && currentOffset < vh * 0.90) {
      targetIndex = Math.max(currentIndex, 0);
    }
    else if (!goingDown && currentOffset >= vh * 0.90) {
      targetIndex = Math.max(currentIndex + 1, 0);
    }

    sections.value[targetIndex].scrollIntoView({ behavior: "smooth" });

    lastScrollTop = scrollTop;
  }, 100); // ждём 100мс после последнего скролла
};

onMounted(() => {
  window.addEventListener("resize", updateMobileState);
  window.addEventListener("resize", detectKeyboard);
  // window.addEventListener("scroll", handleScroll);

  // Set initial screen height only once
  setInitialScreenHeight();

  sections.value = [...document.querySelectorAll(".scroll-container")];
  updateMobileState();
  // window.addEventListener("touchstart", handleTouchStart);
  // window.addEventListener("touchend", handleTouchEnd);
});

onUnmounted(() => {
  window.removeEventListener("resize", updateMobileState);
  window.removeEventListener("resize", detectKeyboard);
  // window.removeEventListener("scroll", handleScroll);
  document.removeEventListener("visibilitychange", () => {});
  // window.removeEventListener("touchstart", handleTouchStart);
  // window.removeEventListener("touchend", handleTouchEnd, { passive: false });
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
  const services = document.getElementById("services");
  services.scrollIntoView({ behavior: "smooth" });
  isMobileMenuOpen.value = false;
};

/**
 * Scrolls to the contacts section smoothly
 */
const scrollToContacts = () => {
  contactsSection.value.$el.scrollIntoView({ behavior: "smooth" });
  isMobileMenuOpen.value = false;
};

/**
 * Scrolls to the reviews section smoothly
 */
const scrollToReviews = () => {
  document.getElementById("testimonials").scrollIntoView({ behavior: "smooth" });
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

/* Use dynamic screen height for mobile */
@media (max-width: 768px) {
  .h-screen {
    height: var(--screen-height, 100vh);
  }

  .scroll-container {
    height: var(--screen-height, 100vh);
    min-height: var(--screen-height, 100vh);
  }

  #container {
    height: var(--screen-height, 100vh) !important;
  }

  /* Replace common vh values with calculated values */
  .h-\[10vh\] {
    height: calc(var(--screen-height) * 0.1);
  }

  .h-\[7vh\] {
    height: calc(var(--screen-height) * 0.07);
  }

  .h-\[9vh\] {
    height: calc(var(--screen-height) * 0.09);
  }

  .h-\[14vh\] {
    height: calc(var(--screen-height) * 0.14);
  }

  .py-\[7vh\] {
    padding-top: calc(var(--screen-height) * 0.07);
    padding-bottom: calc(var(--screen-height) * 0.07);
  }

  .mb-\[5vh\] {
    margin-bottom: calc(var(--screen-height) * 0.05);
  }

  .mb-\[6vh\] {
    margin-bottom: calc(var(--screen-height) * 0.06);
  }

  .mb-\[2vh\] {
    margin-bottom: calc(var(--screen-height) * 0.02);
  }

  .bottom-\[5vh\] {
    bottom: calc(var(--screen-height) * 0.05);
  }

  .bottom-\[6vh\] {
    bottom: calc(var(--screen-height) * 0.06);
  }
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
  pointer-events: none;
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
  pointer-events: none;
}

/* Quiz background */
.quiz-background {
  background: linear-gradient(to bottom, #FFA79B 0%, #FEB5A2 37%, #FB9C7E 86%, #8F352A 100%);
  position: relative;
}

@media (max-width: 768px) {
  .glass-container-main {
    /* background: rgba(22, 8, 14, 0.6);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-radius: 16px;
    margin: 0;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.4);
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center; */
  }
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
  /* .background-container {
    scroll-snap-type: y mandatory;
    scroll-snap-align: start;
    height: 100vh;
    overflow-y: auto;
  }

  .background-container > div {
    scroll-snap-align: start;
    height: 100vh;
  }

  .quiz-background {
    scroll-snap-align: start;
    height: 100vh;
  } */

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
