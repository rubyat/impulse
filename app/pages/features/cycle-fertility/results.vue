<template>
  <div class="min-h-screen bg-gray-50 safe-top safe-bottom">
    <main class="mx-auto max-w-sm pb-24 pt-4 space-y-3">
      <section class="bg-white border rounded-xl p-4">
        <div class="flex items-center justify-between">
          <div class="text-sm font-medium">AMH</div>
          <div class="text-sm"><span class="font-semibold">—</span> <span class="text-xs text-slate-500">pending</span></div>
        </div>
        <div class="mt-2 h-24 rounded-lg border grid place-items-center text-sm text-slate-500">Upload PDF/Image</div>
      </section>

      <section class="bg-white border rounded-xl p-4">
        <div class="flex items-center justify-between">
          <div class="text-sm font-medium">TSH</div>
          <div class="text-sm"><span class="font-semibold">2.1</span> mIU/L</div>
        </div>
        <div class="mt-2 text-xs text-slate-500">Ref: 0.4–4.0</div>
      </section>

      <NuxtLink to="/features/cycle-fertility/ivf" class="h-12 grid place-items-center rounded-lg bg-indigo-600 text-white">Recalculate IVF score</NuxtLink>
    </main>
  </div>
</template>

<script setup lang="ts"></script>


