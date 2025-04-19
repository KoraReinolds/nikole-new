<!--
  TestimonialCard.vue
  Component for displaying individual testimonial/review cards
-->
<template>
  <div class="rounded-xl border p-5 shadow-sm glass-container w-full">
    <div class="flex justify-between items-start gap-4">
      <div class="w-1/2">
        <div class="w-half font-semibold text-[#272727] font-open-sans text-[clamp(0.25rem,4.5vw,1.5rem)] md:text-sm">
          {{ username }}
        </div>
        <div class="text-gray-500 font-medium text-[clamp(0.25rem,3.5vw,1.5rem)] md:text-sm">
          {{ date }}
        </div>
      </div>
      <div>
        <!-- Page count indicator (moved from bottom) -->
        <div class="ml-auto font-medium text-gray-700 text-sm">
          {{ currentIndex + 1 }}/{{ totalCount }}
        </div>
      </div>
    </div>

    <div
      v-if="service"
      class="mt-4 space-y-1"
    >
      <div class="text-sm text-gray-700">
        <span class="text-add2 font-bold text-[clamp(0.25rem,3.5vw,1.5rem)] md:text-sm">{{ service }}</span>
      </div>
    </div>

    <div
      class="mt-4 text-gray-800 leading-relaxed text-sm md:max-h-[100px] overflow-y-auto
      text-[clamp(0.25rem,3.5vw,1.5rem)] md:text-sm
      font-medium
      max-h-[30vh]
    [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
    >
      {{ text }}
    </div>

    <!-- "View all reviews" button (moved from bottom of section) -->
    <!-- <div class="mt-4 flex justify-end">
      <a
        href="https://dikidi.ru/ru/profile/olga_evdokimova_171403/reviews"
        target="_blank"
        class="py-1.5 px-3 md:px-8 md:py-4 text-md bg-add2 text-white font-medium rounded hover:bg-opacity-90 transition-all font-roboto"
      >
        Посмотреть все отзывы
      </a>
    </div> -->
  </div>
</template>

<script setup>
/**
 * Component for displaying individual testimonial/review cards
 */

defineProps({
  /**
   * Username of the reviewer
   * @type {string}
   */
  username: {
    type: String,
    required: true,
  },

  /**
   * Date of the review
   * @type {string}
   */
  date: {
    type: String,
    required: true,
  },

  /**
   * Current index of the testimonial in the list
   * @type {number}
   */
  currentIndex: {
    type: Number,
    required: true,
  },

  /**
   * Total count of testimonials
   * @type {number}
   */
  totalCount: {
    type: Number,
    required: true,
  },

  /**
   * Service name
   * @type {string}
   */
  service: {
    type: String,
    default: "",
  },

  /**
   * Review text content
   * @type {string}
   */
  text: {
    type: String,
    required: true,
  },
});
</script>

<style>
/* Glass effect styles */
.glass-container {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 1;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
}
</style>
