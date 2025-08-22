<template>
  <div class="min-h-screen bg-slate-50 safe-top safe-bottom">
    <!-- Top bar -->
    <div class="sticky top-0 z-10 bg-white border-b">
      <div class="mx-auto max-w-sm h-14 flex items-center justify-between ">
        <NuxtLink to="/features/ai-triage-nudges" class="text-sm text-indigo-600">← Back</NuxtLink>
        <div class="text-base font-semibold">Patterns</div>
        <div class="w-14" />
      </div>
    </div>
    <main class="mx-auto max-w-sm pt-4 pb-24  space-y-4 text-sm">
      <!-- Hero -->
      <div class="bg-white border rounded-xl p-4">
        <div class="font-medium">Tachycardia + Poor Sleep</div>
        <div class="text-xs text-slate-500">Detected over last 3 days</div>
      </div>

      <!-- Why flagged -->
      <div class="bg-white border rounded-xl p-4 space-y-2">
        <div class="font-medium">Why flagged</div>
        <ul class="list-disc pl-5 text-xs text-slate-700 space-y-1">
          <li>Resting HR > 95 bpm over 3 consecutive days</li>
          <li>Sleep duration < 5h on 2 of 3 days</li>
          <li>Deviations vs baseline exceeded threshold</li>
        </ul>
        <NuxtLink to="/features/ai-triage-nudges/settings" class="text-xs underline text-slate-500">Data source</NuxtLink>
      </div>

      <!-- Charts -->
      <div id="tachycardia-sleep" class="bg-white border rounded-xl p-4">
        <div class="font-medium">HR trend</div>
        <div class="mt-2 h-28 rounded-lg bg-slate-50 border grid place-items-center text-xs text-slate-500">HR chart</div>
      </div>
      <div id="morning-hypertension" class="bg-white border rounded-xl p-4">
        <div class="font-medium">Sleep duration</div>
        <div class="mt-2 h-28 rounded-lg bg-slate-50 border grid place-items-center text-xs text-slate-500">Sleep chart</div>
      </div>

      <!-- CTAs -->
      <div class="grid grid-cols-2 gap-2">
        <NuxtLink to="/features/ai-triage-nudges/advice" class="h-10 rounded-lg border bg-white grid place-items-center">Self-care advice</NuxtLink>
        <NuxtLink to="/features/ai-triage-nudges/televisit" class="h-10 rounded-lg bg-indigo-600 text-white grid place-items-center">Book tele-visit</NuxtLink>
      </div>
    </main>

  </div>
</template>

<script setup lang="ts"></script>


