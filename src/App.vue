<script setup lang="ts">
import { RouterView } from 'vue-router'
import TimeLine from '@/components/timeline/TimeLine.vue'
import NavBar from './components/layout/NavBar.vue';
import MinSec from './components/MinSec.vue';
</script>

<template>
  <div class="bg-gray-200 p-3 h-screen">
    <div class="container container-sm mx-auto">
      <NavBar :is-ticking="true" />
      <div class="card bg-base-100 w-full shadow-sm">
          <MinSec />
        <div class="card-body">
          <TimeLine />
        </div>
      </div>
    </div>
  </div>

  <RouterView />
</template>

<style scoped>
.container {
  max-width: 440px;
}
</style>
