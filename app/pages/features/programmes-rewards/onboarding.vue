<template>
  <div class="min-h-screen bg-slate-50 safe-top safe-bottom">
    <main class="mx-auto max-w-sm pt-4 pb-24 space-y-4 text-sm">
      <div class="flex items-center justify-between">
        <NuxtLink to="/features/programmes-rewards" class="text-sm text-indigo-600">Skip</NuxtLink>
        <h1 class="text-base font-semibold">Join programmes, earn rewards</h1>
        <span class="w-14"></span>
      </div>

      <section class="bg-white border rounded-xl p-4">
        <div class="font-medium">Pick a primary programme</div>
        <div class="mt-2 flex gap-2 text-xs">
          <button class="px-3 py-1.5 rounded-full border bg-white">SeniorCare+</button>
          <button class="px-3 py-1.5 rounded-full border bg-white">Executive Health+</button>
          <button class="px-3 py-1.5 rounded-full border bg-white">Maternity+</button>
        </div>
      </section>

      <section class="bg-white border rounded-xl p-4">
        <div class="font-medium">Enter corporate code (optional)</div>
        <div class="mt-2 flex gap-2">
          <input placeholder="Code" class="h-10 w-full rounded-lg border "/>
          <button class="px-3 rounded-lg border">Apply</button>
        </div>
      </section>

      <NuxtLink to="/features/programmes-rewards" class="inline-block px-3 py-2 rounded-lg bg-indigo-600 text-white">Start</NuxtLink>
    </main>
  </div>
</template>

<script setup lang="ts"></script>


