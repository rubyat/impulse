<template>
  <div class="mx-auto max-w-md px-4 pt-4 pb-24 bg-slate-50 min-h-screen">
    <div class="sticky top-0 z-10 bg-slate-50/80 backdrop-blur border-b border-slate-200">
      <div class="h-14 flex items-center">
        <NuxtLink to="/profile" class="text-xs text-slate-600">← Back</NuxtLink>
        <h1 class="text-sm font-semibold text-slate-900 mx-auto">Help</h1>
        <div class="w-10" />
      </div>
    </div>

    <div class="space-y-3 pt-3">
      <details class="bg-white border rounded-xl p-3 text-sm">
        <summary class="cursor-pointer">Account access</summary>
        <p class="mt-2 text-xs text-slate-600">Use your email or phone to sign in. For issues, try reset password.</p>
      </details>
      <details class="bg-white border rounded-xl p-3 text-sm">
        <summary class="cursor-pointer">OTP</summary>
        <p class="mt-2 text-xs text-slate-600">Codes expire in 5 minutes. Request a new one if needed.</p>
      </details>
      <details class="bg-white border rounded-xl p-3 text-sm">
        <summary class="cursor-pointer">Password reset</summary>
        <p class="mt-2 text-xs text-slate-600">Reset from the Security section or Forgot Password screen.</p>
      </details>
      <details class="bg-white border rounded-xl p-3 text-sm">
        <summary class="cursor-pointer">Data privacy</summary>
        <p class="mt-2 text-xs text-slate-600">Your data is handled per policy; this is a demo.</p>
      </details>
      <details class="bg-white border rounded-xl p-3 text-sm">
        <summary class="cursor-pointer">Payments</summary>
        <p class="mt-2 text-xs text-slate-600">View history and manage methods in Payments.</p>
      </details>
      <details class="bg-white border rounded-xl p-3 text-sm">
        <summary class="cursor-pointer">Methods</summary>
        <p class="mt-2 text-xs text-slate-600">Add a card or mobile money in Add Method.</p>
      </details>
    </div>

    <section class="mt-4 bg-white border rounded-xl p-4">
      <div class="text-xs font-semibold text-slate-800 mb-2">Contact</div>
      <div class="text-xs text-slate-600">📨 support@impulse.bd</div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({ title: 'Help – Profile+' })
</script>


