<script setup lang="ts">
defineProps<{
  image: string
  title: string
}>()
</script>

<template>
  <div class="min-w-[180px] bg-white rounded-2xl border border-gray-100 overflow-hidden">
    <div class="h-28 w-full relative">
      <img :src="image" alt="department" class="absolute inset-0 h-full w-full object-cover" />
    </div>
    <div class="p-3">
      <div class="text-[15px] font-medium text-gray-900">{{ title }}</div>
    </div>
  </div>
  
</template>


