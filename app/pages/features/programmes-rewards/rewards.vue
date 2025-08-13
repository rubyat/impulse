<template>
  <div class="min-h-screen bg-slate-50 safe-top safe-bottom">
    <main class="mx-auto max-w-sm pt-4 pb-24 space-y-4 text-sm">
      <div class="flex items-center justify-between">
        <NuxtLink to="/features/programmes-rewards" class="text-sm text-indigo-600">← Back</NuxtLink>
        <h1 class="text-base font-semibold">Rewards</h1>
        <span class="w-14"></span>
      </div>

      <div class="flex gap-2 text-xs">
        <button class="px-3 py-1.5 rounded-full border bg-white">All</button>
        <button class="px-3 py-1.5 rounded-full border bg-white">&lt; 500 pts</button>
        <button class="px-3 py-1.5 rounded-full border bg-white">Hospital</button>
        <button class="px-3 py-1.5 rounded-full border bg-white">Partners</button>
      </div>

      <NuxtLink to="/features/programmes-rewards/redeem?rewardId=lab10" class="block rounded-xl border bg-white p-4">
        <div class="font-medium">৳1,000 lab credit</div>
        <div class="text-xs text-slate-600">500 pts</div>
      </NuxtLink>
      <NuxtLink to="/features/programmes-rewards/redeem?rewardId=consult10" class="block rounded-xl border bg-white p-4">
        <div class="font-medium">Consult fee −10%</div>
        <div class="text-xs text-slate-600">800 pts</div>
      </NuxtLink>
    </main>
  </div>
</template>

<script setup lang="ts"></script>


