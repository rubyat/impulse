<template>
  <div class="min-h-screen bg-slate-50 safe-top safe-bottom">
    <main class="mx-auto max-w-sm pt-4 pb-24 space-y-4 text-sm">
      <div class="flex items-center justify-between">
        <h1 class="text-base font-semibold">Wearable+</h1>
        <div class="flex items-center gap-4 text-xl">
          <NuxtLink to="/features/wearable-integration/settings" aria-label="Settings">⚙️</NuxtLink>
          <NuxtLink to="/features/wearable-integration/events" aria-label="Events">🔔</NuxtLink>
        </div>
      </div>

      <!-- Sync status -->
      <section class="bg-white border rounded-xl p-4 space-y-2">
        <div class="flex items-center justify-between">
          <div class="font-medium">Sync status</div>
          <span class="text-amber-700 text-[11px] bg-amber-100 border border-amber-200 rounded-full px-2 py-0.5">Syncing now • 2m ago</span>
        </div>
        <div class="grid gap-2 text-sm">
          <div class="flex items-center justify-between rounded-lg border p-3 text-xs"><span>HR</span><span>72 bpm • 5m ago</span></div>
          <div class="flex items-center justify-between rounded-lg border p-3 text-xs"><span>Sleep</span><span>7h 10m • last night</span></div>
          <div class="flex items-center justify-between rounded-lg border p-3 text-xs"><span>BP</span><span>118/76 • today</span></div>
          <div class="flex items-center justify-between rounded-lg border p-3 text-xs"><span>SpO₂</span><span>98% • today</span></div>
        </div>
        <NuxtLink to="/features/wearable-integration/devices" class="mt-2 inline-block text-xs underline">Manage devices</NuxtLink>
      </section>

      <!-- Latest AI event -->
      <NuxtLink to="/features/wearable-integration/events#tachycardia-sleep" class="block rounded-xl border p-4 bg-rose-50 border-rose-200">
        <div class="font-medium text-rose-800">Tachycardia with poor sleep</div>
        <div class="text-xs text-rose-900 mt-1">3 days: HR&gt;95 resting, sleep &lt;5h</div>
      </NuxtLink>

      <!-- Nudge -->
      <section class="bg-white border rounded-xl p-4">
        <div class="font-medium">Reset routine tonight</div>
        <div class="text-xs text-slate-600">Wind-down + hydrate; book a check-up if symptoms persist</div>
        <div class="mt-3 grid grid-cols-2 gap-2">
          <NuxtLink to="/features/wearable-integration/nudges" class="h-10 rounded-lg border grid place-items-center">Self-care plan</NuxtLink>
          <NuxtLink to="/features/wearable-integration/bookings" class="h-10 rounded-lg bg-indigo-600 text-white grid place-items-center">Book check-up</NuxtLink>
        </div>
      </section>

      <!-- Quick actions -->
      <section class="grid grid-cols-3 gap-2">
        <NuxtLink to="/features/wearable-integration/devices" class="h-12 rounded-lg border bg-white grid place-items-center">Connect ⌚</NuxtLink>
        <NuxtLink to="/features/wearable-integration/packages" class="h-12 rounded-lg border bg-white grid place-items-center">Diagnostics 🧪</NuxtLink>
        <NuxtLink to="/features/wearable-integration/loyalty" class="h-12 rounded-lg border bg-white grid place-items-center">Rewards ⭐</NuxtLink>
      </section>

      <!-- Promo -->
      <NuxtLink to="/features/wearable-integration/loyalty" class="block bg-emerald-50 border border-emerald-200 rounded-xl p-4">
        <div class="font-medium text-emerald-800">+200 pts for first sync review</div>
        <div class="text-emerald-900 text-xs mt-1">View Rewards</div>
      </NuxtLink>
    </main>
  </div>
</template>

<script setup lang="ts"></script>


