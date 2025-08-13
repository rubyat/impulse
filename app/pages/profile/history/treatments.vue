<template>
  <div class="mx-auto max-w-md px-4 pt-4 pb-24 bg-slate-50 min-h-screen">
    <div class="sticky top-0 z-10 bg-slate-50/80 backdrop-blur border-b border-slate-200">
      <div class="h-14 flex items-center">
        <NuxtLink to="/profile" class="text-xs text-slate-600">← Back</NuxtLink>
        <h1 class="text-sm font-semibold text-slate-900 mx-auto">Treatment History</h1>
        <div class="w-10" />
      </div>
    </div>

    <div class="space-y-4 pt-3">
      <div class="bg-white border rounded-xl divide-y">
        <div class="flex items-center justify-between p-4">
          <div>
            <div class="text-sm font-medium">Physiotherapy Session – Lower Back Pain</div>
            <div class="text-xs text-slate-500">06 Feb 2024 · Evercare Hospital Dhaka</div>
          </div>
          <span class="text-xs text-emerald-600 border border-emerald-200 rounded-full px-2 py-0.5">Completed</span>
        </div>
        <div class="flex items-center justify-between p-4">
          <div>
            <div class="text-sm font-medium">Dental Procedure – Scaling & Polishing</div>
            <div class="text-xs text-slate-500">10 Jun 2024 · City Dental, Dhanmondi</div>
          </div>
          <span class="text-xs text-amber-600 border border-amber-200 rounded-full px-2 py-0.5">Planned</span>
        </div>
        <div class="flex items-center justify-between p-4">
          <div>
            <div class="text-sm font-medium">General Check-up – Internal Medicine</div>
            <div class="text-xs text-slate-500">15 Mar 2024 · Square Hospital, Panthapath</div>
          </div>
          <span class="text-xs text-emerald-600 border border-emerald-200 rounded-full px-2 py-0.5">Completed</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({ title: 'Treatments – Profile+' })
</script>


