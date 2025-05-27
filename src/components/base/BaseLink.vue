<template>
  <RouterLink
    v-bind="$attrs"
    class="text-yellow hover:text-interactive-hover transition-colors duration-200"
  >
    <slot />
  </RouterLink>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>
