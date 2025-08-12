<template>
  <div class="min-h-screen bg-gray-50 safe-top safe-bottom">
    <main class="mx-auto max-w-sm pb-24 pt-4 space-y-4">
      <section class="bg-white border rounded-xl p-4 text-sm">
        <div class="flex items-center justify-between">
          <div>Fertility Baseline</div>
          <div class="font-medium">$80 <span class="line-through text-slate-400 ml-1">$100</span></div>
        </div>
        <div class="mt-2 text-xs text-slate-500">Includes AMH, TSH, Prolactin + Ultrasound</div>
      </section>

      <section class="bg-white border rounded-xl p-4">
        <label class="block text-sm font-medium">Apply discount</label>
        <input placeholder="Enter code" class="mt-2 w-full h-12 rounded-lg border px-3 text-sm" />
      </section>

      <section class="bg-white border rounded-xl p-4">
        <label class="block text-sm font-medium">Payment method</label>
        <div class="mt-2 grid grid-cols-2 gap-2">
          <button class="h-10 rounded-lg border">Card</button>
          <button class="h-10 rounded-lg border">Mobile</button>
        </div>
      </section>

      <NuxtLink to="/features/cycle-fertility/results" class="h-12 grid place-items-center rounded-lg bg-emerald-600 text-white">Pay & Continue</NuxtLink>
    </main>
  </div>
</template>

<script setup lang="ts"></script>


