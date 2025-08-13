<template>
  <div class="mx-auto max-w-md px-5 pt-10 pb-24 bg-slate-50 min-h-screen">

    <div class="mt-6 text-center">
      <img :src="logoPng" alt="Impulse Hospital" class="h-10 mx-auto" />

    </div>

    <section class="mt-4 bg-white border rounded-2xl shadow-sm p-4">
      <div class="text-sm font-medium text-slate-900">Welcome back</div>
      <div class="text-xs text-slate-500 mt-0.5">Sign in to continue to your profile</div>

      <form class="mt-4 space-y-3">
        <div>
          <label class="block text-xs text-slate-600 mb-1">Mobile number</label>
          <div class="flex">
            <input inputmode="tel" class="flex-1 border rounded-lg px-3 py-2 text-sm" placeholder="01722000000" />
          </div>
        </div>
        <div>
          <label class="block text-xs text-slate-600 mb-1">Password</label>
          <div class="relative">
            <input type="password" class="w-full border rounded-lg px-3 py-2 pr-10 text-sm" placeholder="••••••••" />
            <button type="button" class="absolute inset-y-0 right-0 px-3 text-xs text-slate-500">🔐</button>
          </div>
          <div class="mt-2 text-right">
            <NuxtLink to="/profile/auth/forgot" class="text-xs text-indigo-600">Forgot password?</NuxtLink>
          </div>
        </div>

        <NuxtLink
          to="/profile"
          class="block w-full text-center bg-indigo-600 text-white py-2 rounded-lg text-sm mt-2"
        >Login</NuxtLink>
      </form>
    </section>

    <div class="mt-3 text-center text-xs text-slate-500">or continue with</div>
    <div class="mt-2 grid grid-cols-3 gap-2">
      <button type="button" class="border bg-white rounded-lg py-2 text-xs">🟥 Google</button>
      <button type="button" class="border bg-white rounded-lg py-2 text-xs"> Apple</button>
      <button type="button" class="border bg-white rounded-lg py-2 text-xs">🔵 Facebook</button>
    </div>

    <div class="mt-6 text-center text-xs text-slate-600">
      Don’t have an account?
      <NuxtLink to="/profile/auth/signup" class="text-indigo-600">Create one</NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import logoPng from '~/assets/images/logo.png?url'
useHead({ title: 'Login – Profile+' })
</script>


