<script setup>
const props = defineProps({
  promoData: {
    // Єдиний об'єкт, що містить всі дані акції
    type: Object,
    required: true,
    // Додаткова валідація, щоб переконатися, що об'єкт має потрібні властивості
    validator: (value) => {
      return (
        typeof value.id === 'number' &&
        typeof value.title === 'string' &&
        typeof value.description === 'string' &&
        typeof value.bonusAmount === 'number' &&
        typeof value.isActive === 'boolean'
      )
    },
  },
  displayMode: {
    type: String,
    default: 'full',
    validator: (value) => ['simple', 'detailed', 'full'].includes(value),
  },
  themeColor: {
    type: String,
    default: 'yellow',
  },
})

// ЗАВДАННЯ 5: Оголошення подій, які може випускати цей компонент
const emit = defineEmits(['view-details'])

// Функція, яка буде викликана при кліку на кнопку
function handleViewDetails() {
  emit('view-details', props.promoData)
}
</script>

<template>
  <div
    class="bg-gradient-to-br from-slate-950 via-slate-900 to-black p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 text-white"
    :class="{
      'border-2 border-yellow': props.promoData.isActive && props.displayMode !== 'simple',
    }"
  >
    <h3 class="text-2xl font-semibold text-yellow mb-2" :class="`text-${props.themeColor}-400`">
      {{ props.promoData.title }}
    </h3>
    <p
      v-if="props.displayMode === 'detailed' || props.displayMode === 'full'"
      class="text-gray-400"
    >
      {{ props.promoData.description }}
    </p>
    <p
      v-if="props.displayMode === 'full' && props.promoData.bonusAmount > 0"
      class="text-xl font-bold text-blue-800 mb-3"
    >
      Бонус: {{ props.promoData.bonusAmount }}
    </p>
    <button
      class="text-white font-bold py-2 px-4 rounded mt-2"
      :class="`bg-${props.themeColor}-600 hover:bg-${props.themeColor}-700 text-white`"
      @click="handleViewDetails"
    >
      Детальніше
    </button>
  </div>
</template>
