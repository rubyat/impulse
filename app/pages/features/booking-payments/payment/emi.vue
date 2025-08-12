<template>
  <div class="min-h-screen bg-slate-50 safe-top safe-bottom">
    <main class="mx-auto max-w-sm pt-4 pb-24 space-y-4 text-sm">
      <div class="flex items-center justify-between">
        <NuxtLink to="/features/booking-payments/checkout" class="text-sm text-indigo-600">← Back</NuxtLink>
        <h1 class="text-base font-semibold">EMI Options</h1>
        <span class="w-14"></span>
      </div>

      <section class="bg-white border rounded-xl p-4">
        <div class="text-xs text-slate-600">Eligibility checked on selection (demo only)</div>
      </section>

      <div class="bg-white border rounded-xl p-4 space-y-2">
        <div class="flex items-center justify-between"><div>3 mo — APR 0%</div><div>$60/mo</div></div>
        <div class="flex items-center justify-between"><div>6 mo — APR 6.99%</div><div>$31/mo</div></div>
        <div class="flex items-center justify-between"><div>12 mo — APR 9.99%</div><div>$16/mo</div></div>
        <div class="text-[11px] text-slate-500">Representative figures for demo.</div>
      </div>

      <NuxtLink to="/features/booking-payments/confirmation" class="h-12 rounded-lg bg-indigo-600 text-white grid place-items-center">Proceed with selected plan</NuxtLink>
    </main>
  </div>
</template>

<script setup lang="ts"></script>


