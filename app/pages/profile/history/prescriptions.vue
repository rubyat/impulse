<template>
  <div class="mx-auto max-w-md px-4 pt-4 pb-24 bg-slate-50 min-h-screen">
    <div class="sticky top-0 z-10 bg-slate-50/80 backdrop-blur border-b border-slate-200">
      <div class="h-14 flex items-center">
        <NuxtLink to="/profile" class="text-xs text-slate-600">← Back</NuxtLink>
        <h1 class="text-sm font-semibold text-slate-900 mx-auto">Prescriptions</h1>
        <div class="w-10" />
      </div>
    </div>

    <div class="space-y-4 pt-3">
      <div class="bg-white border rounded-xl divide-y">
        <div class="p-4">
          <div class="flex items-center justify-between">
            <div class="text-sm font-medium">Azithromycin 500 mg</div>
            <span class="text-xs text-emerald-600 border border-emerald-200 rounded-full px-2 py-0.5">Active</span>
          </div>
          <div class="text-xs text-slate-500">01 Apr 2024 · Dr. A. Rahman</div>
          <button class="mt-2 text-xs border px-2 py-1 rounded-lg">Refill</button>
        </div>
        <div class="p-4">
          <div class="flex items-center justify-between">
            <div class="text-sm font-medium">Omeprazole 20 mg</div>
            <span class="text-xs text-slate-500 border rounded-full px-2 py-0.5">Expired</span>
          </div>
          <div class="text-xs text-slate-500">10 Nov 2023 · Dr. S. Akter</div>
        </div>
        <div class="p-4">
          <div class="flex items-center justify-between">
            <div class="text-sm font-medium">Montelukast 10 mg</div>
            <span class="text-xs text-emerald-600 border border-emerald-200 rounded-full px-2 py-0.5">Active</span>
          </div>
          <div class="text-xs text-slate-500">12 Jun 2024 · Dr. M. Hasan</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({ title: 'Prescriptions – Profile+' })
</script>


