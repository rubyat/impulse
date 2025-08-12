<template>
  <div class="min-h-screen bg-slate-50 safe-top safe-bottom">
    <main class="mx-auto max-w-sm pt-4 pb-24 space-y-4 text-sm">
      <div class="flex items-center justify-between">
        <NuxtLink to="/features/booking-payments" class="text-sm text-indigo-600">← Back</NuxtLink>
        <h1 class="text-base font-semibold">Settings</h1>
        <span class="w-14"></span>
      </div>

      <section class="bg-white border rounded-xl p-4 space-y-2">
        <div class="font-medium">Default payment method</div>
        <div class="flex gap-2">
          <button class="px-3 py-1.5 rounded-full border bg-white">Mobile</button>
          <button class="px-3 py-1.5 rounded-full border bg-white">Card</button>
          <button class="px-3 py-1.5 rounded-full border bg-white">EMI</button>
        </div>
      </section>

      <section class="bg-white border rounded-xl p-4 space-y-2">
        <div class="font-medium">Saved details</div>
        <div class="text-xs text-slate-600">Mobile money: +880•••••••12</div>
        <div class="text-xs text-slate-600">Card: **** **** **** 1234</div>
      </section>

      <NuxtLink to="/features/booking-payments" class="inline-block px-3 py-2 rounded-lg bg-indigo-600 text-white">Save</NuxtLink>
    </main>
  </div>
</template>

<script setup lang="ts"></script>


