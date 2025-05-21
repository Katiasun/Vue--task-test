<template>
  <button
    class="transition-colors duration-200 py-2 px-4 rounded"
    :class="buttonClass"
    v-bind="$attrs"
    @click="handleClick"
  >
    <slot />
  </button>
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

const buttonThemes = {
  primary: 'bg-red-500 text-white hover:bg-red-600',
  secondary: 'bg-yellow-500 text-white hover:bg-yellow-600',
  tertiary: 'border border-yellow-500 rounded-10 text-yellow-500 font-bold hover:bg-gray-600',
}

const buttonClass = computed(() => buttonThemes[props.theme] || buttonThemes.primary)
</script>
