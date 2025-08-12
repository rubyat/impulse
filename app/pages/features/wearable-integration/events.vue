<template>
  <div class="min-h-screen bg-slate-50 safe-top safe-bottom">
    <main class="mx-auto max-w-sm pt-4 pb-24 space-y-4 text-sm">
      <div class="flex items-center justify-between">
        <NuxtLink to="/features/wearable-integration" class="text-sm text-indigo-600">← Back</NuxtLink>
        <h1 class="text-base font-semibold">AI Events</h1>
        <span class="w-14"></span>
      </div>

      <!-- Hero -->
      <section class="bg-white border rounded-xl p-4">
        <div class="font-medium">Tachycardia + Poor Sleep</div>
        <div class="text-xs text-slate-600">Detected over last 3 days</div>
      </section>

      <section id="tachycardia-sleep" class="bg-white border rounded-xl p-4 space-y-2">
        <div class="font-medium">Why flagged</div>
        <ul class="list-disc pl-5 text-xs text-slate-700 space-y-1">
          <li>Resting HR &gt; 95 bpm (3 days)</li>
          <li>Sleep duration &lt; 5h</li>
          <li>Deviation vs baseline ~20%</li>
        </ul>
      </section>

      <section class="bg-white border rounded-xl p-4">
        <div class="font-medium">HR trend</div>
        <div class="mt-2 h-28 rounded-lg bg-slate-50 border grid place-items-center text-xs text-slate-500">HR chart</div>
      </section>
      <section class="bg-white border rounded-xl p-4">
        <div class="font-medium">Sleep duration</div>
        <div class="mt-2 h-28 rounded-lg bg-slate-50 border grid place-items-center text-xs text-slate-500">Sleep chart</div>
      </section>

      <div class="grid grid-cols-2 gap-2">
        <NuxtLink to="/features/wearable-integration/nudges" class="h-10 rounded-lg border grid place-items-center">Self-care advice</NuxtLink>
        <NuxtLink to="/features/wearable-integration/bookings" class="h-10 rounded-lg bg-indigo-600 text-white grid place-items-center">Book tele-visit</NuxtLink>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts"></script>


