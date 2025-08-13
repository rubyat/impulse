<template>
  <div class="min-h-screen bg-slate-50 safe-top safe-bottom">
    <main class="mx-auto max-w-sm pt-4 pb-24 space-y-4 text-sm">
      <div class="flex items-center justify-between">
        <NuxtLink to="/features/programmes-rewards" class="text-sm text-indigo-600">← Back</NuxtLink>
        <h1 class="text-base font-semibold">Help</h1>
        <span class="w-14"></span>
      </div>

      <section class="bg-white border rounded-xl p-4">
        <details>
          <summary class="cursor-pointer">How to enroll?</summary>
          <div class="mt-2 text-xs text-slate-600">Choose a programme and confirm on the Enroll page.</div>
        </details>
        <details class="mt-2">
          <summary class="cursor-pointer">How do tiers work?</summary>
          <div class="mt-2 text-xs text-slate-600">Points unlock Bronze → Silver → Gold → Platinum.</div>
        </details>
        <details class="mt-2">
          <summary class="cursor-pointer">Corporate codes</summary>
          <div class="mt-2 text-xs text-slate-600">Apply a code on Corporate Access.</div>
        </details>
        <details class="mt-2">
          <summary class="cursor-pointer">Redeeming rewards</summary>
          <div class="mt-2 text-xs text-slate-600">Go to Rewards, pick an item, and redeem.</div>
        </details>
      </section>

      <section class="bg-white border rounded-xl p-4">
        <div class="font-medium">Contact</div>
        <div class="text-xs text-slate-600">Email: support@impulse.bd</div>
        <div class="text-xs text-slate-600">Phone: +880 9612-000000</div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts"></script>


