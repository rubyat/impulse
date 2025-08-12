<template>
  <div class="min-h-screen bg-slate-50 safe-top safe-bottom">
    <main class="mx-auto max-w-sm pt-4 pb-24 space-y-4 text-sm">
      <div class="flex items-center justify-between">
        <NuxtLink to="/features/booking-payments/checkout" class="text-sm text-indigo-600">← Back</NuxtLink>
        <h1 class="text-base font-semibold">Mobile Money</h1>
        <span class="w-14"></span>
      </div>

      <section class="bg-white border rounded-xl p-4 space-y-2">
        <div class="font-medium">Wallet provider</div>
        <select class="h-10 w-full rounded-lg border ">
          <option>bKash</option>
          <option>Nagad</option>
          <option>PayTM</option>
          <option>M-Pesa</option>
        </select>
        <input placeholder="Phone number" class="h-10 w-full rounded-lg border "/>
        <input placeholder="OTP" class="h-10 w-full rounded-lg border "/>
      </section>

      <section class="bg-white border rounded-xl p-4 text-sm">
        <div class="flex items-center justify-between"><span>Total</span><span>$180</span></div>
      </section>

      <NuxtLink to="/features/booking-payments/confirmation" class="h-12 rounded-lg bg-indigo-600 text-white grid place-items-center">Pay now</NuxtLink>
    </main>
  </div>
</template>

<script setup lang="ts"></script>


