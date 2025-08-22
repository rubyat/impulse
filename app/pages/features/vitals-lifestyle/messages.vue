<template>
  <div class="min-h-[calc(100vh-70px)] sm:min-h-screen bg-slate-50 safe-top safe-bottom">
    <!-- Top bar -->
    <div class="sticky top-0 z-10 bg-white border-b">
      <div class="mx-auto max-w-sm h-14  flex items-center justify-between">
        <NuxtLink to="/features/vitals-lifestyle" class="text-sm text-indigo-600">← Back</NuxtLink>
        <div class="text-base font-semibold">Chat</div>
        <div class="w-14" />
      </div>
    </div>
    <div class="mx-auto max-w-sm  pt-4 pb-24 space-y-3 text-sm">
      <div class="flex justify-end">
        <div class="max-w-[75%] rounded-2xl rounded-br-sm bg-indigo-600 text-white p-3">
          Hi! I have a question about my BP readings.
          <div class="mt-1 text-[10px] opacity-80 text-right">09:12</div>
        </div>
      </div>
      <div class="flex justify-start">
        <div class="max-w-[75%] rounded-2xl rounded-bl-sm bg-white border p-3">
          Sure! Aim for consistent timing and rest 5 minutes before measuring.
          <div class="mt-1 text-[10px] opacity-60">09:15</div>
        </div>
      </div>
      <div class="flex justify-start">
        <div class="max-w-[75%] rounded-2xl rounded-bl-sm bg-white border p-3">
          Also consider logging for a week to see trends.
          <div class="mt-1 text-[10px] opacity-60">09:16</div>
        </div>
      </div>
    </div>
    <!-- Bottom input -->
    <div class="absolute bottom-[65px] left-0 w-full bg-white border px-4">
      <div class="mx-auto max-w-sm  py-2 flex items-center gap-2">
        <input placeholder="Type a message" class="flex-1 h-10 px-4 rounded-full border " />
        <button class="px-3 py-2 rounded-lg bg-indigo-600 text-white">Send</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>


