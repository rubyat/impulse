<template>
  <div class="min-h-screen bg-slate-50 safe-top safe-bottom">
    <main class="mx-auto max-w-sm pt-4 pb-24 space-y-4 text-sm">
      <div class="flex items-center justify-between">
        <NuxtLink to="/features/programmes-rewards" class="text-sm text-indigo-600">← Back</NuxtLink>
        <h1 class="text-base font-semibold">Corporate Access</h1>
        <span class="w-14"></span>
      </div>

      <section class="bg-white border rounded-xl p-4 space-y-2">
        <div class="font-medium">Apply corporate code</div>
        <div class="flex gap-2">
          <input placeholder="Enter code" class="h-10 w-full rounded-lg border "/>
          <button class="px-3 rounded-lg border">Apply</button>
        </div>
        <div class="text-xs text-emerald-700">Verified (demo)</div>
      </section>

      <section class="bg-white border rounded-xl p-4">
        <div class="font-medium">Your corporate benefits</div>
        <ul class="list-disc pl-5 text-xs text-slate-700 space-y-1 mt-1">
          <li>Lab tests −15%</li>
          <li>Priority slots</li>
        </ul>
      </section>

      <section class="bg-white border rounded-xl p-4">
        <div class="font-medium">Link employer</div>
        <div class="text-xs text-slate-600">Company: Example Corp</div>
      </section>

      <div class="rounded-xl border bg-indigo-50 border-indigo-200 p-4 text-xs text-indigo-800">
        Corporate perks stack with loyalty points (demo)
      </div>
    </main>
  </div>
</template>

<script setup lang="ts"></script>


