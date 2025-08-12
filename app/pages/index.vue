<script setup lang="ts">
import { useContent } from '../../composables/useContent'

const { data: content } = useContent()

interface FeatureItem {
  key: string
  label: string
  icon: string
  to: string
}

const features: FeatureItem[] = [
  { key: 'cycle-fertility', label: 'Cycle & Fertility', icon: '🩺', to: '/features/cycle-fertility' },
  { key: 'vitals-lifestyle', label: 'Vitals & Lifestyle', icon: '📊', to: '/features/vitals-lifestyle' },
  { key: 'ai-triage', label: 'AI Triage & Nudges', icon: '🤖', to: '/features/ai-triage-nudges' },
  { key: 'health-vault', label: 'My Health Vault', icon: '🔐', to: '/features/health-vault' },
  { key: 'booking-payments', label: 'Booking & Payments', icon: '💳', to: '/features/booking-payments' },
  { key: 'programmes-rewards', label: 'Programmes & Rewards', icon: '🎁', to: '/features/programmes-rewards' },
  { key: 'wearable-integration', label: 'Wearables & Flywheel', icon: '⌚️', to: '/features/wearable-integration' },
]
</script>

<template>
  <div class="min-h-screen bg-gray-50" v-if="content">

    <div class="px-4 py-5">
      <div class="grid grid-cols-2 gap-3">
        <div v-for="item in features" :key="item.key">
          <NuxtLink :to="item.to" class="block">
            <div class="rounded-2xl border border-gray-100 bg-white shadow-sm p-4 h-28 flex flex-col items-center justify-center text-center hover:bg-gray-50 active:bg-gray-100">
              <div class="text-5xl">{{ item.icon }}</div>
              <div class="mt-2 text-sm font-medium text-gray-900">{{ item.label }}</div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>

    <div class="h-[72px]" />
    <Tabbar :items="content.tabs" />
  </div>
</template>


