<script lang="ts" setup>
import {usePomodoroStore} from '@/stores/pomodoro'; 

const pomodoro = usePomodoroStore();

const handle = () => {
  if (pomodoro.isTicking) {
    pomodoro.stop();
  } else {
    pomodoro.start();
  }
}

</script>

<template>
    <div class="navbar bg-base-100 shadow-sm mb-3">
    <div class="navbar-start">
        <a class="btn btn-ghost text-base-content text-xl">POMO</a>
    </div>
    <div class="navbar-end">
        <button @click="handle()" class="btn text-white" :class="pomodoro.mode === 'study' ? 'btn-error bg-red-600 border-red-700 ' : 'btn-success bg-green-600 border-green-700 '">
            <svg v-if="pomodoro.isTicking" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 320 512"><path fill="currentColor" d="M48 64C21.5 64 0 85.5 0 112v288c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zm192 0c-26.5 0-48 21.5-48 48v288c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48z"/></svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 20 20"><path fill="currentColor" d="m5 4l10 6l-10 6z"/></svg>
        </button>
    </div>
    </div>
</template>

<style scoped>

</style>