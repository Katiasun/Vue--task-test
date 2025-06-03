<script setup>
import { ref } from 'vue'

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
