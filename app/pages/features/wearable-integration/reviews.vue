<template>
  <div class="min-h-screen bg-slate-50 safe-top safe-bottom">
    <main class="mx-auto max-w-sm pt-4 pb-24 space-y-4 text-sm">
      <div class="flex items-center justify-between">
        <NuxtLink to="/features/wearable-integration/loyalty" class="text-sm text-indigo-600">← Back</NuxtLink>
        <h1 class="text-base font-semibold">Review</h1>
        <span class="w-14"></span>
      </div>

      <section class="bg-white border rounded-xl p-4 space-y-2">
        <div class="flex gap-1 text-2xl">⭐ ⭐ ⭐ ⭐ ⭐</div>
        <textarea placeholder="Share your experience" class="w-full rounded-lg border  h-24"></textarea>
      </section>

      <NuxtLink to="/features/wearable-integration/referrals" class="h-12 rounded-lg bg-indigo-600 text-white grid place-items-center">Post review</NuxtLink>
    </main>
  </div>
</template>

<script setup lang="ts"></script>


