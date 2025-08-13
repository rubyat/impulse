<template>
  <div class="min-h-screen bg-slate-50 safe-top safe-bottom">
    <main class="mx-auto max-w-sm pt-4 pb-24 space-y-4 text-sm">
      <div class="flex items-center justify-between">
        <NuxtLink to="/features/booking-payments" class="text-sm text-indigo-600">← Back</NuxtLink>
        <h1 class="text-base font-semibold">Orders</h1>
        <span class="w-14"></span>
      </div>

      <div class="flex gap-2 text-xs">
        <button class="px-3 py-1.5 rounded-full border bg-white">Upcoming</button>
        <button class="px-3 py-1.5 rounded-full border bg-white">Past</button>
      </div>

      <NuxtLink to="/features/booking-payments/confirmation" class="block rounded-xl border bg-white p-4">
        <div class="flex items-center justify-between">
          <div>
            <div class="font-medium">IVF Consultation</div>
            <div class="text-xs text-slate-500">Aug 14, 10:30 • Dhanmondi, Dhaka</div>
          </div>
          <div class="text-right">
            <div class="font-medium">৳4,500</div>
            <div class="text-xs text-emerald-600">Confirmed</div>
          </div>
        </div>
      </NuxtLink>
    </main>
  </div>
</template>

<script setup lang="ts"></script>


