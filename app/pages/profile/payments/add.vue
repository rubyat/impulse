<template>
  <div class="mx-auto max-w-md px-4 pt-4 pb-24 bg-slate-50 min-h-screen">
    <div class="sticky top-0 z-10 bg-slate-50/80 backdrop-blur border-b border-slate-200">
      <div class="h-14 flex items-center">
        <NuxtLink to="/profile/payments/methods" class="text-xs text-slate-600">← Back</NuxtLink>
        <h1 class="text-sm font-semibold text-slate-900 mx-auto">Add Payment Method</h1>
        <div class="w-10" />
      </div>
    </div>

    <div class="space-y-4 pt-3">
      <div class="flex gap-2 text-xs">
        <button class="px-3 py-1 border rounded-full">Card</button>
        <button class="px-3 py-1 border rounded-full">Mobile</button>
      </div>

      <section class="bg-white border rounded-xl p-4 space-y-3">
        <div>
          <label class="block text-xs text-slate-500 mb-1">Card number</label>
          <input class="w-full border rounded-lg px-3 py-2 text-sm" placeholder="4242 4242 4242 4242" />
        </div>
        <div>
          <label class="block text-xs text-slate-500 mb-1">Name on card</label>
          <input class="w-full border rounded-lg px-3 py-2 text-sm" placeholder="Aisha Rahman" />
        </div>
        <div class="grid grid-cols-2 gap-2">
          <div>
            <label class="block text-xs text-slate-500 mb-1">Expiry</label>
            <input class="w-full border rounded-lg px-3 py-2 text-sm" placeholder="12/28" />
          </div>
          <div>
            <label class="block text-xs text-slate-500 mb-1">CVV</label>
            <input class="w-full border rounded-lg px-3 py-2 text-sm" placeholder="123" />
          </div>
        </div>
      </section>

      <NuxtLink to="/profile/payments/methods" class="block w-full text-center bg-indigo-600 text-white py-2 rounded-lg text-sm">Save</NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({ title: 'Add Method – Profile+' })
</script>


