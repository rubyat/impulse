<template>
  <div class="min-h-screen bg-slate-50 safe-top safe-bottom">
    <!-- Top bar -->
    <div class="sticky top-0 z-10 bg-white border-b">
      <div class="mx-auto max-w-sm h-14 flex items-center justify-between ">
        <NuxtLink to="/features/ai-triage-nudges" class="text-sm text-indigo-600">← Back</NuxtLink>
        <div class="text-base font-semibold">Self-care Plan</div>
        <NuxtLink to="/features/ai-triage-nudges/messages" class="text-sm text-indigo-600">Chat</NuxtLink>
      </div>
    </div>
    <main class="mx-auto max-w-sm pt-4 pb-24  space-y-4 text-sm">
      <p class="text-slate-700 text-sm">Free advice generated from your pattern.</p>
      <div class="bg-white border rounded-xl p-4 space-y-3">
        <div class="flex gap-3"><div class="font-semibold">1.</div><div><div class="font-medium">Hydrate</div><div class="text-xs text-slate-600">2–3 L today.</div></div></div>
        <div class="flex gap-3"><div class="font-semibold">2.</div><div><div class="font-medium">Caffeine</div><div class="text-xs text-slate-600">Avoid after 2pm.</div></div></div>
        <div class="flex gap-3"><div class="font-semibold">3.</div><div><div class="font-medium">Wind-down</div><div class="text-xs text-slate-600">20-min breathing/box breathing.</div></div></div>
        <div class="flex gap-3"><div class="font-semibold">4.</div><div><div class="font-medium">Measure</div><div class="text-xs text-slate-600">Resting HR on waking.</div></div></div>
        <div class="flex gap-3"><div class="font-semibold">5.</div><div><div class="font-medium">Sleep target</div><div class="text-xs text-slate-600">7–8h tonight.</div></div></div>
      </div>
      <NuxtLink to="/features/ai-triage-nudges/referrals" class="text-xs underline text-slate-600">If symptoms persist</NuxtLink>
    </main>

    <!-- Bottom CTA bar -->
    <div class="fixed bottom-16 left-0 right-0">
      <div class="mx-auto max-w-sm  grid grid-cols-2 gap-2">
        <NuxtLink to="/features/ai-triage-nudges/referrals" class="h-12 rounded-lg bg-indigo-600 text-white grid place-items-center">Book a visit</NuxtLink>
        <NuxtLink to="/features/ai-triage-nudges/packages" class="h-12 rounded-lg border bg-white grid place-items-center">Discounted diagnostics</NuxtLink>
      </div>
    </div>

    <!-- Bottom tab bar -->
    <div class="fixed bottom-0 left-0 right-0 bg-white border-t safe-bottom">
      <nav class="mx-auto max-w-sm h-16 grid grid-cols-5 text-xs">
        <NuxtLink to="/features/ai-triage-nudges" class="flex flex-col items-center justify-center">🏠<span>Feed</span></NuxtLink>
        <NuxtLink to="/features/ai-triage-nudges/advice" class="flex flex-col items-center justify-center text-indigo-600">🎯<span>Advice</span></NuxtLink>
        <NuxtLink to="/features/ai-triage-nudges/referrals" class="flex flex-col items-center justify-center">🩺<span>Referrals</span></NuxtLink>
        <NuxtLink to="/features/ai-triage-nudges/packages" class="flex flex-col items-center justify-center">💸<span>Offers</span></NuxtLink>
        <NuxtLink to="/features/ai-triage-nudges/messages" class="flex flex-col items-center justify-center">💬<span>Chat</span></NuxtLink>
      </nav>
    </div>
  </div>
</template>

<script setup lang="ts"></script>


