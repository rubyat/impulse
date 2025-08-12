<template>
  <div class="min-h-screen bg-slate-50 safe-top safe-bottom">
    <main class="mx-auto max-w-sm pt-4 pb-24 space-y-4 text-sm">
      <div class="flex items-center justify-between">
        <NuxtLink to="/features/wearable-integration" class="text-sm text-indigo-600">← Back</NuxtLink>
        <h1 class="text-base font-semibold">Diagnostics</h1>
        <span class="w-14"></span>
      </div>

      <NuxtLink to="/features/wearable-integration/loyalty" class="block bg-white border rounded-xl p-4">
        <div class="font-medium">Cardio Basics <span class="text-emerald-600">−20%</span></div>
        <ul class="list-disc pl-5 text-xs text-slate-600 mt-1">
          <li>ECG</li>
          <li>CBC</li>
          <li>Electrolytes</li>
        </ul>
      </NuxtLink>

      <NuxtLink to="/features/wearable-integration/loyalty" class="block bg-white border rounded-xl p-4">
        <div class="font-medium">Sleep & Stress <span class="text-emerald-600">−10%</span></div>
        <ul class="list-disc pl-5 text-xs text-slate-600 mt-1">
          <li>Home sleep test</li>
          <li>Cortisol AM</li>
        </ul>
      </NuxtLink>

      <div class="text-xs text-slate-600">Earn +2× points with connected device users</div>
    </main>
  </div>
</template>

<script setup lang="ts"></script>


