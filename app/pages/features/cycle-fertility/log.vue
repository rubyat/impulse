<template>
  <div class="min-h-screen bg-gray-50 safe-top safe-bottom">
    <main class="mx-auto max-w-sm pb-24 pt-4 space-y-4">
      <!-- Tabs (anchors) -->
      <div class="grid grid-cols-3 gap-2">
        <a id="period" href="#period" class="h-10 grid place-items-center rounded-lg bg-indigo-600 text-white text-sm">Period</a>
        <a id="temp" href="#temp" class="h-10 grid place-items-center rounded-lg bg-white border text-sm">Basal temp</a>
        <a id="opk" href="#opk" class="h-10 grid place-items-center rounded-lg bg-white border text-sm">OPK</a>
      </div>

      <!-- Period -->
      <section class="bg-white border rounded-xl p-4" id="period-pane">
        <label class="block text-sm font-medium">Flow</label>
        <div class="mt-2 grid grid-cols-4 gap-2">
          <button class="h-10 rounded-lg border">Spotting</button>
          <button class="h-10 rounded-lg border">Light</button>
          <button class="h-10 rounded-lg border">Medium</button>
          <button class="h-10 rounded-lg border">Heavy</button>
        </div>
        <label class="block text-sm font-medium mt-4">Symptoms</label>
        <div class="mt-2 grid grid-cols-3 gap-2 text-sm">
          <button class="h-10 rounded-lg border">Cramps</button>
          <button class="h-10 rounded-lg border">Headache</button>
          <button class="h-10 rounded-lg border">Fatigue</button>
          <button class="h-10 rounded-lg border">Bloating</button>
          <button class="h-10 rounded-lg border">Back pain</button>
          <button class="h-10 rounded-lg border">Mood</button>
        </div>
        <NuxtLink to="/features/cycle-fertility" class="mt-4 h-12 grid place-items-center rounded-lg bg-indigo-600 text-white">Save</NuxtLink>
      </section>

      <!-- Basal Temp -->
      <section class="bg-white border rounded-xl p-4" id="temp">
        <label class="block text-sm font-medium">Temperature (°C)</label>
        <input type="number" step="0.01" placeholder="e.g., 36.55" class="mt-2 w-full h-12 rounded-lg border px-3" />
        <details class="mt-3">
          <summary class="text-sm text-slate-600">Tips for consistency</summary>
          <div class="text-xs text-slate-500 mt-2">Measure at the same time every morning before getting out of bed.</div>
        </details>
        <NuxtLink to="/features/cycle-fertility" class="mt-4 h-12 grid place-items-center rounded-lg bg-indigo-600 text-white">Save</NuxtLink>
      </section>

      <!-- OPK -->
      <section class="bg-white border rounded-xl p-4" id="opk">
        <label class="block text-sm font-medium">OPK Result</label>
        <div class="mt-2 grid grid-cols-3 gap-2">
          <button class="h-10 rounded-lg border">Negative</button>
          <button class="h-10 rounded-lg border">High</button>
          <button class="h-10 rounded-lg border">Peak</button>
        </div>
        <label class="block text-sm font-medium mt-4">Add photo (optional)</label>
        <div class="mt-2 h-24 rounded-lg border grid place-items-center text-sm text-slate-500">Upload</div>
        <NuxtLink to="/features/cycle-fertility" class="mt-4 h-12 grid place-items-center rounded-lg bg-indigo-600 text-white">Save</NuxtLink>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts"></script>


