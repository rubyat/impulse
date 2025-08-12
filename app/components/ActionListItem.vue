<script setup lang="ts">
defineProps<{
  iconBg: string
  iconEmoji: string
  title: string
  subtitle: string
}>()
</script>

<template>
  <button class="w-full bg-white rounded-2xl border border-gray-100 p-4 flex items-center">
    <div :class="['h-10 w-10 rounded-full grid place-items-center text-xl', iconBg]">{{ iconEmoji }}</div>
    <div class="ml-3 flex-1 text-left">
      <div class="text-[16px] font-medium text-gray-900">{{ title }}</div>
      <div class="text-sm text-gray-500">{{ subtitle }}</div>
    </div>
    <div class="text-gray-400">›</div>
  </button>
  
</template>


