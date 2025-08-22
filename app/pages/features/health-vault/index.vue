<template>
  <div class="min-h-screen bg-slate-50 safe-top safe-bottom">
    <!-- Top bar -->
    <div class="sticky top-0 z-10 bg-white border-b">
      <div class="mx-auto max-w-sm h-14 flex items-center justify-between ">
        <div class="text-base font-semibold">My Health Vault</div>
        <NuxtLink to="/features/health-vault/share" class="text-sm text-indigo-600">Share</NuxtLink>
      </div>
    </div>

    <main class="mx-auto max-w-sm pt-4 pb-24  space-y-4 text-sm">
      <!-- Search -->
      <div>
        <input placeholder="Search records" class="w-full h-10 rounded-full border px-4 text-sm" />
      </div>

      <!-- Categories -->
      <section class="grid grid-cols-3 gap-2">
        <NuxtLink :to="{ path: '/features/health-vault/records', hash: '#labs' }" class="h-20 rounded-lg border bg-white grid place-items-center">🧪<span class="text-xs">Labs</span></NuxtLink>
        <NuxtLink :to="{ path: '/features/health-vault/records', hash: '#imaging' }" class="h-20 rounded-lg border bg-white grid place-items-center">🩻<span class="text-xs">Imaging</span></NuxtLink>
        <NuxtLink :to="{ path: '/features/health-vault/records', hash: '#prescriptions' }" class="h-20 rounded-lg border bg-white grid place-items-center">💊<span class="text-xs">Prescriptions</span></NuxtLink>
        <NuxtLink :to="{ path: '/features/health-vault/records', hash: '#admissions' }" class="h-20 rounded-lg border bg-white grid place-items-center">🏥<span class="text-xs">Admissions</span></NuxtLink>
        <NuxtLink :to="{ path: '/features/health-vault/records', hash: '#invoices' }" class="h-20 rounded-lg border bg-white grid place-items-center">🧾<span class="text-xs">Invoices</span></NuxtLink>
      </section>

      <!-- Recent items -->
      <section class="bg-white border rounded-xl p-4 space-y-2">
        <div class="font-medium">Recent items</div>
        <NuxtLink to="/features/health-vault/record/abc123" class="block rounded-lg border p-3">
          <div class="font-medium">CBC Panel</div>
          <div class="text-xs text-slate-500">Aug 12, 2025 • Popular Diagnostic Center, Dhanmondi</div>
          <div class="text-xs text-slate-500">PDF • 220 KB</div>
        </NuxtLink>
        <NuxtLink to="/features/health-vault/record/def456" class="block rounded-lg border p-3">
          <div class="font-medium">Chest X-ray</div>
          <div class="text-xs text-slate-500">Jul 29, 2025 • Ibn Sina Diagnostic, Dhanmondi</div>
          <div class="text-xs text-slate-500">JPG • 1.2 MB</div>
        </NuxtLink>
        <NuxtLink to="/features/health-vault/record/ghi789" class="block rounded-lg border p-3">
          <div class="font-medium">Metformin Rx</div>
          <div class="text-xs text-slate-500">Jul 20, 2025 • Lazz Pharma, Dhanmondi</div>
          <div class="text-xs text-slate-500">PDF • 90 KB</div>
        </NuxtLink>
      </section>

      <!-- Quick actions -->
      <section class="bg-white border rounded-xl p-4">
        <div class="font-medium">Quick actions</div>
        <div class="mt-2 grid grid-cols-3 gap-2 text-xs">
          <NuxtLink to="/features/health-vault/connections" class="h-10 rounded-lg border grid place-items-center">Connect providers</NuxtLink>
          <NuxtLink to="/features/health-vault/upload" class="h-10 rounded-lg border grid place-items-center">Upload document</NuxtLink>
          <NuxtLink to="/features/health-vault/settings" class="h-10 rounded-lg border grid place-items-center">Export records</NuxtLink>
        </div>
      </section>
    </main>


  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
const route = useRoute()
</script>


