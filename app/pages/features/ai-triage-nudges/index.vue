<template>
  <div class="min-h-screen bg-slate-50 safe-top safe-bottom">
    <!-- Top bar -->
    <div class="sticky top-0 z-10 bg-white border-b">
      <div class="mx-auto max-w-sm h-14 flex items-center justify-between ">
        <div class="text-base font-semibold">Triage+</div>
        <div class="flex items-center gap-4 text-xl">
          <NuxtLink to="/features/ai-triage-nudges/patterns" aria-label="Patterns">🔔</NuxtLink>
          <NuxtLink to="/features/ai-triage-nudges/messages" aria-label="Messages">💬</NuxtLink>
        </div>
      </div>
    </div>
    <main class="mx-auto max-w-sm pt-4 pb-24  space-y-4 text-sm">
      <!-- AI assistance -->
      <section class="space-y-2">
        <div class="bg-white border rounded-xl p-4">
          <div class="flex items-start gap-3">
            <div class="text-xl">🤖</div>
            <div class="flex-1">
              <div class="font-medium text-slate-800">AI symptom chat</div>
              <div class="text-xs text-slate-600 mt-1">Describe your symptoms and get instant triage guidance.</div>
              <div class="mt-3">
                <NuxtLink to="/features/ai-triage-nudges/messages" class="inline-flex items-center justify-center h-10 px-3 rounded-lg bg-indigo-600 text-white text-xs">Start AI chat</NuxtLink>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-white border rounded-xl p-4">
          <div class="flex items-start gap-3">
            <div class="text-xl">🩺</div>
            <div class="flex-1">
              <div class="font-medium text-slate-800">Talk to duty doctor</div>
              <div class="text-xs text-slate-600 mt-1">Chat or connect over video with an on‑call doctor.</div>
              <div class="mt-3 grid grid-cols-2 gap-2">
                <NuxtLink to="/features/ai-triage-nudges/doctors" class="h-10 rounded-lg border bg-white grid place-items-center text-xs">Start Chat</NuxtLink>
                <NuxtLink to="/features/ai-triage-nudges/doctors" class="h-10 rounded-lg bg-emerald-500 text-white grid place-items-center text-xs">Video call</NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Latest nudge -->
      <NuxtLink to="/features/ai-triage-nudges/advice" class="block rounded-xl border p-4 bg-rose-50 border-rose-200">
        <div class="text-rose-800 font-medium">Tachycardia with poor sleep</div>
        <div class="text-rose-900 text-xs mt-1">High HR + low sleep over 3 days.</div>
        <div class="mt-2 inline-block text-xs text-rose-900 underline">See advice →</div>
      </NuxtLink>

      <!-- Quick actions -->
      <section class="grid grid-cols-3 gap-2">
        <NuxtLink to="/features/ai-triage-nudges/advice" class="h-12 rounded-lg bg-white border grid place-items-center">Self-care</NuxtLink>
        <NuxtLink to="/features/ai-triage-nudges/referrals" class="h-12 rounded-lg bg-white border grid place-items-center">Book visit</NuxtLink>
        <NuxtLink to="/features/ai-triage-nudges/packages" class="h-12 rounded-lg bg-white border grid place-items-center">Diagnostics</NuxtLink>
      </section>

      <!-- Recent patterns -->
      <section class="bg-white border rounded-xl p-4 space-y-2">
        <div class="font-medium text-slate-800">Recent patterns</div>
        <NuxtLink to="/features/ai-triage-nudges/patterns#tachycardia-sleep" class="inline-flex items-center gap-2 text-xs px-2 py-1 rounded-full border bg-rose-50 border-rose-200 text-rose-800">HR ↑ • Sleep ↓</NuxtLink>
        <NuxtLink to="/features/ai-triage-nudges/patterns#morning-hypertension" class="inline-flex items-center gap-2 text-xs px-2 py-1 rounded-full border bg-amber-50 border-amber-200 text-amber-800">BP ↑ mornings</NuxtLink>
      </section>

      <!-- Promo -->
      <NuxtLink to="/features/ai-triage-nudges/packages" class="block bg-emerald-50 border border-emerald-200 rounded-xl p-4">
        <div class="font-medium text-emerald-800">New patient offer: −20% diagnostics</div>
        <div class="text-emerald-900 text-xs mt-1">Save on essentials recommended for you</div>
      </NuxtLink>
    </main>

  </div>
</template>

<script setup lang="ts"></script>


