<script setup>
import { computed } from 'vue'

const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: '',
  },
  type: {
    type: String,
    default: 'text',
  },
  placeholder: {
    type: String,
    default: '',
  },
  title: {
    type: String,
    default: '',
  },
})

const emit = defineEmits(['update:modelValue'])

// Computed property for v-model
const inputValue = computed({
  get: () => props.modelValue,
  set: (newValue) => {
    emit('update:modelValue', newValue)
  },
})

// Computed property to control the visibility of the crosshair
const isClearIconVisible = computed(() => {
  return !!props.modelValue && props.modelValue.toString().length > 0
})

// Function for clearing input
function handleClearInput() {
  emit('update:modelValue', '')
}
</script>

<template>
  <div class="relative mb-8 w-full max-w-md">
    <div class="absolute left-3 top-1/2 -translate-y-1/2 text-yellow">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="size-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
        />
      </svg>
    </div>

    <input
      :type="type"
      :placeholder="placeholder"
      v-model="inputValue"
      class="w-full bg-black text-yellow placeholder-gray-500 border border-gray rounded-lg py-3 px-4 shadow-md focus:outline-none focus:ring-2 focus:ring-yellow focus:border-transparent transition duration-200 ease-in-out pl-10"
      :class="{ 'pr-10': isClearIconVisible }"
    />

    <button
      v-if="isClearIconVisible"
      @click="handleClearInput"
      class="absolute right-3 top-1/2 -translate-y-1/2 text-gray cursor-pointer hover:text-yellow focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full p-0.5 z-10"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="size-6"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
      </svg>
    </button>
  </div>
</template>
