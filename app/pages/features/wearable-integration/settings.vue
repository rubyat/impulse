<template>
  <div class="min-h-screen bg-slate-50 safe-top safe-bottom">
    <main class="mx-auto max-w-sm pt-4 pb-24 space-y-4 text-sm">
      <div class="flex items-center justify-between">
        <NuxtLink to="/features/wearable-integration" class="text-sm text-indigo-600">← Back</NuxtLink>
        <h1 class="text-base font-semibold">Settings</h1>
        <span class="w-14"></span>
      </div>

      <section class="bg-white border rounded-xl p-4 space-y-2">
        <div class="font-medium">Notifications</div>
        <label class="flex items-center justify-between"><span>Nudges</span><input type="checkbox" checked></label>
        <label class="flex items-center justify-between"><span>Check-up reminders</span><input type="checkbox" checked></label>
        <label class="flex items-center justify-between"><span>Rewards</span><input type="checkbox"></label>
      </section>

      <section class="bg-white border rounded-xl p-4 space-y-2">
        <div class="font-medium">Privacy & sharing</div>
        <label class="flex items-center justify-between"><span>Allow anonymized analytics</span><input type="checkbox"></label>
      </section>

      <section class="bg-white border rounded-xl p-4 space-y-2">
        <div class="font-medium">Default actions</div>
        <div class="flex gap-2">
          <button class="px-3 py-1.5 rounded-full border bg-white">Prefer tele-visit</button>
          <button class="px-3 py-1.5 rounded-full border bg-white">Prefer in-person</button>
        </div>
      </section>

      <NuxtLink to="/features/wearable-integration" class="inline-block px-3 py-2 rounded-lg bg-indigo-600 text-white">Save</NuxtLink>
    </main>
  </div>
</template>

<script setup lang="ts"></script>


