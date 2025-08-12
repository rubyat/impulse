import type { Ref } from 'vue'

/**
 * Global hamburger menu state and actions.
 * Uses Nuxt useState so it persists across components.
 */
export function useHamburgerMenu(): {
  isOpen: Ref<boolean>
  open: () => void
  close: () => void
  toggle: () => void
} {
  const isOpen = useState<boolean>('hamburger-menu-open', () => false)

  const open = () => {
    isOpen.value = true
  }

  const close = () => {
    isOpen.value = false
  }

  const toggle = () => {
    isOpen.value = !isOpen.value
  }

  return { isOpen, open, close, toggle }
}


