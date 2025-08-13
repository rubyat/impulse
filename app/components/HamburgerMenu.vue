<script setup lang="ts">
import { computed, onMounted, onUnmounted, watch } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUser, faCalendarCheck, faCreditCard, faFileMedical, faGear, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { useHamburgerMenu } from '../../composables/useHamburgerMenu'
import { useContent } from '../../composables/useContent'
import favPng from '~/assets/images/fav.png?url'

const { isOpen, close } = useHamburgerMenu()
const { data: content } = useContent()
const router = useRouter()

const menuLogo = computed(() => {
  const candidate = content.value?.header?.logoSrc
  if (candidate && candidate.startsWith('/app/assets/')) return favPng
  return candidate || favPng
})

function onBackdropClick(event: MouseEvent) {
  // If clicked directly on backdrop (and not the panel), close
  if ((event.target as HTMLElement)?.id === 'hamburger-backdrop') {
    close()
  }
}

function onEscape(event: KeyboardEvent) {
  if (event.key === 'Escape') close()
}

onMounted(() => {
  document.addEventListener('keydown', onEscape)
  // Prevent body scroll when open
  if (isOpen.value) document.body.style.overflow = 'hidden'
})

onUnmounted(() => {
  document.removeEventListener('keydown', onEscape)
  document.body.style.overflow = ''
})

watch(isOpen, (open) => {
  document.body.style.overflow = open ? 'hidden' : ''
})

function goToProfileLogin() {
  router.push('/profile')
  close()
}

function goToProfilePayments() {
  router.push('/profile/history/payments')
  close()
}

function goToLogin() {
  router.push('/profile/auth/login')
  close()
}

function goToHealthVault() {
  router.push('/features/health-vault')
  close()
}

function goToSettings() {
  router.push('/profile/settings')
  close()
}
</script>

<template>
  <transition name="fade">
    <div
      v-if="isOpen"
      id="hamburger-backdrop"
      class="fixed inset-0 z-[60] bg-black/40 md:absolute"
      @click="onBackdropClick"
    >
      <transition name="slide-in">
        <aside
          v-if="isOpen"
          class="absolute right-0 top-0 h-full w-80 max-w-[85%] bg-white shadow-xl border-l border-gray-100 flex flex-col"
        >
          <!-- Branded header -->
          <div class="p-4 bg-gray-900 text-white">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-3">
                <img :src="menuLogo" :alt="content?.header.title || 'Brand'" class="h-10 rounded-xl bg-white p-1" />
                <div class="leading-tight">
                  <div class="text-base font-semibold">{{ content?.header.title || 'Impulse' }}</div>
                  <div class="text-xs text-gray-300">{{ content?.header.subtitle || 'Your health companion' }}</div>
                </div>
              </div>
              <button type="button" aria-label="Close menu" class="p-2 rounded-md hover:bg-white/10 active:bg-white/20" @click="close">
                ✕
              </button>
            </div>
          </div>

          <!-- Menu list -->
          <nav class="py-2 overflow-y-auto">
            <button type="button" class="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 active:bg-gray-100 text-gray-700 border-b border-gray-100" @click="goToProfileLogin">
              <FontAwesomeIcon :icon="faUser" class="w-6 text-gray-500" />
              <span class="text-[15px]">Profile</span>
            </button>
            <button type="button" class="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 active:bg-gray-100 text-gray-700 border-b border-gray-100">
              <FontAwesomeIcon :icon="faCalendarCheck" class="w-6 text-gray-500" />
              <span class="text-[15px]">Appointments</span>
            </button>
            <button type="button" class="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 active:bg-gray-100 text-gray-700 border-b border-gray-100" @click="goToProfilePayments">
              <FontAwesomeIcon :icon="faCreditCard" class="w-6 text-gray-500" />
              <span class="text-[15px]">Payments</span>
            </button>
            <button type="button" class="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 active:bg-gray-100 text-gray-700 border-b border-gray-100" @click="goToHealthVault">
              <FontAwesomeIcon :icon="faFileMedical" class="w-6 text-gray-500" />
              <span class="text-[15px]">Health Vault</span>
            </button>
            <button type="button" class="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 active:bg-gray-100 text-gray-700 border-b border-gray-100" @click="goToSettings">
              <FontAwesomeIcon :icon="faGear" class="w-6 text-gray-500" />
              <span class="text-[15px]">Settings</span>
            </button>
            <div class="pt-2 px-4">
              <button type="button" class="w-full text-left px-3 py-2 rounded-xl bg-emerald-500 text-white">Upgrade</button>
            </div>
          </nav>

          <!-- Logout at bottom -->
          <div class="mt-auto p-4 border-t border-gray-100">
            <button type="button" class="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-red-50 active:bg-red-100 text-red-600" @click="goToLogin">
              <FontAwesomeIcon :icon="faArrowRightFromBracket" class="w-5" />
              <span>Log out</span>
            </button>
          </div>
        </aside>
      </transition>
    </div>
  </transition>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity 150ms ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

.slide-in-enter-active, .slide-in-leave-active { transition: transform 200ms ease; }
.slide-in-enter-from, .slide-in-leave-to { transform: translateX(100%); }
</style>


