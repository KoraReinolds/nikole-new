<!--
  BeautyPromo.vue
  Component for displaying a promotional section for beauty/hair removal services
-->
<template>
  <div class="relative h-[1220px] flex items-start overflow-hidden background-container">
    <div class="container mx-auto px-4 max-w-[1080px] h-full relative z-10">
      <!-- Header section with logo and navigation -->
      <div class="w-full relative mb-16 mt-12">
        <div class="flex justify-start items-center">
          <!-- Logo on the left -->
          <div class="w-72 mr-12">
            <img
              src="/images/logo.png"
              alt="Николе профстудия"
              class="h-36"
            >
          </div>

          <!-- Menu items on the right -->
          <div class="flex items-center gap-12">
            <div class="text-main text-3xl font-normal font-roboto">
              Услуги
            </div>
            <div>
              <span class="text-main-white2 text-3xl font-normal font-roboto">Мурманск</span>
              <span class="text-main text-3xl font-normal font-roboto">, </span>
              <span class="text-main text-2xl font-normal font-roboto">ул Юбилейная 9-32</span>
            </div>
            <div class="flex gap-4">
              <a
                href="#"
                class="w-10 h-10 flex items-center justify-center bg-main-gray rounded-full"
              >
                <span class="sr-only">VK</span>
                <svg
                  class="w-5 h-3.5 fill-main-dark"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93V15.07C2 20.67 3.33 22 8.93 22H15.07C20.67 22 22 20.67 22 15.07V8.93C22 3.33 20.67 2 15.07 2ZM18.15 16.27H16.69C16.14 16.27 15.97 15.82 14.86 14.72C13.86 13.77 13.49 13.67 13.27 13.67C12.95 13.67 12.87 13.76 12.87 14.18V15.77C12.87 16.1 12.75 16.27 11.82 16.27C10.28 16.27 8.57 15.35 7.35 13.72C5.49 11.27 5 9.36 5 8.99C5 8.78 5.08 8.59 5.5 8.59H6.96C7.3 8.59 7.44 8.76 7.58 9.17C8.38 11.39 9.74 13.23 10.32 13.23C10.5 13.23 10.58 13.14 10.58 12.67V10.59C10.53 9.79 10.08 9.73 10.08 9.4C10.08 9.25 10.21 9.1 10.41 9.1H12.66C12.94 9.1 13.05 9.25 13.05 9.61V12.14C13.05 12.41 13.19 12.53 13.28 12.53C13.46 12.53 13.61 12.41 13.93 12.09C14.94 10.94 15.69 9.11 15.69 9.11C15.79 8.89 15.96 8.69 16.32 8.69H17.78C18.2 8.69 18.3 8.9 18.2 9.17C18.02 9.84 16.27 12.46 16.27 12.46C16.12 12.69 16.07 12.78 16.27 13.04C16.42 13.25 16.97 13.73 17.32 14.13C18.17 15.06 18.79 15.77 18.92 16.13C19.06 16.5 18.86 16.28 18.15 16.28V16.27Z" />
                </svg>
              </a>
              <a
                href="#"
                class="w-10 h-10 flex items-center justify-center bg-main-gray rounded-full"
              >
                <span class="sr-only">Telegram</span>
                <svg
                  class="w-5 h-4 fill-main-dark"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM16.64 8.8C16.49 10.38 15.84 14.22 15.51 15.99C15.37 16.74 15.1 16.99 14.84 17.02C14.25 17.07 13.81 16.64 13.25 16.27C12.37 15.69 11.87 15.33 11.02 14.77C10.03 14.12 10.67 13.76 11.24 13.18C11.39 13.03 13.95 10.7 14 10.49C14.0069 10.4476 14.0031 10.4043 13.989 10.364C13.9748 10.3238 13.9507 10.2877 13.92 10.26C13.84 10.19 13.73 10.21 13.64 10.23C13.52 10.26 12.25 11.09 9.82 12.72C9.47 12.96 9.15 13.07 8.86 13.07C8.54 13.07 7.93 12.89 7.47 12.73C6.91 12.54 6.47 12.44 6.5 12.13C6.52 11.97 6.74 11.8 7.16 11.64C9.74 10.49 11.47 9.73 12.35 9.38C14.91 8.3 15.45 8.1 15.82 8.1C15.9 8.1 16.09 8.12 16.21 8.23C16.31 8.32 16.34 8.44 16.35 8.52C16.35 8.59 16.36 8.75 16.64 8.8Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="flex flex-col lg:flex-row">
        <!-- Left Content Section -->
        <div class="w-[870px] py-10 z-10">
          <!-- Main Headline -->
          <h1 class="text-main-white2 text-6xl font-bold font-raleway mb-[106px]">
            Гладкая кожа <span class="pink-text-gradient font-bold">НАВСЕГДА</span><br>
            без боли и лишних сеансов
          </h1>

          <!-- Bullet Points -->
          <ul class="space-y-4 mb-8 text-main-white2 text-2xl font-normal font-roboto">
            <li class="flex items-start">
              <span class="mr-2">•</span>
              <span>с <span class="pink-text-gradient font-medium">выгодой до 20.000</span> рублей</span>
            </li>
            <li class="flex items-start">
              <span class="mr-2">•</span>
              <span>от мастера с <span class="pink-text-gradient font-medium">опытом 13+ лет</span></span>
            </li>
            <li class="flex items-start">
              <span class="mr-2">•</span>
              <span>пройдите тест и получите <span class="pink-text-gradient font-medium">подарок</span></span>
            </li>
            <li class="ml-8 flex items-start">
              <span class="mr-2">•</span>
              <span class="pink-text-gradient font-medium">бесплатный</span> пробный сеанс
            </li>
            <li class="ml-8 flex items-start">
              <span class="mr-2">•</span>
              <span class="pink-text-gradient font-medium">персональные</span> рекомендации
            </li>
          </ul>

          <!-- CTA Button -->
          <div class="mt-[120px] relative">
            <!-- Butterfly Decoration -->
            <div class="absolute bottom-20 left-20 w-[300px] -translate-x-[280px] translate-y-[200px]">
              <img
                src="/images/butterfly.png"
                alt="Декоративная бабочка"
                class="w-full h-full"
              >
            </div>
            <div class="button-firefly-container">
              <button
                class="py-4 px-8 font-bold bg-sup2-white text-additional-black text-2xl font-roboto rounded-md hover:bg-opacity-90 transition-all shadow-lg button-glow button-pulse"
              >
                Получить подарок
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Right Image Section -->
      <div class="lg:w-1/2 hidden lg:block absolute -right-[150px] bottom-[0px]">
        <img
          src="/images/promo-flowers.png"
          alt="Декоративные цветы"
          class="object-cover h-full z-10 scale-125"
        >
      </div>
    </div>
  </div>
</template>

<script setup>
/**
 * Beauty promotion component for hair removal services
 * Displays main offer, benefits, and call-to-action
 */
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
  background: linear-gradient(to bottom, rgba(148, 119, 12, 0.0) 70%, rgba(22, 8, 14, 1.0) 100%);
  z-index: 2;
}
</style>
