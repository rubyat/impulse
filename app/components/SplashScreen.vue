<template>
  <transition name="fade">
    <div v-if="visible" class="absolute inset-0 z-[1000] flex items-center justify-center bg-white">
      <div class="flex flex-col items-center w-full px-10">
        <img :src="splashSrc" alt="Impulse Hospital" class="w-full h-auto" />
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import splashSrc from '~/assets/images/logo2.jpeg?url'

const props = defineProps<{ storageKey?: string; durationMs?: number }>()

const visible = ref(true)

onMounted(() => {
  const key = props.storageKey ?? 'impulse_saw_splash_v1'
  const alreadySaw = typeof window !== 'undefined' && window.localStorage.getItem(key)
  if (alreadySaw) {
    visible.value = false
    return
  }
  const duration = props.durationMs ?? 4000
  window.setTimeout(() => {
    visible.value = false
    try { window.localStorage.setItem(key, '1') } catch {}
  }, duration)
})
</script>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity 300ms ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>


