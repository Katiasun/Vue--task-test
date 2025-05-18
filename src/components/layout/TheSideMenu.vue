<template>
  <transition name="slide" class="bg-black text-white">
    <aside v-if="isOpen" class="fixed inset-0 z-50 bg-black text-white w-64 shadow-lg">
      <button
        @click="handleClose"
        class="absolute top-4 right-4 text-yellow-500 hover:text-yellow-700 text-2xl"
        aria-label="Close menu"
      >
        &times;
      </button>
      <nav class="mt-16 px-4">
        <ul class="space-y-4">
          <li><a href="/" class="text-lg text-yellow-500 hover:text-yellow-600">Home</a></li>
          <li><a href="/about" class="text-lg text-yellow-500 hover:text-yellow-600">About</a></li>
          <li>
            <a href="/contact" class="text-lg text-yellow-500 hover:text-yellow-600">Contact</a>
          </li>
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
