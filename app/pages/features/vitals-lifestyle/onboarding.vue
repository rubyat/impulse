<template>
  <div class="min-h-screen bg-gray-50 safe-top safe-bottom">
    <!-- Top bar -->
    <div class="sticky top-0 z-10 bg-white border-b">
      <div class="mx-auto max-w-sm h-14  flex items-center justify-between">
        <NuxtLink to="/features/vitals-lifestyle" class="text-sm text-indigo-600">Skip</NuxtLink>
        <div class="text-base font-semibold">Get started</div>
        <div class="w-14" />
      </div>
    </div>
    <div class="mx-auto max-w-sm  pt-4 pb-24 space-y-4 text-sm">
      <div class="bg-white border rounded-xl p-4">
        <div class="text-2xl">⌚</div>
        <div class="mt-2 font-medium">Connect your wearable</div>
        <div class="text-xs text-slate-500">Auto-sync HR, SpO₂, and sleep</div>
        <NuxtLink to="/features/vitals-lifestyle/devices" class="mt-3 inline-block px-3 py-2 rounded-lg bg-indigo-600 text-white">Connect</NuxtLink>
      </div>
      <div class="bg-white border rounded-xl p-4">
        <div class="text-2xl">⚠️</div>
        <div class="mt-2 font-medium">Set alerts</div>
        <div class="text-xs text-slate-500">Get notified for abnormal readings</div>
        <NuxtLink to="/features/vitals-lifestyle/settings" class="mt-3 inline-block px-3 py-2 rounded-lg border">Configure</NuxtLink>
      </div>
      <div class="bg-white border rounded-xl p-4">
        <div class="text-2xl">➕</div>
        <div class="mt-2 font-medium">Log your first reading</div>
        <div class="text-xs text-slate-500">Start with BP or glucose</div>
        <NuxtLink to="/features/vitals-lifestyle/log#bp" class="mt-3 inline-block px-3 py-2 rounded-lg border">Add BP</NuxtLink>
      </div>
      <NuxtLink to="/features/vitals-lifestyle" class="inline-block px-3 py-2 rounded-lg bg-indigo-600 text-white">Finish</NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts"></script>


