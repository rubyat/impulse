<template>
  <div class="min-h-screen bg-gray-50 safe-top safe-bottom">
    <main class="mx-auto max-w-sm pb-24 pt-4 space-y-4">
      <section class="bg-white border rounded-xl p-4">
        <label class="block text-sm font-medium">Visit Type</label>
        <div class="mt-2 grid grid-cols-2 gap-2">
          <button
            type="button"
            @click="selectedVisitType = 'video'"
            :class="[
              'h-10 rounded-lg border bg-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300',
              selectedVisitType === 'video' ? 'border-indigo-600 bg-indigo-50 text-indigo-700' : ''
            ]"
          >
            Video
          </button>
          <button
            type="button"
            @click="selectedVisitType = 'inperson'"
            :class="[
              'h-10 rounded-lg border bg-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300',
              selectedVisitType === 'inperson' ? 'border-indigo-600 bg-indigo-50 text-indigo-700' : ''
            ]"
          >
            In-person
          </button>
        </div>

        <label class="block text-sm font-medium mt-4">Reason</label>
        <select v-model="selectedReason" class="mt-2 w-full h-12 rounded-lg border px-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300">
          <option>Irregular cycles</option>
          <option>Trying to conceive</option>
          <option>IVF consult</option>
        </select>
      </section>

      <section class="bg-white border rounded-xl p-4">
        <div class="text-sm font-medium">Providers</div>
        <button
          type="button"
          @click="selectedProviderId = 'ayesha'"
          :class="[
            'mt-2 block w-full text-left p-3 border rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300',
            selectedProviderId === 'ayesha' ? 'border-indigo-600 bg-indigo-50 ring-2 ring-indigo-100' : ''
          ]"
        >
          <div class="text-sm font-medium">Dr. Ayesha Rahman</div>
          <div class="text-xs text-slate-500">OB-GYN • 4.8 ★</div>
        </button>
        <button
          type="button"
          @click="selectedProviderId = 'neha'"
          :class="[
            'mt-2 block w-full text-left p-3 border rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300',
            selectedProviderId === 'neha' ? 'border-indigo-600 bg-indigo-50 ring-2 ring-indigo-100' : ''
          ]"
        >
          <div class="text-sm font-medium">Dr. Neha S.</div>
          <div class="text-xs text-slate-500">Fertility Specialist • 4.9 ★</div>
        </button>
      </section>

      <section class="bg-white border rounded-xl p-4">
        <div class="text-sm font-medium">Available slots</div>
        <div class="mt-2 grid grid-cols-3 gap-2">
          <button
            type="button"
            @click="selectedSlot = '10:30'"
            :class="[
              'h-10 rounded-lg border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300',
              selectedSlot === '10:30' ? 'border-indigo-600 bg-indigo-50 text-indigo-700' : ''
            ]"
          >
            10:30
          </button>
          <button
            type="button"
            @click="selectedSlot = '11:15'"
            :class="[
              'h-10 rounded-lg border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300',
              selectedSlot === '11:15' ? 'border-indigo-600 bg-indigo-50 text-indigo-700' : ''
            ]"
          >
            11:15
          </button>
          <button
            type="button"
            @click="selectedSlot = '12:00'"
            :class="[
              'h-10 rounded-lg border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300',
              selectedSlot === '12:00' ? 'border-indigo-600 bg-indigo-50 text-indigo-700' : ''
            ]"
          >
            12:00
          </button>
          <button
            type="button"
            @click="selectedSlot = '15:30'"
            :class="[
              'h-10 rounded-lg border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300',
              selectedSlot === '15:30' ? 'border-indigo-600 bg-indigo-50 text-indigo-700' : ''
            ]"
          >
            15:30
          </button>
          <button
            type="button"
            @click="selectedSlot = '16:15'"
            :class="[
              'h-10 rounded-lg border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300',
              selectedSlot === '16:15' ? 'border-indigo-600 bg-indigo-50 text-indigo-700' : ''
            ]"
          >
            16:15
          </button>
          <button
            type="button"
            @click="selectedSlot = '17:00'"
            :class="[
              'h-10 rounded-lg border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300',
              selectedSlot === '17:00' ? 'border-indigo-600 bg-indigo-50 text-indigo-700' : ''
            ]"
          >
            17:00
          </button>
        </div>
      </section>

      <NuxtLink to="/features/cycle-fertility/checkout" class="h-12 grid place-items-center rounded-lg bg-indigo-600 text-white">Continue</NuxtLink>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const selectedVisitType = ref<'video' | 'inperson'>('video')
const selectedReason = ref('Irregular cycles')
const selectedProviderId = ref<'ayesha' | 'neha'>('ayesha')
const selectedSlot = ref('10:30')
</script>


