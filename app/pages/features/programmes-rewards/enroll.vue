<template>
  <div class="min-h-screen bg-slate-50 safe-top safe-bottom">
    <main class="mx-auto max-w-sm pt-4 pb-24 space-y-4 text-sm">
      <div class="flex items-center justify-between">
        <NuxtLink to="/features/programmes-rewards/programmes" class="text-sm text-indigo-600">← Back</NuxtLink>
        <h1 class="text-base font-semibold">Enroll</h1>
        <span class="w-14"></span>
      </div>

      <section class="bg-white border rounded-xl p-4 space-y-2">
        <div>Profile ✓</div>
        <div>Eligibility ✓</div>
        <div>Payment method: saved (demo)</div>
      </section>

      <section class="bg-white border rounded-xl p-4">
        <div class="font-medium">Confirmation</div>
        <div class="text-xs text-slate-600">You’re enrolling in SeniorCare+. Start date: today. Billing: monthly.</div>
      </section>

      <NuxtLink to="/features/programmes-rewards/membership" class="h-12 rounded-lg bg-indigo-600 text-white grid place-items-center">Confirm enrollment</NuxtLink>
    </main>
  </div>
</template>

<script setup lang="ts"></script>


