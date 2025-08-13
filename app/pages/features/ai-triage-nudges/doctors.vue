<template>
  <div class="min-h-screen bg-slate-50 safe-top safe-bottom">
    <!-- Top bar -->
    <div class="sticky top-0 z-10 bg-white border-b">
      <div class="mx-auto max-w-sm h-14 flex items-center justify-between ">
        <NuxtLink to="/features/ai-triage-nudges" class="text-sm text-indigo-600">← Back</NuxtLink>
        <div class="text-base font-semibold">Duty doctors</div>
        <div class="w-14" />
      </div>
    </div>

    <main class="mx-auto max-w-sm pt-4 pb-24  space-y-3 text-sm">
      <div class="bg-white border rounded-xl p-3 text-xs text-slate-700">
        Bangladesh-based clinicians. For emergencies, call 999. For non‑urgent phone advice, call 16263.
      </div>

      <div class="grid grid-cols-1 gap-3">
        <NuxtLink
          v-for="d in doctors"
          :key="d.id"
          :to="`/features/ai-triage-nudges/doctor/${d.id}`"
          class="bg-white border rounded-2xl p-4 flex items-center gap-3"
        >
          <div class="h-10 w-10 rounded-full bg-indigo-100 text-indigo-700 grid place-items-center text-xs font-semibold">
            {{ d.avatarInitials }}
          </div>
          <div class="flex-1 min-w-0">
            <div class="flex items-center justify-between">
              <div class="font-medium text-slate-900 truncate">{{ d.name }}</div>
              <div class="text-[11px] text-amber-600">★ {{ d.rating.toFixed(1) }}</div>
            </div>
            <div class="text-xs text-slate-600 truncate">{{ d.specialty }} • {{ d.hospital }}</div>
            <div class="text-[11px] text-slate-500 mt-1">{{ d.city }} • {{ d.languages.join(', ') }} • ৳{{ d.fee }}</div>
            <div class="text-[11px] text-emerald-700 mt-1">{{ d.availability }}</div>
          </div>
        </NuxtLink>
      </div>
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

const { data: doctors } = await useFetch<Doctor[]>(
  () => '/data/doctors.json',
  { default: () => [] }
)
</script>


