<template>
  <div class="min-h-screen bg-slate-50 safe-top safe-bottom">
    <!-- Top bar -->
    <div class="sticky top-0 z-10 bg-white border-b">
      <div class="mx-auto max-w-sm h-14 flex items-center justify-between ">
        <NuxtLink to="/features/health-vault" class="text-sm text-indigo-600">← Back</NuxtLink>
        <div class="text-base font-semibold">Settings</div>
        <div class="w-14" />
      </div>
    </div>

    <main class="mx-auto max-w-sm pt-4 pb-24  space-y-4 text-sm">
      <section class="bg-white border rounded-xl p-4 space-y-2">
        <div class="font-medium">Privacy & Security</div>
        <label class="flex items-center justify-between"><span>Face ID / App lock</span> <input type="checkbox"></label>
        <label class="flex items-center justify-between"><span>Require PIN for sharing</span> <input type="checkbox" checked></label>
      </section>

      <section class="bg-white border rounded-xl p-4 space-y-2">
        <div class="font-medium">Data management</div>
        <button class="h-10 rounded-lg border bg-white w-full">Export all records</button>
        <button class="h-10 rounded-lg border border-rose-300 text-rose-700 w-full">Delete vault</button>
      </section>

      <section class="bg-white border rounded-xl p-4 space-y-2">
        <div class="font-medium">Notifications</div>
        <label class="flex items-center justify-between"><span>New record imported</span> <input type="checkbox" checked></label>
        <label class="flex items-center justify-between"><span>Share link created</span> <input type="checkbox"></label>
        <label class="flex items-center justify-between"><span>Invoice posted</span> <input type="checkbox" checked></label>
      </section>

      <NuxtLink to="/features/health-vault" class="inline-block px-3 py-2 rounded-lg bg-indigo-600 text-white">Save</NuxtLink>
    </main>

    <!-- Bottom tab bar -->
    <div class="fixed bottom-0 left-0 right-0 bg-white border-t safe-bottom">
      <nav class="mx-auto max-w-sm h-16 grid grid-cols-5 text-xs">
        <NuxtLink class="flex flex-col items-center justify-center text-slate-600" to="/features/health-vault">🏠<span>Home</span></NuxtLink>
        <NuxtLink class="flex flex-col items-center justify-center text-slate-600" to="/features/health-vault/records">🧪<span>Records</span></NuxtLink>
        <NuxtLink class="flex flex-col items-center justify-center text-slate-600" to="/features/health-vault/upload">📤<span>Upload</span></NuxtLink>
        <NuxtLink class="flex flex-col items-center justify-center text-slate-600" to="/features/health-vault/timeline">🗓️<span>Timeline</span></NuxtLink>
        <NuxtLink class="flex flex-col items-center justify-center text-indigo-600" to="/features/health-vault/settings">⚙️<span>Settings</span></NuxtLink>
      </nav>
    </div>
  </div>
</template>

<script setup lang="ts"></script>


