<template>
  <div class="min-h-screen bg-gray-50 safe-top safe-bottom">
    <!-- Top bar -->
    <div class="sticky top-0 z-10 bg-white border-b">
      <div class="mx-auto max-w-sm h-14  flex items-center justify-between">
        <NuxtLink to="/features/vitals-lifestyle" class="text-sm text-indigo-600">← Back</NuxtLink>
        <div class="text-base font-semibold">Medication</div>
        <div class="w-14" />
      </div>
    </div>
    <div class="mx-auto max-w-sm  pt-4 pb-24 space-y-4 text-sm">
      <!-- Existing meds -->
      <div class="bg-white border rounded-xl p-4">
        <div class="font-medium">Metformin 500 mg</div>
        <div class="text-xs text-slate-500">08:00 • Every morning</div>
        <div class="mt-3 flex gap-2">
          <button class="px-3 py-2 rounded-lg bg-indigo-600 text-white">Taken</button>
          <button class="px-3 py-2 rounded-lg border">Snooze</button>
        </div>
      </div>

      <div class="bg-white border rounded-xl p-4">
        <div class="font-medium">Atorvastatin 20 mg</div>
        <div class="text-xs text-slate-500">21:00 • Daily</div>
        <div class="mt-3 flex gap-2">
          <button class="px-3 py-2 rounded-lg bg-indigo-600 text-white">Taken</button>
          <button class="px-3 py-2 rounded-lg border">Snooze</button>
        </div>
      </div>

      <!-- Add reminder form -->
      <div class="bg-white border rounded-xl p-4 space-y-2">
        <div class="font-medium">Add reminder</div>
        <input type="text" placeholder="Medicine name" class="h-10 w-full rounded-lg border px-3" />
        <input type="time" class="h-10 w-full rounded-lg border px-3" />
        <select class="h-10 w-full rounded-lg border px-3">
          <option>Daily</option>
          <option>Weekdays</option>
          <option>Weekly</option>
        </select>
        <NuxtLink to="/features/vitals-lifestyle" class="mt-2 inline-block px-3 py-2 rounded-lg bg-indigo-600 text-white">Save</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>


