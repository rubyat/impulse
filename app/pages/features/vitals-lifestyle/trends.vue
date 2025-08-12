<template>
  <div class="min-h-screen bg-gray-50 safe-top safe-bottom">
    <!-- Top bar -->
    <div class="sticky top-0 z-10 bg-white border-b">
      <div class="mx-auto max-w-sm h-14  flex items-center justify-between">
        <NuxtLink to="/features/vitals-lifestyle" class="text-sm text-indigo-600">← Back</NuxtLink>
        <div class="text-base font-semibold">Trends</div>
        <NuxtLink to="/features/vitals-lifestyle/log" class="text-sm text-indigo-600">Log</NuxtLink>
      </div>
    </div>
    <div class="mx-auto max-w-sm  pt-4 pb-24 space-y-4">
      <!-- Time range chips -->
      <div class="flex gap-2 text-sm">
        <button class="px-3 py-1.5 rounded-full border bg-white">7d</button>
        <button class="px-3 py-1.5 rounded-full border bg-white">30d</button>
        <button class="px-3 py-1.5 rounded-full border bg-white">90d</button>
      </div>
      <NuxtLink to="/features/vitals-lifestyle/devices" class="text-xs text-slate-500 underline">Source: Wearable</NuxtLink>

      <!-- BP chart -->
      <section class="bg-white border rounded-xl p-4">
        <div class="font-medium text-sm">Blood pressure</div>
        <div class="mt-2 h-28 rounded-lg bg-slate-50 border grid place-items-center text-xs text-slate-500">BP chart</div>
        <div class="mt-2 text-xs text-slate-600">Avg 119/77 • Range 105/68–131/85</div>
      </section>

      <!-- Glucose chart -->
      <section class="bg-white border rounded-xl p-4">
        <div class="font-medium text-sm">Glucose</div>
        <div class="mt-2 h-28 rounded-lg bg-slate-50 border grid place-items-center text-xs text-slate-500">Glucose chart</div>
        <div class="mt-2 text-xs text-slate-600">Fasting avg 94 • Post-meal avg 130</div>
      </section>

      <!-- Sleep chart -->
      <section class="bg-white border rounded-xl p-4">
        <div class="font-medium text-sm">Sleep</div>
        <div class="mt-2 h-28 rounded-lg bg-slate-50 border grid place-items-center text-xs text-slate-500">Sleep chart</div>
        <div class="mt-2 text-xs text-slate-600">Avg 7h 18m • Sleep score 82</div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts"></script>


