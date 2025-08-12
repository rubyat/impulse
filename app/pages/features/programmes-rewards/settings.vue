<template>
  <div class="min-h-screen bg-slate-50 safe-top safe-bottom">
    <main class="mx-auto max-w-sm pt-4 pb-24 space-y-4 text-sm">
      <div class="flex items-center justify-between">
        <NuxtLink to="/features/programmes-rewards" class="text-sm text-indigo-600">← Back</NuxtLink>
        <h1 class="text-base font-semibold">Settings</h1>
        <span class="w-14"></span>
      </div>

      <section class="bg-white border rounded-xl p-4 space-y-2">
        <div class="font-medium">Communication</div>
        <label class="flex items-center justify-between"><span>Email</span> <input type="checkbox" checked></label>
        <label class="flex items-center justify-between"><span>SMS</span> <input type="checkbox"></label>
        <label class="flex items-center justify-between"><span>Push</span> <input type="checkbox" checked></label>
      </section>

      <section class="bg-white border rounded-xl p-4 space-y-2">
        <div class="font-medium">Data sharing</div>
        <label class="flex items-center justify-between"><span>Share anonymized usage</span> <input type="checkbox"></label>
      </section>

      <section class="bg-white border rounded-xl p-4 space-y-2">
        <div class="font-medium">Default programme</div>
        <div class="flex gap-2">
          <button class="px-3 py-1.5 rounded-full border bg-white">SeniorCare+</button>
          <button class="px-3 py-1.5 rounded-full border bg-white">Executive Health+</button>
          <button class="px-3 py-1.5 rounded-full border bg-white">Maternity+</button>
        </div>
      </section>

      <NuxtLink to="/features/programmes-rewards" class="inline-block px-3 py-2 rounded-lg bg-indigo-600 text-white">Save</NuxtLink>
    </main>
  </div>
</template>

<script setup lang="ts"></script>


