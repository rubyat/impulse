<template>
  <div class="mx-auto max-w-md px-4 pt-4 pb-24 bg-slate-50 min-h-screen">

    <form class="space-y-4 pt-3">
      <section class="bg-white border rounded-xl p-4 space-y-3">
        <div>
          <label class="block text-xs text-slate-500 mb-1">New password</label>
          <input type="password" class="w-full border rounded-lg px-3 py-2 text-sm" placeholder="••••••••" />
        </div>
        <div>
          <label class="block text-xs text-slate-500 mb-1">Confirm new password</label>
          <input type="password" class="w-full border rounded-lg px-3 py-2 text-sm" placeholder="••••••••" />
        </div>
      </section>

      <NuxtLink to="/profile" class="block w-full text-center bg-indigo-600 text-white py-2 rounded-lg text-sm">Save</NuxtLink>
    </form>
  </div>
</template>

<script setup lang="ts">
useHead({ title: 'Reset – Profile+' })
</script>


