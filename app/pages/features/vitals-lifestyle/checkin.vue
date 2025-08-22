<template>
  <div class="min-h-screen bg-gray-50 safe-top safe-bottom">
    <!-- Top bar -->
    <div class="sticky top-0 z-10 bg-white border-b">
      <div class="mx-auto max-w-sm h-14  flex items-center justify-between">
        <NuxtLink to="/features/vitals-lifestyle" class="text-sm text-indigo-600">← Back</NuxtLink>
        <div class="text-base font-semibold">Daily Check-in</div>
        <NuxtLink to="/features/vitals-lifestyle/messages" class="text-sm text-indigo-600">Help</NuxtLink>
      </div>
    </div>
    <div class="mx-auto max-w-sm  pt-4 pb-24 space-y-4 text-sm">
      <!-- Mood row -->
      <div class="bg-white border rounded-xl p-4">
        <div class="font-medium">Mood</div>
        <div class="mt-3 grid grid-cols-5 gap-2 text-xl">
          <button
            type="button"
            @click="selectedMood = 'very-bad'"
            :class="[
              'h-12 rounded-lg border grid place-items-center transition-colors',
              selectedMood === 'very-bad' ? 'border-indigo-600 bg-indigo-50' : ''
            ]"
          >😞</button>
          <button
            type="button"
            @click="selectedMood = 'bad'"
            :class="[
              'h-12 rounded-lg border grid place-items-center transition-colors',
              selectedMood === 'bad' ? 'border-indigo-600 bg-indigo-50' : ''
            ]"
          >🙁</button>
          <button
            type="button"
            @click="selectedMood = 'neutral'"
            :class="[
              'h-12 rounded-lg border grid place-items-center transition-colors',
              selectedMood === 'neutral' ? 'border-indigo-600 bg-indigo-50' : ''
            ]"
          >🙂</button>
          <button
            type="button"
            @click="selectedMood = 'good'"
            :class="[
              'h-12 rounded-lg border grid place-items-center transition-colors',
              selectedMood === 'good' ? 'border-indigo-600 bg-indigo-50' : ''
            ]"
          >😊</button>
          <button
            type="button"
            @click="selectedMood = 'very-good'"
            :class="[
              'h-12 rounded-lg border grid place-items-center transition-colors',
              selectedMood === 'very-good' ? 'border-indigo-600 bg-indigo-50' : ''
            ]"
          >😄</button>
        </div>
      </div>

      <!-- PHQ-2 -->
      <div class="bg-white border rounded-xl p-4 space-y-3">
        <div class="font-medium">PHQ-2</div>
        <div>
          <div class="text-slate-700">Little interest or pleasure in doing things?</div>
          <div class="mt-2 grid grid-cols-4 gap-2">
            <button
              type="button"
              @click="phq2_q1 = 0"
              :class="['px-2 py-2 rounded-lg border text-xs', phq2_q1 === 0 ? 'border-indigo-600 bg-indigo-50 text-indigo-700' : '']"
            >Not at all</button>
            <button
              type="button"
              @click="phq2_q1 = 1"
              :class="['px-2 py-2 rounded-lg border text-xs', phq2_q1 === 1 ? 'border-indigo-600 bg-indigo-50 text-indigo-700' : '']"
            >Several days</button>
            <button
              type="button"
              @click="phq2_q1 = 2"
              :class="['px-2 py-2 rounded-lg border text-xs', phq2_q1 === 2 ? 'border-indigo-600 bg-indigo-50 text-indigo-700' : '']"
            >&gt; 1/2 days</button>
            <button
              type="button"
              @click="phq2_q1 = 3"
              :class="['px-2 py-2 rounded-lg border text-xs', phq2_q1 === 3 ? 'border-indigo-600 bg-indigo-50 text-indigo-700' : '']"
            >Nearly every day</button>
          </div>
        </div>
        <div>
          <div class="text-slate-700">Feeling down, depressed, or hopeless?</div>
          <div class="mt-2 grid grid-cols-4 gap-2">
            <button
              type="button"
              @click="phq2_q2 = 0"
              :class="['px-2 py-2 rounded-lg border text-xs', phq2_q2 === 0 ? 'border-indigo-600 bg-indigo-50 text-indigo-700' : '']"
            >Not at all</button>
            <button
              type="button"
              @click="phq2_q2 = 1"
              :class="['px-2 py-2 rounded-lg border text-xs', phq2_q2 === 1 ? 'border-indigo-600 bg-indigo-50 text-indigo-700' : '']"
            >Several days</button>
            <button
              type="button"
              @click="phq2_q2 = 2"
              :class="['px-2 py-2 rounded-lg border text-xs', phq2_q2 === 2 ? 'border-indigo-600 bg-indigo-50 text-indigo-700' : '']"
            >&gt; 1/2 days</button>
            <button
              type="button"
              @click="phq2_q2 = 3"
              :class="['px-2 py-2 rounded-lg border text-xs', phq2_q2 === 3 ? 'border-indigo-600 bg-indigo-50 text-indigo-700' : '']"
            >Nearly every day</button>
          </div>
        </div>
      </div>

      <!-- Tips -->
      <div class="bg-indigo-50 border border-indigo-200 rounded-xl p-4">
        <div class="font-medium text-indigo-800">Tips</div>
        <ul class="mt-2 list-disc pl-5 text-xs text-indigo-900 space-y-1">
          <li>Short walk outdoors</li>
          <li>Hydrate and stretch</li>
          <li>Reach out to a friend</li>
        </ul>
      </div>

      <NuxtLink to="/features/vitals-lifestyle" class="inline-block px-3 py-2 rounded-lg bg-indigo-600 text-white">Submit</NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const selectedMood = ref<'very-bad' | 'bad' | 'neutral' | 'good' | 'very-good'>('neutral')
const phq2_q1 = ref<number>(0)
const phq2_q2 = ref<number>(0)

const phq2_score = computed(() => phq2_q1.value + phq2_q2.value)
</script>


