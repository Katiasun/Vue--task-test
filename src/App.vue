<script setup>
import useLayout from '@/composables/useLayout'

const { layoutComponent } = useLayout()
</script>

<template>
  <component :is="layoutComponent">
    <router-view v-slot="{ Component, route }" name="default">
      <component :is="Component" :key="route.params.locale" />
    </router-view>
  </component>
</template>
