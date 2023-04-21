<template>
  <div class="flex h-full">
    <SideBar />

    <div class="flex flex-col grow h-full overflow-hidden">
      <Header />

      <router-view />
    </div>
  </div>
</template>

<script lang="ts" setup>
import SideBar from '@/views/SideBar/SideBar.vue'
import Header from '@/views/Header.vue'
</script>
