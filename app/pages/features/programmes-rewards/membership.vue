<template>
  <div class="min-h-screen bg-slate-50 safe-top safe-bottom">
    <main class="mx-auto max-w-sm pt-4 pb-24 space-y-4 text-sm">
      <div class="flex items-center justify-between">
        <NuxtLink to="/features/programmes-rewards" class="text-sm text-indigo-600">← Back</NuxtLink>
        <h1 class="text-base font-semibold">My Memberships</h1>
        <span class="w-14"></span>
      </div>

      <div class="bg-white border rounded-xl p-4 flex items-center justify-between">
        <div>
          <div class="font-medium">SeniorCare+</div>
          <div class="text-xs text-slate-500">Active • Renews on Sep 15</div>
        </div>
        <span class="text-[11px] rounded-full border px-2 py-0.5">Active</span>
      </div>
      <div class="bg-white border rounded-xl p-4 flex items-center justify-between">
        <div>
          <div class="font-medium">Executive Health+</div>
          <div class="text-xs text-slate-500">Active • Renews on Sep 22</div>
        </div>
        <span class="text-[11px] rounded-full border px-2 py-0.5">Active</span>
      </div>

      <div class="rounded-xl border bg-emerald-50 border-emerald-200 p-4 text-xs text-emerald-800">
        Members earn +10% points on diagnostics
      </div>
    </main>
  </div>
</template>

<script setup lang="ts"></script>


