<template>
  <div class="mx-auto max-w-md px-5 pt-10 pb-24 bg-slate-50 min-h-screen">

    <div class="mt-6 text-center">
      <img :src="logoPng" alt="Impulse Hospital" class="h-10 mx-auto" />
      <div class="text-xs text-slate-500 mt-2">We will send a reset link/code</div>
    </div>

    <section class="mt-4 bg-white border rounded-2xl shadow-sm p-4">
      <form class="space-y-3">
        <div>
          <label class="block text-xs text-slate-600 mb-1">Mobile number</label>
          <input inputmode="tel" class="w-full border rounded-lg px-3 py-2 text-sm" placeholder="01722000000" />
        </div>

        <NuxtLink to="/profile/auth/reset" class="block w-full text-center bg-indigo-600 text-white py-2 rounded-lg text-sm">Send code</NuxtLink>
      </form>
    </section>

    <div class="mt-6 text-center text-xs text-slate-600">
      Remembered your password?
      <NuxtLink to="/profile/auth/login" class="text-indigo-600">Back to login</NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import logoPng from '~/assets/images/logo.png?url'
useHead({ title: 'Forgot – Profile+' })
</script>


