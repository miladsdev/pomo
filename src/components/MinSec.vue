<script lang="ts" setup>
import {usePomodoroStore} from '@/stores/pomodoro'; 
import { storeToRefs } from 'pinia';

const pomodoro = usePomodoroStore();
const { minutes, seconds } = storeToRefs(pomodoro);

</script>

<template>
    <div class="rounded-t-lg flex justify-center bg-gray-300">
        <div class="grid auto-cols-max grid-flow-col py-2 gap-2 text-center">
            <div class="shadow rounded-box text-white text-shadow-xs flex flex-col pt-8 pb-4 px-7 text-2xl" :class="pomodoro.mode === 'study' ? 'bg-red-400' : 'bg-green-500'">
                <span class="countdown font-mono text-9xl font-black">
                    <span :style="{ '--value': minutes }" aria-live="polite" :aria-label="String(minutes)"></span>
                </span>
                min
            </div>
            <div class="shadow rounded-box text-white text-shadow-xs flex flex-col pt-8 pb-4 px-7 text-2xl" :class="pomodoro.mode === 'study' ? 'bg-red-400' : 'bg-green-500'">
                <span class="countdown font-mono text-9xl font-black">
                    <span :style="{ '--value': seconds }" aria-live="polite" :aria-label="String(seconds)"></span>
                </span>
                sec
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>