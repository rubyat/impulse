<template>
  <div class="mx-auto max-w-md px-4 pt-4 pb-24 bg-slate-50 min-h-screen">
    <div class="sticky top-0 z-10 bg-slate-50/80 backdrop-blur border-b border-slate-200">
      <div class="h-14 flex items-center">
        <NuxtLink to="/profile/profile" class="text-xs text-slate-600">← Back</NuxtLink>
        <h1 class="text-sm font-semibold text-slate-900 mx-auto">Edit Profile</h1>
        <div class="w-10" />
      </div>
    </div>

    <form class="space-y-4 pt-3">
      <section class="bg-white border rounded-xl p-4 space-y-3">
        <div>
          <label class="block text-xs text-slate-500 mb-1">Name</label>
          <input class="w-full border rounded-lg px-3 py-2 text-sm" placeholder="Aisha Rahman" />
        </div>
        <div>
          <label class="block text-xs text-slate-500 mb-1">DOB</label>
          <input class="w-full border rounded-lg px-3 py-2 text-sm" placeholder="1992-06-15" />
        </div>
        <div>
          <label class="block text-xs text-slate-500 mb-1">Gender</label>
          <input class="w-full border rounded-lg px-3 py-2 text-sm" placeholder="Female" />
        </div>
        <div>
          <label class="block text-xs text-slate-500 mb-1">Phone</label>
          <input class="w-full border rounded-lg px-3 py-2 text-sm" placeholder="+880 1712-345678" />
        </div>
        <div>
          <label class="block text-xs text-slate-500 mb-1">Email</label>
          <input class="w-full border rounded-lg px-3 py-2 text-sm" placeholder="aisha.rahman@example.com" />
        </div>
        <div>
          <label class="block text-xs text-slate-500 mb-1">Address</label>
          <textarea class="w-full border rounded-lg px-3 py-2 text-sm" placeholder="House 12, Road 7, Dhanmondi, Dhaka" />
        </div>
      </section>

      <NuxtLink to="/profile/profile" class="block w-full text-center bg-indigo-600 text-white py-2 rounded-lg text-sm">Save</NuxtLink>
    </form>
  </div>
</template>

<script setup lang="ts">
useHead({ title: 'Edit Profile – Profile+' })
</script>


