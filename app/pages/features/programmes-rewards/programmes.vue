<template>
  <div class="min-h-screen bg-slate-50 safe-top safe-bottom">
    <main class="mx-auto max-w-sm pt-4 pb-24 space-y-4 text-sm">
      <div class="flex items-center justify-between">
        <NuxtLink to="/features/programmes-rewards" class="text-sm text-indigo-600">← Back</NuxtLink>
        <h1 class="text-base font-semibold">Programmes</h1>
        <span class="w-14"></span>
      </div>

      <div class="flex gap-2 text-xs">
        <button class="px-3 py-1.5 rounded-full border bg-white">All</button>
        <button class="px-3 py-1.5 rounded-full border bg-white">SeniorCare+</button>
        <button class="px-3 py-1.5 rounded-full border bg-white">Executive Health+</button>
        <button class="px-3 py-1.5 rounded-full border bg-white">Maternity+</button>
      </div>

      <NuxtLink to="/features/programmes-rewards/programme/seniorcare" class="block rounded-xl border bg-white p-4">
        <div class="font-medium">SeniorCare+</div>
        <div class="text-xs text-slate-500">From $29/mo • Cancel anytime</div>
      </NuxtLink>
      <NuxtLink to="/features/programmes-rewards/programme/executive" class="block rounded-xl border bg-white p-4">
        <div class="font-medium">Executive Health+</div>
        <div class="text-xs text-slate-500">From $49/mo • Cancel anytime</div>
      </NuxtLink>
      <NuxtLink to="/features/programmes-rewards/programme/maternity" class="block rounded-xl border bg-white p-4">
        <div class="font-medium">Maternity+</div>
        <div class="text-xs text-slate-500">From $39/mo • Cancel anytime</div>
      </NuxtLink>
    </main>
  </div>
</template>

<script setup lang="ts"></script>


