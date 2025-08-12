<script setup lang="ts">
import { addMonths, format, startOfMonth, endOfMonth, startOfWeek, endOfWeek, eachDayOfInterval, isSameMonth, isToday, isSameDay } from 'date-fns'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserDoctor, faVial, faArrowsRotate, faChevronLeft, faChevronRight, faClock } from '@fortawesome/free-solid-svg-icons'

type Appointment = {
  id: string
  title: string
  time: string
  type: 'consult' | 'lab' | 'followup'
}

const currentDate = ref(new Date())
const selectedDate = ref(new Date())

const isSheetOpen = ref(false)
const sheetDate = ref<Date | null>(null)
const sheetAppointments = ref<Appointment[]>([])

const dummyAppointmentsByDate = computed<Record<string, Appointment[]>>(() => {
  // Generate a handful of dummy items for the current month
  const yearMonth = format(currentDate.value, 'yyyy-MM')
  return {
    [`${yearMonth}-05`]: [
      { id: 'a1', title: 'Dr. Khan — General consult', time: '09:30', type: 'consult' },
      { id: 'a2', title: 'Lab test — CBC', time: '16:00', type: 'lab' }
    ],
    [`${yearMonth}-11`]: [
      { id: 'a3', title: 'Dermatology follow-up', time: '11:00', type: 'followup' }
    ],
    [`${yearMonth}-17`]: [
      { id: 'a4', title: 'Cardio consult', time: '14:15', type: 'consult' }
    ],
    [`${yearMonth}-24`]: [
      { id: 'a5', title: 'Lab test — Lipid profile', time: '08:00', type: 'lab' },
      { id: 'a6', title: 'ENT follow-up', time: '15:30', type: 'followup' }
    ]
  }
})

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

function getAppointmentsFor(day: Date): Appointment[] {
  const key = format(day, 'yyyy-MM-dd')
  return dummyAppointmentsByDate.value[key] || []
}

function pillClasses(type: Appointment['type']): string {
  if (type === 'consult') return 'bg-emerald-50 text-emerald-700 border-emerald-200'
  if (type === 'lab') return 'bg-amber-50 text-amber-700 border-amber-200'
  return 'bg-indigo-50 text-indigo-700 border-indigo-200'
}

function typeIcon(type: Appointment['type']) {
  if (type === 'consult') return faUserDoctor
  if (type === 'lab') return faVial
  return faArrowsRotate
}

function openDaySheet(day: Date) {
  sheetDate.value = day
  sheetAppointments.value = getAppointmentsFor(day)
  if (sheetAppointments.value.length > 0) {
    isSheetOpen.value = true
  }
}

function openAppointmentSheet(appt: Appointment, day: Date) {
  sheetDate.value = day
  sheetAppointments.value = [appt]
  isSheetOpen.value = true
}

function closeSheet() {
  isSheetOpen.value = false
}
</script>

<template>
  <div class="px-4 pb-24">
    <!-- Header -->
    <div class="sticky top-[56px] z-40 bg-white/80 backdrop-blur border-b border-gray-100 -mx-4 px-4 py-3">
      <div class="max-w-md mx-auto flex items-center justify-between">
        <button type="button" class="p-2 rounded-md hover:bg-gray-50 active:bg-gray-100" @click="goPrevMonth">
          <FontAwesomeIcon :icon="faChevronLeft" />
        </button>
        <div class="text-base font-semibold tracking-tight">{{ format(currentDate, 'MMMM yyyy') }}</div>
        <button type="button" class="p-2 rounded-md hover:bg-gray-50 active:bg-gray-100" @click="goNextMonth">
          <FontAwesomeIcon :icon="faChevronRight" />
        </button>
      </div>
    </div>

    <!-- Weekday labels -->
    <div class="max-w-md mx-auto grid grid-cols-7 text-center text-[11px] text-gray-500 mt-3">
      <div>Mon</div>
      <div>Tue</div>
      <div>Wed</div>
      <div>Thu</div>
      <div>Fri</div>
      <div>Sat</div>
      <div>Sun</div>
    </div>

    <!-- Month grid (compact, like the screenshot) -->
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
          <!-- Day number with states -->
          <span
            class="inline-flex items-center justify-center w-8 h-8 rounded-full text-[13px] font-medium"
            :class="[
              isSameDay(day, selectedDate) ? 'bg-gradient-to-r from-indigo-500 to-emerald-500 text-white' : '',
              !isSameMonth(day, currentDate) ? 'text-gray-300' : 'text-gray-900'
            ]"
          >
            {{ format(day, 'd') }}
          </span>
          <!-- Count/dot -->
          <span v-if="getAppointmentsFor(day).length" class="mt-0.5 text-[10px] text-emerald-600">
            {{ getAppointmentsFor(day).length }}
          </span>
          <span v-else-if="isSameDay(day, new Date())" class="mt-1 w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
        </button>
      </div>
    </div>

    <!-- Bottom sheet for appointment/day details -->
    <transition name="fade">
      <div v-if="isSheetOpen" class="fixed inset-0 z-[70] bg-black/40" @click.self="closeSheet">
        <transition name="sheet">
          <section v-if="isSheetOpen" class="absolute bottom-0 left-0 right-0 mx-auto max-w-md bg-white rounded-t-3xl shadow-xl p-4 pb-6">
            <div class="w-12 h-1.5 bg-gray-300 rounded-full mx-auto mb-3"></div>
            <div class="text-sm text-gray-500 mb-1">{{ sheetDate ? format(sheetDate, 'EEEE, MMM d') : '' }}</div>
            <div class="text-lg font-semibold mb-3">Appointments</div>
            <div class="space-y-2 max-h-80 overflow-y-auto">
              <div
                v-for="appt in sheetAppointments"
                :key="appt.id"
                class="border rounded-xl p-3 flex items-start gap-3"
                :class="pillClasses(appt.type)"
              >
                <FontAwesomeIcon :icon="typeIcon(appt.type)" class="mt-0.5" />
                <div class="min-w-0">
                  <div class="text-sm font-medium text-gray-900 truncate">{{ appt.title }}</div>
                  <div class="text-xs text-gray-600 mt-0.5">{{ appt.time }} • {{ appt.type === 'consult' ? 'Doctor consult' : appt.type === 'lab' ? 'Lab test' : 'Follow-up' }}</div>
                </div>
              </div>
            </div>
            <div class="mt-4 flex justify-end">
              <button type="button" class="px-4 py-2 rounded-lg bg-gray-100 text-gray-700" @click="closeSheet">Close</button>
            </div>
          </section>
        </transition>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.min-h-24 { min-height: 6rem; }
.fade-enter-active, .fade-leave-active { transition: opacity 150ms ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
.sheet-enter-active, .sheet-leave-active { transition: transform 220ms ease; }
.sheet-enter-from, .sheet-leave-to { transform: translateY(100%); }
</style>


