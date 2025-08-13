<template>
  <!--
    Mobile-first: render app normally.
    On md+ screens, wrap the entire app in a centered "mobile device" frame.
  -->
  <div class="min-h-screen bg-white text-gray-900 md:bg-gray-100 md:flex md:items-center md:justify-center">
    <NuxtRouteAnnouncer />

    <!-- iPhone 14 Pro Max frame (md+) -->
    <div class="w-full md:w-auto md:p-6">
      <!-- Metal frame with soft gradient -->
      <div class="relative md:rounded-[3rem] md:bg-gradient-to-br md:from-slate-900 md:to-zinc-800 md:shadow-[0_30px_120px_rgba(0,0,0,0.45)] md:ring-1 md:ring-black/40 md:p-2">
        <!-- Side buttons (decorative) -->
        <div class="hidden md:block absolute -left-1 top-[140px] h-10 w-1.5 rounded-full bg-zinc-600" />
        <div class="hidden md:block absolute -left-1 top-[180px] h-20 w-1.5 rounded-full bg-zinc-600" />
        <div class="hidden md:block absolute -right-1 top-[220px] h-24 w-1.5 rounded-full bg-zinc-600" />

        <!-- Bezel -->
        <div class="relative md:bg-black md:rounded-[2.75rem] md:p-2">
          <!-- Screen viewport (logical size of iPhone 14 Pro Max: 430x932) -->
          <div class="group relative min-h-screen md:min-h-0 md:h-[932px] md:w-[430px] md:rounded-[2.4rem] md:overflow-hidden md:bg-white">
            <!-- Dynamic Island component -->
            <DynamicIsland />
            <SplashScreen />

            <NuxtLayout>
              <NuxtPage />
            </NuxtLayout>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script setup lang="ts">
// Using Nuxt auto-registered component from `app/components/DynamicIsland.vue`
</script>
