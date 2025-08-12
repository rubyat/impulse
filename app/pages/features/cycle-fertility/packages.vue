<template>
  <div class="min-h-screen bg-gray-50 safe-top safe-bottom">
    <main class="mx-auto max-w-sm pb-24 pt-4 space-y-3">
      <article class="bg-white border rounded-xl p-4">
        <div class="flex items-center justify-between">
          <h2 class="text-sm font-semibold">Fertility Baseline</h2>
          <span class="text-xs rounded bg-emerald-50 text-emerald-700 px-2 py-1">-20%</span>
        </div>
        <details class="mt-2 text-sm">
          <summary class="cursor-pointer text-slate-700">Includes</summary>
          <ul class="list-disc pl-5 mt-2 text-slate-600">
            <li>AMH, TSH, Prolactin</li>
            <li>Transvaginal ultrasound</li>
          </ul>
        </details>
        <NuxtLink to="/features/cycle-fertility/checkout" class="mt-3 inline-block px-3 py-2 rounded-lg bg-indigo-600 text-white text-sm">Select</NuxtLink>
      </article>

      <article class="bg-white border rounded-xl p-4">
        <div class="flex items-center justify-between">
          <h2 class="text-sm font-semibold">Ovulation Assessment</h2>
          <span class="text-xs rounded bg-emerald-50 text-emerald-700 px-2 py-1">-10%</span>
        </div>
        <details class="mt-2 text-sm">
          <summary class="cursor-pointer text-slate-700">Includes</summary>
          <ul class="list-disc pl-5 mt-2 text-slate-600">
            <li>OPK kit</li>
            <li>Progesterone (Day 21)</li>
          </ul>
        </details>
        <NuxtLink to="/features/cycle-fertility/checkout" class="mt-3 inline-block px-3 py-2 rounded-lg bg-indigo-600 text-white text-sm">Select</NuxtLink>
      </article>
    </main>
  </div>
</template>

<script setup lang="ts"></script>


