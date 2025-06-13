import { useRoute } from 'vue-router'
import { computed } from 'vue'

import DefaultLayout from '@/layouts/DefaultLayout.vue'
import EmptyLayout from '@/layouts/EmptyLayout.vue'

export default function useLayout() {
  const route = useRoute()

  const layoutComponent = computed(() => {
    // Check if the route has a layout defined
    if (route?.meta?.layout) {
      return route.meta.layout === 'empty' ? EmptyLayout : DefaultLayout
    }
    // Default to DefaultLayout if no layout is specified
    return DefaultLayout
  })

  return { layoutComponent }
}
