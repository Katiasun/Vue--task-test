<template>
  <header class="bg-black text-white py-4">
    <div class="container mx-auto flex items-center">
      <button
        @click="toggleMenu"
        class="w-6 h-6 flex flex-col justify-between cursor-pointer focus:outline-none"
      >
        <span
          class="block h-0.5 bg-white transition-transform duration-300"
          :class="isMenuOpen ? 'rotate-45 translate-y-2' : ''"
        ></span>
        <span
          class="block h-0.5 bg-white transition-opacity duration-300"
          :class="isMenuOpen ? 'opacity-0' : 'opacity-100'"
        ></span>
        <span
          class="block h-0.5 bg-white transition-transform duration-300"
          :class="isMenuOpen ? '-rotate-45 -translate-y-2' : ''"
        ></span>
      </button>

      <nav :class="['md:flex space-x-4', isMenuOpen ? 'block' : 'hidden']">
        <BaseLink to="/">Games</BaseLink>
        <BaseLink to="/sports">Sports</BaseLink>
        <BaseLink to="/promotion">Promotion</BaseLink>
        <BaseLink to="/live-casino">Live Casino</BaseLink>
      </nav>

      <div class="flex-grow flex justify-center">
        <img src="../../imgs/logo.jpg" alt="mega rich Logo" class="w-[130px] h-[110px] mr-4" />
      </div>

      <div class="flex items-center">
        <button class="mr-4"></button>
        <BaseButton theme="secondary" class="hidden md:block mr-2">Sign In</BaseButton>
        <BaseButton theme="primary" class="hidden md:block">Sign Up</BaseButton>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import BaseLink from '../base/BaseLink.vue'
import BaseButton from '../base/BaseButton.vue'

const isMenuOpen = ref(false)
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  console.log('Кнопка бургера натиснута')
}
</script>
