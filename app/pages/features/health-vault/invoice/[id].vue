<template>
  <div class="min-h-screen bg-slate-50 safe-top safe-bottom">
    <!-- Top bar -->
    <div class="sticky top-0 z-10 bg-white border-b">
      <div class="mx-auto max-w-sm h-14 flex items-center justify-between ">
        <NuxtLink to="/features/health-vault/invoices" class="text-sm text-indigo-600">← Back</NuxtLink>
        <div class="text-base font-semibold">Invoice</div>
        <div class="w-14" />
      </div>
    </div>

    <main class="mx-auto max-w-sm pt-4 pb-24  space-y-4 text-sm">
      <section class="bg-white border rounded-xl p-4 space-y-2">
        <div class="font-medium">Summary</div>
        <div class="grid grid-cols-2 gap-2 text-xs text-slate-700">
          <div><div class="text-slate-500">Number</div><div>INV-001</div></div>
          <div><div class="text-slate-500">Date</div><div>Aug 05, 2025</div></div>
          <div><div class="text-slate-500">Provider</div><div>City Lab</div></div>
          <div><div class="text-slate-500">Amount</div><div>$120</div></div>
        </div>
      </section>

      <div class="grid grid-cols-2 gap-2">
        <button class="h-10 rounded-lg border bg-white">Download invoice</button>
        <NuxtLink to="/features/health-vault/records#invoices" class="h-10 rounded-lg bg-indigo-600 text-white grid place-items-center">View in records</NuxtLink>
      </div>
    </main>

    <!-- Bottom tab bar -->
    <div class="fixed bottom-0 left-0 right-0 bg-white border-t safe-bottom">
      <nav class="mx-auto max-w-sm h-16 grid grid-cols-5 text-xs">
        <NuxtLink class="flex flex-col items-center justify-center text-slate-600" to="/features/health-vault">🏠<span>Home</span></NuxtLink>
        <NuxtLink class="flex flex-col items-center justify-center text-indigo-600" to="/features/health-vault/records">🧪<span>Records</span></NuxtLink>
        <NuxtLink class="flex flex-col items-center justify-center text-slate-600" to="/features/health-vault/upload">📤<span>Upload</span></NuxtLink>
        <NuxtLink class="flex flex-col items-center justify-center text-slate-600" to="/features/health-vault/timeline">🗓️<span>Timeline</span></NuxtLink>
        <NuxtLink class="flex flex-col items-center justify-center text-slate-600" to="/features/health-vault/settings">⚙️<span>Settings</span></NuxtLink>
      </nav>
    </div>
  </div>
</template>

<script setup lang="ts"></script>


