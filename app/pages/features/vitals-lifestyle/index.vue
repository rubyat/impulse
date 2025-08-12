<template>
  <div class="min-h-screen bg-gray-50 safe-top safe-bottom">
    <!-- Top bar -->
    <div class="sticky top-0 z-10 bg-white border-b">
      <div class="mx-auto max-w-sm h-14 flex items-center justify-between">
        <div class="text-base font-semibold">Vitals+</div>
        <div class="flex items-center gap-4 text-xl">
          <NuxtLink to="/features/vitals-lifestyle/alerts" aria-label="Alerts">🔔</NuxtLink>
          <NuxtLink to="/features/vitals-lifestyle/messages" aria-label="Messages">💬</NuxtLink>
        </div>
      </div>
    </div>
    <main class="mx-auto max-w-sm pb-24 space-y-4 pt-4 ">
      <!-- Snapshot -->
      <section class="bg-white rounded-xl shadow-sm border border-slate-200 p-4">
        <div class="flex items-center justify-between mb-2">
          <h2 class="text-sm font-semibold text-slate-700">Today’s snapshot</h2>
          <NuxtLink to="/features/vitals-lifestyle/trends" class="text-xs text-indigo-600">Trends →</NuxtLink>
        </div>
        <div class="grid grid-cols-3 gap-2 text-sm">
          <NuxtLink :to="{ path: '/features/vitals-lifestyle/log', hash: '#hr' }" class="p-3 rounded-lg border bg-slate-50">
            <div class="text-xs text-slate-500">Heart rate</div>
            <div class="text-lg font-semibold">72</div>
            <div class="text-[11px] text-slate-500">bpm</div>
          </NuxtLink>
          <NuxtLink :to="{ path: '/features/vitals-lifestyle/log', hash: '#bp' }" class="p-3 rounded-lg border bg-slate-50">
            <div class="text-xs text-slate-500">Blood pressure</div>
            <div class="text-lg font-semibold">118/76</div>
            <div class="text-[11px] text-slate-500">mmHg</div>
          </NuxtLink>
          <NuxtLink :to="{ path: '/features/vitals-lifestyle/log', hash: '#spo2' }" class="p-3 rounded-lg border bg-slate-50">
            <div class="text-xs text-slate-500">O₂ Sat</div>
            <div class="text-lg font-semibold">98%</div>
            <div class="text-[11px] text-slate-500">SpO₂</div>
          </NuxtLink>
          <NuxtLink :to="{ path: '/features/vitals-lifestyle/log', hash: '#glucose' }" class="p-3 rounded-lg border bg-slate-50">
            <div class="text-xs text-slate-500">Glucose</div>
            <div class="text-lg font-semibold">96</div>
            <div class="text-[11px] text-slate-500">mg/dL (fasting)</div>
          </NuxtLink>
          <NuxtLink :to="{ path: '/features/vitals-lifestyle/log', hash: '#weight' }" class="p-3 rounded-lg border bg-slate-50">
            <div class="text-xs text-slate-500">Weight</div>
            <div class="text-lg font-semibold">62.3</div>
            <div class="text-[11px] text-slate-500">kg</div>
          </NuxtLink>
          <NuxtLink :to="{ path: '/features/vitals-lifestyle/log', hash: '#sleep' }" class="p-3 rounded-lg border bg-slate-50">
            <div class="text-xs text-slate-500">Sleep</div>
            <div class="text-lg font-semibold">7h 35m</div>
            <div class="text-[11px] text-slate-500">last night</div>
          </NuxtLink>
        </div>
        <NuxtLink to="/features/vitals-lifestyle/log" class="mt-3 inline-block text-indigo-600 text-xs underline">Add a reading</NuxtLink>
      </section>

      <!-- Reminders -->
      <section class="bg-white rounded-xl border border-slate-200 p-4">
        <div class="flex items-center justify-between mb-2">
          <h2 class="text-sm font-semibold text-slate-700">Next medication</h2>
          <NuxtLink to="/features/vitals-lifestyle/meds" class="text-xs text-indigo-600">Manage →</NuxtLink>
        </div>
        <div class="flex items-center justify-between text-sm">
          <div>
            <div class="font-medium">Metformin 500 mg</div>
            <div class="text-slate-500 text-xs">With food • Every morning</div>
          </div>
          <NuxtLink to="/features/vitals-lifestyle/meds" class="px-3 py-2 rounded-lg bg-indigo-600 text-white text-xs">Mark taken</NuxtLink>
        </div>
      </section>

      <!-- Mental wellbeing -->
      <section class="bg-white rounded-xl border border-slate-200 p-4">
        <div class="flex items-center justify-between mb-2">
          <h2 class="text-sm font-semibold text-slate-700">Mental wellbeing</h2>
          <NuxtLink to="/features/vitals-lifestyle/checkin" class="text-xs text-indigo-600">Daily check-in →</NuxtLink>
        </div>
        <div class="flex items-center gap-3">
          <div class="text-2xl">🙂</div>
          <div class="text-sm">You logged “Okay” 2 days in a row.</div>
        </div>
      </section>

      <!-- Wearables -->
      <section class="bg-indigo-50 border border-indigo-200 rounded-xl p-4">
        <div class="flex items-center gap-2 text-indigo-800">
          <span>⌚</span>
          <p class="text-sm font-semibold">Connect your wearable for auto-sync</p>
        </div>
        <div class="mt-3 flex gap-2">
          <NuxtLink to="/features/vitals-lifestyle/devices" class="px-3 py-2 rounded-lg bg-white border border-indigo-200 text-indigo-700 text-sm">Connect</NuxtLink>
          <NuxtLink to="/features/vitals-lifestyle/trends" class="px-3 py-2 rounded-lg bg-indigo-600 text-white text-sm">View trends</NuxtLink>
        </div>
      </section>

      <!-- Quick Actions -->
      <section class="grid grid-cols-3 gap-2">
        <NuxtLink :to="{ path: '/features/vitals-lifestyle/log', hash: '#bp' }" class="h-12 rounded-lg bg-white border grid place-items-center text-sm">Add BP</NuxtLink>
        <NuxtLink :to="{ path: '/features/vitals-lifestyle/log', hash: '#glucose' }" class="h-12 rounded-lg bg-white border grid place-items-center text-sm">Add glucose</NuxtLink>
        <NuxtLink to="/features/vitals-lifestyle/checkin" class="h-12 rounded-lg bg-indigo-600 text-white grid place-items-center text-sm">Check-in</NuxtLink>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts"></script>


