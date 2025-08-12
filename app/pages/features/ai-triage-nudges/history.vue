<template>
  <div class="min-h-screen bg-slate-50 safe-top safe-bottom">
    <!-- Top bar -->
    <div class="sticky top-0 z-10 bg-white border-b">
      <div class="mx-auto max-w-sm h-14 flex items-center justify-between ">
        <NuxtLink to="/features/ai-triage-nudges" class="text-sm text-indigo-600">← Back</NuxtLink>
        <div class="text-base font-semibold">History</div>
        <div class="w-14" />
      </div>
    </div>
    <main class="mx-auto max-w-sm pt-4 pb-24  space-y-4 text-sm">
      <div class="bg-white border rounded-xl p-4 space-y-3">
        <div>
          <div class="text-xs text-slate-500">Today</div>
          <NuxtLink to="/features/ai-triage-nudges/advice" class="block">Self-care advice sent <span class="ml-2 text-[10px] rounded-full px-2 py-0.5 border">New</span></NuxtLink>
        </div>
        <div>
          <div class="text-xs text-slate-500">Yesterday</div>
          <NuxtLink to="/features/ai-triage-nudges/patterns#tachycardia-sleep" class="block">Pattern detected: Tachycardia + Poor sleep <span class="ml-2 text-[10px] rounded-full px-2 py-0.5 border">Viewed</span></NuxtLink>
        </div>
        <div>
          <div class="text-xs text-slate-500">Last week</div>
          <div>Missed medication nudge <span class="ml-2 text-[10px] rounded-full px-2 py-0.5 border">Completed</span></div>
        </div>
      </div>
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


