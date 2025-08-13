<template>
  <div class="min-h-screen bg-slate-50 safe-top safe-bottom">
    <main class="mx-auto max-w-sm pt-4 pb-24 space-y-4 text-sm">
      <div class="flex items-center justify-between">
        <NuxtLink to="/features/booking-payments" class="text-sm text-indigo-600">Skip</NuxtLink>
        <h1 class="text-base font-semibold">Fast booking & secure payments</h1>
        <span class="w-14"></span>
      </div>

      <section class="bg-white border rounded-xl p-4">
        <div class="font-medium">Set currency</div>
        <div class="mt-2 flex gap-2 text-xs">
          <button class="px-3 py-1.5 rounded-full border bg-white">BDT</button>
          <button class="px-3 py-1.5 rounded-full border bg-white">USD</button>
          <button class="px-3 py-1.5 rounded-full border bg-white">EUR</button>
        </div>
      </section>

      <section class="bg-white border rounded-xl p-4">
        <div class="font-medium">Default payment method</div>
        <div class="mt-2 flex gap-2 text-xs">
          <button class="px-3 py-1.5 rounded-full border bg-white">Mobile</button>
          <button class="px-3 py-1.5 rounded-full border bg-white">Card</button>
          <button class="px-3 py-1.5 rounded-full border bg-white">EMI</button>
        </div>
      </section>

      <NuxtLink to="/features/booking-payments" class="inline-block px-3 py-2 rounded-lg bg-indigo-600 text-white">Continue</NuxtLink>
    </main>
  </div>
</template>

<script setup lang="ts"></script>


