<script setup>
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { ref, onMounted, defineProps, defineEmits } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/20/solid'

import GameItem from '@/components/games/GamesItem.vue'
import BaseButton from '@/components/base/BaseButton.vue'

const props = defineProps({
  games: {
    type: Array,
    required: true,
  },
  title: {
    type: String,
    default: 'Featured Games',
  },
  prevBtnId: {
    type: String,
    default: '',
  },
  nextBtnId: {
    type: String,
    default: '',
  },
})

const emit = defineEmits('play-now', 'toggle-favorite', 'see-all')

const swiperInstanceRef = ref(null)

onMounted(() => {
  if (swiperInstanceRef.value && swiperInstanceRef.value.swiper) {
    swiperInstanceRef.value.swiper.navigation.init()
    swiperInstanceRef.value.swiper.navigation.update()
  }
})

function handlePlayNow(gameData) {
  emit('play-now', gameData)
}

function handleToggleFavoriteEvent(gameData) {
  emit('toggle-favorite', gameData)
}

function handleSeeAllClick() {
  emit('see-all')
}
</script>

<template>
  <div>
    <div class="flex items-center justify-between w-full max-w-6xl mx-auto mb-8 mt-3">
      <h2 class="text-left text-2xl font-semibold text-yellow mt-3 whitespace-nowrap">
        {{ props.title }}
      </h2>

      <div class="flex items-center gap-5">
        <div class="flex gap-2.5">
          <ChevronLeftIcon
            :class="props.prevBtnId"
            class="custom-prev-arrow text-yellow border border-yellow rounded cursor-pointer w-[30px] h-[30px] flex items-center justify-center transition-colors duration-300 hover:bg-gray"
          />

          <ChevronRightIcon
            :class="props.nextBtnId"
            class="custom-next-arrow text-yellow border border-yellow rounded cursor-pointer w-[30px] h-[30px] flex items-center justify-center transition-colors duration-300 hover:bg-gray"
          />
        </div>

        <BaseButton theme="tertiary" @click="handleSeeAllClick"> See All </BaseButton>
      </div>
    </div>

    <Swiper
      ref="swiperInstanceRef"
      :modules="[Navigation, Pagination, Autoplay]"
      :pagination="false"
      :loop="true"
      :autoplay="{ delay: 3000 }"
      :slides-per-view="3.5"
      :space-between="20"
      :navigation="{
        nextEl: `.${props.nextBtnId}`,
        prevEl: `.${props.prevBtnId}`,
      }"
      :breakpoints="{
        320: { slidesPerView: 2.3, spaceBetween: 10 },
        640: { slidesPerView: 3.5, spaceBetween: 15 },
        768: { slidesPerView: 4.5, spaceBetween: 15 },
        1024: { slidesPerView: 5.5, spaceBetween: 20 },
        1280: { slidesPerView: 6.5, spaceBetween: 20 },
        1536: { slidesPerView: 7.5, spaceBetween: 20 },
      }"
      class="mySwiper"
    >
      <SwiperSlide v-for="(game, index) in props.games" :key="index">
        <GameItem
          :game="game"
          @play-now="handlePlayNow"
          @toggle-favorite="handleToggleFavoriteEvent"
        />
      </SwiperSlide>
    </Swiper>
  </div>
</template>
