<script setup lang="ts">
import { useContent } from '../../composables/useContent'
const { data: content } = useContent()
</script>

<template>
  <div
    v-if="content"
    class="mt-3 bg-white rounded-2xl shadow-sm border border-gray-100 p-4 flex items-center gap-4"
  >
    <img alt="avatar" class="h-12 w-12 rounded-xl object-cover" :src="content.appointment.avatarSrc" />
    <div class="flex-1">
      <div class="flex items-center justify-between">
        <div class="text-base font-semibold text-gray-900">{{ content.appointment.heading }}</div>
        <div class="h-8 w-8 bg-red-500/10 text-red-500 rounded-full grid place-items-center">{{ content.appointment.bellEmoji }}</div>
      </div>
      <div class="mt-0.5 text-sm text-gray-500">{{ content.appointment.doctorName }}</div>
      <div class="mt-1 flex items-center gap-2 text-sm text-gray-600">
        <span :class="content.appointment.statusColorClass">{{ content.appointment.statusDot }}</span>
        <span>{{ content.appointment.time }} {{ content.appointment.location }}</span>
      </div>
    </div>
  </div>
</template>


