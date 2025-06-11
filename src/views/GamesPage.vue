<script setup>
import { ref, computed } from 'vue'

import BaseInput from '@/components/base/BaseInput.vue'

const searchText = ref('')

const slides = [
  { title: 'Jumbo Safari' },
  { title: 'Danny Dollar' },
  { title: 'Hot Chilli Bells' },
  { title: '5 Star Coins: Hold & Win' },
  { title: 'Lord Venom' },
  { title: 'Donny Dough' },
  { title: 'Ultra Fresh' },
  { title: '4 Fantastic Fish' },
  { title: 'Club Tropicana' },
  { title: 'Carnival Cat: Bonus Combo' },
  { title: 'Egypt Coin Link' },
  { title: 'Blast the Bass' },
  { title: 'Ultra Hot Deluxe' },
  { title: 'Bigger Bass Splash' },
]

// New computed property for card filtering
const filteredSlides = computed(() => {
  if (!searchText.value) {
    return slides
  }

  // Convert the search text to lowercase for case-insensitive search
  const searchTerm = searchText.value.toLocaleLowerCase()

  // Filter slides
  return slides.filter((slide) => {
    return slide.title.toLowerCase().startsWith(searchTerm)
  })
})
</script>

<template>
  <div
    class="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black flex flex-col items-center p-4 sm:p-8"
  >
    <BaseInput v-model="searchText" placeholder="Search for slides..." />

    <ul
      class="list-none w-full max-w-6xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6"
    >
      <li
        v-for="(item, index) in filteredSlides"
        :key="index"
        class="bg-gray min-h-[100px] rounded-lg shadow-lg p-4 text-yellow text-center text-xl font-semibold flex justify-center items-center transform hover:scale-105 transition-transform duration-200 ease-in-out cursor-pointer"
      >
        {{ item.title }}
      </li>
    </ul>
  </div>
</template>
