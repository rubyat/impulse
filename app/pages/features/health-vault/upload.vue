<template>
  <div class="min-h-screen bg-slate-50 safe-top safe-bottom">
    <!-- Top bar -->
    <div class="sticky top-0 z-10 bg-white border-b">
      <div class="mx-auto max-w-sm h-14 flex items-center justify-between ">
        <NuxtLink to="/features/health-vault" class="text-sm text-indigo-600">← Back</NuxtLink>
        <div class="text-base font-semibold">Upload</div>
        <div class="w-14" />
      </div>
    </div>

    <main class="mx-auto max-w-sm pt-4 pb-24  space-y-4 text-sm">
      <section class="bg-white border rounded-xl p-4 space-y-2">
        <div class="font-medium">File</div>
        <div class="h-56 rounded-lg bg-slate-50 border grid place-items-center text-xs text-slate-500">Preview</div>
        <button class="h-10 rounded-lg border bg-white">Choose file</button>
      </section>

      <section class="bg-white border rounded-xl p-4 space-y-2">
        <div class="font-medium">Details</div>
        <select class="h-10 w-full rounded-lg border ">
          <option>Labs</option>
          <option>Imaging</option>
          <option>Prescriptions</option>
          <option>Admissions</option>
          <option>Invoices</option>
        </select>
        <input type="date" class="h-10 w-full rounded-lg border "/>
        <input placeholder="Provider" class="h-10 w-full rounded-lg border "/>
        <textarea placeholder="Notes" class="w-full rounded-lg border  h-24"></textarea>
      </section>

      <NuxtLink to="/features/health-vault/records" class="h-12 rounded-lg bg-indigo-600 text-white grid place-items-center">Save</NuxtLink>
    </main>


  </div>
</template>

<script setup lang="ts"></script>


