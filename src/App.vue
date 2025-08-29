<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="bg-gray-200 p-3 h-screen">
    <div class="container container-sm mx-auto">
      
      
      <div class="navbar bg-base-100 shadow-sm mb-3">
        <div class="navbar-start">
          <a class="btn btn-ghost text-xl">POMO</a>
        </div>
        <div class="navbar-end">
            <button class="btn btn-primary">Buy Now</button>
        </div>
      </div>
        <div class="card bg-base-100 w-full shadow-sm">
        
          <div class="bg-red-500 rounded-t-lg flex justify-center">
            <div class="grid auto-cols-max grid-flow-col gap-5 text-center">
              <div class="rounded-box text-white flex flex-col py-8 px-9 text-2xl">
                <span class="countdown font-mono text-9xl font-black">
                  <span style="--value:24;" aria-live="polite" aria-label="24">24</span>
                </span>
                min
              </div>
              <div class="rounded-box text-white flex flex-col py-8 px-9 text-2xl">
                <span class="countdown font-mono text-9xl font-black">
                  <span style="--value:59;" aria-live="polite" aria-label="59">59</span>
                </span>
                sec
              </div>
            </div>
          </div>

        <div class="card-body">
          <h2 class="card-title">Card Title</h2>
          <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
        </div>
      </div>
    </div>
  </div>

  <RouterView />
</template>

<style scoped>
.container {
  max-width: 480px;
}
</style>
