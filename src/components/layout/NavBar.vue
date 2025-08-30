<script lang="ts" setup>
import {usePomodoroStore} from '@/stores/pomodoro'; 
import { storeToRefs } from 'pinia';

const pomodoro = usePomodoroStore();
const { round } = storeToRefs(pomodoro);

const handle = () => {
  if (pomodoro.isTicking) {
    pomodoro.pause();
  } else {
    pomodoro.play();
  }
}

</script>

<template>
    <div class="navbar bg-base-100 shadow-sm mb-3">
    <div class="navbar-start">
        <a class="btn btn-ghost text-base-content text-xl">POMO</a>
    </div>
    <div class="navbar-end">
        <button @click="pomodoro.skip()" class="btn px-2 me-2 border-0 bg-gray-50">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M18.75 7a.75.75 0 0 0-1.5 0v10a.75.75 0 0 0 1.5 0zm-4.296 3.945c.69.534.69 1.576 0 2.11a25.51 25.51 0 0 1-7.073 3.863l-.466.166c-.87.308-1.79-.28-1.907-1.178a30.314 30.314 0 0 1 0-7.812c.118-.898 1.037-1.486 1.907-1.177l.466.165a25.511 25.511 0 0 1 7.073 3.863"/></svg>
        </button>

        <button @click="handle()" class="btn text-white" :class="round.mode === 'study' ? 'btn-error bg-red-600 border-red-700 ' : 'btn-success bg-green-600 border-green-700 '">
            <svg v-if="pomodoro.isTicking" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 320 512"><path fill="currentColor" d="M48 64C21.5 64 0 85.5 0 112v288c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zm192 0c-26.5 0-48 21.5-48 48v288c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48z"/></svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 20 20"><path fill="currentColor" d="m5 4l10 6l-10 6z"/></svg>
        </button>
    </div>
    </div>
</template>

<style scoped>

</style>