<template>
  <div class="mx-auto max-w-md px-4 pt-4 pb-24 bg-slate-50 min-h-screen">
    <div class="sticky top-0 z-10 bg-slate-50/80 backdrop-blur border-b border-slate-200">
      <div class="h-14 flex items-center">
        <NuxtLink to="/profile" class="text-xs text-slate-600">← Back</NuxtLink>
        <h1 class="text-sm font-semibold text-slate-900 mx-auto">My History</h1>
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

      <input class="w-full border rounded-full px-4 py-2 text-sm" placeholder="Search history" />

      <section class="bg-white border rounded-xl p-4">
        <div class="text-xs font-semibold text-slate-800 mb-2">Diagnostics</div>
        <NuxtLink to="/profile/history/diagnostics" class="block text-xs text-indigo-600">View all →</NuxtLink>
      </section>

      <section class="bg-white border rounded-xl p-4">
        <div class="text-xs font-semibold text-slate-800 mb-2">Lab reports</div>
        <NuxtLink to="/profile/history/labs" class="block text-xs text-indigo-600">View all →</NuxtLink>
      </section>

      <section class="bg-white border rounded-xl p-4">
        <div class="text-xs font-semibold text-slate-800 mb-2">Treatments</div>
        <NuxtLink to="/profile/history/treatments" class="block text-xs text-indigo-600">View all →</NuxtLink>
      </section>

      <section class="bg-white border rounded-xl p-4">
        <div class="text-xs font-semibold text-slate-800 mb-2">Prescriptions</div>
        <NuxtLink to="/profile/history/prescriptions" class="block text-xs text-indigo-600">View all →</NuxtLink>
      </section>

      <section class="bg-white border rounded-xl p-4">
        <div class="text-xs font-semibold text-slate-800 mb-2">Payments</div>
        <NuxtLink to="/profile/history/payments" class="block text-xs text-indigo-600">View all →</NuxtLink>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({ title: 'My History – Profile+' })
</script>


