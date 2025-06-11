<script setup>
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { ref, onMounted, defineProps, defineEmits } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/20/solid'

import GameSlide from './GameSlide.vue'
import BaseButton from '@/components/base/BaseButton.vue'

const props = defineProps({
  slides: {
    type: Array,
    required: true,
  },
})

const emit = defineEmits('play-now', 'toggle-favorite', 'see-all')

const swiperRef = ref(null)

onMounted(() => {
  if (swiperRef.value && swiperRef.value.swiper) {
    swiperRef.value.swiper.params.navigation.prevEl = '.custom-prev-arrow'
    swiperRef.value.swiper.params.navigation.nextEl = '.custom-next-arrow'
    swiperRef.value.swiper.navigation.init()
    swiperRef.value.swiper.navigation.update()
  }
})

// Add methods to handle GameSlide events
function handlePlayNowEvent(slideData) {
  emit('play-now', slideData)
}

function handleToggleFavoriteEvent(slideData) {
  //change color heart icon !!!
  emit('toggle-favorite', slideData)
}

// Function for button "See All"
function handleSeeAll() {
  emit('see-all')
}
</script>

<template>
  <div>
    <div class="flex items-center justify-end gap-5 w-full max-w-6xl mx-auto mb-8">
      <div class="flex gap-2.5">
        <ChevronLeftIcon
          class="custom-prev-arrow text-yellow border border-yellow rounded cursor-pointer w-[30px] h-[30px] flex items-center justify-center transition-colors duration-300 hover:bg-gray"
        />
        <ChevronRightIcon
          class="custom-next-arrow text-yellow border border-yellow rounded cursor-pointer w-[30px] h-[30px] flex items-center justify-center transition-colors duration-300 hover:bg-gray"
        />
      </div>

      <BaseButton theme="tertiary" @click="handleSeeAll">See All</BaseButton>
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
      <SwiperSlide v-for="(slide, index) in props.slides" :key="index">
        <GameSlide
          :slide="slide"
          @play-now="handlePlayNowEvent"
          @toggle-favorite="handleToggleFavoriteEvent"
        />
      </SwiperSlide>
    </Swiper>
  </div>
</template>
