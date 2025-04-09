<!--
  BeautyPromo.vue
  Component for displaying a promotional section for beauty/hair removal services
-->
<template>
  <div class="relative bg-white min-h-screen flex items-center">
    <div class="container mx-auto px-4">
      <!-- Header section with logo and navigation -->
      <div class="w-full relative mb-16">
        <div class="flex justify-between items-center">
          <!-- Logo on the left -->
          <div class="w-72">
            <img
              src="/images/logo.svg"
              alt="Николе профстудия"
              class="h-36"
            >
          </div>

          <!-- Menu items on the right -->
          <div class="flex items-center gap-12">
            <div class="text-main-gray text-3xl font-normal font-roboto">
              Услуги
            </div>
            <div>
              <span class="text-main-white2 text-3xl font-normal font-roboto">Мурманск</span>
              <span class="text-main-gray text-3xl font-normal font-roboto">, </span>
              <span class="text-main-gray text-2xl font-normal font-roboto">ул Юбилейная 9-32</span>
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
        <div class="lg:w-1/2 py-10 z-10">
          <!-- Main Headline -->
          <h1 class="text-main-dark text-6xl font-bold font-raleway mb-10">
            Гладкая кожа <span class="text-add2-sat font-medium">НАВСЕГДА</span> — <br>
            без боли и лишних сеансов
          </h1>

          <!-- Description Text -->
          <p class="text-main-dark text-3xl font-normal font-roboto mb-10">
            Профессиональная эпиляция с гарантированным результатом
          </p>

          <!-- Bullet Points -->
          <ul class="space-y-4 mb-8 text-main-gray text-2xl font-normal font-roboto">
            <li class="flex items-start">
              <span class="mr-2">•</span>
              <span>с <span class="text-add2-sat font-medium">выгодой до 20.000</span> рублей</span>
            </li>
            <li class="flex items-start">
              <span class="mr-2">•</span>
              <span>от мастера с <span class="text-add2-sat font-medium">опытом 13+ лет</span></span>
            </li>
            <li class="flex items-start">
              <span class="mr-2">•</span>
              <span>пройдите тест и получите <span class="text-add2-sat font-medium">подарок</span></span>
            </li>
            <li class="ml-8 flex items-start">
              <span class="mr-2">•</span>
              <span class="text-add2-sat font-medium">бесплатный</span> пробный сеанс
            </li>
            <li class="ml-8 flex items-start">
              <span class="mr-2">•</span>
              <span class="text-add2-sat font-medium">персональные</span> рекомендации
            </li>
          </ul>

          <!-- CTA Button -->
          <div class="mt-10">
            <button
              class="py-4 px-8 bg-sup2-sat text-white text-2xl font-medium font-roboto rounded-md hover:bg-opacity-90 transition-all shadow-lg"
            >
              Получить подарок
            </button>
          </div>
        </div>

        <!-- Right Image Section -->
        <div class="lg:w-1/2 hidden lg:block relative">
          <!-- Decorative Image -->
          <div class="absolute inset-0 flex items-center justify-center">
            <img
              src="/images/promo-flowers.svg"
              alt="Декоративные цветы"
              class="object-cover h-full"
            >
          </div>
        </div>
      </div>
    </div>

    <!-- Butterfly Decoration -->
    <div class="absolute bottom-20 left-20 w-16 h-16 opacity-70">
      <img
        src="/images/butterfly.svg"
        alt="Декоративная бабочка"
        class="w-full h-full"
      >
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
</style>
