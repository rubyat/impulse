<template>
  <div class="min-h-screen bg-slate-50 safe-top safe-bottom">
    <!-- Top bar -->
    <div class="sticky top-0 z-10 bg-white border-b">
      <div class="mx-auto max-w-sm h-14 flex items-center justify-between ">
        <NuxtLink to="/features/health-vault/records" class="text-sm text-indigo-600">← Back</NuxtLink>
        <div class="text-base font-semibold">Record</div>
        <NuxtLink to="/features/health-vault/share" class="text-sm text-indigo-600">Share</NuxtLink>
      </div>
    </div>

    <main class="mx-auto max-w-sm pt-4 pb-24  space-y-4 text-sm">
      <!-- Preview -->
      <div class="h-56 rounded-lg bg-slate-50 border grid place-items-center text-xs text-slate-500">Preview</div>

      <!-- Details -->
      <section class="bg-white border rounded-xl p-4 space-y-2">
        <div class="font-medium">Details</div>
        <div class="grid grid-cols-2 gap-2 text-xs text-slate-700">
          <div><div class="text-slate-500">Category</div><div>Labs</div></div>
          <div><div class="text-slate-500">Date of service</div><div>Aug 12, 2025</div></div>
          <div><div class="text-slate-500">Source</div><div>Popular Diagnostic Center, Dhanmondi</div></div>
          <div><div class="text-slate-500">Patient</div><div>Aisha Rahman</div></div>
          <div><div class="text-slate-500">File</div><div>PDF • 220 KB</div></div>
        </div>
      </section>

      <!-- CTA row -->
      <div class="grid grid-cols-2 gap-2">
        <button class="h-10 rounded-lg border bg-white">Download</button>
        <NuxtLink to="/features/health-vault/share" class="h-10 rounded-lg bg-indigo-600 text-white grid place-items-center">Share</NuxtLink>
      </div>

      <!-- Related -->
      <section class="bg-white border rounded-xl p-4 space-y-2">
        <div class="font-medium">Related</div>
        <NuxtLink to="/features/health-vault/record/jkl222" class="block rounded-lg border p-3">
          <div class="font-medium">HbA1c</div>
          <div class="text-xs text-slate-500">Aug 01, 2025 • Popular Diagnostic Center, Dhanmondi</div>
        </NuxtLink>
        <NuxtLink to="/features/health-vault/record/ghi789" class="block rounded-lg border p-3">
          <div class="font-medium">Metformin Rx</div>
          <div class="text-xs text-slate-500">Jul 20, 2025 • Lazz Pharma, Dhanmondi</div>
        </NuxtLink>
      </section>
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


