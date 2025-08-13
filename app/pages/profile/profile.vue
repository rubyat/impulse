<template>
  <div class="mx-auto max-w-md px-4 pt-4 pb-24 bg-slate-50 min-h-screen">
    <div class="sticky top-0 z-10 bg-slate-50/80 backdrop-blur border-b border-slate-200">
      <div class="h-14 flex items-center">
        <NuxtLink to="/profile" class="text-xs text-slate-600">← Back</NuxtLink>
        <h1 class="text-sm font-semibold text-slate-900 mx-auto">Profile</h1>
        <div class="w-10" />
      </div>
    </div>

    <div class="space-y-4 pt-3">
      <section class="bg-white border rounded-xl p-4">
        <div class="flex items-center gap-3">
          <div class="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 text-base font-semibold">A</div>
          <div>
            <div class="text-sm font-medium">Aisha Rahman</div>
            <div class="text-xs text-slate-500">👤 ID: 12345</div>
          </div>
        </div>
      </section>

      <section class="bg-white border rounded-xl p-4">
        <div class="space-y-2 text-sm">
          <div class="flex justify-between"><span class="text-slate-500">DOB</span><span>1992-06-15</span></div>
          <div class="flex justify-between"><span class="text-slate-500">Gender</span><span>Female</span></div>
          <div class="flex justify-between"><span class="text-slate-500">Phone</span><span>+880 1712-345678</span></div>
          <div class="flex justify-between"><span class="text-slate-500">Email</span><span>aisha.rahman@example.com</span></div>
          <div class="flex justify-between"><span class="text-slate-500">Address</span><span>House 12, Road 7, Dhanmondi, Dhaka</span></div>
        </div>
      </section>

      <section class="bg-white border rounded-xl p-4">
        <div class="text-xs font-semibold text-slate-800 mb-2">Identifiers</div>
        <div class="space-y-2 text-sm">
          <div class="flex justify-between"><span class="text-slate-500">MRN</span><span>MRN-001234</span></div>
          <div class="flex justify-between"><span class="text-slate-500">Insurance ID</span><span>INS-567890</span></div>
        </div>
      </section>

      <NuxtLink to="/profile/profile-edit" class="block text-center text-xs text-indigo-600">Edit profile →</NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({ title: 'Profile – Profile+' })
</script>


