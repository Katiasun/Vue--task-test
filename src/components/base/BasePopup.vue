<script setup>
import { defineEmits, onMounted, onUnmounted } from 'vue'

import BaseButton from './BaseButton.vue'

import { XMarkIcon } from '@heroicons/vue/24/outline'

const emit = defineEmits(['close'])

function closeDialog() {
  const dialogElement = document.getElementById('favDialog')

  if (dialogElement && dialogElement.open) {
    dialogElement.close()
    emit('close')
  }
}

// 2. Додаємо обробник кліку на backdrop для закриття
function handleBackdropClick(event) {
  const dialogElement = document.getElementById('favDialog')

  if (dialogElement && event.target === dialogElement) {
    closeDialog()
  }
}

onMounted(() => {
  const dialogElement = document.getElementById('favDialog')

  if (dialogElement) {
    dialogElement.addEventListener('click', handleBackdropClick) // Додаємо слухача для кліків на backdrop
  }
})

onUnmounted(() => {
  const dialogElement = document.getElementById('favDialog')

  if (dialogElement) {
    dialogElement.removeEventListener('click', handleBackdropClick) // Видаляємо слухача при розмонтуванні
  }
})
</script>

<template>
  <dialog
    id="favDialog"
    class="rounded-lg shadow-xl p-6 bg-slate-800 text-white border border-yellow-500 max-w-sm md:max-w-md lg:max-w-lg fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 backdrop:bg-black/70 backdrop:backdrop-blur-sm"
  >
    <div class="flex flex-col gap-4">
      <div class="flex items-start justify-between w-full">
        <p class="text-xl font-bold text-center">Greetings, one and all!</p>

        <button
          @click="closeDialog"
          aria-label="Закрити модальне вікно"
          class="bg-gray hover:bg-slate-600 rounded-full text-white cursor-pointer z-10"
        >
          <XMarkIcon class="w-6 h-6" />
        </button>
      </div>

      <p class="text-md text-gray text-center">This is a test dialog. Click OK to close it.</p>

      <form method="dialog" class="w-full mt-4">
        <BaseButton
          theme="secondary"
          class="font-semibold py-2 px-4 rounded transition duration-200 w-full"
        >
          OK
        </BaseButton>
      </form>
    </div>
  </dialog>
</template>
