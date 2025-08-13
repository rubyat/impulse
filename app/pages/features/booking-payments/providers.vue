<template>
  <div class="min-h-screen bg-slate-50 safe-top safe-bottom">
    <main class="mx-auto max-w-sm pt-4 pb-24 space-y-4 text-sm">
      <div class="flex items-center justify-between">
        <NuxtLink to="/features/booking-payments/service/ivf-consult" class="text-sm text-indigo-600">← Back</NuxtLink>
        <h1 class="text-base font-semibold">Providers</h1>
        <span class="w-14"></span>
      </div>

      <div class="text-[11px] text-slate-500">Prices vary by slot tier. Last updated 2m ago.</div>

      <div class="bg-white border rounded-xl p-4 flex items-center justify-between">
        <div>
          <div class="font-medium">Dhanmondi Clinic</div>
          <div class="text-xs text-slate-500">IVF • Dhanmondi, Dhaka</div>
        </div>
        <NuxtLink to="/features/booking-payments/booking" class="px-3 py-2 rounded-lg border">Select</NuxtLink>
      </div>
      <div class="bg-white border rounded-xl p-4 flex items-center justify-between">
        <div>
          <div class="font-medium">Banani Aesthetics</div>
          <div class="text-xs text-slate-500">Aesthetics • Banani, Dhaka</div>
        </div>
        <NuxtLink to="/features/booking-payments/booking" class="px-3 py-2 rounded-lg border">Select</NuxtLink>
      </div>
      <div class="bg-white border rounded-xl p-4 flex items-center justify-between">
        <div>
          <div class="font-medium">Chattogram General</div>
          <div class="text-xs text-slate-500">General • Chattogram</div>
        </div>
        <NuxtLink to="/features/booking-payments/booking" class="px-3 py-2 rounded-lg border">Select</NuxtLink>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts"></script>


