<template>
  <div class="min-h-screen bg-slate-50 safe-top safe-bottom">
    <main class="mx-auto max-w-sm pt-4 pb-24 space-y-4 text-sm">
      <div class="flex items-center justify-between">
        <NuxtLink to="/features/wearable-integration" class="text-sm text-indigo-600">← Back</NuxtLink>
        <h1 class="text-base font-semibold">Devices</h1>
        <NuxtLink to="/features/wearable-integration/settings" class="text-sm text-indigo-600">Settings</NuxtLink>
      </div>

      <div class="bg-white border rounded-xl p-4 flex items-center justify-between">
        <div>
          <div class="font-medium">Apple Health / Google Fit</div>
          <div class="text-xs text-slate-500">All vitals & sleep</div>
        </div>
        <button class="px-3 py-2 rounded-lg bg-green-100 text-green-700 border border-green-200">Connected</button>
      </div>

      <div class="bg-white border rounded-xl p-4 flex items-center justify-between">
        <div>
          <div class="font-medium">Fitbit</div>
          <div class="text-xs text-slate-500">HR, SpO₂, sleep</div>
        </div>
        <button class="px-3 py-2 rounded-lg border">Connect</button>
      </div>

      <div class="bg-white border rounded-xl p-4 flex items-center justify-between">
        <div>
          <div class="font-medium">Garmin</div>
          <div class="text-xs text-slate-500">HR, stress, sleep</div>
        </div>
        <button class="px-3 py-2 rounded-lg border">Connect</button>
      </div>

      <div class="bg-white border rounded-xl p-4 flex items-center justify-between">
        <div>
          <div class="font-medium">Oura Ring</div>
          <div class="text-xs text-slate-500">Sleep & readiness</div>
        </div>
        <button class="px-3 py-2 rounded-lg border">Connect</button>
      </div>

      <div class="bg-indigo-50 border border-indigo-200 rounded-xl p-4">
        <div class="font-medium text-indigo-800">Sync preferences</div>
        <div class="mt-2 grid gap-2 text-xs">
          <label class="flex items-center justify-between"><span>Auto-import mornings</span><input type="checkbox" checked></label>
          <label class="flex items-center justify-between"><span>Background sync</span><input type="checkbox" checked></label>
        </div>
      </div>

      <div class="bg-white border rounded-xl p-4">
        <div class="font-medium">Data permissions</div>
        <div class="mt-2 grid gap-2 text-xs">
          <label class="flex items-center justify-between"><span>HR</span><input type="checkbox" checked></label>
          <label class="flex items-center justify-between"><span>Sleep</span><input type="checkbox" checked></label>
          <label class="flex items-center justify-between"><span>Blood pressure</span><input type="checkbox" checked></label>
          <label class="flex items-center justify-between"><span>SpO₂</span><input type="checkbox" checked></label>
          <label class="flex items-center justify-between"><span>Steps</span><input type="checkbox" checked></label>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts"></script>


