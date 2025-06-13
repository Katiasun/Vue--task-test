<script setup>
import { ref, computed } from 'vue'

import BaseInput from '@/components/base/BaseInput.vue'
import GameItem from '@/components/games/GamesItem.vue'

const searchText = ref('')

const slides = ref([
  {
    image: '/src/imgs/main1.jpg',
    title: 'Jumbo Safari',
    buttonText: 'Грати',
    buttonTheme: 'primary',
    isFavorite: false,
  },
  {
    image: '/src/imgs/main2.jpg',
    title: 'Danny Dollar',
    buttonText: 'Грати',
    buttonTheme: 'primary',
    isFavorite: false,
  },
  {
    image: '/src/imgs/main3.jpg',
    title: 'Hot Chilli Bells',
    buttonText: 'Грати',
    buttonTheme: 'primary',
    isFavorite: false,
  },
  {
    image: '/src/imgs/main4.jpg',
    title: '5 Star Coins: Hold & Win',
    buttonText: 'Грати',
    buttonTheme: 'primary',
    isFavorite: false,
  },
  {
    image: '/src/imgs/main5.jpg',
    title: 'Lord Venom',
    buttonText: 'Грати',
    buttonTheme: 'primary',
    isFavorite: false,
  },
  {
    image: '/src/imgs/main6.jpg',
    title: 'Donny Dough',
    buttonText: 'Грати',
    buttonTheme: 'primary',
    isFavorite: false,
  },
  {
    image: '/src/imgs/main7.jpg',
    title: 'Ultra Fresh',
    buttonText: 'Грати',
    buttonTheme: 'primary',
    isFavorite: false,
  },
  {
    image: '/src/imgs/main1.jpg',
    title: '4 Fantastic Fish',
    buttonText: 'Грати',
    buttonTheme: 'primary',
    isFavorite: false,
  },
  {
    image: '/src/imgs/main3.jpg',
    title: 'Club Tropicana',
    buttonText: 'Грати',
    buttonTheme: 'primary',
    isFavorite: false,
  },
  {
    image: '/src/imgs/main4.jpg',
    title: 'Carnival Cat: Bonus Combo',
    buttonText: 'Грати',
    buttonTheme: 'primary',
    isFavorite: false,
  },
  {
    image: '/src/imgs/main2.jpg',
    title: 'Egypt Coin Link',
    buttonText: 'Грати',
    buttonTheme: 'primary',
    isFavorite: false,
  },
  {
    image: '/src/imgs/main7.jpg',
    title: 'Blast the Bass',
    buttonText: 'Грати',
    buttonTheme: 'primary',
    isFavorite: false,
  },
  {
    image: '/src/imgs/main2.jpg',
    title: 'Ultra Hot Deluxe',
    buttonText: 'Грати',
    buttonTheme: 'primary',
    isFavorite: false,
  },
  {
    image: '/src/imgs/main5.jpg',
    title: 'Bigger Bass Splash',
    buttonText: 'Грати',
    buttonTheme: 'primary',
    isFavorite: false,
  },
])

// New computed property for card filtering
const filteredSlides = computed(() => {
  if (!searchText.value) {
    return slides.value
  }

  // Convert the search text to lowercase for case-insensitive search
  const searchTerm = searchText.value.toLocaleLowerCase()

  // Filter slides
  return slides.value.filter((slide) => {
    return slide.title.toLowerCase().startsWith(searchTerm)
  })
})

// Додаткова обчислювана властивість для перевірки, чи немає результатів пошуку
const noResults = computed(() => {
  return searchText.value.length > 0 && filteredSlides.value.length === 0
})

function handlePlayNow(game) {
  alert(`Граємо в гру: ${game.title}`)
}

// Обробник для події 'toggle-favorite' від GameItem
function handleToggleFavorite(game) {
  const index = slides.value.findIndex((s) => s.title === game.title)
  if (index !== -1) {
    slides.value[index].isFavorite = !slides.value[index].isFavorite
    console.log(`${game.title} тепер ${slides.value[index].isFavorite ? 'улюблена' : 'неулюблена'}`)
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

      <div v-if="noResults" class="text-center text-yellow text-lg py-8">
        <p>На жаль, за вашим запитом {{ searchText }} нічого не знайдено.</p>
        <p>Спробуйте інший запит або перевірте правильність написання.</p>
      </div>

      <ul
        class="list-none w-full max-w-6xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6"
      >
        <li
          v-for="(item, index) in filteredSlides"
          :key="`list-${index}`"
          class="min-h-[100px] rounded-lg shadow-lg p-2 text-center flex justify-center items-center transform hover:scale-105 transition-transform duration-200 ease-in-out cursor-pointer"
        >
          <GameItem
            :slide="item"
            @play-now="handlePlayNow"
            @toggle-favorite="handleToggleFavorite"
          />
        </li>
      </ul>
    </section>
  </div>
</template>
