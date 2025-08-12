<template>
  <!-- Decorative dynamic island (desktop-only, non-interactive) -->
  <div class="hidden md:block absolute top-3 left-1/2 -translate-x-1/2 z-30 pointer-events-none">
    <div class="relative h-10 w-40 rounded-full bg-black/95 shadow-[0_0_0_2px_rgba(0,0,0,0.4)] transition-[width] duration-200 ease-out group-hover:w-64">
      <!-- Left indicator dot -->
      <div class="absolute left-4 top-1/2 -translate-y-1/2 h-2 w-2 rounded-full bg-zinc-700" />
      <!-- Right camera cutout -->
      <div class="absolute right-5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 rounded-full bg-black" />
      <!-- Subtle inner gloss -->
      <div class="absolute inset-0 rounded-full bg-gradient-to-b from-white/10 to-transparent" />
    </div>
  </div>
</template>

<script setup lang="ts">
// Purely presentational
</script>


