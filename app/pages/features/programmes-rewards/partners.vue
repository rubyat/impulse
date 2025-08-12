<template>
  <div class="min-h-screen bg-slate-50 safe-top safe-bottom">
    <main class="mx-auto max-w-sm pt-4 pb-24 space-y-4 text-sm">
      <div class="flex items-center justify-between">
        <NuxtLink to="/features/programmes-rewards" class="text-sm text-indigo-600">← Back</NuxtLink>
        <h1 class="text-base font-semibold">Partners</h1>
        <span class="w-14"></span>
      </div>

      <NuxtLink to="/features/programmes-rewards/rewards" class="block rounded-xl border bg-white p-4">
        <div class="font-medium">Lab Network</div>
        <div class="text-xs text-slate-500">−10% on labs</div>
      </NuxtLink>
      <NuxtLink to="/features/programmes-rewards/rewards" class="block rounded-xl border bg-white p-4">
        <div class="font-medium">Imaging Center</div>
        <div class="text-xs text-slate-500">−10% on imaging</div>
      </NuxtLink>
      <NuxtLink to="/features/programmes-rewards/rewards" class="block rounded-xl border bg-white p-4">
        <div class="font-medium">Pharmacy</div>
        <div class="text-xs text-slate-500">−5% on medicines</div>
      </NuxtLink>
    </main>
  </div>
</template>

<script setup lang="ts"></script>


