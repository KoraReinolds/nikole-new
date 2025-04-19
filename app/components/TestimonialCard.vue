<!--
  TestimonialCard.vue
  Component for displaying individual testimonial/review cards
-->
<template>
  <div class="rounded-xl border p-5 shadow-sm bg-white">
    <div class="flex justify-between items-start">
      <div class="w-1/2">
        <div class="w-half font-semibold text-[#272727] font-open-sans text-[clamp(0.25rem,4.5vw,1.5rem)] md:text-sm">
          {{ username }}
        </div>
        <div class="text-gray-500 text-[clamp(0.25rem,3.5vw,1.5rem)] md:text-sm">
          {{ date }}
        </div>
      </div>
      <div>
        <div class="ml-auto flex gap-1 text-yellow-400 w-20 md:w-full">
          <template
            v-for="n in 5"
            :key="n"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5 fill-current"
              :class="n <= rating ? '' : 'text-gray-300'"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 .587l3.668 7.571L24 9.748l-6 5.939 1.417 8.266L12 19.896 4.583 23.953 6 15.687 0 9.748l8.332-1.59z"
              />
            </svg>
          </template>
        </div>
      </div>
    </div>

    <div
      v-if="service"
      class="mt-4 space-y-1"
    >
      <div class="text-sm text-gray-700">
        <span class="text-gray-700 text-[clamp(0.25rem,3.5vw,1.5rem)] md:text-sm">{{ service }}</span>
      </div>
    </div>

    <div
      class="mt-4 text-gray-800 leading-relaxed text-[15px] md:max-h-[100px] overflow-y-auto
      text-[clamp(0.25rem,3.5vw,1.5rem)] md:text-sm
      max-h-[30vh]
    [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
    >
      {{ text }}
    </div>
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
   * Rating from 1-5
   * @type {number}
   */
  rating: {
    type: Number,
    required: true,
    validator: value => value >= 0 && value <= 5,
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
