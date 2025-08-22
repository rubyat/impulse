<template>
  <div class="min-h-screen bg-slate-50 safe-top safe-bottom">
    <!-- Top bar -->
    <div class="sticky top-0 z-10 bg-white border-b">
      <div class="mx-auto max-w-sm h-14 flex items-center justify-between ">
        <NuxtLink to="/features/health-vault" class="text-sm text-indigo-600">← Back</NuxtLink>
        <div class="text-base font-semibold">Share</div>
        <div class="w-14" />
      </div>
    </div>

    <main class="mx-auto max-w-sm pt-4 pb-24  space-y-4 text-sm">
      <section class="bg-white border rounded-xl p-4 space-y-2">
        <div class="font-medium">Create share link</div>
        <div class="flex gap-2 text-xs">
          <button class="px-3 py-1.5 rounded-full border bg-white">All records</button>
          <button class="px-3 py-1.5 rounded-full border bg-white">Selected categories</button>
        </div>
        <div class="grid grid-cols-2 gap-2 text-xs">
          <label class="flex items-center gap-2"><input type="checkbox"> Labs</label>
          <label class="flex items-center gap-2"><input type="checkbox"> Imaging</label>
          <label class="flex items-center gap-2"><input type="checkbox"> Prescriptions</label>
          <label class="flex items-center gap-2"><input type="checkbox"> Admissions</label>
          <label class="flex items-center gap-2"><input type="checkbox"> Invoices</label>
        </div>
        <input type="date" class="h-10 w-full rounded-lg border "/>
        <input placeholder="Recipient email" class="h-10 w-full rounded-lg border "/>
        <button class="h-10 rounded-lg bg-indigo-600 text-white w-full">Generate link</button>
      </section>

      <section class="bg-white border rounded-xl p-4 space-y-2">
        <div class="font-medium">Active shares</div>
        <div class="flex items-center justify-between rounded-lg border p-3">
          <div>
            <div class="text-sm">Share #1</div>
            <div class="text-xs text-slate-500">Expires in 5 days</div>
          </div>
          <button class="px-3 py-2 rounded-lg border">Revoke</button>
        </div>
        <div class="flex items-center justify-between rounded-lg border p-3">
          <div>
            <div class="text-sm">Share #2</div>
            <div class="text-xs text-slate-500">Expires in 12 days</div>
          </div>
          <button class="px-3 py-2 rounded-lg border">Revoke</button>
        </div>
      </section>
    </main>


  </div>
</template>

<script setup lang="ts"></script>


