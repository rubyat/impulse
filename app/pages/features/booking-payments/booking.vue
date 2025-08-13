<template>
  <div class="min-h-screen bg-slate-50 safe-top safe-bottom">
    <main class="mx-auto max-w-sm pt-4 pb-24 space-y-4 text-sm">
      <div class="flex items-center justify-between">
        <NuxtLink to="/features/booking-payments/providers" class="text-sm text-indigo-600">← Back</NuxtLink>
        <h1 class="text-base font-semibold">Select Slot</h1>
        <NuxtLink to="/features/booking-payments/booking" class="text-sm text-indigo-600">Refresh</NuxtLink>
      </div>

      <div class="text-[11px] text-slate-500">Last updated 2m ago</div>

      <!-- Steps simplified -->
      <div class="flex items-center justify-between text-[11px] text-slate-600">
        <span>Service</span><span>›</span><span>Provider</span><span>›</span><span class="text-indigo-600 font-medium">Slot</span><span>›</span><span>Checkout</span><span>›</span><span>Pay</span>
      </div>

      <!-- Date row -->
      <div class="flex gap-2 text-xs">
        <button class="px-3 py-1.5 rounded-full border bg-white">Today</button>
        <button class="px-3 py-1.5 rounded-full border bg-white">+1</button>
        <button class="px-3 py-1.5 rounded-full border bg-white">+2</button>
      </div>

      <!-- Slot grid with dynamic pricing labels -->
      <section class="bg-white border rounded-xl p-4 space-y-2">
        <div class="grid grid-cols-2 gap-2">
          <button class="h-12 rounded-lg border flex items-center justify-between px-3">
            <span>10:30</span>
            <span class="text-emerald-700 text-xs bg-emerald-100 border border-emerald-200 rounded-full px-2 py-0.5">Off-peak • ৳4,500</span>
          </button>
          <button class="h-12 rounded-lg border flex items-center justify-between px-3">
            <span>11:15</span>
            <span class="text-slate-700 text-xs bg-slate-100 border border-slate-200 rounded-full px-2 py-0.5">Standard • ৳5,000</span>
          </button>
          <button class="h-12 rounded-lg border flex items-center justify-between px-3">
            <span>12:00</span>
            <span class="text-rose-700 text-xs bg-rose-100 border border-rose-200 rounded-full px-2 py-0.5">Peak • ৳5,500</span>
          </button>
          <button class="h-12 rounded-lg border flex items-center justify-between px-3">
            <span>15:30</span>
            <span class="text-emerald-700 text-xs bg-emerald-100 border border-emerald-200 rounded-full px-2 py-0.5">Off-peak • ৳4,500</span>
          </button>
          <button class="h-12 rounded-lg border flex items-center justify-between px-3">
            <span>16:15</span>
            <span class="text-slate-700 text-xs bg-slate-100 border border-slate-200 rounded-full px-2 py-0.5">Standard • ৳5,000</span>
          </button>
        </div>
      </section>

      <!-- Price summary example -->
      <section class="bg-white border rounded-xl p-4 text-sm">
        <div class="flex items-center justify-between"><span>Base</span><span>৳5,000</span></div>
        <div class="flex items-center justify-between text-emerald-700"><span>Tier adj.</span><span>−৳500 (Off-peak)</span></div>
        <div class="mt-2 border-t pt-2 flex items-center justify-between font-medium"><span>Total</span><span>৳4,500</span></div>
      </section>

      <NuxtLink to="/features/booking-payments/checkout" class="h-12 rounded-lg bg-indigo-600 text-white grid place-items-center">Continue to checkout</NuxtLink>
    </main>
  </div>
</template>

<script setup lang="ts"></script>


