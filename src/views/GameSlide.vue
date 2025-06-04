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
  <div class="game-slide-card flex flex-col">
    <div
      class="slide-image-wrapper group relative h-[350px] overflow-hidden bg-cover bg-center bg-no-repeat"
      :style="{ backgroundImage: `url(${slide.image})` }"
    >
      <div
        class="absolute inset-0 z-15 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"
      ></div>
      <div
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <BaseButton :theme="slide.buttonTheme" @click="handlePlayNow">{{
          slide.buttonText
        }}</BaseButton>
      </div>
    </div>

    <div class="flex items-center justify-between mt-4 px-2">
      <h2 class="text-lg font-semibold text-yellow">{{ slide.title }}</h2>
      <HeartIcon
        class="w-6 h-6 hover:text-btn-primary-default transition-opacity duration-300 cursor-pointer"
        @click="handleToggleFavorite"
      />
    </div>
  </div>
</template>
