<template>
  <div class="min-h-screen bg-slate-50 safe-top safe-bottom">
    <!-- Top bar -->
    <div class="sticky top-0 z-10 bg-white border-b">
      <div class="mx-auto max-w-sm h-14 flex items-center justify-between ">
        <NuxtLink to="/features/ai-triage-nudges" class="text-sm text-indigo-600">← Back</NuxtLink>
        <div class="text-base font-semibold">Settings</div>
        <div class="w-14" />
      </div>
    </div>
    <main class="mx-auto max-w-sm pt-4 pb-24  space-y-4 text-sm">
      <div class="bg-white border rounded-xl p-4 space-y-2">
        <div class="font-medium">Nudge Preferences</div>
        <div class="flex gap-2">
          <button class="px-3 py-2 rounded-lg border">Push</button>
          <button class="px-3 py-2 rounded-lg border">SMS</button>
          <button class="px-3 py-2 rounded-lg border">Email</button>
        </div>
        <div class="font-medium mt-2">Frequency</div>
        <div class="flex gap-2">
          <button class="px-3 py-2 rounded-lg border">Immediate</button>
          <button class="px-3 py-2 rounded-lg border">Daily Digest</button>
        </div>
        <div class="font-medium mt-2">Quiet Hours</div>
        <div class="grid grid-cols-2 gap-2">
          <input type="time" class="h-10 rounded-lg border px-3" value="22:00" />
          <input type="time" class="h-10 rounded-lg border px-3" value="07:00" />
        </div>
      </div>

      <div class="bg-white border rounded-xl p-4">
        <div class="font-medium">Data Sources</div>
        <div class="mt-2 flex items-center justify-between rounded-lg border p-3">
          <div>
            <div class="font-medium">Vitals & Sleep from wearables</div>
            <div class="text-xs text-slate-500">Apple Health/Google Fit</div>
          </div>
          <button class="px-3 py-2 rounded-lg border">Connect</button>
        </div>
      </div>

      <NuxtLink to="/features/ai-triage-nudges" class="inline-block px-3 py-2 rounded-lg bg-indigo-600 text-white">Save</NuxtLink>
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


