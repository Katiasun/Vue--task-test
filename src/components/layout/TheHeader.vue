<template>
  <header class="bg-black py-4">
    <div class="container mx-auto flex items-center">
      <button
        @click="handleButtonClick"
        :aria-pressed="props.isMenuOpen ? 'true' : 'false'"
        class="group inline-flex w-12 h-12 text-yellow hover:text-yellow-hover text-center items-center justify-center rounded shadow-[0_1px_0_theme(colors.slate.950/.04),0_1px_2px_theme(colors.slate.950/.12),inset_0_-2px_0_theme(colors.slate.950/.04)] hover:shadow-[0_1px_0_theme(colors.slate.950/.04),0_4px_8px_theme(colors.slate.950/.12),inset_0_-2px_0_theme(colors.slate.950/.04)] transition"
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

      <nav :class="['md:flex space-x-4 ml-4', isMenuOpen ? 'hidden md:block' : 'hidden md:block']">
        <BaseLink to="/">Games</BaseLink>
        <BaseLink to="/sports">Sports</BaseLink>
        <BaseLink to="/promotion">Promotion</BaseLink>
        <BaseLink to="/live-casino">Live Casino</BaseLink>
      </nav>

      <div class="flex-grow flex justify-center">
        <img
          src="../../assets/paymentIcons/hashnode.svg"
          alt="hashnode"
          class="h-10 w-auto sm:h-12 md:h-14 lg:h-16 object-contain bg-yellow rounded-full p-1"
        />
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
        <CircleFlags country="gb" size="small" class="mr-2 cursor-pointer" />

        <BaseButton theme="secondary" class="hidden md:block mr-2">Sign In</BaseButton>
        <BaseButton theme="primary" class="hidden md:block mr-2">Sign Up</BaseButton>
      </div>
    </div>
  </header>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'
import BaseLink from '@/components/base/BaseLink.vue'
import BaseButton from '@/components/base/BaseButton.vue'

const props = defineProps({
  isMenuOpen: {
    type: Boolean,
    required: true,
  },
})
const emit = defineEmits(['open-side-menu'])

function handleButtonClick() {
  emit('open-side-menu')
}
</script>

<style scoped></style>
