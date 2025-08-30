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
            <button class="btn btn-primary">
              <svg v-if="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 4v16m14-8L6 20m14-8L6 4"/></svg>

              <svg v-if="false" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M18.535 4.766c.73.27 1.215.965 1.215 1.743V17.49c0 .778-.485 1.474-1.215 1.743a4.44 4.44 0 0 1-3.07 0a1.857 1.857 0 0 1-1.215-1.743V6.51c0-.778.485-1.474 1.215-1.743a4.44 4.44 0 0 1 3.07 0M18.25 6.51a.357.357 0 0 0-.234-.335a2.94 2.94 0 0 0-2.032 0a.357.357 0 0 0-.234.335v10.98c0 .15.093.284.234.335a2.94 2.94 0 0 0 2.032 0a.357.357 0 0 0 .234-.335zM8.535 4.766c.73.27 1.215.965 1.215 1.743V17.49c0 .778-.485 1.474-1.215 1.743a4.44 4.44 0 0 1-3.07 0A1.857 1.857 0 0 1 4.25 17.49V6.51c0-.778.485-1.474 1.215-1.743a4.44 4.44 0 0 1 3.07 0M8.25 6.51a.357.357 0 0 0-.234-.335a2.94 2.94 0 0 0-2.032 0a.357.357 0 0 0-.234.335v10.98c0 .15.093.284.234.335a2.94 2.94 0 0 0 2.032 0a.357.357 0 0 0 .234-.335z" clip-rule="evenodd"/></svg>
            </button>
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

        <div class="card-body pt-9">
          <ul class="timeline mx-auto">
            <li>
              <div class="timeline-start timeline-box">25</div>
              <div class="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="text-primary h-5 w-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <hr class="bg-primary" />
            </li>
            <li>
              <hr class="bg-primary" />
              <div class="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="text-primary h-5 w-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <div class="timeline-end timeline-box">5</div>
              <hr class="bg-primary" />
            </li>
            <li>
              <hr class="bg-primary" />
              <div class="timeline-start timeline-box">25</div>
              <div class="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="text-primary h-5 w-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div class="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="h-5 w-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <div class="timeline-end timeline-box">5</div>
              <hr />
            </li>
            <li>
              <hr />
              <div class="timeline-start timeline-box">25</div>
              <div class="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="h-5 w-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
            </li>
            <li>
              <hr />
              <div class="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="h-5 w-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <div class="timeline-end timeline-box">5</div>
              <hr />
            </li>
            <li>
              <hr />
              <div class="timeline-start timeline-box">25</div>
              <div class="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="h-5 w-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
            </li>
          </ul>





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
