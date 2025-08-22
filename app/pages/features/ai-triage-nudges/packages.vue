<template>
  <div class="min-h-screen bg-slate-50 safe-top safe-bottom">
    <!-- Top bar -->
    <div class="sticky top-0 z-10 bg-white border-b">
      <div class="mx-auto max-w-sm h-14 flex items-center justify-between ">
        <NuxtLink to="/features/ai-triage-nudges" class="text-sm text-indigo-600">← Back</NuxtLink>
        <div class="text-base font-semibold">Diagnostics</div>
        <div class="w-14" />
      </div>
    </div>
    <main class="mx-auto max-w-sm pt-4 pb-24  space-y-4 text-sm">
      <div class="bg-white border rounded-xl p-4">
        <div class="font-medium">Cardio Basics <span class="text-emerald-600">−20%</span></div>
        <ul class="list-disc pl-5 text-xs text-slate-600 mt-1">
          <li>ECG</li>
          <li>CBC</li>
          <li>Electrolytes</li>
        </ul>
        <NuxtLink to="/features/ai-triage-nudges/checkout" class="mt-2 inline-block px-3 py-2 rounded-lg bg-indigo-600 text-white">Select</NuxtLink>
      </div>
      <div class="bg-white border rounded-xl p-4">
        <div class="font-medium">Sleep & Stress <span class="text-emerald-600">−10%</span></div>
        <ul class="list-disc pl-5 text-xs text-slate-600 mt-1">
          <li>Sleep study (home)</li>
          <li>Cortisol AM</li>
        </ul>
        <NuxtLink to="/features/ai-triage-nudges/checkout" class="mt-2 inline-block px-3 py-2 rounded-lg bg-indigo-600 text-white">Select</NuxtLink>
      </div>
      <div class="text-xs text-slate-600">Why suggested: Based on your recent pattern (HR ↑ • Sleep ↓).</div>
    </main>


  </div>
</template>

<script setup lang="ts"></script>


