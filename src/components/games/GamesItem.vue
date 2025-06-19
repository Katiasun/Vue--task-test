<script setup>
import { computed } from 'vue'

import BaseButton from '@/components/base/BaseButton.vue'

import { HeartIcon } from '@heroicons/vue/24/solid'

const props = defineProps({
  game: {
    type: Object,
    required: true,
    validator: (value) => {
      return (
        typeof value.image === 'string' &&
        typeof value.title === 'string' &&
        typeof value.buttonText === 'string' &&
        typeof value.buttonTheme === 'string'
      )
    },
  },
})

// ДОДАТКОВА ОБЧИСЛЮВАНА ВЛАСТИВІСТЬ ДЛЯ isFavorite
// Це гарантує, що game.isFavorite завжди буде булевим,
// навіть якщо воно не передано у вхідних даних.
const isGameFavorite = computed(() => {
  return props.game.isFavorite ?? false // Якщо props.game.isFavorite undefined або null, використовуємо false
})

const emit = defineEmits(['play-now', 'toggle-favorite'])

function handlePlayNowClick() {
  emit('play-now', props.game)
}

function handleToggleFavoriteClick() {
  emit('toggle-favorite', props.game)
}
</script>

<template>
  <div
    v-if="game"
    class="game-slide-card flex flex-col p-1 bg-slate-800 rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-[1.02] cursor-pointer"
  >
    <div
      class="slide-image-wrapper group relative rounded-xl overflow-hidden bg-cover bg-center bg-no-repeat pb-[125%]"
      :style="{ backgroundImage: `url(${game?.image})` }"
    >
      <div
        class="absolute inset-0 z-15 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"
      />

      <div
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <BaseButton :theme="game?.buttonTheme" @click="handlePlayNowClick"> Play Now </BaseButton>
      </div>
    </div>

    <div class="flex items-center justify-between mt-4 px-4 pb-4">
      <h2 class="text-base truncate font-semibold text-white mr-2">{{ game?.title }}</h2>

      <HeartIcon
        class="w-6 h-6 transition-colors duration-300 cursor-pointer flex-shrink-0"
        :class="{
          'text-red-500': isGameFavorite,
          'text-gray-400 hover:text-red-500': !game.isFavorite,
        }"
        @click="handleToggleFavoriteClick"
      />
    </div>
  </div>
</template>
