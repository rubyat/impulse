<template>
  <div class="min-h-screen bg-gray-50 safe-top safe-bottom">
    <main class="mx-auto max-w-sm pb-24 pt-4 space-y-4">
      <section class="bg-white border border-slate-200 rounded-xl p-4">
        <div class="flex items-center gap-4">
          <div class="size-20 grid place-items-center rounded-full bg-emerald-50 text-emerald-600 text-2xl font-bold">B+</div>
          <div class="text-sm">
            <div class="font-medium">Overall: Good</div>
            <div class="text-slate-600">Next step: complete baseline labs</div>
          </div>
        </div>
        <div class="mt-4 grid gap-2 text-sm">
          <div class="flex items-center justify-between"><span>Age factor</span><span class="font-medium">A</span></div>
          <div class="flex items-center justify-between"><span>Cycle regularity</span><span class="font-medium">B</span></div>
          <div class="flex items-center justify-between"><span>AMH</span><span class="font-medium text-amber-600">Missing</span></div>
          <div class="flex items-center justify-between"><span>AFC</span><span class="font-medium">B</span></div>
          <div class="flex items-center justify-between"><span>BMI</span><span class="font-medium">B+</span></div>
        </div>
        <NuxtLink to="/features/cycle-fertility/packages" class="mt-4 h-12 grid place-items-center rounded-lg bg-indigo-600 text-white">View diagnostic packages</NuxtLink>
      </section>

      <section class="bg-white border border-slate-200 rounded-xl p-4">
        <div class="text-sm font-medium mb-2">Improve score</div>
        <ul class="list-disc pl-5 text-sm text-slate-700 space-y-2">
          <li>Upload recent labs (AMH, TSH)</li>
          <li>Track basal temperature this cycle</li>
          <li>Book OB-GYN consultation if irregularities persist</li>
        </ul>
        <div class="mt-3 flex gap-2">
          <NuxtLink to="/features/cycle-fertility/results" class="px-3 py-2 rounded-lg border bg-white text-sm">Upload labs</NuxtLink>
          <NuxtLink to="/features/cycle-fertility/booking" class="px-3 py-2 rounded-lg bg-indigo-600 text-white text-sm">Book consult</NuxtLink>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts"></script>


