<template>
  <div class="min-h-screen bg-slate-50 safe-top safe-bottom">
    <!-- Top bar -->
    <div class="sticky top-0 z-10 bg-white border-b">
      <div class="mx-auto max-w-sm h-14 flex items-center justify-between ">
        <NuxtLink to="/features/ai-triage-nudges/referrals" class="text-sm text-indigo-600">← Back</NuxtLink>
        <div class="text-base font-semibold">Tele-visit</div>
        <div class="w-14" />
      </div>
    </div>
    <main class="mx-auto max-w-sm pt-4 pb-24  space-y-4 text-sm">
      <div class="bg-white border rounded-xl p-4">
        <div class="font-medium">Connection test</div>
        <div class="text-xs text-slate-600">We’ll check mic/cam on join.</div>
      </div>
      <div class="bg-white border rounded-xl p-4">
        <div class="font-medium mb-2">Pick a time</div>
        <div class="grid grid-cols-3 gap-2">
          <button class="h-10 rounded-lg border">Now</button>
          <button class="h-10 rounded-lg border">+30m</button>
          <button class="h-10 rounded-lg border">+1h</button>
          <button class="h-10 rounded-lg border">16:00</button>
          <button class="h-10 rounded-lg border">17:00</button>
          <button class="h-10 rounded-lg border">18:00</button>
        </div>
      </div>
      <NuxtLink to="/features/ai-triage-nudges/checkout" class="h-12 rounded-lg bg-indigo-600 text-white grid place-items-center">Continue</NuxtLink>
    </main>

    <!-- Bottom tab bar -->
    <div class="fixed bottom-0 left-0 right-0 bg-white border-t safe-bottom">
      <nav class="mx-auto max-w-sm h-16 grid grid-cols-5 text-xs">
        <NuxtLink to="/features/ai-triage-nudges" class="flex flex-col items-center justify-center">🏠<span>Feed</span></NuxtLink>
        <NuxtLink to="/features/ai-triage-nudges/advice" class="flex flex-col items-center justify-center">🎯<span>Advice</span></NuxtLink>
        <NuxtLink to="/features/ai-triage-nudges/referrals" class="flex flex-col items-center justify-center text-indigo-600">🩺<span>Referrals</span></NuxtLink>
        <NuxtLink to="/features/ai-triage-nudges/packages" class="flex flex-col items-center justify-center">💸<span>Offers</span></NuxtLink>
        <NuxtLink to="/features/ai-triage-nudges/messages" class="flex flex-col items-center justify-center">💬<span>Chat</span></NuxtLink>
      </nav>
    </div>
  </div>
</template>

<script setup lang="ts"></script>


