<script setup lang="ts">
import { addDays, addMonths, differenceInCalendarDays, eachDayOfInterval, endOfMonth, endOfWeek, format, isSameDay, isSameMonth, isToday, isWithinInterval, startOfMonth, startOfWeek } from 'date-fns'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faChevronLeft, faChevronRight, faDroplet, faSeedling, faStar } from '@fortawesome/free-solid-svg-icons'

type DayMarker = 'period' | 'fertile' | 'ovulation'

const currentDate = ref(new Date())
const selectedDate = ref(new Date())

// Dummy cycle model (derived from "Day 12 of ~29")
const assumedCycleLength = 29
const assumedPeriodLength = 5
const assumedCycleDay = 12

const today = new Date()
const lastPeriodStart = addDays(today, -(assumedCycleDay - 1))
const nextPeriodStart = addDays(lastPeriodStart, assumedCycleLength)
const ovulationDate = addDays(nextPeriodStart, -14)
const fertileStart = addDays(ovulationDate, -5)
const fertileEnd = ovulationDate // inclusive

const monthGrid = computed(() => {
  const start = startOfWeek(startOfMonth(currentDate.value), { weekStartsOn: 1 })
  const end = endOfWeek(endOfMonth(currentDate.value), { weekStartsOn: 1 })
  return eachDayOfInterval({ start, end })
})

const weeks = computed(() => {
  const days = monthGrid.value
  const rows: Date[][] = []
  for (let i = 0; i < days.length; i += 7) {
    rows.push(days.slice(i, i + 7))
  }
  return rows
})

function goPrevMonth() {
  currentDate.value = addMonths(currentDate.value, -1)
}

function goNextMonth() {
  currentDate.value = addMonths(currentDate.value, 1)
}

function getMarkers(day: Date): DayMarker[] {
  const markers: DayMarker[] = []
  const periodEnd = addDays(lastPeriodStart, assumedPeriodLength - 1)
  if (isWithinInterval(day, { start: lastPeriodStart, end: periodEnd })) {
    markers.push('period')
  }
  if (isWithinInterval(day, { start: fertileStart, end: fertileEnd })) {
    markers.push('fertile')
  }
  if (isSameDay(day, ovulationDate)) {
    markers.push('ovulation')
  }
  return markers
}

function cycleDayOn(date: Date): number | null {
  // Day 1 is lastPeriodStart
  const diff = differenceInCalendarDays(date, lastPeriodStart)
  if (diff < 0) return null
  return (diff % assumedCycleLength) + 1
}

const summary = computed(() => {
  return {
    cycleDay: assumedCycleDay,
    cycleLength: assumedCycleLength,
    nextPeriodLabel: format(nextPeriodStart, 'MMM d'),
    fertileWindowLabel: `${format(fertileStart, 'MMM d')}–${format(fertileEnd, 'd')}`
  }
})

const isSheetOpen = ref(false)
const sheetDate = ref<Date | null>(null)

function openDaySheet(day: Date) {
  const markers = getMarkers(day)
  sheetDate.value = day
  if (markers.length > 0) {
    isSheetOpen.value = true
  }
}

function closeSheet() {
  isSheetOpen.value = false
}
</script>

