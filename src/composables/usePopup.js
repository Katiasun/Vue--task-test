import { onMounted, onUnmounted } from 'vue'

export function usePopup(dialogId = 'popup') {
  let dialogElementInstance = null

  function open() {
    if (dialogElementInstance) {
      dialogElementInstance.showModal()
    }
  }

  function close() {
    if (dialogElementInstance && dialogElementInstance.open) {
      dialogElementInstance.close()
    }
  }

  // handle backdrop click
  function handleBackdropClick(event) {
    if (dialogElementInstance && event.target === dialogElementInstance) {
      close()
    }
  }

  onMounted(() => {
    dialogElementInstance = document.getElementById(dialogId)

    if (dialogElementInstance) {
      dialogElementInstance.addEventListener('click', handleBackdropClick)
    }
  })

  onUnmounted(() => {
    if (dialogElementInstance) {
      dialogElementInstance.removeEventListener('click', handleBackdropClick)
    }
  })

  return {
    open,
    close,
  }
}
