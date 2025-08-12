<template>
  <div class="min-h-screen bg-slate-50 safe-top safe-bottom">
    <main class="mx-auto max-w-sm pt-4 pb-24 space-y-4 text-sm">
      <div class="flex items-center justify-between">
        <h1 class="text-base font-semibold">Book+</h1>
        <div class="flex items-center gap-4 text-xl">
          <NuxtLink to="/features/booking-payments/orders" aria-label="Orders">🔔</NuxtLink>
          <NuxtLink to="/features/booking-payments/support" aria-label="Support">❓</NuxtLink>
        </div>
      </div>

      <!-- Category tiles -->
      <section class="grid grid-cols-3 gap-2">
        <NuxtLink to="/features/booking-payments/services" class="h-20 rounded-lg border bg-white grid place-items-center">IVF</NuxtLink>
        <NuxtLink to="/features/booking-payments/services" class="h-20 rounded-lg border bg-white grid place-items-center">Aesthetics</NuxtLink>
        <NuxtLink to="/features/booking-payments/services" class="h-20 rounded-lg border bg-white grid place-items-center">General</NuxtLink>
      </section>

      <!-- Featured services -->
      <section class="bg-white border rounded-xl p-4 space-y-2">
        <div class="font-medium">Featured services</div>
        <NuxtLink to="/features/booking-payments/service/ivf-consult" class="block rounded-lg border p-3">
          <div class="font-medium">IVF Consultation</div>
          <div class="text-xs text-slate-500">From $200 • Peak pricing may apply</div>
        </NuxtLink>
        <NuxtLink to="/features/booking-payments/service/ivf-cycle" class="block rounded-lg border p-3">
          <div class="font-medium">IVF Cycle</div>
          <div class="text-xs text-slate-500">From $1,800 • Peak pricing may apply</div>
        </NuxtLink>
        <NuxtLink to="/features/booking-payments/service/laser-resurfacing" class="block rounded-lg border p-3">
          <div class="font-medium">Laser Resurfacing</div>
          <div class="text-xs text-slate-500">From $320 • Peak pricing may apply</div>
        </NuxtLink>
      </section>

      <!-- Limited-time offers -->
      <section class="bg-white border rounded-xl p-4 space-y-2">
        <div class="font-medium">Limited-time offers</div>
        <NuxtLink to="/features/booking-payments/offers" class="block rounded-lg border p-3">
          <div class="font-medium">IVF Baseline Bundle −15%</div>
          <div class="text-xs text-slate-500">Diagnostics + consult</div>
        </NuxtLink>
        <NuxtLink to="/features/booking-payments/offers" class="block rounded-lg border p-3">
          <div class="font-medium">Aesthetics Weekend −10%</div>
          <div class="text-xs text-slate-500">Off-peak slots only</div>
        </NuxtLink>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts"></script>


