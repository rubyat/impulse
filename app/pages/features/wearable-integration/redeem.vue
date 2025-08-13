<template>
  <div class="min-h-screen bg-slate-50 safe-top safe-bottom">
    <main class="mx-auto max-w-sm pt-4 pb-24 space-y-4 text-sm">
      <div class="flex items-center justify-between">
        <NuxtLink to="/features/wearable-integration/rewards" class="text-sm text-indigo-600">← Back</NuxtLink>
        <h1 class="text-base font-semibold">Redeem</h1>
        <span class="w-14"></span>
      </div>

      <section class="bg-white border rounded-xl p-4">
        <div class="font-medium">৳1,000 lab credit</div>
        <div class="text-xs text-slate-600">Cost: 500 pts • Your balance: 2,450 pts</div>
      </section>

      <div class="bg-white border rounded-xl p-4 text-center">
        <NuxtLink to="/features/wearable-integration/loyalty" class="inline-block px-3 py-2 rounded-lg bg-indigo-600 text-white">Redeem now</NuxtLink>
        <div class="mt-3 text-xs text-slate-600">Voucher: FW-XXXX • Expires in 30 days</div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts"></script>


