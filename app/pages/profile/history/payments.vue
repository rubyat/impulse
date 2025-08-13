<template>
  <div class="mx-auto max-w-md px-4 pt-4 pb-24 bg-slate-50 min-h-screen">
    <div class="sticky top-0 z-10 bg-slate-50/80 backdrop-blur border-b border-slate-200">
      <div class="h-14 flex items-center">
        <NuxtLink to="/profile" class="text-xs text-slate-600">← Back</NuxtLink>
        <h1 class="text-sm font-semibold text-slate-900 mx-auto">Payment History</h1>
        <div class="w-10" />
      </div>
    </div>

    <div class="space-y-4 pt-3">
      <div class="flex gap-2 text-xs">
        <button class="px-3 py-1 border rounded-full">All</button>
        <button class="px-3 py-1 border rounded-full">Paid</button>
        <button class="px-3 py-1 border rounded-full">Refunded</button>
      </div>

      <div class="bg-white border rounded-xl divide-y">
        <div class="flex items-center justify-between p-4">
          <div>
            <div class="text-sm font-medium">৳5,500.00</div>
            <div class="text-xs text-slate-500">Card •••• 4242 (BRAC Bank Visa) · 01 May 2024</div>
          </div>
          <span class="text-xs text-emerald-600">Paid</span>
        </div>
        <div class="flex items-center justify-between p-4">
          <div>
            <div class="text-sm font-medium">৳1,800.00</div>
            <div class="text-xs text-slate-500">bKash •••• 7788 · 11 Apr 2024</div>
          </div>
          <span class="text-xs text-rose-600">Refunded</span>
        </div>
        <div class="flex items-center justify-between p-4">
          <div>
            <div class="text-sm font-medium">৳3,200.00</div>
            <div class="text-xs text-slate-500">Nagad •••• 3322 · 20 Mar 2024</div>
          </div>
          <span class="text-xs text-emerald-600">Paid</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({ title: 'Payments – Profile+' })
</script>


