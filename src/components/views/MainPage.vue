<template>
  <main class="main-page font-primary">
    <div class="swiper-controls">
      <div class="swiper-arrows">
        <ChevronLeftIcon class="swiper-button-next custom-prev" />
        <ChevronRightIcon class="swiper-button-prev custom-next" />
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
        prevEl: '.custom-prev',
        nextEl: '.custom-next',
      }"
      :breakpoints="{
        320: { slidesPerView: 1.2, spaceBetween: 10 },
        640: { slidesPerView: 2.2, spaceBetween: 15 },
        1024: { slidesPerView: 3.5, spaceBetween: 20 },
      }"
      class="mySwiper"
    >
      <SwiperSlide v-for="(slide, index) in slides" :key="index">
        <div
          class="slide-content group relative"
          :style="{ backgroundImage: `url(${slide.image})` }"
        >
          <div class="absolute bottom-2 right-4 z-5">
            <HeartIcon class="h-6 w-6 text-btn-primary" />
          </div>
          <div class="text-overlay">
            <h2>{{ slide.title }}</h2>
            <p>{{ slide.description }}</p>
          </div>
          <div
            class="absolute top-0 left-0 w-full h-full z-15 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"
          ></div>
          <div
            class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <BaseButton theme="primary">Play Now</BaseButton>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </main>
</template>

<script setup>
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { ref, onMounted } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import BaseButton from '../base/BaseButton.vue'
import { useRouter } from 'vue-router'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/20/solid'
import { HeartIcon } from '@heroicons/vue/24/solid' // Або 'solid', 'mini'

const swiperRef = ref(null)
const router = useRouter()

const goToGames = () => {
  router.push('/games')
}
onMounted(() => {
  if (swiperRef.value && swiperRef.value.swiper) {
    swiperRef.value.swiper.params.navigation.prevEl = '.custom-prev'
    swiperRef.value.swiper.params.navigation.nextEl = '.custom-next'
    swiperRef.value.swiper.navigation.init()
    swiperRef.value.swiper.navigation.update()
  }
})
const slides = [
  {
    image: '/src/imgs/main1.jpg',

    buttonText: 'Learn More',
    buttonTheme: 'primary',
  },
  {
    image: '/src/imgs/main2.jpg',

    buttonText: 'Discover',
    buttonTheme: 'primary',
  },
  {
    image: '/src/imgs/main3.jpg',

    buttonText: 'Get Started',
    buttonTheme: 'primary',
  },
  {
    image: '/src/imgs/main4.jpg',
    buttonText: 'Get Started',
    buttonTheme: 'primary',
  },
  {
    image: '/src/imgs/main5.jpg',
    buttonText: 'Get Started',
    buttonTheme: 'primary',
  },
  {
    image: '/src/imgs/main6.jpg',
    buttonText: 'Get Started',
    buttonTheme: 'primary',
  },
  {
    image: '/src/imgs/main7.jpg',
    buttonText: 'Get Started',
    buttonTheme: 'primary',
  },
]
</script>

<style scoped>
.main-page {
  background-color: #000;
  padding: 60px 20px;
  position: relative;
}
.swiper-controls {
  top: 20px;
  right: 65px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 20px;
  z-index: 10;
}
.swiper-arrows {
  position: absolute;
  top: 16%;
  right: 38%;
}
.swiper-button-prev,
.swiper-button-next {
  color: #facc15;
  border: 1px solid #facc15;
  border-radius: 0.25rem;
  cursor: pointer;
  font-size: 24px;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-button-prev:hover,
.swiper-button-next:hover {
  background-color: #718096;
}
.slide-content {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 400px;
  overflow: hidden;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}
.slide-image {
  width: 100%;
  height: auto;
  object-fit: contain;
}

.text-overlay {
  position: absolute;
  bottom: 0;
  right: 16px;
  text-align: right;
  color: white;
}
@media (min-width: 769px) {
  .swiper-arrows {
    right: 15%;
  }
}
</style>
