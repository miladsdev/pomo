<script lang="ts" setup>
import { ref } from 'vue';
import TimeLineBubble from './TimeLineBubble.vue';
import { usePomodoroStore } from '@/stores/pomodoro';

const pomodoro = usePomodoroStore();
const { historian } = pomodoro;
const records = historian.getRecords();

const sliceStart = ref(0);
const sliceEnd = ref(5);

const goBackInTime = () => {
  sliceStart.value += 2;
  sliceEnd.value += 2;
}

const goForwardInTime = () => {
  if (sliceStart.value <= 0) {
    sliceStart.value = 0;
    sliceEnd.value = 5;
    return; 
  }

  sliceStart.value -= 2;
  sliceEnd.value -= 2;
}

</script>

<template>
  <div class="h-5 z-10">
    <button @click="goForwardInTime()" v-if="records.length > sliceEnd - sliceStart && sliceStart !== 0" class="btn w-full bg-gray-50 border-gray-100 h-7 text-gray-300">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 1024 1024"><path fill="currentColor" d="m488.832 344.32l-339.84 356.672a32 32 0 0 0 0 44.16l.384.384a29.44 29.44 0 0 0 42.688 0l320-335.872l319.872 335.872a29.44 29.44 0 0 0 42.688 0l.384-.384a32 32 0 0 0 0-44.16L535.168 344.32a32 32 0 0 0-46.336 0"/></svg>
    </button>
  </div>
    

    <div class="timeline-overlay"></div>
    <ul class="timeline timeline-vertical mt-3">
        <TimeLineBubble v-for="record in records.slice(sliceStart, sliceEnd)" :key="record.date" :record="record" :records-length="records.length" />
    </ul>

    <div class="h-5 z-10">
      <button @click="goBackInTime()" v-if="records.length > sliceEnd - sliceStart" class="btn w-full bg-gray-50 border-gray-100 h-7 text-gray-300">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 1024 1024"><path fill="currentColor" d="M831.872 340.864L512 652.672L192.128 340.864a30.59 30.59 0 0 0-42.752 0a29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728a30.59 30.59 0 0 0-42.752 0z"/></svg>
      </button>
    </div>
</template>

<style scoped>
.timeline-overlay {
  position: absolute;
  z-index: 9;
  width: 390px;
  height: 370px;
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  pointer-events: none;
}

.timeline {
  height: 320px;
}
</style>