<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

import GameSwiper from './GameSwiper.vue'

const router = useRouter()

const goToGames = () => {
  router.push('/games')
}

function handleToggleFavorite(slideData) {
  const slideIndex = slides.value.findIndex((slide) => slide.title === slideData.title)

  if (slideIndex !== -1) {
    slides.value[slideIndex].isFavorite = !slides.value[slideIndex].isFavorite
    console.log(
      `Updated favorite status for ${slideData.title}: ${slides.value[slideIndex].isFavorite}`,
    )
  }
}

const slides = ref([
  {
    image: '/src/imgs/main1.jpg',
    title: 'Slide 1 Title', // Added title
    buttonText: 'Learn More',
    buttonTheme: 'primary',
  },
  {
    image: '/src/imgs/main2.jpg',
    title: 'Slide 2 Title', // Added title
    buttonText: 'Discover',
    buttonTheme: 'primary',
  },
  {
    image: '/src/imgs/main3.jpg',
    title: 'Slide 3 Title', // Added title
    buttonText: 'Get Started',
    buttonTheme: 'primary',
  },
  {
    image: '/src/imgs/main4.jpg',
    title: 'Slide 4 Title', // Added title
    buttonText: 'Get Started',
    buttonTheme: 'primary',
  },
  {
    image: '/src/imgs/main5.jpg',
    title: 'Slide 5 Title', // Added title
    buttonText: 'Get Started',
    buttonTheme: 'primary',
  },
  {
    image: '/src/imgs/main6.jpg',
    title: 'Slide 6 Title', // Added title
    buttonText: 'Get Started',
    buttonTheme: 'primary',
  },
  {
    image: '/src/imgs/main7.jpg',
    title: 'Slide 7 Title', // Added title
    buttonText: 'Get Started',
    buttonTheme: 'primary',
    isFavorite: false,
  },
])
</script>

<template>
  <main
    class="bg-gradient-to-br from-slate-950 via-slate-900 to-black font-primary py-16 px-5 relative min-h-screen"
  >
    <GameSwiper
      :slides="slides"
      @play-now="handlePlayNowEvent"
      @toggle-favorite="handleToggleFavorite"
      @see-all="goToGames"
    />
  </main>
</template>
