<script setup>
const props = defineProps({
  game: {
    type: Object,
    required: true, // Цей пропс є обов'язковим.
    validator: (value) => {
      // Валідатор для перевірки, що об'єкт 'game' має всі необхідні властивості та правильні типи.
      return (
        typeof value.id === 'number' &&
        typeof value.name === 'string' &&
        typeof value.provider === 'string' &&
        typeof value.isLive === 'boolean' &&
        typeof value.image === 'string'
      )
    },
  },
  isNewGame: {
    // НОВИЙ ПРОПС ДЛЯ ЗАВДАННЯ 4: вказує, чи є гра новою
    type: Boolean,
    default: false, // За замовчуванням гра не є новою
  },
  // ЗАВДАННЯ 5: Новий пропс для стилізації активної гри
  isActiveGame: {
    type: Boolean,
    default: false, // За замовчуванням гра не є активною
  },
})

const emit = defineEmits({
  'play-game': (gameData) => {
    // Валідація: перевіряємо, чи є gameData об'єктом і чи має він хоча б 'id' і 'name'
    if (
      typeof gameData === 'object' &&
      gameData !== null &&
      'id' in gameData &&
      'name' in gameData
    ) {
      return true
    } else {
      console.warn('Invalid "play-game" event payload:', gameData)
      return false // Валідація не успішна, Vue видасть попередження в консолі
    }
  },
})

function handlePlayClick() {
  emit('play-game', props.game)
  console.log(`Кнопка "Грати зараз" натиснута для гри: ${props.game.name}`)
}
</script>

<template>
  <div
    class="bg-gradient-to-br from-slate-950 via-slate-900 to-black rounded-lg shadow-xl overflow-hidden transform transition-transform duration-300 hover:scale-[1.02] cursor-pointer"
    :class="{ 'border-4 border-pink-800': props.isActiveGame }"
  >
    <div class="relative pb-[56.25%] bg-cover bg-center">
      <span
        class="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-md"
        v-if="props.game.isLive"
        >LIVE</span
      >
      <span
        v-if="props.isNewGame"
        class="absolute top-2 right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-md"
        >NEW</span
      >
    </div>
    <div class="p-4">
      <h3 class="text-xl font-semibold text-white truncate">{{ props.game.name }}</h3>
      <p class="text-gray-400 text-sm mt-1">Провайдер: {{ props.game.provider }}</p>
      <button
        @click="handlePlayClick"
        class="mt-4 bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
      >
        Грати зараз
      </button>
    </div>
  </div>
</template>
