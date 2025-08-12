<template>
  <div class="min-h-screen bg-slate-50 safe-top safe-bottom">
    <main class="mx-auto max-w-sm pt-4 pb-24 space-y-4 text-sm">
      <div class="flex items-center justify-between">
        <NuxtLink to="/features/programmes-rewards/programmes" class="text-sm text-indigo-600">← Back</NuxtLink>
        <h1 class="text-base font-semibold">Programme</h1>
        <span class="w-14"></span>
      </div>

      <!-- Hero -->
      <section class="bg-white border rounded-xl p-4">
        <div class="font-medium">SeniorCare+</div>
        <div class="mt-1">
          <span class="rounded-full border px-2 py-0.5 text-amber-700 bg-amber-50 text-xs">Bronze</span>
        </div>
        <div class="text-xs text-slate-600 mt-1">From $29/mo</div>
      </section>

      <!-- Benefits -->
      <section class="bg-white border rounded-xl p-4">
        <div class="font-medium">Benefits</div>
        <ul class="list-disc pl-5 text-xs text-slate-700 space-y-1 mt-1">
          <li>Annual checkup</li>
          <li>Priority booking</li>
          <li>Concierge support</li>
        </ul>
      </section>

      <!-- Who it's for -->
      <section class="bg-white border rounded-xl p-4">
        <div class="font-medium">Who it’s for</div>
        <ul class="list-disc pl-5 text-xs text-slate-700 space-y-1 mt-1">
          <li>Seniors seeking proactive care</li>
          <li>Caregivers supporting elders</li>
        </ul>
      </section>

      <!-- Perks -->
      <section class="bg-white border rounded-xl p-4">
        <div class="font-medium">Programme perks</div>
        <div class="text-xs text-slate-700 mt-1">1.25× points on diagnostics</div>
      </section>

      <div class="grid grid-cols-2 gap-2">
        <NuxtLink to="/features/programmes-rewards/enroll?programme=seniorcare" class="h-12 rounded-lg bg-indigo-600 text-white grid place-items-center">Enroll now</NuxtLink>
        <NuxtLink to="/features/programmes-rewards/programmes" class="h-12 rounded-lg border grid place-items-center">Compare later</NuxtLink>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts"></script>


