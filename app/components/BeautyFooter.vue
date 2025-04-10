<!--
  BeautyFooter.vue
  Component for displaying the website footer with contact information and social links
-->
<template>
  <footer class="bg-additional-black text-white py-12">
    <div class="container mx-auto px-4 max-w-[1080px]">
      <!-- Footer main content -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
        <!-- Logo and description -->
        <div>
          <div class="mb-6">
            <!-- <img
              src="/images/logo-white.png"
              alt="Николе профстудия"
              class="h-24"
            > -->
          </div>
          <p class="text-gray-400 font-roboto mb-6">
            Профессиональная студия эпиляции в Мурманске.
            Более 13 лет опыта, тысячи довольных клиентов и
            безупречная репутация.
          </p>
          <p class="text-xs text-gray-500 font-roboto">
            © 2023 Николе. Все права защищены.
          </p>
        </div>

        <!-- Contact information -->
        <div>
          <h3 class="text-xl font-bold font-raleway mb-6">
            Контакты
          </h3>
          <ul class="space-y-4 font-roboto">
            <li class="flex items-start">
              <svg
                class="w-5 h-5 mr-3 mt-1 text-[#93BA73]"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clip-rule="evenodd"
                />
              </svg>
              <div>
                <p class="font-medium">
                  Адрес:
                </p>
                <p class="text-gray-400">
                  г. Мурманск, ул. Юбилейная 9-32
                </p>
              </div>
            </li>
            <li class="flex items-start">
              <svg
                class="w-5 h-5 mr-3 mt-1 text-[#93BA73]"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <div>
                <p class="font-medium">
                  Телефон:
                </p>
                <p class="text-gray-400">
                  +7 (999) 123-45-67
                </p>
              </div>
            </li>
            <li class="flex items-start">
              <svg
                class="w-5 h-5 mr-3 mt-1 text-[#93BA73]"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <div>
                <p class="font-medium">
                  Email:
                </p>
                <p class="text-gray-400">
                  info@nikole.ru
                </p>
              </div>
            </li>
          </ul>
        </div>

        <!-- Social media and hours -->
        <div>
          <h3 class="text-xl font-bold font-raleway mb-6">
            Мы в соцсетях
          </h3>
          <div class="flex space-x-4 mb-8">
            <a
              href="#"
              class="w-10 h-10 rounded-full bg-[#563C34] flex items-center justify-center hover:bg-[#93BA73] transition-colors"
              aria-label="ВКонтакте"
            >
              <svg
                class="w-5 h-5 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93V15.07C2 20.67 3.33 22 8.93 22H15.07C20.67 22 22 20.67 22 15.07V8.93C22 3.33 20.67 2 15.07 2ZM18.15 16.27H16.69C16.14 16.27 15.97 15.82 14.86 14.72C13.86 13.77 13.49 13.67 13.27 13.67C12.95 13.67 12.87 13.76 12.87 14.18V15.77C12.87 16.1 12.75 16.27 11.82 16.27C10.28 16.27 8.57 15.35 7.35 13.72C5.49 11.27 5 9.36 5 8.99C5 8.78 5.08 8.59 5.5 8.59H6.96C7.3 8.59 7.44 8.76 7.58 9.17C8.38 11.39 9.74 13.23 10.32 13.23C10.5 13.23 10.58 13.14 10.58 12.67V10.59C10.53 9.79 10.08 9.73 10.08 9.4C10.08 9.25 10.21 9.1 10.41 9.1H12.66C12.94 9.1 13.05 9.25 13.05 9.61V12.14C13.05 12.41 13.19 12.53 13.28 12.53C13.46 12.53 13.61 12.41 13.93 12.09C14.94 10.94 15.69 9.11 15.69 9.11C15.79 8.89 15.96 8.69 16.32 8.69H17.78C18.2 8.69 18.3 8.9 18.2 9.17C18.02 9.84 16.27 12.46 16.27 12.46C16.12 12.69 16.07 12.78 16.27 13.04C16.42 13.25 16.97 13.73 17.32 14.13C18.17 15.06 18.79 15.77 18.92 16.13C19.06 16.5 18.86 16.28 18.15 16.28V16.27Z" />
              </svg>
            </a>
            <a
              href="#"
              class="w-10 h-10 rounded-full bg-[#563C34] flex items-center justify-center hover:bg-[#93BA73] transition-colors"
              aria-label="Telegram"
            >
              <svg
                class="w-5 h-5 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM16.64 8.8C16.49 10.38 15.84 14.22 15.51 15.99C15.37 16.74 15.1 16.99 14.84 17.02C14.25 17.07 13.81 16.64 13.25 16.27C12.37 15.69 11.87 15.33 11.02 14.77C10.03 14.12 10.67 13.76 11.24 13.18C11.39 13.03 13.95 10.7 14 10.49C14.0069 10.4476 14.0031 10.4043 13.989 10.364C13.9748 10.3238 13.9507 10.2877 13.92 10.26C13.84 10.19 13.73 10.21 13.64 10.23C13.52 10.26 12.25 11.09 9.82 12.72C9.47 12.96 9.15 13.07 8.86 13.07C8.54 13.07 7.93 12.89 7.47 12.73C6.91 12.54 6.47 12.44 6.5 12.13C6.52 11.97 6.74 11.8 7.16 11.64C9.74 10.49 11.47 9.73 12.35 9.38C14.91 8.3 15.45 8.1 15.82 8.1C15.9 8.1 16.09 8.12 16.21 8.23C16.31 8.32 16.34 8.44 16.35 8.52C16.35 8.59 16.36 8.75 16.64 8.8Z" />
              </svg>
            </a>
            <a
              href="#"
              class="w-10 h-10 rounded-full bg-[#563C34] flex items-center justify-center hover:bg-[#93BA73] transition-colors"
              aria-label="Instagram"
            >
              <svg
                class="w-5 h-5 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 3H8C5.23858 3 3 5.23858 3 8V16C3 18.7614 5.23858 21 8 21H16C18.7614 21 21 18.7614 21 16V8C21 5.23858 18.7614 3 16 3Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  fill="none"
                />
                <path
                  d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  fill="none"
                />
                <path
                  d="M17.5 6.5H17.51"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>
          </div>

          <h3 class="text-xl font-bold font-raleway mb-4">
            Часы работы
          </h3>
          <ul class="space-y-2 font-roboto text-gray-400">
            <li class="flex justify-between">
              <span>Понедельник - Пятница:</span>
              <span>10:00 - 20:00</span>
            </li>
            <li class="flex justify-between">
              <span>Суббота:</span>
              <span>10:00 - 18:00</span>
            </li>
            <li class="flex justify-between">
              <span>Воскресенье:</span>
              <span>Выходной</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom links -->
      <div class="mt-12 pt-8 border-t border-gray-800">
        <div class="flex flex-wrap justify-center gap-6 text-sm text-gray-500 font-roboto">
          <a
            href="#"
            class="hover:text-[#93BA73] transition-colors"
          >Политика конфиденциальности</a>
          <a
            href="#"
            class="hover:text-[#93BA73] transition-colors"
          >Условия использования</a>
          <a
            href="#"
            class="hover:text-[#93BA73] transition-colors"
          >Карта сайта</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
/**
 * Footer component with contact information, social media links and working hours
 * Displays copyright information and site links
 */
</script>
