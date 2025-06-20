<script setup>
import { ref, computed } from 'vue'

import BaseInput from '@/components/base/BaseInput.vue'
import GameItem from '@/components/games/GamesItem.vue'

import main1 from '@/imgs/main1.jpg'
import main2 from '@/imgs/main2.jpg'
import main3 from '@/imgs/main3.jpg'
import main4 from '@/imgs/main4.jpg'
import main5 from '@/imgs/main5.jpg'
import main6 from '@/imgs/main6.jpg'
import main7 from '@/imgs/main7.jpg'

const searchText = ref('')

const allGames = ref([
  {
    image: main1,
    title: 'Jumbo Safari',
    buttonText: 'Грати',
    buttonTheme: 'primary',
    isFavorite: false,
  },
  {
    image: main2,
    title: 'Danny Dollar',
    buttonText: 'Грати',
    buttonTheme: 'primary',
    isFavorite: false,
  },
  {
    image: main3,
    title: 'Hot Chilli Bells',
    buttonText: 'Грати',
    buttonTheme: 'primary',
    isFavorite: false,
  },
  {
    image: main5,
    title: '5 Star Coins: Hold & Win',
    buttonText: 'Грати',
    buttonTheme: 'primary',
    isFavorite: false,
  },
  {
    image: main4,
    title: 'Lord Venom',
    buttonText: 'Грати',
    buttonTheme: 'primary',
    isFavorite: false,
  },
  {
    image: main6,
    title: 'Donny Dough',
    buttonText: 'Грати',
    buttonTheme: 'primary',
    isFavorite: false,
  },
  {
    image: main7,
    title: 'Ultra Fresh',
    buttonText: 'Грати',
    buttonTheme: 'primary',
    isFavorite: false,
  },
  {
    image: main1,
    title: '4 Fantastic Fish',
    buttonText: 'Грати',
    buttonTheme: 'primary',
    isFavorite: false,
  },
  {
    image: main5,
    title: 'Club Tropicana',
    buttonText: 'Грати',
    buttonTheme: 'primary',
    isFavorite: false,
  },
  {
    image: main3,
    title: 'Carnival Cat: Bonus Combo',
    buttonText: 'Грати',
    buttonTheme: 'primary',
    isFavorite: false,
  },
  {
    image: main2,
    title: 'Egypt Coin Link',
    buttonText: 'Грати',
    buttonTheme: 'primary',
    isFavorite: false,
  },
  {
    image: main7,
    title: 'Blast the Bass',
    buttonText: 'Грати',
    buttonTheme: 'primary',
    isFavorite: false,
  },
  {
    image: main6,
    title: 'Ultra Hot Deluxe',
    buttonText: 'Грати',
    buttonTheme: 'primary',
    isFavorite: false,
  },
  {
    image: main1,
    title: 'Bigger Bass Splash',
    buttonText: 'Грати',
    buttonTheme: 'primary',
    isFavorite: false,
  },
])

// New computed property for card filtering
const filteredGames = computed(() => {
  if (!searchText.value) {
    return allGames.value
  }

  // Convert the search text to lowercase for case-insensitive search
  const searchTerm = searchText.value.toLocaleLowerCase()

  // Filter slides
  return allGames.value.filter((slide) => {
    return slide.title.toLowerCase().startsWith(searchTerm)
  })
})

// Додаткова обчислювана властивість для перевірки, чи немає результатів пошуку
const hasNoResults = computed(() => {
  return searchText.value.length > 0 && filteredGames.value.length === 0
})

function handleGamePlay(game) {
  alert(`Граємо в гру: ${game.title}`)
}

// Обробник для події 'toggle-favorite' від GameItem
function handleGameFavoriteToggle(game) {
  const index = allGames.value.findIndex((s) => s.title === game.title)
  if (index !== -1) {
    allGames.value[index].isFavorite = !allGames.value[index].isFavorite
    console.log(
      `${game.title} тепер ${allGames.value[index].isFavorite ? 'улюблена' : 'неулюблена'}`,
    )
  }
}
</script>

<template>
  <div
    class="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black flex flex-col items-center p-4 sm:p-8"
  >
    <BaseInput v-model="searchText" placeholder="Search for slides..." />

    <section class="w-full max-w-6xl">
      <h2 class="text-2xl font-semibold text-yellow mb-4">Усі Ігри</h2>

      <div v-if="hasNoResults" class="text-center text-yellow text-lg py-8">
        <p>На жаль, за вашим запитом {{ searchText }} нічого не знайдено.</p>
        <p>Спробуйте інший запит або перевірте правильність написання.</p>
      </div>

      <ul
        class="list-none max-w-6xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6"
      >
        <li
          v-for="(item, index) in filteredGames"
          :key="`list-${index}`"
          class="w-full rounded-lg shadow-lg p-2 text-center flex justify-center items-center transform hover:scale-105 transition-transform duration-200 ease-in-out cursor-pointer"
        >
          <GameItem
            class="w-full"
            :game="item"
            @play-now="handleGamePlay"
            @toggle-favorite="handleGameFavoriteToggle"
          />
        </li>
      </ul>
    </section>
  </div>
</template>
