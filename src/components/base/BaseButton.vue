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
  primary: 'bg-btn-primary text-white hover:bg-btn-hover-primary',
  secondary: 'bg-primary-yellow text-white hover:bg-yellow-hover',
  tertiary: 'border border-primary-yellow rounded-10 text-primary-yellow font-bold hover:bg-gray',
}

const buttonClass = computed(() => buttonThemes[props.theme] || buttonThemes.primary)
</script>
