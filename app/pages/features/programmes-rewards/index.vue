<template>
  <div class="min-h-screen bg-slate-50 safe-top safe-bottom">
    <main class="mx-auto max-w-sm pt-4 pb-24 space-y-4 text-sm">
      <div class="flex items-center justify-between">
        <h1 class="text-base font-semibold">Rewards+</h1>
        <NuxtLink to="/features/programmes-rewards/help" class="text-sm text-indigo-600">Help</NuxtLink>
      </div>

      <!-- Search -->
      <div>
        <input placeholder="Search" class="w-full h-10 rounded-full border px-4 text-sm" />
      </div>

      <!-- My Memberships -->
      <NuxtLink to="/features/programmes-rewards/membership" class="block bg-white border rounded-xl p-4">
        <div class="font-medium">My Memberships</div>
        <div class="text-xs text-slate-600">2 active programmes</div>
      </NuxtLink>

      <!-- Loyalty snapshot -->
      <section class="bg-white border rounded-xl p-4">
        <div class="font-medium">Loyalty snapshot</div>
        <div class="mt-1 text-sm"><span class="rounded-full border px-2 py-0.5 text-indigo-700 bg-indigo-50">Gold</span> 2,450 pts</div>
        <NuxtLink to="/features/programmes-rewards/loyalty#earn" class="mt-2 inline-block text-xs underline">How to earn</NuxtLink>
      </section>

      <!-- Programmes grid -->
      <section class="bg-white border rounded-xl p-4 space-y-2">
        <div class="font-medium">Programmes</div>
        <NuxtLink to="/features/programmes-rewards/programme/seniorcare" class="block rounded-lg border p-3">
          <div class="font-medium">SeniorCare+</div>
          <div class="text-xs text-slate-500">From ৳2,900/mo • Cancel anytime</div>
        </NuxtLink>
        <NuxtLink to="/features/programmes-rewards/programme/executive" class="block rounded-lg border p-3">
          <div class="font-medium">Executive Health+</div>
          <div class="text-xs text-slate-500">From ৳4,900/mo • Cancel anytime</div>
        </NuxtLink>
        <NuxtLink to="/features/programmes-rewards/programme/maternity" class="block rounded-lg border p-3">
          <div class="font-medium">Maternity+</div>
          <div class="text-xs text-slate-500">From ৳3,900/mo • Cancel anytime</div>
        </NuxtLink>
      </section>

      <!-- Corporate access -->
      <NuxtLink to="/features/programmes-rewards/corp" class="block bg-white border rounded-xl p-4">
        <div class="font-medium">Corporate access</div>
        <div class="text-xs text-slate-600">Enter corporate code to unlock benefits</div>
      </NuxtLink>

      <!-- Featured rewards -->
      <NuxtLink to="/features/programmes-rewards/rewards" class="block bg-white border rounded-xl p-4">
        <div class="font-medium">Featured rewards</div>
        <div class="text-xs text-slate-600">See catalog</div>
      </NuxtLink>
    </main>
  </div>
</template>

<script setup lang="ts"></script>


