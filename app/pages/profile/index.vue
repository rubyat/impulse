<template>
  <div class="mx-auto max-w-md px-4 pt-4 pb-24 bg-slate-50 min-h-screen">
    <div class="sticky top-0 z-10 bg-slate-50/80 backdrop-blur supports-[backdrop-filter]:bg-slate-50/60 border-b border-slate-200">
      <div class="h-14 flex items-center justify-between">
        <h1 class="text-sm font-semibold text-slate-900">My Profile</h1>
        <NuxtLink to="/profile/help" class="text-xs text-indigo-600">Help</NuxtLink>
      </div>
    </div>

    <div class="space-y-4 pt-3">
      <section class="bg-white border rounded-xl p-4">
        <div class="flex items-center gap-3">
          <div class="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 text-base font-semibold">A</div>
          <div>
            <div class="text-sm font-medium text-slate-900">Welcome, Aisha</div>
            <div class="text-xs text-slate-500">Have a healthy day 👋</div>
          </div>
        </div>
        <div class="mt-3 grid grid-cols-2 gap-2 text-xs">
          <NuxtLink to="/profile/profile" class="px-3 py-2 border rounded-lg text-slate-700">View profile →</NuxtLink>
          <NuxtLink to="/profile/profile-edit" class="px-3 py-2 border rounded-lg text-slate-700">Edit profile →</NuxtLink>
        </div>
      </section>

      <section class="bg-white border rounded-xl p-4">
        <div class="text-xs font-semibold text-slate-800 mb-3">Quick access</div>
        <div class="grid grid-cols-3 gap-2 text-[11px]">
          <NuxtLink to="/profile/history/diagnostics" class="border rounded-lg p-3 text-center">
            <div class="text-xl mb-1">🧪</div>
            <div>Diagnostics</div>
          </NuxtLink>
          <NuxtLink to="/profile/history/labs" class="border rounded-lg p-3 text-center">
            <div class="text-xl mb-1">🩻</div>
            <div>Lab reports</div>
          </NuxtLink>
          <NuxtLink to="/profile/history/prescriptions" class="border rounded-lg p-3 text-center">
            <div class="text-xl mb-1">💊</div>
            <div>Prescriptions</div>
          </NuxtLink>
          <NuxtLink to="/profile/history/treatments" class="border rounded-lg p-3 text-center">
            <div class="text-xl mb-1">🏥</div>
            <div>Treatments</div>
          </NuxtLink>
          <NuxtLink to="/profile/history/payments" class="border rounded-lg p-3 text-center">
            <div class="text-xl mb-1">🧾</div>
            <div>Payments</div>
          </NuxtLink>
          <NuxtLink to="/profile/payments/methods" class="border rounded-lg p-3 text-center">
            <div class="text-xl mb-1">💳</div>
            <div>Methods</div>
          </NuxtLink>
        </div>
      </section>

      <section class="bg-white border rounded-xl p-4">
        <div class="text-xs font-semibold text-slate-800 mb-3">Security</div>
        <div class="flex items-center justify-between text-sm">
          <div class="text-slate-700">Two-factor authentication</div>
          <div class="text-emerald-600 text-xs">Enabled</div>
        </div>
        <div class="mt-3">
          <NuxtLink to="/profile/auth/reset" class="text-xs text-indigo-600">Change password →</NuxtLink>
        </div>
      </section>
    </div>
  </div>
  
</template>

<script setup lang="ts">
useHead({ title: 'Profile – Profile+' })
</script>


