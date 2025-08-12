<template>
  <div class="min-h-screen bg-gray-50 safe-top safe-bottom">
    <main class="mx-auto max-w-sm pb-24 pt-4 space-y-4">
      <section class="bg-white border rounded-xl p-4">
        <label class="block text-sm font-medium">Visit Type</label>
        <div class="mt-2 grid grid-cols-2 gap-2">
          <button class="h-10 rounded-lg border bg-white">Video</button>
          <button class="h-10 rounded-lg border bg-white">In-person</button>
        </div>

        <label class="block text-sm font-medium mt-4">Reason</label>
        <select class="mt-2 w-full h-12 rounded-lg border px-3 text-sm">
          <option>Irregular cycles</option>
          <option>Trying to conceive</option>
          <option>IVF consult</option>
        </select>
      </section>

      <section class="bg-white border rounded-xl p-4">
        <div class="text-sm font-medium">Providers</div>
        <a href="#" class="mt-2 block p-3 border rounded-lg">
          <div class="text-sm font-medium">Dr. Ayesha Rahman</div>
          <div class="text-xs text-slate-500">OB-GYN • 4.8 ★</div>
        </a>
        <a href="#" class="mt-2 block p-3 border rounded-lg">
          <div class="text-sm font-medium">Dr. Neha S.</div>
          <div class="text-xs text-slate-500">Fertility Specialist • 4.9 ★</div>
        </a>
      </section>

      <section class="bg-white border rounded-xl p-4">
        <div class="text-sm font-medium">Available slots</div>
        <div class="mt-2 grid grid-cols-3 gap-2">
          <button class="h-10 rounded-lg border">10:30</button>
          <button class="h-10 rounded-lg border">11:15</button>
          <button class="h-10 rounded-lg border">12:00</button>
          <button class="h-10 rounded-lg border">15:30</button>
          <button class="h-10 rounded-lg border">16:15</button>
          <button class="h-10 rounded-lg border">17:00</button>
        </div>
      </section>

      <NuxtLink to="/features/cycle-fertility/checkout" class="h-12 grid place-items-center rounded-lg bg-indigo-600 text-white">Continue</NuxtLink>
    </main>
  </div>
</template>

<script setup lang="ts"></script>


