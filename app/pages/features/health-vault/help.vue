<template>
  <div class="min-h-screen bg-slate-50 safe-top safe-bottom">
    <!-- Top bar -->
    <div class="sticky top-0 z-10 bg-white border-b">
      <div class="mx-auto max-w-sm h-14 flex items-center justify-between ">
        <NuxtLink to="/features/health-vault" class="text-sm text-indigo-600">← Back</NuxtLink>
        <div class="text-base font-semibold">Help</div>
        <div class="w-14" />
      </div>
    </div>

    <main class="mx-auto max-w-sm pt-4 pb-24  space-y-4 text-sm">
      <section class="bg-white border rounded-xl p-4">
        <details>
          <summary class="cursor-pointer">How do I connect a provider?</summary>
          <div class="mt-2 text-xs text-slate-600">Go to Connections and choose a network.</div>
        </details>
        <details class="mt-2">
          <summary class="cursor-pointer">Can I upload PDFs?</summary>
          <div class="mt-2 text-xs text-slate-600">Yes, PDFs and images are supported.</div>
        </details>
        <details class="mt-2">
          <summary class="cursor-pointer">How do I share a record?</summary>
          <div class="mt-2 text-xs text-slate-600">Use Share to generate a link with expiry.</div>
        </details>
      </section>

      <section class="bg-white border rounded-xl p-4">
        <div class="font-medium">Contact</div>
        <div class="text-xs text-slate-600">Email: support@impulse.bd</div>
        <div class="text-xs text-slate-600">Phone: +880 9612-000000</div>
      </section>
    </main>

    <!-- Bottom tab bar -->
    <div class="fixed bottom-0 left-0 right-0 bg-white border-t safe-bottom">
      <nav class="mx-auto max-w-sm h-16 grid grid-cols-5 text-xs">
        <NuxtLink class="flex flex-col items-center justify-center text-indigo-600" to="/features/health-vault">🏠<span>Home</span></NuxtLink>
        <NuxtLink class="flex flex-col items-center justify-center text-slate-600" to="/features/health-vault/records">🧪<span>Records</span></NuxtLink>
        <NuxtLink class="flex flex-col items-center justify-center text-slate-600" to="/features/health-vault/upload">📤<span>Upload</span></NuxtLink>
        <NuxtLink class="flex flex-col items-center justify-center text-slate-600" to="/features/health-vault/timeline">🗓️<span>Timeline</span></NuxtLink>
        <NuxtLink class="flex flex-col items-center justify-center text-indigo-600" to="/features/health-vault/settings">⚙️<span>Settings</span></NuxtLink>
      </nav>
    </div>
  </div>
</template>

<script setup lang="ts"></script>


