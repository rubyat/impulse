<template>
  <div class="min-h-screen bg-gray-50 safe-top safe-bottom">
    <!-- Top bar -->
    <div class="sticky top-0 z-10 bg-white border-b">
      <div class="mx-auto max-w-sm h-14  flex items-center justify-between">
        <NuxtLink to="/features/vitals-lifestyle" class="text-sm text-indigo-600">← Back</NuxtLink>
        <div class="text-base font-semibold">Alerts</div>
        <NuxtLink to="/features/vitals-lifestyle/meds" class="text-sm text-indigo-600">Meds</NuxtLink>
      </div>
    </div>
    <div class="mx-auto max-w-sm  pt-4 pb-24 space-y-3 text-sm">
      <!-- Elevated BP -->
      <NuxtLink to="/features/vitals-lifestyle/log#bp" class="block rounded-xl border p-4 bg-rose-50 border-rose-200">
        <div class="font-medium text-rose-800">Elevated blood pressure</div>
        <div class="text-xs text-rose-900 mt-1">Recent readings above target</div>
      </NuxtLink>

      <!-- Missed medication -->
      <NuxtLink to="/features/vitals-lifestyle/meds" class="block rounded-xl border p-4 bg-amber-50 border-amber-200">
        <div class="font-medium text-amber-800">Missed medication</div>
        <div class="text-xs text-amber-900 mt-1">Metformin not marked taken</div>
      </NuxtLink>

      <!-- Low mood trend -->
      <NuxtLink to="/features/vitals-lifestyle/checkin" class="block rounded-xl border p-4 bg-blue-50 border-blue-200">
        <div class="font-medium text-blue-800">Low mood trend</div>
        <div class="text-xs text-blue-900 mt-1">Consider check-in and tips</div>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts"></script>


