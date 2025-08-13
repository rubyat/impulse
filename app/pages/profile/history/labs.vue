<template>
  <div class="mx-auto max-w-md px-4 pt-4 pb-24 bg-slate-50 min-h-screen">
    <div class="sticky top-0 z-10 bg-slate-50/80 backdrop-blur border-b border-slate-200">
      <div class="h-14 flex items-center">
        <NuxtLink to="/profile" class="text-xs text-slate-600">← Back</NuxtLink>
        <h1 class="text-sm font-semibold text-slate-900 mx-auto">Lab Reports</h1>
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
      <input class="w-full border rounded-full px-4 py-2 text-sm" placeholder="Search lab reports" />

      <div class="bg-white border rounded-xl divide-y">
        <div class="flex items-center justify-between p-4">
          <div>
            <div class="text-sm font-medium">CBC</div>
            <div class="text-xs text-slate-500">21 Apr 2024 · Popular Diagnostic Centre, Dhanmondi</div>
          </div>
          <div class="text-xs text-slate-600">🧪</div>
        </div>
        <div class="flex items-center justify-between p-4">
          <div>
            <div class="text-sm font-medium">Fasting Blood Sugar (FBS)</div>
            <div class="text-xs text-slate-500">12 Mar 2024 · Ibn Sina Diagnostic, Dhanmondi</div>
          </div>
          <div class="text-xs text-slate-600">🧪</div>
        </div>
        <div class="flex items-center justify-between p-4">
          <div>
            <div class="text-sm font-medium">Lipid Profile</div>
            <div class="text-xs text-slate-500">03 Jan 2024 · Labaid Diagnostic, Dhanmondi</div>
          </div>
          <div class="text-xs text-slate-600">🧪</div>
        </div>
        <div class="flex items-center justify-between p-4">
          <div>
            <div class="text-sm font-medium">TSH</div>
            <div class="text-xs text-slate-500">28 Feb 2024 · Evercare Hospital Dhaka</div>
          </div>
          <div class="text-xs text-slate-600">🧪</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({ title: 'Lab Reports – Profile+' })
</script>


