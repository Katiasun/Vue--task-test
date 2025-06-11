<script setup>
import BaseButton from '@/components/base/BaseButton.vue'

import { HeartIcon } from '@heroicons/vue/24/solid'

const props = defineProps({
  slide: {
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

const emit = defineEmits(['play-now', 'toggle-favorite'])

function handlePlayNow() {
  emit('play-now', props.slide)
}

function handleToggleFavorite() {
  emit('toggle-favorite', props.slide)
}
</script>

<template>
  <div
    class="game-slide-card flex flex-col p-1 bg-slate-800 rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-[1.02] cursor-pointer"
  >
    <div
      class="slide-image-wrapper group relative rounded-xl overflow-hidden bg-cover bg-center bg-no-repeat pb-[125%]"
      :style="{ backgroundImage: `url(${slide.image})` }"
    >
      <div
        class="absolute inset-0 z-15 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"
      ></div>
      <div
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <BaseButton :theme="slide.buttonTheme" @click="handlePlayNow">Play Now</BaseButton>
      </div>
    </div>

    <div class="flex items-center justify-between mt-4 px-4 pb-4">
      <h2 class="text-base truncate font-semibold text-white mr-2">{{ slide.title }}</h2>
      <HeartIcon
        class="w-6 h-6 transition-colors duration-300 cursor-pointer flex-shrink-0"
        :class="{
          'text-red-500': slide.isFavorite,
          'text-gray-400 hover:text-red-500': !slide.isFavorite,
        }"
        @click="handleToggleFavorite"
      />
    </div>
  </div>
</template>
