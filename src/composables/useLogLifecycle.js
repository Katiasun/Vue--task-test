import { onMounted, onUnmounted } from 'vue'

export function useLogLifecycle(componentName) {
  onMounted(() => {
    console.log(`[${componentName}] Компонент змонтовано.`)
  })

  onUnmounted(() => {
    console.log(`[${componentName}] Компонент демонтовано.`)
  })
}
