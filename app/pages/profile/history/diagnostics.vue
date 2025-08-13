<template>
  <div class="mx-auto max-w-md px-4 pt-4 pb-24 bg-slate-50 min-h-screen">
    <div class="sticky top-0 z-10 bg-slate-50/80 backdrop-blur border-b border-slate-200">
      <div class="h-14 flex items-center">
        <NuxtLink to="/profile" class="text-xs text-slate-600">← Back</NuxtLink>
        <h1 class="text-sm font-semibold text-slate-900 mx-auto">Diagnostics History</h1>
        <div class="w-10" />
      </div>
    </div>

    <div class="space-y-4 pt-3">
      <div class="flex gap-2 text-xs">
        <button class="px-3 py-1 border rounded-full">7d</button>
        <button class="px-3 py-1 border rounded-full">30d</button>
        <button class="px-3 py-1 border rounded-full">90d</button>
        <button class="px-3 py-1 border rounded-full">All</button>
      </div>
      <input class="w-full border rounded-full px-4 py-2 text-sm" placeholder="Search diagnostics" />

      <div class="bg-white border rounded-xl divide-y">
        <NuxtLink to="/profile/profile" class="flex items-center justify-between p-4">
          <div>
            <div class="text-sm font-medium">Diabetes Screening (FBS + HbA1c)</div>
            <div class="text-xs text-slate-500">09 May 2024 · Popular Diagnostic Centre, Dhanmondi</div>
          </div>
          <span class="text-xs text-emerald-600 border border-emerald-200 rounded-full px-2 py-0.5">Completed</span>
        </NuxtLink>
        <div class="flex items-center justify-between p-4">
          <div>
            <div class="text-sm font-medium">Cardiac Risk Profile</div>
            <div class="text-xs text-slate-500">02 May 2024 · Square Hospital, Panthapath</div>
          </div>
          <span class="text-xs text-amber-600 border border-amber-200 rounded-full px-2 py-0.5">Pending</span>
        </div>
        <div class="flex items-center justify-between p-4">
          <div>
            <div class="text-sm font-medium">Thyroid Function Test (T3, T4, TSH)</div>
            <div class="text-xs text-slate-500">18 Apr 2024 · Ibn Sina Diagnostic, Dhanmondi</div>
          </div>
          <span class="text-xs text-emerald-600 border border-emerald-200 rounded-full px-2 py-0.5">Completed</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({ title: 'Diagnostics – Profile+' })
</script>


