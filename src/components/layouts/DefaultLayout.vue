<template>
  <div>
    <TheHeader @open-side-menu="openSideMenu" :isMenuOpen="isMenuOpen" />

    <router-view />

    <TheFooter />
    <TheSideMenu :isOpen="isMenuOpen" @close="closeSideMenu" />
  </div>
</template>

<script setup>
import TheHeader from '../../components/layout/TheHeader.vue'
import TheSideMenu from '../../components/layout/TheSideMenu.vue'
import TheFooter from '../../components/layout/TheFooter.vue'
import { ref, watch } from 'vue'

const isMenuOpen = ref(false)

function openSideMenu() {
  isMenuOpen.value = true
}

function closeSideMenu() {
  isMenuOpen.value = false
}

watch(
  () => isMenuOpen.value,
  (newVal) => {
    document.body.classList.toggle('overflow-hidden', newVal)
  },
)
</script>
