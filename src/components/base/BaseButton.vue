<script setup>
import { defineProps, computed, defineEmits } from 'vue'

const emit = defineEmits(['click'])

const onClick = (event) => {
  emit('click', event)
}

const props = defineProps({
  theme: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary', 'tertiary', 'language'].includes(value),
  },
})

const themeClasses = {
  primary: 'bg-btn-primary-default text-white hover:bg-btn-primary-hover',
  secondary: 'bg-yellow text-white hover:bg-interactive-hover',
  tertiary: 'border border-yellow rounded-10 text-yellow font-bold hover:bg-gray',
  language:
    'flex justify-center items-center bg-black space-x-2 border border-btn-primary py-2 px-4 rounded transition duration-300 ease-in-out',
}

const componentClasses = computed(() => themeClasses[props.theme] || themeClasses.primary)
</script>

<template>
  <button
    class="transition-colors duration-200 py-2 px-4 rounded"
    :class="componentClasses"
    v-bind="$attrs"
    @click="onClick"
  >
    <slot />
  </button>
</template>
