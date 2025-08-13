<template>
  <div class="mx-auto max-w-md px-4 pt-4 pb-24 bg-white min-h-screen">
    <!-- Header -->
    <div class="sticky top-0 z-10 bg-white/80 backdrop-blur border-b border-gray-200">
      <div class="h-14 flex items-center">
        <NuxtLink to="/profile" class="text-xs text-gray-600">← Back</NuxtLink>
        <h1 class="text-sm font-semibold text-gray-900 mx-auto">Settings</h1>
        <div class="w-10" />
      </div>
    </div>

    <div class="space-y-4 pt-3">
      <!-- Account -->
      <section class="bg-white border border-gray-100 rounded-2xl p-4 space-y-3 shadow-sm">
        <div class="text-xs font-semibold text-gray-800">Account</div>
        <div class="text-sm text-gray-600">Signed in as</div>
        <div class="flex items-center gap-3">
          <div class="h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 text-sm">JD</div>
          <div class="text-sm">
            <div class="font-medium text-gray-900">Aisha Rahman</div>
            <div class="text-gray-500">aisha.rahman@example.com</div>
          </div>
        </div>
        <div class="flex gap-2 pt-2">
          <button class="px-3 py-2 border border-gray-200 rounded-lg text-sm">Manage profile</button>
          <NuxtLink to="/profile/payments/methods" class="px-3 py-2 border border-gray-200 rounded-lg text-sm">Payment methods</NuxtLink>
        </div>
      </section>

      <!-- Notifications -->
      <section class="bg-white border border-gray-100 rounded-2xl p-4 space-y-3 shadow-sm">
        <div class="text-xs font-semibold text-gray-800">Notifications</div>
        <div class="flex items-center justify-between text-sm">
          <span>Appointments</span>
          <button type="button" role="switch" :aria-checked="notifAppointments" @click="notifAppointments = !notifAppointments" :class="[notifAppointments ? 'bg-emerald-500' : 'bg-gray-200', 'relative inline-flex h-6 w-11 items-center rounded-full transition-colors']">
            <span :class="['inline-block h-5 w-5 transform rounded-full bg-white transition', notifAppointments ? 'translate-x-5' : 'translate-x-1']" />
          </button>
        </div>
        <div class="flex items-center justify-between text-sm">
          <span>Results</span>
          <button type="button" role="switch" :aria-checked="notifResults" @click="notifResults = !notifResults" :class="[notifResults ? 'bg-emerald-500' : 'bg-gray-200', 'relative inline-flex h-6 w-11 items-center rounded-full transition-colors']">
            <span :class="['inline-block h-5 w-5 transform rounded-full bg-white transition', notifResults ? 'translate-x-5' : 'translate-x-1']" />
          </button>
        </div>
        <div class="flex items-center justify-between text-sm">
          <span>Payments</span>
          <button type="button" role="switch" :aria-checked="notifPayments" @click="notifPayments = !notifPayments" :class="[notifPayments ? 'bg-emerald-500' : 'bg-gray-200', 'relative inline-flex h-6 w-11 items-center rounded-full transition-colors']">
            <span :class="['inline-block h-5 w-5 transform rounded-full bg-white transition', notifPayments ? 'translate-x-5' : 'translate-x-1']" />
          </button>
        </div>
      </section>

      <!-- Privacy -->
      <section class="bg-white border border-gray-100 rounded-2xl p-4 space-y-3 shadow-sm">
        <div class="text-xs font-semibold text-gray-800">Privacy</div>
        <div class="flex items-center justify-between text-sm">
          <span>App lock (Face ID / PIN)</span>
          <button type="button" role="switch" :aria-checked="appLock" @click="appLock = !appLock" :class="[appLock ? 'bg-emerald-500' : 'bg-gray-200', 'relative inline-flex h-6 w-11 items-center rounded-full transition-colors']">
            <span :class="['inline-block h-5 w-5 transform rounded-full bg-white transition', appLock ? 'translate-x-5' : 'translate-x-1']" />
          </button>
        </div>
        <button class="w-full border border-gray-200 rounded-lg py-2 text-sm">Data export</button>
      </section>

      <!-- Preferences -->
      <section class="bg-white border border-gray-100 rounded-2xl p-4 space-y-3 shadow-sm">
        <div class="text-xs font-semibold text-gray-800">Preferences</div>
        <div class="text-xs text-gray-500">Units</div>
        <div class="flex gap-2 text-xs">
          <button type="button" @click="selectedUnits = 'kg'" :class="buttonVariantClass(selectedUnits === 'kg')">kg</button>
          <button type="button" @click="selectedUnits = 'lb'" :class="buttonVariantClass(selectedUnits === 'lb')">lb</button>
        </div>
        <div class="text-xs text-gray-500">Date format</div>
        <div class="flex gap-2 text-xs">
          <button type="button" @click="selectedDateFormat = 'YYYY-MM-DD'" :class="buttonVariantClass(selectedDateFormat === 'YYYY-MM-DD')">YYYY-MM-DD</button>
          <button type="button" @click="selectedDateFormat = 'DD/MM/YYYY'" :class="buttonVariantClass(selectedDateFormat === 'DD/MM/YYYY')">DD/MM/YYYY</button>
        </div>
        <div class="text-xs text-gray-500">Language</div>
        <div class="flex gap-2 text-xs">
          <button type="button" @click="selectedLanguage = 'EN'" :class="buttonVariantClass(selectedLanguage === 'EN')">EN</button>
          <button type="button" @click="selectedLanguage = 'BN'" :class="buttonVariantClass(selectedLanguage === 'BN')">BN</button>
        </div>
      </section>

      <NuxtLink to="/profile" class="block w-full text-center bg-emerald-500 text-white py-2 rounded-xl text-sm">Save</NuxtLink>
    </div>
  </div>
  
</template>

<script setup lang="ts">
import { ref } from 'vue'

// Defaults for Bangladesh
const selectedUnits = ref<'kg' | 'lb'>('kg')
const selectedDateFormat = ref<'YYYY-MM-DD' | 'DD/MM/YYYY'>('DD/MM/YYYY')
const selectedLanguage = ref<'EN' | 'BN'>('BN')

const notifAppointments = ref(true)
const notifResults = ref(false)
const notifPayments = ref(true)
const appLock = ref(false)

function buttonVariantClass(active: boolean) {
  return [
    'px-3 py-1 rounded-full border',
    active ? 'bg-emerald-500 border-emerald-500 text-white' : 'border-gray-200 bg-white text-gray-700'
  ]
}

useHead({ title: 'Settings – Profile+' })
</script>


