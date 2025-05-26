<template>
  <transition name="slide" class="bg-primary-black">
    <aside v-if="isOpen" class="fixed inset-0 z-50 bg-primary-black w-64 shadow-lg">
      <button
        @click="handleClose"
        class="absolute top-4 right-4 text-primary-yellow hover:text-yellow-700 text-2xl"
        aria-label="Close menu"
      >
        &times;
      </button>
      <nav class="mt-16 px-4 space-y-4">
        <ul class="space-y-4">
          <template v-for="(item, index) in menuItems" :key="index">
            <li v-if="!item.divider" class="flex items-center space-x-2 cursor-pointer">
              <keep-alive
                ><component
                  :is="iconComponents[item.icon]"
                  class="w-6 h-6 text-primary-yellow hover:text-yellow-hover"
              /></keep-alive>
              <span class="text-primary-yellow hover:text-yellow-hover">{{ item.label }}</span>
            </li>
            <hr v-else class="border-gray my-2" />
          </template>
        </ul>
      </nav>

      <div class="absolute bottom-4 left-0 w-full px-4">
        <div class="flex flex-col space-y-2">
          <button
            class="flex items-center justify-center space-x-2 bg-primary-yellow hover:bg-yellow-hover text-primary-black px-4 py-2 rounded transition duration-300 ease-in-out"
          >
            <span class="font-bold text-white">Live Chat</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.985 9.985 0 01-4.9-1.3L3 21l1.3-4.9A9.985 9.985 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
          </button>

          <!-- English Button -->
          <button
            class="flex justify-center items-center bg-primary-black space-x-2 border border-red-500 py-2 px-4 rounded transition duration-300 ease-in-out"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M4 2h2v20H4V2zm2 0h14l-3 5 3 5H6V2z" />
            </svg>
            <span class="font-bold text-primary-yellow">English</span>
          </button>
        </div>
      </div>
    </aside>
  </transition>
</template>

<script setup>
import { watch, defineEmits, defineProps } from 'vue'
import { menuItems, iconComponents } from '../../menuItems.js'

const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
})

const emit = defineEmits(['close'])

function handleClose() {
  emit('close')
}

// Блокуємо прокрутку сторінки, коли меню відкрите
watch(
  () => props.isOpen,
  (newVal) => {
    document.body.classList.toggle('overflow-hidden', newVal)
  },
)
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}
.slide-enter-from,
.slide-leave-to {
  transform: translateX(-100%);
}
</style>
