<script setup lang="ts">
import { computed } from 'vue'
import { useContent } from '../../composables/useContent'
import { useHamburgerMenu } from '../../composables/useHamburgerMenu'
import logoPng from '~/assets/images/logo.png?url'

const { data: content } = useContent()
const router = useRouter()
const { open: openMenu } = useHamburgerMenu()

const headerLogo = computed(() => {
  const candidate = content.value?.header?.logoSrc
  // Avoid treating non-public asset paths as routes
  if (candidate && candidate.startsWith('/app/assets/')) return logoPng
  return candidate || logoPng
})
</script>

<template>
  <header class="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-100">
    <div class="px-4 py-3 flex items-center justify-between" v-if="content">
      <button type="button" aria-label="Go to home" @click="router.push('/')" class="flex justify-start items-center gap-3 cursor-pointer">
        <img :src="headerLogo" :alt="content.header.title" class="w-[70%] h-auto" />
        <!-- <div class="leading-tight text-left">
          <div class="text-2xl font-semibold tracking-tight">{{ content.header.title }}</div>
          <div class="text-sm text-gray-500">{{ content.header.subtitle }}</div>
        </div> -->
      </button>

      <div class="flex items-center gap-3">
        <button @click="router.push('/features/cycle-fertility/booking')" type="button" class="inline-flex items-center gap-2 border border-gray-200 px-2 py-2 text-gray-900 bg-white rounded-md hover:bg-gray-50 active:bg-gray-100">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-5 w-5">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
            <line x1="16" y1="2" x2="16" y2="6"/>
            <line x1="8" y1="2" x2="8" y2="6"/>
            <line x1="3" y1="10" x2="21" y2="10"/>
          </svg>
          <span class="text-sm">{{ content.header.ctaLabel }}</span>
        </button>
        <button type="button" :aria-label="content.header.menuAriaLabel" class="inline-flex items-center gap-2 border border-gray-200 px-2 py-2 text-gray-900 bg-white rounded-md hover:bg-gray-50 active:bg-gray-100" @click="openMenu">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-5 w-5">
            <line x1="3" y1="6" x2="21" y2="6"/>
            <line x1="3" y1="12" x2="21" y2="12"/>
            <line x1="3" y1="18" x2="21" y2="18"/>
          </svg>
        </button>
      </div>
    </div>
  </header>
</template>


