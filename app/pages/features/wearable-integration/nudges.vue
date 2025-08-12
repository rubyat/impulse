<template>
  <div class="min-h-screen bg-slate-50 safe-top safe-bottom">
    <main class="mx-auto max-w-sm pt-4 pb-24 space-y-4 text-sm">
      <div class="flex items-center justify-between">
        <NuxtLink to="/features/wearable-integration" class="text-sm text-indigo-600">← Back</NuxtLink>
        <h1 class="text-base font-semibold">Nudges</h1>
        <span class="w-14"></span>
      </div>

      <section class="bg-white border rounded-xl p-4 space-y-2">
        <div class="font-medium">Today’s plan</div>
        <ul class="list-disc pl-5 text-xs text-slate-700 space-y-1">
          <li>Hydrate 2–3 L</li>
          <li>Avoid caffeine after 2pm</li>
          <li>Breathing 4-7-8 (10 min)</li>
          <li>Measure resting HR on waking</li>
          <li>Target sleep 7–8h</li>
        </ul>
      </section>

      <section class="bg-white border rounded-xl p-4 space-y-3">
        <div class="font-medium">Next best actions</div>
        <NuxtLink to="/features/wearable-integration/bookings" class="block rounded-lg border p-3">Book check-up →</NuxtLink>
        <NuxtLink to="/features/wearable-integration/packages" class="block rounded-lg border p-3">Diagnostics bundle (−15%) →</NuxtLink>
        <NuxtLink to="/features/wearable-integration/events" class="text-xs underline">Why this?</NuxtLink>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts"></script>


