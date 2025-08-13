<template>
  <div class="min-h-screen bg-slate-50 safe-top safe-bottom">
    <!-- Top bar -->
    <div class="sticky top-0 z-10 bg-white border-b">
      <div class="mx-auto max-w-sm h-14 flex items-center justify-between ">
        <NuxtLink to="/features/health-vault" class="text-sm text-indigo-600">← Back</NuxtLink>
        <div class="text-base font-semibold">Records</div>
        <div class="w-14" />
      </div>
    </div>

    <main class="mx-auto max-w-sm pt-4 pb-24  space-y-4 text-sm">
      <!-- Search -->
      <div>
        <input placeholder="Search records" class="w-full h-10 rounded-full border px-4 text-sm" />
      </div>

      <!-- Filters visual only -->
      <div class="flex gap-2 text-xs">
        <button class="px-3 py-1.5 rounded-full border bg-white">Date</button>
        <button class="px-3 py-1.5 rounded-full border bg-white">Source</button>
        <button class="px-3 py-1.5 rounded-full border bg-white">Category</button>
      </div>

      <!-- Tabs via anchors -->
      <nav class="flex gap-2 text-xs">
        <a href="#all" class="px-3 py-1.5 rounded-full border bg-white">All</a>
        <a href="#labs" class="px-3 py-1.5 rounded-full border bg-white">Labs</a>
        <a href="#imaging" class="px-3 py-1.5 rounded-full border bg-white">Imaging</a>
        <a href="#prescriptions" class="px-3 py-1.5 rounded-full border bg-white">Prescriptions</a>
        <a href="#admissions" class="px-3 py-1.5 rounded-full border bg-white">Admissions</a>
        <a href="#invoices" class="px-3 py-1.5 rounded-full border bg-white">Invoices</a>
      </nav>

      <!-- Sections -->
      <section id="labs" class="bg-white border rounded-xl p-4 space-y-2">
        <div class="font-medium">Labs</div>
        <NuxtLink to="/features/health-vault/record/abc123" class="block rounded-lg border p-3">
          <div class="font-medium">CBC Panel</div>
          <div class="text-xs text-slate-500">Aug 12, 2025 • Popular Diagnostic Center, Dhanmondi</div>
          <div class="text-xs text-slate-500">PDF • 220 KB</div>
        </NuxtLink>
        <NuxtLink to="/features/health-vault/record/jkl222" class="block rounded-lg border p-3">
          <div class="font-medium">HbA1c</div>
          <div class="text-xs text-slate-500">Aug 01, 2025 • Popular Diagnostic Center, Dhanmondi</div>
          <div class="text-xs text-slate-500">PDF • 110 KB</div>
        </NuxtLink>
      </section>

      <section id="imaging" class="bg-white border rounded-xl p-4 space-y-2">
        <div class="font-medium">Imaging</div>
        <NuxtLink to="/features/health-vault/record/def456" class="block rounded-lg border p-3">
          <div class="font-medium">Chest X-ray</div>
          <div class="text-xs text-slate-500">Jul 29, 2025 • Ibn Sina Diagnostic, Dhanmondi</div>
          <div class="text-xs text-slate-500">JPG • 1.2 MB</div>
        </NuxtLink>
      </section>

      <section id="prescriptions" class="bg-white border rounded-xl p-4 space-y-2">
        <div class="font-medium">Prescriptions</div>
        <NuxtLink to="/features/health-vault/record/ghi789" class="block rounded-lg border p-3">
          <div class="font-medium">Metformin Rx</div>
          <div class="text-xs text-slate-500">Jul 20, 2025 • Lazz Pharma, Dhanmondi</div>
          <div class="text-xs text-slate-500">PDF • 90 KB</div>
        </NuxtLink>
      </section>

      <section id="admissions" class="bg-white border rounded-xl p-4 space-y-2">
        <div class="font-medium">Admissions</div>
        <div class="rounded-lg border p-3 text-xs text-slate-500">No items</div>
      </section>

      <section id="invoices" class="bg-white border rounded-xl p-4 space-y-2">
        <div class="font-medium">Invoices</div>
        <NuxtLink to="/features/health-vault/invoice/inv001" class="block rounded-lg border p-3">
          <div class="font-medium">INV-001</div>
          <div class="text-xs text-slate-500">Aug 05, 2025 • Popular Diagnostic Center, Dhanmondi</div>
          <div class="text-xs text-slate-500">Amount: ৳12,000</div>
        </NuxtLink>
      </section>
    </main>

    <!-- Bottom tab bar -->
    <div class="fixed bottom-0 left-0 right-0 bg-white border-t safe-bottom">
      <nav class="mx-auto max-w-sm h-16 grid grid-cols-5 text-xs">
        <NuxtLink :class="['flex flex-col items-center justify-center', route.path === '/features/health-vault' ? 'text-slate-600' : 'text-slate-600']" to="/features/health-vault">🏠<span>Home</span></NuxtLink>
        <NuxtLink :class="['flex flex-col items-center justify-center', route.path.startsWith('/features/health-vault/records') ? 'text-indigo-600' : 'text-slate-600']" to="/features/health-vault/records">🧪<span>Records</span></NuxtLink>
        <NuxtLink :class="['flex flex-col items-center justify-center', route.path.startsWith('/features/health-vault/upload') ? 'text-indigo-600' : 'text-slate-600']" to="/features/health-vault/upload">📤<span>Upload</span></NuxtLink>
        <NuxtLink :class="['flex flex-col items-center justify-center', route.path.startsWith('/features/health-vault/timeline') ? 'text-indigo-600' : 'text-slate-600']" to="/features/health-vault/timeline">🗓️<span>Timeline</span></NuxtLink>
        <NuxtLink :class="['flex flex-col items-center justify-center', route.path.startsWith('/features/health-vault/settings') ? 'text-indigo-600' : 'text-slate-600']" to="/features/health-vault/settings">⚙️<span>Settings</span></NuxtLink>
      </nav>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
const route = useRoute()
</script>


