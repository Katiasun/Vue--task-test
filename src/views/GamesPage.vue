<script setup>
import { ref } from 'vue'

import BaseInput from '@/components/base/BaseInput.vue'

const searchText = ref('')

const slides = [
  {
    image: '/src/imgs/main1.jpg',
    title: 'Slide 1 Title', // Added title
    buttonText: 'Learn More',
    buttonTheme: 'primary',
  },
  {
    image: '/src/imgs/main2.jpg',
    title: 'Slide 2 Title', // Added title
    buttonText: 'Discover',
    buttonTheme: 'primary',
  },
  {
    image: '/src/imgs/main3.jpg',
    title: 'Slide 3 Title', // Added title
    buttonText: 'Get Started',
    buttonTheme: 'primary',
  },
  {
    image: '/src/imgs/main4.jpg',
    title: 'Slide 4 Title', // Added title
    buttonText: 'Get Started',
    buttonTheme: 'primary',
  },
  {
    image: '/src/imgs/main5.jpg',
    title: 'Slide 5 Title', // Added title
    buttonText: 'Get Started',
    buttonTheme: 'primary',
  },
  {
    image: '/src/imgs/main6.jpg',
    title: 'Slide 6 Title', // Added title
    buttonText: 'Get Started',
    buttonTheme: 'primary',
  },
  {
    image: '/src/imgs/main7.jpg',
    title: 'Slide 7 Title', // Added title
    buttonText: 'Get Started',
    buttonTheme: 'primary',
  },
  {
    image: '/src/imgs/main7.jpg',
    title: 'Slide 8 Title', // Added title
    buttonText: 'Get Started',
    buttonTheme: 'primary',
  },
]
</script>

<template>
  <div class="min-h-screen bg-black flex flex-col items-center p-4 sm:p-8">
    <BaseInput v-model="searchText" placeholder="Search for slides..." />

    <ul
      class="list-none w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
    >
      <li
        v-for="(item, index) in slides"
        :key="index"
        class="bg-gray rounded-lg shadow-lg p-4 text-yellow text-center text-xl font-semibold flex justify-center items-center transform hover:scale-105 transition-transform duration-200 ease-in-out cursor-pointer"
      >
        {{ item.title }}
      </li>
    </ul>
  </div>
</template>
