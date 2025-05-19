<template>
  <button :class="buttonClass" v-bind="$attrs" @click="handleClick"><slot /></button>
</template>

<script setup>
import { defineProps, computed, defineEmits } from 'vue'

const emit = defineEmits(['click'])

const handleClick = (event) => {
  emit('click', event)
}

const props = defineProps({
  theme: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary', 'tertiary'].includes(value),
  },
})

const buttonClass = computed(() => {
  return {
    'bg-red-500 text-white': props.theme === 'primary',
    'bg-yellow-500 text-white': props.theme === 'secondary',
    'border border-yellow-500 rounded-10 text-yellow-500 font-bold': props.theme === 'tertiary',
    'py-2 px-4 rounded': true,
    'hover:bg-red-600': props.theme === 'primary',
    'hover:bg-yellow-600 ': props.theme === 'secondary',
    'hover:bg-gray-600': props.theme === 'tertiary',
    'transition-colors duration-200': true,
  }
})
</script>
