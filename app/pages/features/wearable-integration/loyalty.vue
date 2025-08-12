<template>
  <div class="min-h-screen bg-slate-50 safe-top safe-bottom">
    <main class="mx-auto max-w-sm pt-4 pb-24 space-y-4 text-sm">
      <div class="flex items-center justify-between">
        <NuxtLink to="/features/wearable-integration" class="text-sm text-indigo-600">← Back</NuxtLink>
        <h1 class="text-base font-semibold">Rewards</h1>
        <span class="w-14"></span>
      </div>

      <section class="bg-white border rounded-xl p-4">
        <div class="font-medium">Points</div>
        <div class="mt-1 text-sm"><span class="rounded-full border px-2 py-0.5 text-indigo-700 bg-indigo-50">Gold</span> 2,450 pts</div>
        <div class="mt-3 h-2 rounded-full bg-slate-200"><div class="h-2 rounded-full bg-indigo-500" style="width: 65%"></div></div>
        <div class="text-[11px] text-slate-600 mt-1">Next tier at 3,750 pts</div>
      </section>

      <section class="bg-white border rounded-xl p-4">
        <div class="font-medium">Tier benefits</div>
        <ul class="mt-1 list-disc pl-5 text-xs text-slate-700 space-y-1">
          <li>Priority booking</li>
          <li>+10% points on diagnostics</li>
          <li>Exclusive offers</li>
        </ul>
      </section>

      <section class="bg-white border rounded-xl p-4">
        <div class="font-medium">Ways to earn</div>
        <ul class="mt-1 list-disc pl-5 text-xs text-slate-700 space-y-1">
          <li>Connect device</li>
          <li>Book check-up</li>
          <li>Complete diagnostics</li>
          <li>Leave a review</li>
          <li>Refer a friend</li>
        </ul>
      </section>

      <NuxtLink to="/features/wearable-integration/rewards" class="block rounded-xl border bg-white p-4">Browse redeemables →</NuxtLink>
      <div class="grid grid-cols-2 gap-2">
        <NuxtLink to="/features/wearable-integration/reviews" class="h-12 rounded-lg border grid place-items-center">Leave a review</NuxtLink>
        <NuxtLink to="/features/wearable-integration/referrals" class="h-12 rounded-lg border grid place-items-center">Invite a friend</NuxtLink>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts"></script>


