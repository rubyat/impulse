<template>
  <div class="min-h-screen bg-slate-50 safe-top safe-bottom">
    <!-- Top bar -->
    <div class="sticky top-0 z-10 bg-white border-b">
      <div class="mx-auto max-w-sm h-14 flex items-center justify-between ">
        <NuxtLink to="/features/health-vault/invoices" class="text-sm text-indigo-600">← Back</NuxtLink>
        <div class="text-base font-semibold">Invoice</div>
        <div class="w-14" />
      </div>
    </div>

    <main class="mx-auto max-w-sm pt-4 pb-24  space-y-4 text-sm">
      <section class="bg-white border rounded-xl p-4 space-y-2">
        <div class="font-medium">Summary</div>
        <div class="grid grid-cols-2 gap-2 text-xs text-slate-700">
          <div><div class="text-slate-500">Number</div><div>INV-001</div></div>
          <div><div class="text-slate-500">Date</div><div>Aug 05, 2025</div></div>
          <div><div class="text-slate-500">Provider</div><div>Popular Diagnostic Center, Dhanmondi</div></div>
          <div><div class="text-slate-500">Amount</div><div>৳12,000</div></div>
        </div>
      </section>

      <div class="grid grid-cols-2 gap-2">
        <button class="h-10 rounded-lg border bg-white">Download invoice</button>
        <NuxtLink to="/features/health-vault/records#invoices" class="h-10 rounded-lg bg-indigo-600 text-white grid place-items-center">View in records</NuxtLink>
      </div>
    </main>


  </div>
</template>

<script setup lang="ts"></script>


