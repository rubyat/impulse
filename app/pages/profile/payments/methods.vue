<template>
  <div class="mx-auto max-w-md px-4 pt-4 pb-24 bg-slate-50 min-h-screen">
    <div class="sticky top-0 z-10 bg-slate-50/80 backdrop-blur border-b border-slate-200">
      <div class="h-14 flex items-center">
        <NuxtLink to="/profile" class="text-xs text-slate-600">← Back</NuxtLink>
        <h1 class="text-sm font-semibold text-slate-900 mx-auto">Payment Methods</h1>
        <div class="w-10" />
      </div>
    </div>

    <div class="space-y-4 pt-3">
      <div class="bg-white border rounded-xl divide-y">
        <div class="p-4 flex items-center justify-between">
          <div>
            <div class="text-sm font-medium">Card •••• 4242</div>
            <div class="text-xs text-slate-500">Default</div>
          </div>
          <span class="text-xs text-emerald-600 border border-emerald-200 rounded-full px-2 py-0.5">Default</span>
        </div>
        <div class="p-4 flex items-center justify-between">
          <div>
            <div class="text-sm font-medium">Mobile Money •••• 7788</div>
            <div class="text-xs text-slate-500">Secondary</div>
          </div>
          <button class="text-xs border px-2 py-1 rounded-lg">Remove</button>
        </div>
      </div>

      <NuxtLink to="/profile/payments/add" class="block text-center text-xs text-indigo-600">Add new method →</NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({ title: 'Payment Methods – Profile+' })
</script>


