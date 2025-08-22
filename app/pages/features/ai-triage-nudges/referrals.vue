<template>
  <div class="min-h-screen bg-slate-50 safe-top safe-bottom">
    <!-- Top bar -->
    <div class="sticky top-0 z-10 bg-white border-b">
      <div class="mx-auto max-w-sm h-14 flex items-center justify-between ">
        <NuxtLink to="/features/ai-triage-nudges" class="text-sm text-indigo-600">← Back</NuxtLink>
        <div class="text-base font-semibold">Referrals</div>
        <div class="w-14" />
      </div>
    </div>
    <main class="mx-auto max-w-sm pt-4 pb-24  space-y-4 text-sm">
      <NuxtLink to="/features/ai-triage-nudges/booking" class="block bg-white border rounded-xl p-4">In-app appointment →</NuxtLink>
      <NuxtLink to="/features/ai-triage-nudges/televisit" class="block bg-white border rounded-xl p-4">Tele-visit (video) →</NuxtLink>

      <div class="bg-white border rounded-xl p-4 space-y-2">
        <div class="font-medium">Recommended specialties</div>
        <div class="flex items-center justify-between rounded-lg border p-3">
          <div><div class="font-medium">Dr. Ayesha Rahman</div><div class="text-xs text-slate-500">Cardiology • 4.8★</div></div>
          <NuxtLink to="/features/ai-triage-nudges/booking" class="px-3 py-2 rounded-lg border">Book</NuxtLink>
        </div>
        <div class="flex items-center justify-between rounded-lg border p-3">
          <div><div class="font-medium">Dr. Neha S.</div><div class="text-xs text-slate-500">Internal Medicine • 4.9★</div></div>
          <NuxtLink to="/features/ai-triage-nudges/booking" class="px-3 py-2 rounded-lg border">Book</NuxtLink>
        </div>
      </div>

      <ul class="list-disc pl-5 text-xs text-slate-600">
        <li>Pattern indicates sustained elevated HR with sleep deficit</li>
        <li>Rule-based triage recommends evaluation if symptomatic</li>
      </ul>

      <NuxtLink to="/features/ai-triage-nudges/history" class="text-xs underline text-slate-600">View history</NuxtLink>
    </main>


  </div>
</template>

<script setup lang="ts"></script>


