<template>
  <div class="min-h-screen bg-gray-50 safe-top safe-bottom">
    <!-- Top bar -->
    <div class="sticky top-0 z-10 bg-white border-b">
      <div class="mx-auto max-w-sm h-14  flex items-center justify-between">
        <NuxtLink to="/features/vitals-lifestyle" class="text-sm text-indigo-600">← Back</NuxtLink>
        <div class="text-base font-semibold">Settings</div>
        <div class="w-14" />
      </div>
    </div>
    <div class="mx-auto max-w-sm  pt-4 pb-24 space-y-4 text-sm">
      <div class="bg-white border rounded-xl p-4 space-y-2">
        <div class="font-medium">Units</div>
        <div class="grid grid-cols-2 gap-2">
          <label class="flex items-center gap-2"><input type="radio" name="weight" checked> <span>kg</span></label>
          <label class="flex items-center gap-2"><input type="radio" name="weight"> <span>lb</span></label>
        </div>
      </div>

      <div class="bg-white border rounded-xl p-4 space-y-2">
        <div class="font-medium">Notifications</div>
        <label class="flex items-center justify-between">
          <span>Medication reminders</span>
          <input type="checkbox" checked>
        </label>
        <label class="flex items-center justify-between">
          <span>Abnormal vitals</span>
          <input type="checkbox" checked>
        </label>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>


