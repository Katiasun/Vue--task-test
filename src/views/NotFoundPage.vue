<script setup>
import { useRouter } from 'vue-router'

import BaseButton from '@/components/base/BaseButton.vue'

const router = useRouter()

function gotToHome() {
  router.push({ name: 'Home' })
}
</script>

<template>
  <div
    class="min-h-screen flex items-center justify-center flex-col text-yellow bg-black p-5 box-border"
  >
    <div class="mx-w-xl p-10 bg-gray rounded-xl shadow-lg text-center mb-8">
      <h1 class="text-5xl md-text-9xl font-extrabold text-btn-primary-default mb-0">Error 404!</h1>

      <p class="text-2xl md:text-3xl mt-2 mb-4">
        Sorry, the page you are looking for doesn't exist.
      </p>
    </div>

    <BaseButton @click="gotToHome" theme="primary"> Return to home page </BaseButton>
  </div>
</template>
