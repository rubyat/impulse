<template>
  <div class="min-h-screen bg-gray-50 safe-top safe-bottom">
    <main class="mx-auto max-w-sm pb-24 pt-4 space-y-4">
      <section class="bg-white border rounded-xl p-4 text-sm">
        <div class="flex items-center justify-between">
          <div>Fertility Baseline</div>
          <div class="font-medium">৳8,000 <span class="line-through text-slate-400 ml-1">৳10,000</span></div>
        </div>
        <div class="mt-2 text-xs text-slate-500">Includes AMH, TSH, Prolactin + Ultrasound</div>
      </section>

      <section class="bg-white border rounded-xl p-4">
        <label class="block text-sm font-medium">Apply discount</label>
        <input v-model="discountCode" placeholder="Enter code" class="mt-2 w-full h-12 rounded-lg border px-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300" />
      </section>

      <section class="bg-white border rounded-xl p-4">
        <label class="block text-sm font-medium">Payment method</label>
        <div class="mt-2 grid grid-cols-2 gap-2">
          <button
            type="button"
            @click="selectedPaymentMethod = 'card'"
            :class="[
              'h-10 rounded-lg border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300',
              selectedPaymentMethod === 'card' ? 'border-indigo-600 bg-indigo-50 text-indigo-700' : ''
            ]"
          >
            Card
          </button>
          <button
            type="button"
            @click="selectedPaymentMethod = 'mobile'"
            :class="[
              'h-10 rounded-lg border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300',
              selectedPaymentMethod === 'mobile' ? 'border-indigo-600 bg-indigo-50 text-indigo-700' : ''
            ]"
          >
            Mobile
          </button>
        </div>
      </section>

      <NuxtLink to="/features/cycle-fertility/results" class="h-12 grid place-items-center rounded-lg bg-emerald-600 text-white">Pay & Continue</NuxtLink>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const discountCode = ref('')
const selectedPaymentMethod = ref<'card' | 'mobile'>('card')
</script>


