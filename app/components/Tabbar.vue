<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faHouse, faCalendar, faGear, faUser, faBars } from '@fortawesome/free-solid-svg-icons'
import { useHamburgerMenu } from '../../composables/useHamburgerMenu'
interface TabItem {
  key: string
  label: string
  icon: string
}

const props = defineProps<{ items: TabItem[] }>()

const router = useRouter()
const { open: openMenu } = useHamburgerMenu()

const iconByKey: Record<string, any> = {
  home: faHouse,
  calendar: faCalendar,
  settings: faGear,
  profile: faUser,
  menu: faBars
}

function handleClick(item: TabItem) {
  if (item.key === 'home') {
    router.push('/')
    return
  }
  if (item.key === 'calendar') {
    router.push('/calendar')
    return
  }
  if (item.key === 'settings') {
    router.push('/profile/settings')
    return
  }
  if (item.key === 'profile') {
    router.push('/profile/auth/login')
    return
  }
  if (item.key === 'menu') {
    openMenu()
    return
  }
  // Future: map other tab keys to routes when available
}
</script>

<template>
  <nav class="fixed bottom-0 left-0 right-0 safe-bottom bg-white border-t border-gray-200 md:absolute md:left-0 md:right-0 md:bottom-0">
    <div class="mx-auto max-w-md md:max-w-none">
      <div class="grid grid-cols-5 h-16">
        <button
          v-for="item in props.items"
          :key="item.key"
          type="button"
          class="flex flex-col items-center justify-center text-xs text-gray-500"
          @click="handleClick(item)"
        >
          <FontAwesomeIcon :icon="iconByKey[item.key] || faHouse" class="text-xl" />
          <div class="mt-0.5">{{ item.label }}</div>
        </button>
      </div>
    </div>
  </nav>
</template>


