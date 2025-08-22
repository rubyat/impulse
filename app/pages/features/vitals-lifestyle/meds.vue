<template>
  <div class="min-h-screen bg-gray-50 safe-top safe-bottom">
    <!-- Top bar -->
    <div class="sticky top-0 z-10 bg-white border-b">
      <div class="mx-auto max-w-sm h-14  flex items-center justify-between">
        <NuxtLink to="/features/vitals-lifestyle" class="text-sm text-indigo-600">← Back</NuxtLink>
        <div class="text-base font-semibold">Medication</div>
        <div class="w-14" />
      </div>
    </div>
    <div class="mx-auto max-w-sm  pt-4 pb-24 space-y-4 text-sm">
      <!-- Existing meds -->
      <div class="bg-white border rounded-xl p-4">
        <div class="font-medium">Metformin 500 mg</div>
        <div class="text-xs text-slate-500">08:00 • Every morning</div>
        <div class="mt-3 flex gap-2">
          <button
            type="button"
            @click="firstMedsStatus = 'taken'"
            :class="[
              'px-3 py-2 rounded-lg',
              firstMedsStatus === 'taken' ? 'bg-indigo-600 text-white' : 'border'
            ]"
          >
            Taken
          </button>
          <button
            type="button"
            @click="firstMedsStatus = 'snoozed'"
            :class="[
              'px-3 py-2 rounded-lg',
              firstMedsStatus === 'snoozed' ? 'bg-indigo-50 text-indigo-700 border-indigo-600 border' : 'border'
            ]"
          >
            Snooze
          </button>
        </div>
      </div>

      <div class="bg-white border rounded-xl p-4">
        <div class="font-medium">Atorvastatin 20 mg</div>
        <div class="text-xs text-slate-500">21:00 • Daily</div>
        <div class="mt-3 flex gap-2">
          <button
            type="button"
            @click="secondMedsStatus = 'taken'"
            :class="[
              'px-3 py-2 rounded-lg',
              secondMedsStatus === 'taken' ? 'bg-indigo-600 text-white' : 'border'
            ]"
          >
            Taken
          </button>
          <button
            type="button"
            @click="secondMedsStatus = 'snoozed'"
            :class="[
              'px-3 py-2 rounded-lg',
              secondMedsStatus === 'snoozed' ? 'bg-indigo-50 text-indigo-700 border-indigo-600 border' : 'border'
            ]"
          >
            Snooze
          </button>
        </div>
      </div>

      <!-- Add reminder form -->
      <div class="bg-white border rounded-xl p-4 space-y-2">
        <div class="font-medium">Add reminder</div>
        <input v-model="newMedName" type="text" placeholder="Medicine name" class="h-10 w-full rounded-lg border px-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300" />
        <input v-model="newMedTime" type="time" class="h-10 w-full rounded-lg border px-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300" />
        <select v-model="newMedSchedule" class="h-10 w-full rounded-lg border px-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300">
          <option>Daily</option>
          <option>Weekdays</option>
          <option>Weekly</option>
        </select>
        <NuxtLink to="/features/vitals-lifestyle" class="mt-2 inline-block px-3 py-2 rounded-lg bg-indigo-600 text-white">Save</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const firstMedsStatus = ref<'taken' | 'snoozed'>('taken')
const secondMedsStatus = ref<'taken' | 'snoozed'>('taken')

const newMedName = ref('')
const newMedTime = ref('')
const newMedSchedule = ref('Daily')
</script>


