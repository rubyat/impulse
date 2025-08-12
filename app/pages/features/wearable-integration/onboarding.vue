<template>
  <div class="min-h-screen bg-slate-50 safe-top safe-bottom">
    <main class="mx-auto max-w-sm pt-4 pb-24 space-y-4 text-sm">
      <div class="flex items-center justify-between">
        <NuxtLink to="/features/wearable-integration" class="text-sm text-indigo-600">Skip</NuxtLink>
        <h1 class="text-base font-semibold">Power your health with your wearable</h1>
        <span class="w-14"></span>
      </div>

      <section class="bg-white border rounded-xl p-4">
        <div class="font-medium">Connect device</div>
        <NuxtLink to="/features/wearable-integration/devices" class="mt-2 inline-block px-3 py-2 rounded-lg border">Open devices</NuxtLink>
      </section>

      <section class="bg-white border rounded-xl p-4">
        <div class="font-medium">Enable nudges</div>
        <div class="text-xs text-slate-600">Personalized self-care based on your data</div>
      </section>

      <section class="bg-white border rounded-xl p-4">
        <div class="font-medium">Earn rewards</div>
        <div class="text-xs text-slate-600">Get points for healthy actions</div>
      </section>

      <NuxtLink to="/features/wearable-integration" class="inline-block px-3 py-2 rounded-lg bg-indigo-600 text-white">Start</NuxtLink>
    </main>
  </div>
</template>

<script setup lang="ts"></script>


