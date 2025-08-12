<template>
  <div class="min-h-screen bg-slate-50 safe-top safe-bottom">
    <!-- Top bar -->
    <div class="sticky top-0 z-10 bg-white border-b">
      <div class="mx-auto max-w-sm h-14 flex items-center justify-between ">
        <NuxtLink to="/features/health-vault" class="text-sm text-indigo-600">Skip</NuxtLink>
        <div class="text-base font-semibold">Your secure health locker</div>
        <div class="w-14" />
      </div>
    </div>

    <main class="mx-auto max-w-sm pt-4 pb-24  space-y-4 text-sm">
      <section class="bg-white border rounded-xl p-4">
        <div class="font-medium">Set up PIN</div>
        <div class="text-xs text-slate-600">Placeholder</div>
      </section>
      <section class="bg-white border rounded-xl p-4">
        <div class="font-medium">Connect provider</div>
        <NuxtLink to="/features/health-vault/connections" class="mt-2 inline-block px-3 py-2 rounded-lg border">Open Connections</NuxtLink>
      </section>
      <section class="bg-white border rounded-xl p-4">
        <div class="font-medium">Import history</div>
        <div class="text-xs text-slate-600">Placeholder</div>
      </section>
      <NuxtLink to="/features/health-vault" class="inline-block px-3 py-2 rounded-lg bg-indigo-600 text-white">Start</NuxtLink>
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


