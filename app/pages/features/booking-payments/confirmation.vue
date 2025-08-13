<template>
  <div class="min-h-screen bg-slate-50 safe-top safe-bottom">
    <main class="mx-auto max-w-sm pt-4 pb-24 space-y-4 text-sm">
      <div class="flex items-center justify-between">
        <NuxtLink to="/features/booking-payments" class="text-sm text-indigo-600">← Back</NuxtLink>
        <h1 class="text-base font-semibold">Success</h1>
        <span class="w-14"></span>
      </div>

      <div class="bg-white border rounded-xl p-4 text-center space-y-2">
        <div class="text-3xl">✅</div>
        <div class="font-medium">Booking confirmed</div>
        <div class="text-xs text-slate-600">IVF Consultation • Dhanmondi, Dhaka • 10:30 Off-peak • Mobile Money</div>
        <div class="font-medium">Total ৳4,500</div>
      </div>

      <div class="grid grid-cols-2 gap-2">
        <NuxtLink to="/features/booking-payments/orders" class="h-12 rounded-lg border grid place-items-center">View orders</NuxtLink>
        <NuxtLink to="/features/booking-payments/services" class="h-12 rounded-lg bg-indigo-600 text-white grid place-items-center">Book another</NuxtLink>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts"></script>


