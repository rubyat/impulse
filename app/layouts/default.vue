<template>
  <div class="safe-top safe-bottom min-h-screen bg-white pb-24 md:min-h-0 md:h-full">
    <AppHeader />
    <slot />
    <Tabbar v-if="content && content.tabs" :items="content.tabs" />
    <HamburgerMenu />
  </div>
  
</template>
 
<script setup lang="ts">
import { useContent } from '../../composables/useContent'

const { data: content } = useContent()
</script>


