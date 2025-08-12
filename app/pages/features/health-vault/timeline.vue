<template>
  <div class="min-h-screen bg-slate-50 safe-top safe-bottom">
    <!-- Top bar -->
    <div class="sticky top-0 z-10 bg-white border-b">
      <div class="mx-auto max-w-sm h-14 flex items-center justify-between ">
        <NuxtLink to="/features/health-vault" class="text-sm text-indigo-600">← Back</NuxtLink>
        <div class="text-base font-semibold">Timeline</div>
        <div class="w-14" />
      </div>
    </div>

    <main class="mx-auto max-w-sm pt-4 pb-24  space-y-4 text-sm">
      <!-- Filters -->
      <div class="flex gap-2 text-xs">
        <button class="px-3 py-1.5 rounded-full border bg-white">All</button>
        <button class="px-3 py-1.5 rounded-full border bg-white">Labs</button>
        <button class="px-3 py-1.5 rounded-full border bg-white">Imaging</button>
        <button class="px-3 py-1.5 rounded-full border bg-white">Prescriptions</button>
        <button class="px-3 py-1.5 rounded-full border bg-white">Admissions</button>
        <button class="px-3 py-1.5 rounded-full border bg-white">Invoices</button>
      </div>

      <!-- Optional activity strip -->
      <div class="grid grid-cols-12 gap-1 h-8">
        <div class="bg-slate-200 rounded" v-for="i in 12" :key="i"></div>
      </div>

      <!-- Grouped by month -->
      <section class="bg-white border rounded-xl p-4 space-y-2">
        <div class="font-medium">Aug 2025</div>
        <NuxtLink to="/features/health-vault/record/abc123" class="block rounded-lg border p-3">
          <div class="font-medium">CBC Panel</div>
          <div class="text-xs text-slate-500">Aug 12 • City Lab</div>
        </NuxtLink>
        <NuxtLink to="/features/health-vault/invoice/inv001" class="block rounded-lg border p-3">
          <div class="font-medium">Invoice INV-001</div>
          <div class="text-xs text-slate-500">Aug 05 • City Lab</div>
        </NuxtLink>
      </section>

      <section class="bg-white border rounded-xl p-4 space-y-2">
        <div class="font-medium">Jul 2025</div>
        <NuxtLink to="/features/health-vault/record/def456" class="block rounded-lg border p-3">
          <div class="font-medium">Chest X-ray</div>
          <div class="text-xs text-slate-500">Jul 29 • Metro Imaging</div>
        </NuxtLink>
      </section>
    </main>

    <!-- Bottom tab bar -->
    <div class="fixed bottom-0 left-0 right-0 bg-white border-t safe-bottom">
      <nav class="mx-auto max-w-sm h-16 grid grid-cols-5 text-xs">
        <NuxtLink class="flex flex-col items-center justify-center text-slate-600" to="/features/health-vault">🏠<span>Home</span></NuxtLink>
        <NuxtLink class="flex flex-col items-center justify-center text-slate-600" to="/features/health-vault/records">🧪<span>Records</span></NuxtLink>
        <NuxtLink class="flex flex-col items-center justify-center text-slate-600" to="/features/health-vault/upload">📤<span>Upload</span></NuxtLink>
        <NuxtLink class="flex flex-col items-center justify-center text-indigo-600" to="/features/health-vault/timeline">🗓️<span>Timeline</span></NuxtLink>
        <NuxtLink class="flex flex-col items-center justify-center text-slate-600" to="/features/health-vault/settings">⚙️<span>Settings</span></NuxtLink>
      </nav>
    </div>
  </div>
</template>

<script setup lang="ts"></script>


