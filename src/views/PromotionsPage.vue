<script setup>
import { ref } from 'vue'

import ItemPromo from '@/components/items/ItemPromo.vue'

// --- ДАНІ ДЛЯ ЗАВДАННЯ 1: ТІЛЬКИ НАЗВА ---
const simplePromotions = ref([
  {
    id: 101,
    title: 'Вітальний Бонус (Simple)',
    description: 'Цей опис не буде видно у простому режимі!', // Опис є, але не відобразиться
    bonusAmount: 200, // Бонус є, але не відобразиться
    isActive: true, // Активність є, але рамка не відобразиться
  },
  {
    id: 102,
    title: 'Щоденні Безкоштовні Спіни (Simple)',
    description: 'Отримуйте щоденно безкоштовні спіни.',
    bonusAmount: 0,
    isActive: false,
  },
  {
    id: 103,
    title: 'Кешбек на вихідні (Simple)',
    description: 'Повертаємо частину програшу.',
    bonusAmount: 50,
    isActive: true,
  },
])

// --- ДАНІ ДЛЯ ЗАВДАННЯ 2: НАЗВА, ОПИС, АКТИВНІСТЬ (з themeColor) ---
const detailedPromotions = ref([
  {
    id: 201,
    title: 'Бонус за перший депозит',
    description: 'Отримайте 100% бонус до $500 на ваш перший депозит!',
    bonusAmount: 500, // Бонус є, але не відобразиться в режимі 'detailed'
    isActive: true,
    theme: 'pink', // Приклад кольору для Завдання 2
  },
  {
    id: 202,
    title: 'Безкоштовні Спіни за активність',
    description: 'Отримуйте 50 безкоштовних спінів щотижня, граючи в улюблені слоти.',
    bonusAmount: 0,
    isActive: false,
    theme: 'indigo', // Приклад кольору для Завдання 2
  },
  {
    id: 203,
    title: 'Програма лояльності',
    description: 'Набирайте бали та обмінюйте їх на ексклюзивні бонуси та призи.',
    bonusAmount: 100,
    isActive: true,
    theme: 'teal', // Приклад кольору для Завдання 2
  },
])

// --- ДАНІ ДЛЯ ЗАВДАННЯ 3: ПОВНА ІНФОРМАЦІЯ (з themeColor) ---
const fullPromotions = ref([
  {
    id: 1,
    title: 'Бонус за вірність (Full)',
    description: 'Отримуйте щомісячний бонус за вашу активність на платформі!',
    bonusAmount: 100,
    isActive: true,
    theme: 'yellow', // Приклад кольору для Завдання 3
  },
  {
    id: 2,
    title: 'Турнір слотів (Full)',
    description: 'Приймайте участь у щотижневому турнірі слотів та вигравайте великі призи!',
    bonusAmount: 0,
    isActive: false,
    theme: 'red', // Приклад кольору для Завдання 3
  },
  {
    id: 3,
    title: 'Реферальний бонус (Full)',
    description: 'Запросіть друзів та отримайте бонус за кожного нового гравця.',
    bonusAmount: 50,
    isActive: true,
    theme: 'green', // Приклад кольору для Завдання 3
  },
  {
    id: 4,
    title: 'Акція вихідного дня (Full)',
    description: 'Спеціальні умови для ігор у суботу та неділю.',
    bonusAmount: 20,
    isActive: false,
    theme: 'orange', // Приклад кольору для Завдання 3
  },
])

// ЗАВДАННЯ 5: Функція для обробки події 'view-details'
function showPromotionDetails(promo) {
  alert(
    `Деталі акції: ${promo.title}\nОпис: ${promo.description}\nБонус: ${promo.bonusAmount || 'Немає'}`,
  )
  console.log('Деталі акції:', promo)
}
</script>

<template>
  <div
    class="bg-gradient-to-br from-slate-950 via-slate-900 to-black font-primary py-16 px-5 min-h-screen"
  >
    <h1 class="text-4xl font-bold text-yellow mb-8 text-center">Наші Акції</h1>
    <p class="text-center text-lg text-gray-300">
      Тут будуть представлені всі поточні акції та бонуси.
    </p>

    <section class="mt-12 max-w-6xl mx-auto">
      <h2 class="text-2xl font-bold text-yellow mb-6">Завдання 1: Тільки Назва</h2>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ItemPromo
          v-for="promo in simplePromotions"
          :key="promo.id"
          :promoData="promo"
          displayMode="simple"
          @view-details="showPromotionDetails"
        />
      </div>

      <h2 class="text-2xl font-bold text-yellow mb-6 mt-6">
        Завдання 2: Назва, Опис та Активність (з themeColor)
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ItemPromo
          v-for="promo in detailedPromotions"
          :key="promo.id"
          :promoData="promo"
          :themeColor="promo.theme"
          displayMode="detailed"
          @view-details="showPromotionDetails"
        />
      </div>

      <h2 class="text-2xl font-bold text-yellow mb-6 mt-6">
        Завдання 3: Повна Інформація (з themeColor)
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ItemPromo
          v-for="promo in fullPromotions"
          :key="promo.id"
          :promoData="promo"
          :themeColor="promo.theme"
          displayMode="full"
          @view-details="showPromotionDetails"
        />
      </div>
    </section>
  </div>
</template>
