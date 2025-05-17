<template>
  <button :class="buttonClass" v-bind="$attrs"><slot /></button>
</template>

<script setup>
import { defineProps, computed } from 'vue'

const props = defineProps({
  theme: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary'].includes(value),
  },
})

const buttonClass = computed(() => {
  return {
    'bg-red-500 text-white': props.theme === 'primary',
    'bg-yellow-500 text-white': props.theme === 'secondary',
    'py-2 px-4 rounded': true,
    'hover:bg-red-600': props.theme === 'primary',
    'hover:bg-yellow-600 ': props.theme === 'secondary',
    'transition-colors duration-200': true,
  }
})
</script>
