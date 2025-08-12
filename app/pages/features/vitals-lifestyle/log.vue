<template>
  <div class="min-h-screen bg-gray-50 safe-top safe-bottom">
    <!-- Top bar -->
    <div class="sticky top-0 z-10 bg-white border-b">
      <div class="mx-auto max-w-sm h-14  flex items-center justify-between">
        <NuxtLink to="/features/vitals-lifestyle" class="text-sm text-indigo-600">← Back</NuxtLink>
        <div class="text-base font-semibold">Add Reading</div>
        <NuxtLink to="/features/vitals-lifestyle/trends" class="text-sm text-indigo-600">Trends</NuxtLink>
      </div>
    </div>
    <main class="mx-auto max-w-sm pb-24  pt-4 space-y-4 text-sm">
      <!-- Segments -->
      <div class="grid grid-cols-3 gap-2">
        <NuxtLink :to="{ path: '/features/vitals-lifestyle/log', hash: '#hr' }" class="h-10 rounded-lg border bg-white grid place-items-center">HR</NuxtLink>
        <NuxtLink :to="{ path: '/features/vitals-lifestyle/log', hash: '#bp' }" class="h-10 rounded-lg border bg-white grid place-items-center">BP</NuxtLink>
        <NuxtLink :to="{ path: '/features/vitals-lifestyle/log', hash: '#spo2' }" class="h-10 rounded-lg border bg-white grid place-items-center">SpO₂</NuxtLink>
        <NuxtLink :to="{ path: '/features/vitals-lifestyle/log', hash: '#glucose' }" class="h-10 rounded-lg border bg-white grid place-items-center">Glucose</NuxtLink>
        <NuxtLink :to="{ path: '/features/vitals-lifestyle/log', hash: '#weight' }" class="h-10 rounded-lg border bg-white grid place-items-center">Weight</NuxtLink>
        <NuxtLink :to="{ path: '/features/vitals-lifestyle/log', hash: '#sleep' }" class="h-10 rounded-lg border bg-white grid place-items-center">Sleep</NuxtLink>
      </div>

      <!-- Heart rate -->
      <section id="hr" class="bg-white border rounded-xl p-4">
        <div class="font-medium">Heart rate</div>
        <input type="number" placeholder="bpm" class="mt-2 w-full h-10 rounded-lg border px-3" />
        <NuxtLink to="/features/vitals-lifestyle" class="mt-3 inline-block px-3 py-2 rounded-lg bg-indigo-600 text-white">Save</NuxtLink>
      </section>

      <!-- Blood pressure -->
      <section id="bp" class="bg-white border rounded-xl p-4">
        <div class="font-medium">Blood pressure</div>
        <div class="mt-2 grid grid-cols-3 gap-2">
          <input type="number" placeholder="Systolic" class="h-10 rounded-lg border px-3" />
          <input type="number" placeholder="Diastolic" class="h-10 rounded-lg border px-3" />
          <input type="number" placeholder="Pulse (opt)" class="h-10 rounded-lg border px-3" />
        </div>
        <NuxtLink to="/features/vitals-lifestyle" class="mt-3 inline-block px-3 py-2 rounded-lg bg-indigo-600 text-white">Save</NuxtLink>
      </section>

      <!-- SpO2 -->
      <section id="spo2" class="bg-white border rounded-xl p-4">
        <div class="font-medium">O₂ Saturation</div>
        <input type="number" placeholder="%" class="mt-2 w-full h-10 rounded-lg border px-3" />
        <NuxtLink to="/features/vitals-lifestyle" class="mt-3 inline-block px-3 py-2 rounded-lg bg-indigo-600 text-white">Save</NuxtLink>
      </section>

      <!-- Glucose -->
      <section id="glucose" class="bg-white border rounded-xl p-4">
        <div class="font-medium">Glucose</div>
        <div class="mt-2 grid grid-cols-3 gap-2">
          <input type="number" placeholder="Value" class="h-10 rounded-lg border px-3 col-span-2" />
          <select class="h-10 rounded-lg border px-3">
            <option>mg/dL</option>
            <option>mmol/L</option>
          </select>
        </div>
        <div class="mt-2 flex gap-2">
          <button class="px-3 py-2 rounded-lg border">Fasting</button>
          <button class="px-3 py-2 rounded-lg border">Post-meal</button>
        </div>
        <NuxtLink to="/features/vitals-lifestyle" class="mt-3 inline-block px-3 py-2 rounded-lg bg-indigo-600 text-white">Save</NuxtLink>
      </section>

      <!-- Weight -->
      <section id="weight" class="bg-white border rounded-xl p-4">
        <div class="font-medium">Weight</div>
        <div class="mt-2 grid grid-cols-3 gap-2">
          <input type="number" placeholder="Value" class="h-10 rounded-lg border px-3 col-span-2" />
          <select class="h-10 rounded-lg border px-3">
            <option>kg</option>
            <option>lb</option>
          </select>
        </div>
        <NuxtLink to="/features/vitals-lifestyle" class="mt-3 inline-block px-3 py-2 rounded-lg bg-indigo-600 text-white">Save</NuxtLink>
      </section>

      <!-- Sleep -->
      <section id="sleep" class="bg-white border rounded-xl p-4">
        <div class="font-medium">Sleep</div>
        <div class="mt-2 grid grid-cols-2 gap-2">
          <input type="time" class="h-10 rounded-lg border px-3" />
          <input type="time" class="h-10 rounded-lg border px-3" />
        </div>
        <details class="mt-2 text-sm">
          <summary class="cursor-pointer text-slate-600">Details</summary>
          <div class="mt-2 grid grid-cols-2 gap-2">
            <input type="text" placeholder="Deep (h)" class="h-10 rounded-lg border px-3" />
            <input type="text" placeholder="REM (h)" class="h-10 rounded-lg border px-3" />
          </div>
        </details>
        <NuxtLink to="/features/vitals-lifestyle" class="mt-3 inline-block px-3 py-2 rounded-lg bg-indigo-600 text-white">Save</NuxtLink>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts"></script>


