<template>
  <RouterLink
    v-bind="$attrs"
    class="text-yellow-500 hover:text-yellow-600 transition-colors duration-200"
  >
    <slot />
  </RouterLink>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>
