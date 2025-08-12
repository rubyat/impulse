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

    <!-- Bottom tab bar -->
    <div class="fixed bottom-0 left-0 right-0 bg-white border-t safe-bottom">
      <nav class="mx-auto max-w-sm h-16 grid grid-cols-5 text-xs">
        <NuxtLink to="/features/ai-triage-nudges" class="flex flex-col items-center justify-center">🏠<span>Feed</span></NuxtLink>
        <NuxtLink to="/features/ai-triage-nudges/advice" class="flex flex-col items-center justify-center">🎯<span>Advice</span></NuxtLink>
        <NuxtLink to="/features/ai-triage-nudges/referrals" class="flex flex-col items-center justify-center">🩺<span>Referrals</span></NuxtLink>
        <NuxtLink to="/features/ai-triage-nudges/packages" class="flex flex-col items-center justify-center">💸<span>Offers</span></NuxtLink>
        <NuxtLink to="/features/ai-triage-nudges/messages" class="flex flex-col items-center justify-center">💬<span>Chat</span></NuxtLink>
      </nav>
    </div>
  </div>
</template>

<script setup lang="ts"></script>


