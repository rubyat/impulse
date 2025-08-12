<template>
  <div class="min-h-screen bg-slate-50 safe-top safe-bottom">
    <main class="mx-auto max-w-sm pt-4 pb-24 space-y-4 text-sm">
      <div class="flex items-center justify-between">
        <NuxtLink to="/features/wearable-integration" class="text-sm text-indigo-600">← Back</NuxtLink>
        <h1 class="text-base font-semibold">Book Check-up</h1>
        <span class="w-14"></span>
      </div>

      <section class="bg-white border rounded-xl p-4">
        <div class="font-medium">Visit type</div>
        <div class="mt-2 flex gap-2 text-xs">
          <button class="px-3 py-1.5 rounded-full border bg-white">Video</button>
          <button class="px-3 py-1.5 rounded-full border bg-white">In-person</button>
        </div>
      </section>

      <div class="bg-white border rounded-xl p-4 flex items-center justify-between">
        <div>
          <div class="font-medium">Cardiology</div>
          <div class="text-xs text-slate-500">Center A</div>
        </div>
        <button class="px-3 py-2 rounded-lg border">Select</button>
      </div>
      <div class="bg-white border rounded-xl p-4 flex items-center justify-between">
        <div>
          <div class="font-medium">Internal Medicine</div>
          <div class="text-xs text-slate-500">Center B</div>
        </div>
        <button class="px-3 py-2 rounded-lg border">Select</button>
      </div>

      <section class="bg-white border rounded-xl p-4">
        <div class="font-medium">Pick a time</div>
        <div class="mt-2 grid grid-cols-3 gap-2">
          <button class="h-10 rounded-lg border">10:30</button>
          <button class="h-10 rounded-lg border">11:15</button>
          <button class="h-10 rounded-lg border">12:00</button>
          <button class="h-10 rounded-lg border">15:30</button>
          <button class="h-10 rounded-lg border">16:15</button>
        </div>
      </section>

      <NuxtLink to="/features/wearable-integration/packages" class="h-12 rounded-lg bg-indigo-600 text-white grid place-items-center">Continue</NuxtLink>
    </main>
  </div>
</template>

<script setup lang="ts"></script>


