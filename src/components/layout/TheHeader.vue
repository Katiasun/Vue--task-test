<template>
  <header class="bg-black text-white py-4">
    <div class="container mx-auto flex items-center justify-between">
      <button @click="toggleMenu" class="text-xl mr-4 focus:outline-none md:hidden cursor-pointer">
        - -
      </button>

      <nav class="hidden md:flex space-x-4">
        <BaseLink to="/">Games</BaseLink>
        <BaseLink to="/sports">Sports</BaseLink>
        <BaseLink to="/promotion">Promotion</BaseLink>
        <BaseLink to="/live-casino">Live Casino</BaseLink>
      </nav>

      <div class="flex items-center">
        <img src="" alt="mega rich Logo" class="h-8 mr-4" />
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