<template>
  <div class="min-h-screen bg-gray-50 safe-top safe-bottom">
    <div class="mx-auto max-w-sm px-4 pt-4 pb-24">
      <!-- Title + back -->
      <div class="flex items-center justify-between">
        <h1 class="text-lg font-semibold text-gray-900">Cycle calendar</h1>
        <NuxtLink to="/features/cycle-fertility" class="text-indigo-600 text-sm underline">Back</NuxtLink>
      </div>

      <!-- Summary -->
      <div class="mt-3 grid grid-cols-3 gap-2 text-[11px]">
        <div class="rounded-lg border border-gray-200 bg-white p-2">
          <div class="text-gray-500">Cycle</div>
          <div class="text-gray-900 font-medium">Day {{ summary.cycleDay }}</div>
          <div class="text-gray-500">of ~{{ summary.cycleLength }}</div>
        </div>
        <div class="rounded-lg border border-gray-200 bg-white p-2">
          <div class="text-gray-500">Next period</div>
          <div class="text-gray-900 font-medium">{{ summary.nextPeriodLabel }}</div>
        </div>
        <div class="rounded-lg border border-gray-200 bg-white p-2">
          <div class="text-gray-500">Fertile</div>
          <div class="text-gray-900 font-medium">{{ summary.fertileWindowLabel }}</div>
        </div>
      </div>

      <!-- Header (month nav) -->
      <div class="sticky top-[56px] z-40 bg-gray-50/80 backdrop-blur -mx-4 px-4 py-3">
        <div class="max-w-md mx-auto flex items-center justify-between">
          <button type="button" class="p-2 rounded-md hover:bg-gray-100 active:bg-gray-200" @click="goPrevMonth">
            <FontAwesomeIcon :icon="faChevronLeft" />
          </button>
          <div class="text-base font-semibold tracking-tight">{{ format(currentDate, 'MMMM yyyy') }}</div>
          <button type="button" class="p-2 rounded-md hover:bg-gray-100 active:bg-gray-200" @click="goNextMonth">
            <FontAwesomeIcon :icon="faChevronRight" />
          </button>
        </div>
      </div>

      <!-- Weekday labels -->
      <div class="max-w-md mx-auto grid grid-cols-7 text-center text-[11px] text-gray-500 mt-2">
        <div>Mon</div>
        <div>Tue</div>
        <div>Wed</div>
        <div>Thu</div>
        <div>Fri</div>
        <div>Sat</div>
        <div>Sun</div>
      </div>

      <!-- Month grid -->
      <div class="max-w-md mx-auto mt-2 overflow-hidden rounded-2xl border border-gray-100 bg-white">
        <div
          v-for="(week, wIdx) in weeks"
          :key="wIdx"
          class="grid grid-cols-7 text-center py-2 border-b last:border-b-0 border-gray-100"
        >
          <button
            v-for="day in week"
            :key="day.toISOString()"
            type="button"
            class="h-14 flex flex-col items-center justify-center relative"
            @click="selectedDate = day; openDaySheet(day)"
          >
            <!-- Day number -->
            <span
              class="inline-flex items-center justify-center w-8 h-8 rounded-full text-[13px] font-medium"
              :class="[
                isSameDay(day, selectedDate) ? 'bg-gradient-to-r from-indigo-500 to-emerald-500 text-white' : '',
                !isSameMonth(day, currentDate) ? 'text-gray-300' : 'text-gray-900'
              ]"
            >
              {{ format(day, 'd') }}
            </span>
            <!-- Markers -->
            <div class="mt-1 h-1.5 flex items-center gap-0.5">
              <span v-if="getMarkers(day).includes('period')" class="w-6 h-1.5 rounded-full bg-rose-500"></span>
              <span v-else-if="getMarkers(day).includes('ovulation')" class="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
              <span v-else-if="getMarkers(day).includes('fertile')" class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              <span v-else-if="isSameDay(day, today)" class="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
            </div>
          </button>
        </div>
      </div>

      <!-- Legend -->
      <div class="max-w-md mx-auto mt-3 flex items-center gap-3 text-[11px] text-gray-600">
        <div class="flex items-center gap-1"><span class="w-3 h-1.5 rounded-full bg-rose-500"></span> Period</div>
        <div class="flex items-center gap-1"><span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Fertile</div>
        <div class="flex items-center gap-1"><span class="w-1.5 h-1.5 rounded-full bg-indigo-500"></span> Ovulation</div>
      </div>

      <!-- Bottom sheet for day details -->
      <transition name="fade">
        <div v-if="isSheetOpen" class="fixed inset-0 z-[70] bg-black/40" @click.self="closeSheet">
          <transition name="sheet">
            <section v-if="isSheetOpen" class="absolute bottom-0 left-0 right-0 mx-auto max-w-md bg-white rounded-t-3xl shadow-xl p-4 pb-6">
              <div class="w-12 h-1.5 bg-gray-300 rounded-full mx-auto mb-3"></div>
              <div class="text-sm text-gray-500 mb-1">{{ sheetDate ? format(sheetDate, 'EEEE, MMM d') : '' }}</div>
              <div class="text-lg font-semibold mb-3">Cycle details</div>
              <div class="space-y-2">
                <div v-if="sheetDate && getMarkers(sheetDate).includes('period')" class="flex items-center gap-2 text-rose-700 bg-rose-50 border border-rose-200 rounded-xl p-3">
                  <FontAwesomeIcon :icon="faDroplet" />
                  <div class="text-sm">
                    <div class="font-medium">Period</div>
                    <div class="text-xs text-rose-700/80">Day {{ cycleDayOn(sheetDate!) }} of {{ assumedPeriodLength }}</div>
                  </div>
                </div>
                <div v-if="sheetDate && getMarkers(sheetDate).includes('ovulation')" class="flex items-center gap-2 text-indigo-700 bg-indigo-50 border border-indigo-200 rounded-xl p-3">
                  <FontAwesomeIcon :icon="faStar" />
                  <div class="text-sm">
                    <div class="font-medium">Ovulation (predicted)</div>
                    <div class="text-xs text-indigo-700/80">Best chance of conception</div>
                  </div>
                </div>
                <div v-if="sheetDate && getMarkers(sheetDate).includes('fertile') && !getMarkers(sheetDate).includes('ovulation')" class="flex items-center gap-2 text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-xl p-3">
                  <FontAwesomeIcon :icon="faSeedling" />
                  <div class="text-sm">
                    <div class="font-medium">Fertile window</div>
                    <div class="text-xs text-emerald-700/80">Higher chance of conception</div>
                  </div>
                </div>
              </div>
              <div class="mt-4 flex justify-end">
                <NuxtLink to="/features/cycle-fertility/log" class="px-4 py-2 rounded-lg bg-indigo-600 text-white text-sm">Log</NuxtLink>
              </div>
            </section>
          </transition>
        </div>
      </transition>
    </div>
  </div>
  
</template>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity 150ms ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
.sheet-enter-active, .sheet-leave-active { transition: transform 220ms ease; }
.sheet-enter-from, .sheet-leave-to { transform: translateY(100%); }
</style>