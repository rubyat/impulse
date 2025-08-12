<template>
  <div class="min-h-screen bg-gray-50 safe-top safe-bottom">
    <!-- Top bar -->
    <div class="sticky top-0 z-10 bg-white border-b">
      <div class="mx-auto max-w-sm h-14  flex items-center justify-between">
        <NuxtLink to="/features/vitals-lifestyle" class="text-sm text-indigo-600">← Back</NuxtLink>
        <div class="text-base font-semibold">Devices</div>
        <NuxtLink to="/features/vitals-lifestyle/settings" class="text-sm text-indigo-600">Settings</NuxtLink>
      </div>
    </div>
    <div class="mx-auto max-w-sm  pt-4 pb-24 space-y-3 text-sm">
      <!-- Connectors -->
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

      <!-- Info card -->
      <div class="bg-indigo-50 border border-indigo-200 rounded-xl p-4">
        <div class="font-medium text-indigo-800">Sync preferences</div>
        <NuxtLink to="/features/vitals-lifestyle/settings" class="mt-2 inline-block text-indigo-700 underline">Manage →</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>


