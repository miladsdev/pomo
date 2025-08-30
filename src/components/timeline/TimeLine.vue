<script lang="ts" setup>
import TimeLineBubble from './TimeLineBubble.vue';
import { usePomodoroStore } from '@/stores/pomodoro';

const pomodoro = usePomodoroStore();
const { historian } = pomodoro;
const records = historian.getRecords();

</script>

<template>
    <div class="timeline-overlay"></div>
    <ul class="timeline timeline-vertical mt-3">
        <TimeLineBubble v-for="record in records.slice(0, 4)" :key="record.date" :record="record" :records-length="records.length" />
    </ul>
</template>

<style scoped>
.timeline-overlay {
  position: absolute;
  z-index: 9;
  width: 390px;
  height: 300px;
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  pointer-events: none;
}

.timeline {
  height: 300px;
}
</style>