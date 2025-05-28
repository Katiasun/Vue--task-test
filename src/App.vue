<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import DefaultLayout from './layouts/DefaultLayout.vue'
import EmptyLayout from './layouts/EmptyLayout.vue'

const route = useRoute()
const layoutComponent = computed(() => {
  // Check if the route has a layout defined
  if (route?.meta?.layout) {
    return route.meta.layout === 'empty' ? EmptyLayout : DefaultLayout
  }
  // Default to DefaultLayout if no layout is specified
  return DefaultLayout
})
</script>

<template>
  <component :is="layoutComponent">
    <router-view v-slot="{ Component, route }" name="default">
      <component :is="Component" :key="route.params.locale" />
    </router-view>
  </component>
  <!-- <DefaultLayout /> -->
</template>
