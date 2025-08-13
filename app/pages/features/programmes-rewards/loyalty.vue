<template>
  <div class="min-h-screen bg-slate-50 safe-top safe-bottom">
    <main class="mx-auto max-w-sm pt-4 pb-24 space-y-4 text-sm">
      <div class="flex items-center justify-between">
        <NuxtLink to="/features/programmes-rewards" class="text-sm text-indigo-600">← Back</NuxtLink>
        <h1 class="text-base font-semibold">Loyalty</h1>
        <span class="w-14"></span>
      </div>

      <section class="bg-white border rounded-xl p-4">
        <div class="font-medium">Points</div>
        <div class="mt-1 text-sm"><span class="rounded-full border px-2 py-0.5 text-indigo-700 bg-indigo-50">Gold</span> 2,450 pts</div>
        <div class="mt-3 h-2 rounded-full bg-slate-200"><div class="h-2 rounded-full bg-indigo-500" style="width: 65%"></div></div>
        <div class="text-[11px] text-slate-600 mt-1">Next tier at 3,750 pts</div>
      </section>

      <section id="earn" class="bg-white border rounded-xl p-4">
        <div class="font-medium">How to earn</div>
        <ul class="mt-1 list-disc pl-5 text-xs text-slate-700 space-y-1">
          <li>Book appointments</li>
          <li>Complete checkups</li>
          <li>Refer a friend</li>
        </ul>
      </section>

      <section class="bg-white border rounded-xl p-4">
        <div class="font-medium">Activity</div>
        <div class="mt-2 grid gap-2">
          <div class="flex items-center justify-between rounded-lg border p-3 text-xs"><span>+200 Executive Health+ checkup</span><span class="text-emerald-600">+200</span></div>
          <div class="flex items-center justify-between rounded-lg border p-3 text-xs"><span>-500 ৳1,000 lab credit</span><span class="text-rose-600">-500</span></div>
        </div>
        <NuxtLink to="/features/programmes-rewards/history" class="mt-2 inline-block text-xs underline">View full history</NuxtLink>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts"></script>


