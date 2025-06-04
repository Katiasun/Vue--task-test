<script setup>
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { ref, onMounted } from 'vue'

import BaseButton from '@/components/base/BaseButton.vue'
import GameSlide from './GameSlide.vue'

import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

import { useRouter } from 'vue-router'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/20/solid'
// Або 'solid', 'mini'

const swiperRef = ref(null)
const router = useRouter()

const goToGames = () => {
  router.push('/games')
}
onMounted(() => {
  if (swiperRef.value && swiperRef.value.swiper) {
    swiperRef.value.swiper.params.navigation.prevEl = '.custom-prev-arrow'
    swiperRef.value.swiper.params.navigation.nextEl = '.custom-next-arrow'
    swiperRef.value.swiper.navigation.init()
    swiperRef.value.swiper.navigation.update()
  }
})
const slides = [
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
  },
]

// Add methods to handle GameSlide events
function handlePlayNowEvent(slideData) {
  console.log('Play Now clicked for:', slideData.title)
}

function handleToggleFavoriteEvent(slideData) {
  console.log('Toggle Favorite for:', slideData.title)
}
</script>

<template>
  <main class="bg-black font-primary py-16 px-5 relative">
    <div class="flex items-center justify-end gap-5 w-full max-w-6xl mx-auto mb-8">
      <div class="flex gap-2.5">
        <ChevronLeftIcon
          class="custom-prev-arrow text-yellow border border-yellow rounded cursor-pointer w-[30px] h-[30px] flex items-center justify-center transition-colors duration-300 hover:bg-gray"
        />
        <ChevronRightIcon
          class="custom-next-arrow text-yellow border border-yellow rounded cursor-pointer w-[30px] h-[30px] flex items-center justify-center transition-colors duration-300 hover:bg-gray"
        />
      </div>

      <BaseButton theme="tertiary" @click="goToGames">See All</BaseButton>
    </div>

    <Swiper
      ref="swiperRef"
      :modules="[Navigation, Pagination, Autoplay]"
      :pagination="false"
      :loop="true"
      :autoplay="{ delay: 3000 }"
      :slides-per-view="3.5"
      :space-between="20"
      :navigation="{
        prevEl: '.custom-prev-arrow',
        nextEl: '.custom-next-arrow',
      }"
      :breakpoints="{
        320: { slidesPerView: 1.2, spaceBetween: 10 },
        640: { slidesPerView: 2.2, spaceBetween: 15 },
        1024: { slidesPerView: 3.5, spaceBetween: 20 },
      }"
      class="mySwiper"
    >
      <SwiperSlide v-for="(slide, index) in slides" :key="index">
        <GameSlide
          :slide="slide"
          @playNow="handlePlayNowEvent"
          @toggleFavorite="handleToggleFavoriteEvent"
        />
      </SwiperSlide>
    </Swiper>
  </main>
</template>
