<template>
  <div class="min-h-screen bg-gray-50 safe-top safe-bottom">
    <main class="mx-auto max-w-sm pb-24 pt-4 space-y-4">
      <!-- Tabs (anchors) -->
      <div class="grid grid-cols-3 gap-2">
        <a
          id="period"
          href="#period"
          @click.prevent="selectedTab = 'period'"
          :class="[
            'h-10 grid place-items-center rounded-lg text-sm transition-colors',
            selectedTab === 'period' ? 'bg-indigo-600 text-white' : 'bg-white border'
          ]"
        >
          Period
        </a>
        <a
          id="temp"
          href="#temp"
          @click.prevent="selectedTab = 'temp'"
          :class="[
            'h-10 grid place-items-center rounded-lg text-sm transition-colors',
            selectedTab === 'temp' ? 'bg-indigo-600 text-white' : 'bg-white border'
          ]"
        >
          Basal temp
        </a>
        <a
          id="opk"
          href="#opk"
          @click.prevent="selectedTab = 'opk'"
          :class="[
            'h-10 grid place-items-center rounded-lg text-sm transition-colors',
            selectedTab === 'opk' ? 'bg-indigo-600 text-white' : 'bg-white border'
          ]"
        >
          OPK
        </a>
      </div>

      <!-- Period -->
      <section class="bg-white border rounded-xl p-4" id="period-pane">
        <label class="block text-sm font-medium">Flow</label>
        <div class="mt-2 grid grid-cols-4 gap-2">
          <button
            type="button"
            @click="selectedFlow = 'Spotting'"
            :class="[
              'h-10 rounded-lg border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300',
              selectedFlow === 'Spotting' ? 'border-indigo-600 bg-indigo-50 text-indigo-700' : ''
            ]"
          >
            Spotting
          </button>
          <button
            type="button"
            @click="selectedFlow = 'Light'"
            :class="[
              'h-10 rounded-lg border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300',
              selectedFlow === 'Light' ? 'border-indigo-600 bg-indigo-50 text-indigo-700' : ''
            ]"
          >
            Light
          </button>
          <button
            type="button"
            @click="selectedFlow = 'Medium'"
            :class="[
              'h-10 rounded-lg border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300',
              selectedFlow === 'Medium' ? 'border-indigo-600 bg-indigo-50 text-indigo-700' : ''
            ]"
          >
            Medium
          </button>
          <button
            type="button"
            @click="selectedFlow = 'Heavy'"
            :class="[
              'h-10 rounded-lg border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300',
              selectedFlow === 'Heavy' ? 'border-indigo-600 bg-indigo-50 text-indigo-700' : ''
            ]"
          >
            Heavy
          </button>
        </div>
        <label class="block text-sm font-medium mt-4">Symptoms</label>
        <div class="mt-2 grid grid-cols-3 gap-2 text-sm">
          <button
            type="button"
            @click="toggleSymptom('Cramps')"
            :class="[
              'h-10 rounded-lg border transition-colors',
              selectedSymptoms.includes('Cramps') ? 'border-indigo-600 bg-indigo-50 text-indigo-700' : ''
            ]"
          >
            Cramps
          </button>
          <button
            type="button"
            @click="toggleSymptom('Headache')"
            :class="[
              'h-10 rounded-lg border transition-colors',
              selectedSymptoms.includes('Headache') ? 'border-indigo-600 bg-indigo-50 text-indigo-700' : ''
            ]"
          >
            Headache
          </button>
          <button
            type="button"
            @click="toggleSymptom('Fatigue')"
            :class="[
              'h-10 rounded-lg border transition-colors',
              selectedSymptoms.includes('Fatigue') ? 'border-indigo-600 bg-indigo-50 text-indigo-700' : ''
            ]"
          >
            Fatigue
          </button>
          <button
            type="button"
            @click="toggleSymptom('Bloating')"
            :class="[
              'h-10 rounded-lg border transition-colors',
              selectedSymptoms.includes('Bloating') ? 'border-indigo-600 bg-indigo-50 text-indigo-700' : ''
            ]"
          >
            Bloating
          </button>
          <button
            type="button"
            @click="toggleSymptom('Back pain')"
            :class="[
              'h-10 rounded-lg border transition-colors',
              selectedSymptoms.includes('Back pain') ? 'border-indigo-600 bg-indigo-50 text-indigo-700' : ''
            ]"
          >
            Back pain
          </button>
          <button
            type="button"
            @click="toggleSymptom('Mood')"
            :class="[
              'h-10 rounded-lg border transition-colors',
              selectedSymptoms.includes('Mood') ? 'border-indigo-600 bg-indigo-50 text-indigo-700' : ''
            ]"
          >
            Mood
          </button>
        </div>
        <NuxtLink to="/features/cycle-fertility" class="mt-4 h-12 grid place-items-center rounded-lg bg-indigo-600 text-white">Save</NuxtLink>
      </section>

      <!-- Basal Temp -->
      <section class="bg-white border rounded-xl p-4" id="temp">
        <label class="block text-sm font-medium">Temperature (°C)</label>
        <input v-model="tempValue" type="number" step="0.01" placeholder="e.g., 36.55" class="mt-2 w-full h-12 rounded-lg border px-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300" />
        <details class="mt-3">
          <summary class="text-sm text-slate-600">Tips for consistency</summary>
          <div class="text-xs text-slate-500 mt-2">Measure at the same time every morning before getting out of bed.</div>
        </details>
        <NuxtLink to="/features/cycle-fertility" class="mt-4 h-12 grid place-items-center rounded-lg bg-indigo-600 text-white">Save</NuxtLink>
      </section>

      <!-- OPK -->
      <section class="bg-white border rounded-xl p-4" id="opk">
        <label class="block text-sm font-medium">OPK Result</label>
        <div class="mt-2 grid grid-cols-3 gap-2">
          <button
            type="button"
            @click="selectedOpk = 'Negative'"
            :class="[
              'h-10 rounded-lg border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300',
              selectedOpk === 'Negative' ? 'border-indigo-600 bg-indigo-50 text-indigo-700' : ''
            ]"
          >
            Negative
          </button>
          <button
            type="button"
            @click="selectedOpk = 'High'"
            :class="[
              'h-10 rounded-lg border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300',
              selectedOpk === 'High' ? 'border-indigo-600 bg-indigo-50 text-indigo-700' : ''
            ]"
          >
            High
          </button>
          <button
            type="button"
            @click="selectedOpk = 'Peak'"
            :class="[
              'h-10 rounded-lg border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300',
              selectedOpk === 'Peak' ? 'border-indigo-600 bg-indigo-50 text-indigo-700' : ''
            ]"
          >
            Peak
          </button>
        </div>
        <label class="block text-sm font-medium mt-4">Add photo (optional)</label>
        <div class="mt-2 h-24 rounded-lg border grid place-items-center text-sm text-slate-500">Upload</div>
        <NuxtLink to="/features/cycle-fertility" class="mt-4 h-12 grid place-items-center rounded-lg bg-indigo-600 text-white">Save</NuxtLink>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const selectedTab = ref<'period' | 'temp' | 'opk'>('period')
const selectedFlow = ref<'Spotting' | 'Light' | 'Medium' | 'Heavy'>('Light')
const selectedSymptoms = ref<string[]>(['Cramps'])
const tempValue = ref('')
const selectedOpk = ref<'Negative' | 'High' | 'Peak'>('Negative')

function toggleSymptom(symptom: string) {
  const index = selectedSymptoms.value.indexOf(symptom)
  if (index === -1) {
    selectedSymptoms.value = [...selectedSymptoms.value, symptom]
  } else {
    selectedSymptoms.value = selectedSymptoms.value.filter((s) => s !== symptom)
  }
}
</script>


