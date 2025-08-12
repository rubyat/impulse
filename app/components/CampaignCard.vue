<script setup lang="ts">
defineProps<{
  image: string
  badge: string
  title: string
  description: string
}>()
</script>

<template>
  <div class="min-w-[260px] bg-white rounded-2xl overflow-hidden border border-gray-100">
    <div class="relative h-36 w-full">
      <img :src="image" class="absolute inset-0 h-full w-full object-cover" alt="campaign" />
      <div class="absolute top-3 left-3 bg-emerald-500 text-white text-xs font-medium px-2 py-1 rounded-md shadow">{{ badge }}</div>
    </div>
    <div class="p-3">
      <div class="text-[15px] font-semibold leading-snug text-gray-900">{{ title }}</div>
      <div class="text-sm text-gray-500 mt-1">{{ description }}</div>
    </div>
  </div>
</template>


