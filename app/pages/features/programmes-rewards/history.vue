<template>
  <div class="min-h-screen bg-slate-50 safe-top safe-bottom">
    <main class="mx-auto max-w-sm pt-4 pb-24 space-y-4 text-sm">
      <div class="flex items-center justify-between">
        <NuxtLink to="/features/programmes-rewards/loyalty" class="text-sm text-indigo-600">← Back</NuxtLink>
        <h1 class="text-base font-semibold">History</h1>
        <span class="w-14"></span>
      </div>

      <div class="flex gap-2 text-xs">
        <button class="px-3 py-1.5 rounded-full border bg-white">All</button>
        <button class="px-3 py-1.5 rounded-full border bg-white">Earned</button>
        <button class="px-3 py-1.5 rounded-full border bg-white">Redeemed</button>
      </div>

      <section class="bg-white border rounded-xl p-4 space-y-2">
        <div class="flex items-center justify-between rounded-lg border p-3 text-xs"><span>+200 Executive Health+ checkup</span><span class="text-emerald-600">+200</span></div>
        <div class="flex items-center justify-between rounded-lg border p-3 text-xs"><span>-500 $10 lab credit</span><span class="text-rose-600">-500</span></div>
      </section>

      <section class="bg-white border rounded-xl p-4">
        <div class="font-medium mb-2">Vouchers</div>
        <div class="rounded-lg border p-3 text-xs">
          <div>LAB-XXXX • Expires in 30 days</div>
          <div class="text-slate-500">Status: active</div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts"></script>


