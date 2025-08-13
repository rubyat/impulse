<template>
  <div class="mx-auto max-w-md px-5 pt-10 pb-24 bg-slate-50 min-h-screen">

    <div class="mt-6 text-center">
      <img :src="logoPng" alt="Impulse Hospital" class="h-10 mx-auto" />
      <div class="text-xs text-slate-500 mt-2">Join Impulse Hospital</div>
    </div>

    <section class="mt-4 bg-white border rounded-2xl shadow-sm p-4">
      <form class="space-y-3">
        <div>
          <label class="block text-xs text-slate-600 mb-1">Full name</label>
          <input class="w-full border rounded-lg px-3 py-2 text-sm" placeholder="Aisha Rahman" />
        </div>
        <div>
          <label class="block text-xs text-slate-600 mb-1">Mobile number</label>
          <input inputmode="tel" class="w-full border rounded-lg px-3 py-2 text-sm" placeholder="01722000000" />
        </div>
        <div>
          <label class="block text-xs text-slate-600 mb-1">Password</label>
          <input type="password" class="w-full border rounded-lg px-3 py-2 text-sm" placeholder="••••••••" />
        </div>
        <div>
          <label class="block text-xs text-slate-600 mb-1">Confirm password</label>
          <input type="password" class="w-full border rounded-lg px-3 py-2 text-sm" placeholder="••••••••" />
        </div>

        <NuxtLink to="/profile" class="block w-full text-center bg-indigo-600 text-white py-2 rounded-lg text-sm">Sign up</NuxtLink>
      </form>
    </section>

    <div class="mt-6 text-center text-xs text-slate-600">
      Already have an account?
      <NuxtLink to="/profile/auth/login" class="text-indigo-600">Login</NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import logoPng from '~/assets/images/logo.png?url'
useHead({ title: 'Sign up – Profile+' })
</script>


