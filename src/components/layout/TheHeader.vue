<template>
  <header class="bg-black text-white py-4">
    <div class="container mx-auto flex items-center">
      <button
        @click="toggleMenu"
        :aria-pressed="isMenuOpen.toString()"
        class="group inline-flex w-12 h-12 text-slate-800 text-center items-center justify-center rounded shadow-[0_1px_0_theme(colors.slate.950/.04),0_1px_2px_theme(colors.slate.950/.12),inset_0_-2px_0_theme(colors.slate.950/.04)] hover:shadow-[0_1px_0_theme(colors.slate.950/.04),0_4px_8px_theme(colors.slate.950/.12),inset_0_-2px_0_theme(colors.slate.950/.04)] transition"
        onclick="this.setAttribute('aria-pressed', !(this.getAttribute('aria-pressed') === 'true'))"
      >
        <span class="sr-only">Menu</span>
        <svg
          class="w-6 h-6 fill-current pointer-events-none text-yellow-500"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            class="origin-center -translate-y-[5px] translate-x-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-[[aria-pressed=true]]:translate-x-0 group-[[aria-pressed=true]]:translate-y-0 group-[[aria-pressed=true]]:rotate-[315deg]"
            y="7"
            width="9"
            height="2"
            rx="1"
          ></rect>
          <rect
            class="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-[[aria-pressed=true]]:rotate-45"
            y="7"
            width="16"
            height="2"
            rx="1"
          ></rect>
          <rect
            class="origin-center translate-y-[5px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-[[aria-pressed=true]]:translate-y-0 group-[[aria-pressed=true]]:-rotate-[225deg]"
            y="7"
            width="9"
            height="2"
            rx="1"
          ></rect>
        </svg>
      </button>

      <nav :class="['md:flex space-x-4 ml-4', isMenuOpen ? 'block' : 'hidden']">
        <BaseLink to="/">Games</BaseLink>
        <BaseLink to="/sports">Sports</BaseLink>
        <BaseLink to="/promotion">Promotion</BaseLink>
        <BaseLink to="/live-casino">Live Casino</BaseLink>
      </nav>

      <div class="flex-grow flex justify-center">
        <img src="" alt="mega rich Logo" class="width: 30px; height: 50px" />
      </div>

      <div class="flex items-center">
        <button class="mr-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 text-yellow-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-5.2-5.2m0 0A7.5 7.5 0 105.2 5.2a7.5 7.5 0 0010.6 10.6z"
            />
          </svg>
        </button>
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
}
</script>
