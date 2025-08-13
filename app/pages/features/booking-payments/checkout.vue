<template>
  <div class="min-h-screen bg-slate-50 safe-top safe-bottom">
    <main class="mx-auto max-w-sm pt-4 pb-24 space-y-4 text-sm">
      <div class="flex items-center justify-between">
        <NuxtLink to="/features/booking-payments/booking" class="text-sm text-indigo-600">← Back</NuxtLink>
        <h1 class="text-base font-semibold">Checkout</h1>
        <span class="w-14"></span>
      </div>

      <div class="flex items-center justify-between text-[11px] text-slate-600">
        <span>Service</span><span>›</span><span>Provider</span><span>›</span><span>Slot</span><span>›</span><span class="text-indigo-600 font-medium">Checkout</span><span>›</span><span>Pay</span>
      </div>

      <section class="bg-white border rounded-xl p-4 space-y-2">
        <div class="font-medium">Order summary</div>
        <div class="flex items-center justify-between text-sm"><span>IVF Consultation</span><span>৳5,000</span></div>
        <div class="flex items-center justify-between text-sm text-emerald-700"><span>Off-peak adjustment</span><span>−৳500</span></div>
        <div class="flex items-center justify-between text-sm"><span>Total</span><span>৳4,500</span></div>
      </section>

      <section class="bg-white border rounded-xl p-4 space-y-2">
        <div class="font-medium">Discount</div>
        <div class="flex gap-2">
          <input placeholder="Code" class="h-10 w-full rounded-lg border "/>
          <button class="px-3 rounded-lg border">Apply</button>
        </div>
      </section>

      <section class="bg-white border rounded-xl p-4 space-y-2">
        <div class="font-medium">Payment methods</div>
        <NuxtLink to="/features/booking-payments/payment/mobile-money" class="block rounded-lg border p-3">Mobile Money</NuxtLink>
        <NuxtLink to="/features/booking-payments/payment/card" class="block rounded-lg border p-3">Card</NuxtLink>
        <NuxtLink to="/features/booking-payments/payment/emi" class="block rounded-lg border p-3">EMI</NuxtLink>
        <div class="text-[11px] text-slate-500">Secure payments • PCI DSS (visual only)</div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts"></script>


