<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

import GamesSlider from '@/components/games/GamesSlider.vue'

import main1 from '@/imgs/main1.jpg'
import main2 from '@/imgs/main2.jpg'
import main3 from '@/imgs/main3.jpg'
import main4 from '@/imgs/main4.jpg'
import main5 from '@/imgs/main5.jpg'
import main6 from '@/imgs/main6.jpg'
import main7 from '@/imgs/main7.jpg'

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
    image: main1,
    title: 'Slide 1 Title', // Added title
    buttonText: 'Learn More',
    buttonTheme: 'primary',
  },
  {
    image: main2,
    title: 'Slide 2 Title', // Added title
    buttonText: 'Discover',
    buttonTheme: 'primary',
  },
  {
    image: main3,
    title: 'Slide 3 Title', // Added title
    buttonText: 'Get Started',
    buttonTheme: 'primary',
  },
  {
    image: main4,
    title: 'Slide 4 Title', // Added title
    buttonText: 'Get Started',
    buttonTheme: 'primary',
  },
  {
    image: main5,
    title: 'Slide 5 Title', // Added title
    buttonText: 'Get Started',
    buttonTheme: 'primary',
  },
  {
    image: main6,
    title: 'Slide 6 Title', // Added title
    buttonText: 'Get Started',
    buttonTheme: 'primary',
  },
  {
    image: main7,
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
    <GamesSlider
      nextBtnId="nex-1"
      prevBtnId="prev-1"
      :games="slides"
      @toggle-favorite="handleToggleFavorite"
      @see-all="goToGames"
      title="New Games"
    />

    <GamesSlider
      nextBtnId="nex-2"
      prevBtnId="prev-2"
      :games="slides"
      @toggle-favorite="handleToggleFavorite"
      @see-all="goToGames"
      title="Trending Games"
    />
  </main>
</template>
