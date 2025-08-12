<template>
  <div class="min-h-screen bg-slate-50 safe-top safe-bottom">
    <main class="mx-auto max-w-sm pt-4 pb-24 space-y-4 text-sm">
      <div class="flex items-center justify-between">
        <NuxtLink to="/features/booking-payments" class="text-sm text-indigo-600">← Back</NuxtLink>
        <h1 class="text-base font-semibold">Support</h1>
        <span class="w-14"></span>
      </div>

      <section class="bg-white border rounded-xl p-4">
        <details>
          <summary class="cursor-pointer">How to reschedule?</summary>
          <div class="mt-2 text-xs text-slate-600">Contact the provider at least 24h in advance.</div>
        </details>
        <details class="mt-2">
          <summary class="cursor-pointer">Refund policy</summary>
          <div class="mt-2 text-xs text-slate-600">Refunds depend on provider policy.</div>
        </details>
        <details class="mt-2">
          <summary class="cursor-pointer">EMI questions</summary>
          <div class="mt-2 text-xs text-slate-600">Check your bank’s terms for EMI eligibility.</div>
        </details>
        <details class="mt-2">
          <summary class="cursor-pointer">Mobile money issues</summary>
          <div class="mt-2 text-xs text-slate-600">Ensure correct number and sufficient balance.</div>
        </details>
      </section>

      <section class="bg-white border rounded-xl p-4">
        <div class="font-medium">Contact</div>
        <div class="text-xs text-slate-600">Email: support@example.com</div>
        <div class="text-xs text-slate-600">Phone: (000) 000-0000</div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts"></script>


