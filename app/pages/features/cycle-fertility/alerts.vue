<template>
  <div class="min-h-screen bg-gray-50 safe-top safe-bottom">
    <main class="mx-auto max-w-sm pb-24 pt-4 space-y-3">
      <NuxtLink to="/features/cycle-fertility/booking" class="block p-4 bg-rose-50 border border-rose-200 rounded-xl">
        <div class="text-sm font-semibold text-rose-700">Long follicular phase</div>
        <div class="text-xs text-rose-700/80 mt-1">Detected across 3 cycles. Consider OB-GYN consult.</div>
        <div class="mt-2 inline-flex text-xs text-rose-700 underline">Book consultation →</div>
      </NuxtLink>

      <details class="bg-white border rounded-xl p-4">
        <summary class="text-sm font-medium">Anovulation risk</summary>
        <div class="text-xs text-slate-600 mt-2">
          Prediction based on basal temp pattern and OPK logs.
          <NuxtLink to="/features/cycle-fertility/education" class="text-indigo-600 underline">Learn more</NuxtLink>
        </div>
      </details>
    </main>
  </div>
</template>

<script setup lang="ts"></script>


