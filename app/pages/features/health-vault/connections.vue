<template>
  <div class="min-h-screen bg-slate-50 safe-top safe-bottom">
    <!-- Top bar -->
    <div class="sticky top-0 z-10 bg-white border-b">
      <div class="mx-auto max-w-sm h-14 flex items-center justify-between ">
        <NuxtLink to="/features/health-vault" class="text-sm text-indigo-600">← Back</NuxtLink>
        <div class="text-base font-semibold">Connections</div>
        <div class="w-14" />
      </div>
    </div>

    <main class="mx-auto max-w-sm pt-4 pb-24  space-y-4 text-sm">
      <div class="bg-white border rounded-xl p-4 space-y-2">
        <div class="font-medium">Link Hospital Account (FHIR/HL7)</div>
        <div class="flex items-center justify-between rounded-lg border p-3">
          <div class="text-xs text-slate-600">Status: disconnected</div>
          <button class="px-3 py-2 rounded-lg border">Connect</button>
        </div>
      </div>

      <div class="bg-white border rounded-xl p-4 space-y-2">
        <div class="font-medium">Lab Network</div>
        <div class="flex items-center justify-between rounded-lg border p-3">
          <div class="text-xs text-slate-600">Status: disconnected</div>
          <button class="px-3 py-2 rounded-lg border">Connect</button>
        </div>
      </div>

      <div class="bg-white border rounded-xl p-4 space-y-2">
        <div class="font-medium">Imaging/PACS</div>
        <div class="flex items-center justify-between rounded-lg border p-3">
          <div class="text-xs text-slate-600">Status: disconnected</div>
          <button class="px-3 py-2 rounded-lg border">Connect</button>
        </div>
      </div>

      <div class="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
        <div class="text-emerald-800 text-sm">Once connected, your records sync here automatically.</div>
        <NuxtLink to="/features/health-vault/help" class="mt-2 inline-block text-emerald-800 underline text-xs">Need help?</NuxtLink>
      </div>
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


