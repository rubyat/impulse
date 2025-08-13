<template>
  <div class="min-h-screen bg-slate-50 safe-top safe-bottom">
    <div class="sticky top-0 z-10 bg-white border-b">
      <div class="mx-auto max-w-sm h-14 flex items-center justify-between">
        <div class="text-base font-semibold">Media</div>
        <NuxtLink to="/" class="text-xs text-indigo-600">Home</NuxtLink>
      </div>
    </div>

    <main class="mx-auto max-w-sm pt-4 pb-24 space-y-4">
      <!-- Filters -->
      <div class="px-4">
        <div class="grid grid-cols-4 gap-2 text-xs">
          <button class="border rounded-full py-1">All</button>
          <button class="border rounded-full py-1">Images</button>
          <button class="border rounded-full py-1">Videos</button>
          <button class="border rounded-full py-1">Docs</button>
        </div>
        <input class="mt-3 w-full h-10 rounded-full border px-4 text-sm" placeholder="Search media" />
      </div>

      <!-- Grid -->
      <section class="px-4">
        <div class="grid grid-cols-3 gap-2">
          <div class="aspect-square rounded-lg overflow-hidden bg-white border">
            <img src="https://images.unsplash.com/photo-1588771930290-89d45393aaad?q=80&w=400&auto=format&fit=crop" alt="Campaign" class="w-full h-full object-cover" />
          </div>
          <div class="aspect-square rounded-lg overflow-hidden bg-white border grid place-items-center text-xs text-slate-600">
            📄
            <span>Invoice.pdf</span>
          </div>
          <div class="aspect-square rounded-lg overflow-hidden bg-white border grid place-items-center text-xs text-slate-600">
            ▶️
            <span>Intro.mp4</span>
          </div>
          <div class="aspect-square rounded-lg overflow-hidden bg-white border">
            <img src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=400&auto=format&fit=crop" alt="Doctor" class="w-full h-full object-cover" />
          </div>
          <div class="aspect-square rounded-lg overflow-hidden bg-white border grid place-items-center text-xs text-slate-600">
            🖼️
            <span>XRAY.jpg</span>
          </div>
          <div class="aspect-square rounded-lg overflow-hidden bg-white border grid place-items-center text-xs text-slate-600">
            📄
            <span>Report.docx</span>
          </div>
        </div>
      </section>

      <!-- Empty state example (hidden until needed) -->
      <section class="px-4 hidden">
        <div class="bg-white border rounded-xl p-6 text-center">
          <div class="text-3xl">🖼️</div>
          <div class="mt-2 text-sm font-medium">No media yet</div>
          <div class="text-xs text-slate-500">Upload files or connect sources to see media here.</div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
useHead({ title: 'Media – Impulse' })
</script>


