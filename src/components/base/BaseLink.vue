<template>
  <RouterLink
    v-bind="$attrs"
    class="text-yellow hover:text-yellow-hover transition-colors duration-200"
  >
    <slot />
  </RouterLink>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>
