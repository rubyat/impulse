<template>
  <div class="min-h-screen bg-slate-50 safe-top safe-bottom">
    <!-- Top bar -->
    <div class="sticky top-0 z-10 bg-white border-b">
      <div class="mx-auto max-w-sm h-14 flex items-center justify-between ">
        <NuxtLink to="/features/ai-triage-nudges/doctors" class="text-sm text-indigo-600">← Doctors</NuxtLink>
        <div class="text-base font-semibold">Doctor profile</div>
        <div class="w-14" />
      </div>
    </div>

    <main class="mx-auto max-w-sm pt-4 pb-24  space-y-4 text-sm" v-if="doctor">
      <div class="bg-white border rounded-2xl p-4 flex items-start gap-3">
        <div class="h-12 w-12 rounded-full bg-indigo-100 text-indigo-700 grid place-items-center text-sm font-semibold">
          {{ doctor.avatarInitials }}
        </div>
        <div class="flex-1 min-w-0">
          <div class="flex items-center justify-between">
            <div class="font-medium text-slate-900">{{ doctor.name }}</div>
            <div class="text-xs text-amber-600">★ {{ doctor.rating.toFixed(1) }}</div>
          </div>
          <div class="text-xs text-slate-600">{{ doctor.specialty }} • {{ doctor.hospital }}</div>
          <div class="text-[11px] text-slate-500 mt-1">{{ doctor.city }} • {{ doctor.languages.join(', ') }} • {{ doctor.experienceYears }} yrs exp • ৳{{ doctor.fee }}</div>
          <div class="text-[11px] text-emerald-700 mt-1">{{ doctor.availability }}</div>
        </div>
      </div>

      <div class="bg-white border rounded-2xl p-4">
        <div class="font-medium text-slate-800">About</div>
        <div class="text-xs text-slate-600 mt-1">{{ doctor.bio }}</div>
      </div>

      <div class="grid grid-cols-2 gap-2">
        <NuxtLink :to="`/features/ai-triage-nudges/doctor-chat`" class="h-12 rounded-lg border bg-white grid place-items-center">Chat</NuxtLink>
        <NuxtLink :to="`/features/ai-triage-nudges/televisit?doctorId=${doctor.id}`" class="h-12 rounded-lg bg-emerald-500 text-white grid place-items-center">Video call</NuxtLink>
      </div>
    </main>

    <main v-else class="mx-auto max-w-sm pt-10 pb-24 text-center text-sm text-slate-600">
      Doctor not found.
    </main>
  </div>
</template>

<script setup lang="ts">
interface Doctor {
  id: string
  name: string
  specialty: string
  experienceYears: number
  hospital: string
  city: string
  languages: string[]
  fee: number
  rating: number
  availability: string
  bio: string
  avatarInitials: string
}

const route = useRoute()
const doctorId = computed(() => String(route.params.id))
const { data } = await useFetch<Doctor[]>(() => '/data/doctors.json', { default: () => [] })
const doctor = computed(() => data.value.find((d) => d.id === doctorId.value))
</script>


