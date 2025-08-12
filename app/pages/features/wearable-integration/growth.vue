<template>
  <div class="min-h-screen bg-slate-50 safe-top safe-bottom">
    <main class="mx-auto max-w-sm pt-4 pb-24 space-y-4 text-sm">
      <div class="flex items-center justify-between">
        <NuxtLink to="/features/wearable-integration" class="text-sm text-indigo-600">← Back</NuxtLink>
        <h1 class="text-base font-semibold">Growth</h1>
        <span class="w-14"></span>
      </div>

      <section class="bg-white border rounded-xl p-4">
        <div class="font-medium">Acquisition flywheel</div>
        <div class="mt-2 h-24 rounded-lg bg-slate-50 border grid place-items-center text-xs text-slate-500">Funnel widget</div>
      </section>

      <section class="bg-white border rounded-xl p-4 space-y-2">
        <div class="font-medium">KPIs</div>
        <div class="grid gap-2 text-xs">
          <div class="flex items-center justify-between rounded-lg border p-3"><span>Connected devices</span><span>1,240</span></div>
          <div class="flex items-center justify-between rounded-lg border p-3"><span>Events this week</span><span>320</span></div>
          <div class="flex items-center justify-between rounded-lg border p-3"><span>Nudges sent</span><span>580</span></div>
          <div class="flex items-center justify-between rounded-lg border p-3"><span>Check-ups booked</span><span>140</span></div>
          <div class="flex items-center justify-between rounded-lg border p-3"><span>Diagnostics purchased</span><span>90</span></div>
          <div class="flex items-center justify-between rounded-lg border p-3"><span>Reviews posted</span><span>75</span></div>
          <div class="flex items-center justify-between rounded-lg border p-3"><span>Referrals sent</span><span>45</span></div>
        </div>
        <div class="text-[11px] text-slate-500">All metrics are placeholders; demo only</div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts"></script>


