<template>
  <div class="min-h-screen bg-slate-50 safe-top safe-bottom">
    <!-- Top bar -->
    <div class="sticky top-0 z-10 bg-white border-b">
      <div class="mx-auto max-w-sm h-14 flex items-center justify-between ">
        <NuxtLink to="/features/ai-triage-nudges" class="text-sm text-indigo-600">← Back</NuxtLink>
        <div class="text-base font-semibold">Checkout</div>
        <div class="w-14" />
      </div>
    </div>
    <main class="mx-auto max-w-sm pt-4 pb-24  space-y-4 text-sm">
      <div class="bg-white border rounded-xl p-4">
        <div class="font-medium">Cart summary</div>
        <div class="text-xs text-slate-600">Selected package/visit shown here.</div>
      </div>
      <div class="bg-white border rounded-xl p-4 space-y-2">
        <div class="font-medium">Discount code</div>
        <input placeholder="Enter code" class="h-10 w-full rounded-lg border px-3" />
      </div>
      <div class="bg-white border rounded-xl p-4 space-y-2">
        <div class="font-medium">Payment</div>
        <div class="grid grid-cols-2 gap-2">
          <button class="h-10 rounded-lg border">Card</button>
          <button class="h-10 rounded-lg border">Mobile</button>
        </div>
      </div>
      <NuxtLink to="/features/ai-triage-nudges/history" class="h-12 rounded-lg bg-emerald-600 text-white grid place-items-center">Confirm & Finish</NuxtLink>
    </main>


  </div>
</template>

<script setup lang="ts"></script>


