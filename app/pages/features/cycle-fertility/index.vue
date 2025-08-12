<template>
  <div class="min-h-screen bg-gray-50 safe-top safe-bottom">
    <main class="mx-auto max-w-sm pb-24 space-y-4 pt-4">
      <!-- Cycle Progress -->
      <section class="bg-white rounded-xl shadow-sm border border-slate-200 p-4">
        <div class="flex items-center justify-between mb-2">
          <h2 class="text-sm font-semibold text-slate-700">Cycle Progress</h2>
          <NuxtLink to="/features/cycle-fertility/calendar" class="text-xs text-indigo-600">Calendar →</NuxtLink>
        </div>
        <div class="flex items-center gap-4">
          <div class="grid place-items-center size-20 rounded-full border-4 border-indigo-500">
            <div class="text-center">
              <div class="text-xl font-bold">Day 12</div>
              <div class="text-[11px] text-slate-500">of ~29</div>
            </div>
          </div>
          <div class="flex-1 text-sm">
            <div class="flex items-center justify-between">
              <span class="text-slate-600">Next period</span>
              <span class="font-medium">Sep 3</span>
            </div>
            <div class="flex items-center justify-between mt-1">
              <span class="text-slate-600">Fertile window</span>
              <span class="font-medium">Aug 14–19</span>
            </div>
            <NuxtLink to="/features/cycle-fertility/log" class="mt-2 inline-block text-indigo-600 text-xs underline">Log something</NuxtLink>
          </div>
        </div>
      </section>

      <!-- IVF Readiness -->
      <section class="bg-white rounded-xl shadow-sm border border-slate-200 p-4">
        <div class="flex items-center justify-between mb-2">
          <h2 class="text-sm font-semibold text-slate-700">IVF Readiness</h2>
          <NuxtLink to="/features/cycle-fertility/ivf" class="text-xs text-indigo-600">Details →</NuxtLink>
        </div>
        <div class="flex items-center gap-4">
          <div class="size-16 grid place-items-center rounded-full bg-emerald-50 text-emerald-600 font-bold">B+</div>
          <div class="text-sm">
            <p class="text-slate-700">Solid baseline. Missing AMH.</p>
            <NuxtLink class="text-xs text-indigo-600 underline" to="/features/cycle-fertility/packages">Get baseline tests</NuxtLink>
          </div>
        </div>
      </section>

      <!-- Alerts -->
      <section class="bg-rose-50 border border-rose-200 rounded-xl p-4">
        <div class="flex items-center gap-2 text-rose-700">
          <span>⚠️</span>
          <p class="text-sm font-semibold">Irregularity detected: long follicular phase</p>
        </div>
        <div class="mt-3 flex gap-2">
          <NuxtLink to="/features/cycle-fertility/alerts" class="px-3 py-2 rounded-lg bg-white border border-rose-200 text-rose-700 text-sm">Review</NuxtLink>
          <NuxtLink to="/features/cycle-fertility/booking" class="px-3 py-2 rounded-lg bg-rose-600 text-white text-sm">Book consult</NuxtLink>
        </div>
      </section>

      <!-- Education Spotlight -->
      <section class="bg-white rounded-xl shadow-sm border border-slate-200 p-4">
        <h2 class="text-sm font-semibold text-slate-700 mb-2">Recommended for you</h2>
        <NuxtLink to="/features/cycle-fertility/education" class="block p-3 rounded-lg bg-slate-50 border border-slate-200">
          <div class="text-sm font-medium">Understanding Ovulation Timing</div>
          <div class="text-xs text-slate-500 mt-1">Because of your last cycle pattern</div>
        </NuxtLink>
      </section>

      <!-- Quick Actions -->
      <section class="grid grid-cols-3 gap-2">
        <NuxtLink :to="{ path: '/features/cycle-fertility/log', hash: '#period' }" class="h-12 rounded-lg bg-indigo-600 text-white grid place-items-center text-sm">Log period</NuxtLink>
        <NuxtLink :to="{ path: '/features/cycle-fertility/log', hash: '#temp' }" class="h-12 rounded-lg bg-white border border-slate-200 grid place-items-center text-sm">Basal temp</NuxtLink>
        <NuxtLink to="/features/cycle-fertility/calendar" class="h-12 rounded-lg bg-white border border-slate-200 grid place-items-center text-sm">Calendar</NuxtLink>
      </section>
    </main>
  </div>
  
</template>

<script setup lang="ts"></script>


