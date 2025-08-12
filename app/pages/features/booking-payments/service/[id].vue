<template>
  <div class="min-h-screen bg-slate-50 safe-top safe-bottom">
    <main class="mx-auto max-w-sm pt-4 pb-24 space-y-4 text-sm">
      <div class="flex items-center justify-between">
        <NuxtLink to="/features/booking-payments/services" class="text-sm text-indigo-600">← Back</NuxtLink>
        <h1 class="text-base font-semibold">Service</h1>
        <span class="w-14"></span>
      </div>

      <section class="bg-white border rounded-xl p-4">
        <div class="font-medium">IVF Consultation</div>
        <div class="text-xs text-slate-500">Base from $200</div>
      </section>

      <section class="bg-white border rounded-xl p-4">
        <div class="font-medium">What's included</div>
        <ul class="list-disc pl-5 text-xs text-slate-600 space-y-1 mt-1">
          <li>30-min consult</li>
          <li>Plan + follow-up message</li>
        </ul>
      </section>

      <section class="bg-white border rounded-xl p-4">
        <div class="font-medium">Dynamic pricing</div>
        <ul class="list-disc pl-5 text-xs text-slate-600 space-y-1 mt-1">
          <li>Off-peak (−5%)</li>
          <li>Standard (base)</li>
          <li>Peak (+10%)</li>
        </ul>
      </section>

      <section class="bg-white border rounded-xl p-4">
        <div class="font-medium">Locations</div>
        <div class="mt-2 flex gap-2 text-xs">
          <button class="px-3 py-1.5 rounded-full border bg-white">Center A</button>
          <button class="px-3 py-1.5 rounded-full border bg-white">Center B</button>
          <button class="px-3 py-1.5 rounded-full border bg-white">Center C</button>
        </div>
      </section>

      <NuxtLink to="/features/booking-payments/providers" class="h-12 rounded-lg bg-indigo-600 text-white grid place-items-center">Choose provider</NuxtLink>
    </main>
  </div>
</template>

<script setup lang="ts"></script>


