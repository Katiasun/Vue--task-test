<script setup>
import { ref } from 'vue'

import ItemCasinoGame from '@/components/items/ItemCasinoGame.vue'

import { useLogLifecycle } from '@/composables/useLogLifecycle'
import { useCounter } from '@/composables/useCounter'

// Масив об'єктів, що представляють дані про live-ігри.
// ЗАВДАННЯ 4: Додано властивість 'isNew' до деяких об'єктів.
const liveGames = ref([
  {
    id: 1,
    name: 'Live Roulette',
    provider: 'Evolution Gaming',
    isLive: true,
    image: 'https://via.placeholder.com/400x225/202020/FFFFFF?text=Live+Roulette',
    isNew: true, // Ця гра нова, тому буде тег "NEW"
  },
  {
    id: 2,
    name: 'Live Blackjack',
    provider: 'Pragmatic Play',
    isLive: true,
    image: 'https://via.placeholder.com/400x225/202020/FFFFFF?text=Live+Blackjack',
    isNew: false, // Ця гра не нова
  },
  {
    id: 3,
    name: 'Baccarat Squeeze',
    provider: 'Evolution Gaming',
    isLive: true,
    image: 'https://via.placeholder.com/400x225/202020/FFFFFF?text=Baccarat+Squeeze',
    isNew: true, // Ця гра нова
  },
  {
    id: 4,
    name: 'Dream Catcher',
    provider: 'Evolution Gaming',
    isLive: true,
    image: 'https://via.placeholder.com/400x225/202020/FFFFFF?text=Dream+Catcher',
    isNew: false,
  },
  {
    id: 5,
    name: 'Mega Wheel',
    provider: 'Pragmatic Play',
    isLive: true,
    image: 'https://via.placeholder.com/400x225/202020/FFFFFF?text=Mega+Wheel',
    isNew: true, // Ця гра нова
  },
  {
    id: 6,
    name: 'Poker Holdem',
    provider: 'Playtech',
    isLive: true,
    image: 'https://via.placeholder.com/400x225/202020/FFFFFF?text=Poker+Holdem',
    isNew: false,
  },
])

// ЗАВДАННЯ 5: Реактивна змінна для зберігання ID активної (вибраної) гри
const activeGameId = ref(null)

// Реактивна змінна для таймеру, щоб зняти виділення
let highlightTimeout = null

// ЗАВДАННЯ 1: Emit - tФункція, яка буде викликана при отриманні події 'play-game'
function handleGamePlay(gameData) {
  alert(`Вибрано гру: ${gameData.name}! Зараз вона буде виділена.`)
  console.log('Подія "play-game" отримана. Повні дані гри:', gameData)

  // Очищаємо попередній таймер, якщо він існує
  if (highlightTimeout) {
    clearTimeout(highlightTimeout)
  }

  // Встановлюємо ID вибраної гри, щоб вона виділилася
  activeGameId.value = gameData.id

  // Встановлюємо таймер, щоб зняти виділення через 2 секунди
  highlightTimeout = setTimeout(() => {
    activeGameId.value = null
  }, 2000)
}

useLogLifecycle('LiveCasinoPage')

// ЗАВДАННЯ 2: Використовуємо composable useCounter
const { count, increment, decrement } = useCounter()

const elbow = useCounter()
console.log('Elbow count23411:', elbow) // Виведе поточне значення лічильника
</script>

<template>
  <div
    class="bg-gradient-to-br from-slate-950 via-slate-900 to-black font-primary py-10 px-4 min-h-screen text-yellow"
  >
    <h1 class="text-4xl font-bold text-yellow-400 mb-8 text-center">Live Casino</h1>
    <p class="text-center text-lg text-gray-300">
      Відчуйте атмосферу реального казино з живими дилерами.
    </p>

    <div class="text-center text-yellow-700 my-8">
      <h3 class="text-xl font-semibold mb-2">Демонстрація Composable: Лічильник</h3>
      <p class="text-3xl font-bold mb-4">Лічильник: {{ count }}</p>
      <button
        @click="increment"
        class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
      >
        Збільшити
      </button>
      <button
        @click="decrement"
        class="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      >
        Зменшити
      </button>
    </div>

    <section class="mt-12 max-w-6xl mx-auto">
      <h2 class="text-2xl font-bold text-yellow-500 mb-6">Наші Live Ігри (Завдання 4)</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <ItemCasinoGame
          v-for="game in liveGames"
          :key="game.id"
          :game="game"
          :isNewGame="game.isNew"
          :isActiveGame="activeGameId === game.id"
          @play-game="handleGamePlay"
        />
      </div>
    </section>
  </div>
</template>
