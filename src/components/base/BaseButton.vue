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
  primary: 'bg-btn-primary-default text-white hover:bg-btn-primary-hover',
  secondary: 'bg-yellow text-white hover:bg-interactive-hover',
  tertiary: 'border border-yellow rounded-10 text-yellow font-bold hover:bg-gray',
}

const buttonClass = computed(() => buttonThemes[props.theme] || buttonThemes.primary)
</script>
