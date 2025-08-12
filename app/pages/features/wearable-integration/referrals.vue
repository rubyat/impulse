<template>
  <div class="min-h-screen bg-slate-50 safe-top safe-bottom">
    <main class="mx-auto max-w-sm pt-4 pb-24 space-y-4 text-sm">
      <div class="flex items-center justify-between">
        <NuxtLink to="/features/wearable-integration/loyalty" class="text-sm text-indigo-600">← Back</NuxtLink>
        <h1 class="text-base font-semibold">Refer a Friend</h1>
        <span class="w-14"></span>
      </div>

      <section class="bg-white border rounded-xl p-4 space-y-2 text-center">
        <div class="font-medium">Your code</div>
        <div class="text-lg font-semibold">HV-2K9X</div>
        <div class="flex gap-2 justify-center">
          <button class="px-3 py-1.5 rounded-lg border">Copy</button>
        </div>
      </section>

      <div class="bg-white border rounded-xl p-4">
        <div class="font-medium">Get +300 pts when they complete a check-up</div>
      </div>

      <div class="grid grid-cols-2 gap-2">
        <button class="h-12 rounded-lg border">Invite via SMS</button>
        <button class="h-12 rounded-lg border">Invite via Email</button>
      </div>

      <NuxtLink to="/features/wearable-integration/growth" class="text-xs underline">Track referrals</NuxtLink>
    </main>
  </div>
</template>

<script setup lang="ts"></script>


