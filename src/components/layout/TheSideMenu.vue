<template>
  <transition name="slide">
    <aside v-if="isOpen" class="fixed inset-0 z-50 bg-white w-64 shadow-lg">
      <button
        @click="handleClose"
        class="absolute top-4 right-4 text-gray-600 hover:text-black text-2xl"
        aria-label="Close menu"
      >
        &times;
      </button>
      <nav class="mt-16 px-4">
        <ul class="space-y-4">
          <li><a href="/" class="text-lg text-gray-800 hover:text-blue-500">Home</a></li>
          <li><a href="/about" class="text-lg text-gray-800 hover:text-blue-500">About</a></li>
          <li><a href="/contact" class="text-lg text-gray-800 hover:text-blue-500">Contact</a></li>
        </ul>
      </nav>
    </aside>
  </transition>
</template>

<script setup>
import { watch, defineEmits, defineProps } from 'vue'

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
