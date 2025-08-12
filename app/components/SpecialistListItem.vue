<script setup lang="ts">
defineProps<{
  avatar: string
  name: string
  title: string
  rating: number
}>()
</script>

<template>
  <div class="bg-white rounded-2xl border border-gray-100 p-4 flex items-center gap-3">
    <img :src="avatar" alt="avatar" class="h-12 w-12 rounded-xl object-cover" />
    <div class="flex-1">
      <div class="text-[15px] font-semibold text-gray-900">{{ name }}</div>
      <div class="text-sm text-gray-500">{{ title }}</div>
      <div class="mt-1 flex items-center gap-1 text-amber-400">
        <span v-for="i in 5" :key="i">{{ i <= rating ? '★' : '☆' }}</span>
      </div>
    </div>
    <div class="text-gray-400">⋯</div>
  </div>
</template>


