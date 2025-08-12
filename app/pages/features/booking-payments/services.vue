<template>
  <div class="min-h-screen bg-slate-50 safe-top safe-bottom">
    <main class="mx-auto max-w-sm pt-4 pb-24 space-y-4 text-sm">
      <div class="flex items-center justify-between">
        <NuxtLink to="/features/booking-payments" class="text-sm text-indigo-600">← Back</NuxtLink>
        <h1 class="text-base font-semibold">Services</h1>
        <span class="w-14"></span>
      </div>

      <div class="flex gap-2 text-xs">
        <button class="px-3 py-1.5 rounded-full border bg-white">All</button>
        <button class="px-3 py-1.5 rounded-full border bg-white">IVF</button>
        <button class="px-3 py-1.5 rounded-full border bg-white">Aesthetics</button>
        <button class="px-3 py-1.5 rounded-full border bg-white">General</button>
        <button class="px-3 py-1.5 rounded-full border bg-white">Price</button>
        <button class="px-3 py-1.5 rounded-full border bg-white">Location</button>
      </div>

      <NuxtLink to="/features/booking-payments/service/ivf-consult" class="block rounded-xl border bg-white p-4">
        <div class="font-medium">IVF Consultation</div>
        <div class="text-xs text-slate-500">From $200 • Peak pricing may apply</div>
      </NuxtLink>
      <NuxtLink to="/features/booking-payments/service/ivf-cycle" class="block rounded-xl border bg-white p-4">
        <div class="font-medium">IVF Cycle</div>
        <div class="text-xs text-slate-500">From $1,800 • Peak pricing may apply</div>
      </NuxtLink>
      <NuxtLink to="/features/booking-payments/service/laser-resurfacing" class="block rounded-xl border bg-white p-4">
        <div class="font-medium">Laser Resurfacing</div>
        <div class="text-xs text-slate-500">From $320 • Peak pricing may apply</div>
      </NuxtLink>
    </main>
  </div>
</template>

<script setup lang="ts"></script>


