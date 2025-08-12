<template>
  <div class="min-h-screen bg-slate-50 safe-top safe-bottom">
    <!-- Top bar -->
    <div class="sticky top-0 z-10 bg-white border-b">
      <div class="mx-auto max-w-sm h-14 flex items-center justify-between ">
        <NuxtLink to="/features/ai-triage-nudges" class="text-sm text-indigo-600">← Back</NuxtLink>
        <div class="text-base font-semibold">Chat</div>
        <NuxtLink to="/features/ai-triage-nudges/patterns" class="text-sm text-indigo-600">Patterns</NuxtLink>
      </div>
    </div>
    <main class="mx-auto max-w-sm pt-4 pb-24  space-y-3 text-sm">
      <div class="flex justify-start">
        <div class="max-w-[75%] rounded-2xl rounded-bl-sm bg-white border p-3">
          Hello! Your recent pattern suggests elevated HR with poor sleep.
          <div class="mt-1 text-[10px] opacity-60">09:15</div>
        </div>
      </div>
      <div class="flex justify-end">
        <div class="max-w-[75%] rounded-2xl rounded-br-sm bg-indigo-600 text-white p-3">
          Thanks—what should I try first?
          <div class="mt-1 text-[10px] opacity-80 text-right">09:16</div>
        </div>
      </div>
      <div class="flex justify-start">
        <div class="max-w-[75%] rounded-2xl rounded-bl-sm bg-white border p-3">
          Try the self-care plan. If symptoms persist, consider a tele-visit.
          <div class="mt-1 text-[10px] opacity-60">09:17</div>
        </div>
      </div>
      <NuxtLink to="/features/ai-triage-nudges/televisit" class="text-xs underline text-slate-600">Quick action: Book tele-visit →</NuxtLink>
    </main>
    <!-- Bottom input -->
    <div class="fixed bottom-0 left-0 right-0 bg-white border-t safe-bottom">
      <div class="mx-auto max-w-sm  py-2 flex items-center gap-2">
        <input placeholder="Type a message" class="flex-1 h-10 rounded-full border " />
        <button class="px-3 py-2 rounded-lg bg-indigo-600 text-white">Send</button>
      </div>
    </div>

    <!-- Bottom tab bar -->
    <div class="fixed bottom-0 left-0 right-0 bg-white border-t safe-bottom">
      <nav class="mx-auto max-w-sm h-16 grid grid-cols-5 text-xs">
        <NuxtLink to="/features/ai-triage-nudges" class="flex flex-col items-center justify-center">🏠<span>Feed</span></NuxtLink>
        <NuxtLink to="/features/ai-triage-nudges/advice" class="flex flex-col items-center justify-center">🎯<span>Advice</span></NuxtLink>
        <NuxtLink to="/features/ai-triage-nudges/referrals" class="flex flex-col items-center justify-center">🩺<span>Referrals</span></NuxtLink>
        <NuxtLink to="/features/ai-triage-nudges/packages" class="flex flex-col items-center justify-center">💸<span>Offers</span></NuxtLink>
        <NuxtLink to="/features/ai-triage-nudges/messages" class="flex flex-col items-center justify-center text-indigo-600">💬<span>Chat</span></NuxtLink>
      </nav>
    </div>
  </div>
</template>

<script setup lang="ts"></script>


