<template>
  <div class="min-h-screen bg-slate-50 safe-top safe-bottom">
    <!-- Top bar -->
    <div class="sticky top-0 z-10 bg-white border-b">
      <div class="mx-auto max-w-sm h-14 flex items-center justify-between ">
        <NuxtLink to="/features/health-vault" class="text-sm text-indigo-600">← Back</NuxtLink>
        <div class="text-base font-semibold">Invoices</div>
        <div class="w-14" />
      </div>
    </div>

    <main class="mx-auto max-w-sm pt-4 pb-24  space-y-4 text-sm">
      <div class="flex gap-2 text-xs">
        <button class="px-3 py-1.5 rounded-full border bg-white">All</button>
        <button class="px-3 py-1.5 rounded-full border bg-white">Unpaid</button>
        <button class="px-3 py-1.5 rounded-full border bg-white">Paid</button>
      </div>

      <NuxtLink to="/features/health-vault/invoice/inv001" class="block rounded-xl border bg-white p-4">
        <div class="flex items-center justify-between">
          <div>
            <div class="font-medium">INV-001</div>
            <div class="text-xs text-slate-500">Aug 05, 2025 • Popular Diagnostic Center, Dhanmondi</div>
          </div>
          <div class="text-right">
            <div class="font-medium">৳12,000</div>
            <div class="text-xs text-emerald-600">Paid</div>
          </div>
        </div>
      </NuxtLink>

      <NuxtLink to="/features/health-vault/invoice/inv002" class="block rounded-xl border bg-white p-4">
        <div class="flex items-center justify-between">
          <div>
            <div class="font-medium">INV-002</div>
            <div class="text-xs text-slate-500">Jul 15, 2025 • Ibn Sina Diagnostic, Dhanmondi</div>
          </div>
          <div class="text-right">
            <div class="font-medium">৳24,000</div>
            <div class="text-xs text-rose-600">Unpaid</div>
          </div>
        </div>
      </NuxtLink>
    </main>


  </div>
</template>

<script setup lang="ts"></script>


