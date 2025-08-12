<template>
  <div class="min-h-screen bg-gray-50 safe-top safe-bottom">
    <!-- Top bar -->
    <div class="sticky top-0 z-10 bg-white border-b">
      <div class="mx-auto max-w-sm h-14  flex items-center justify-between">
        <NuxtLink to="/features/vitals-lifestyle" class="text-sm text-indigo-600">← Back</NuxtLink>
        <div class="text-base font-semibold">Daily Check-in</div>
        <NuxtLink to="/features/vitals-lifestyle/messages" class="text-sm text-indigo-600">Help</NuxtLink>
      </div>
    </div>
    <div class="mx-auto max-w-sm  pt-4 pb-24 space-y-4 text-sm">
      <!-- Mood row -->
      <div class="bg-white border rounded-xl p-4">
        <div class="font-medium">Mood</div>
        <div class="mt-3 grid grid-cols-5 gap-2 text-xl">
          <button class="h-12 rounded-lg border grid place-items-center">😞</button>
          <button class="h-12 rounded-lg border grid place-items-center">🙁</button>
          <button class="h-12 rounded-lg border grid place-items-center">🙂</button>
          <button class="h-12 rounded-lg border grid place-items-center">😊</button>
          <button class="h-12 rounded-lg border grid place-items-center">😄</button>
        </div>
      </div>

      <!-- PHQ-2 -->
      <div class="bg-white border rounded-xl p-4 space-y-3">
        <div class="font-medium">PHQ-2</div>
        <div>
          <div class="text-slate-700">Little interest or pleasure in doing things?</div>
          <div class="mt-2 grid grid-cols-4 gap-2">
            <button class="px-2 py-2 rounded-lg border text-xs">Not at all</button>
            <button class="px-2 py-2 rounded-lg border text-xs">Several days</button>
            <button class="px-2 py-2 rounded-lg border text-xs">> 1/2 days</button>
            <button class="px-2 py-2 rounded-lg border text-xs">Nearly every day</button>
          </div>
        </div>
        <div>
          <div class="text-slate-700">Feeling down, depressed, or hopeless?</div>
          <div class="mt-2 grid grid-cols-4 gap-2">
            <button class="px-2 py-2 rounded-lg border text-xs">Not at all</button>
            <button class="px-2 py-2 rounded-lg border text-xs">Several days</button>
            <button class="px-2 py-2 rounded-lg border text-xs">> 1/2 days</button>
            <button class="px-2 py-2 rounded-lg border text-xs">Nearly every day</button>
          </div>
        </div>
      </div>

      <!-- Tips -->
      <div class="bg-indigo-50 border border-indigo-200 rounded-xl p-4">
        <div class="font-medium text-indigo-800">Tips</div>
        <ul class="mt-2 list-disc pl-5 text-xs text-indigo-900 space-y-1">
          <li>Short walk outdoors</li>
          <li>Hydrate and stretch</li>
          <li>Reach out to a friend</li>
        </ul>
      </div>

      <NuxtLink to="/features/vitals-lifestyle" class="inline-block px-3 py-2 rounded-lg bg-indigo-600 text-white">Submit</NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts"></script>


