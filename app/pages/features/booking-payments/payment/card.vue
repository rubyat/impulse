<template>
  <div class="min-h-screen bg-slate-50 safe-top safe-bottom">
    <main class="mx-auto max-w-sm pt-4 pb-24 space-y-4 text-sm">
      <div class="flex items-center justify-between">
        <NuxtLink to="/features/booking-payments/checkout" class="text-sm text-indigo-600">← Back</NuxtLink>
        <h1 class="text-base font-semibold">Card Payment</h1>
        <span class="w-14"></span>
      </div>

      <section class="bg-white border rounded-xl p-4 space-y-2">
        <input placeholder="Card number" class="h-10 w-full rounded-lg border "/>
        <input placeholder="Name on card" class="h-10 w-full rounded-lg border "/>
        <div class="grid grid-cols-2 gap-2">
          <input placeholder="MM/YY" class="h-10 w-full rounded-lg border "/>
          <input placeholder="CVV" class="h-10 w-full rounded-lg border "/>
        </div>
      </section>

      <section class="bg-white border rounded-xl p-4 text-sm">
        <div class="flex items-center justify-between"><span>Total</span><span>৳4,500</span></div>
      </section>

      <NuxtLink to="/features/booking-payments/confirmation" class="h-12 rounded-lg bg-indigo-600 text-white grid place-items-center">Pay now</NuxtLink>
    </main>
  </div>
</template>

<script setup lang="ts"></script>


