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

    <!-- Bottom tab bar -->
    <div class="fixed bottom-0 left-0 right-0 bg-white border-t safe-bottom">
      <nav class="mx-auto max-w-sm h-16 grid grid-cols-5 text-xs">
        <NuxtLink to="/features/ai-triage-nudges" class="flex flex-col items-center justify-center">🏠<span>Feed</span></NuxtLink>
        <NuxtLink to="/features/ai-triage-nudges/advice" class="flex flex-col items-center justify-center">🎯<span>Advice</span></NuxtLink>
        <NuxtLink to="/features/ai-triage-nudges/referrals" class="flex flex-col items-center justify-center">🩺<span>Referrals</span></NuxtLink>
        <NuxtLink to="/features/ai-triage-nudges/packages" class="flex flex-col items-center justify-center text-indigo-600">💸<span>Offers</span></NuxtLink>
        <NuxtLink to="/features/ai-triage-nudges/messages" class="flex flex-col items-center justify-center">💬<span>Chat</span></NuxtLink>
      </nav>
    </div>
  </div>
</template>

<script setup lang="ts"></script>


