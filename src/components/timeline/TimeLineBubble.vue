<script lang="ts" setup>
import type { RoundRecord } from '@/models/types';
import { computed } from 'vue';

const props = defineProps<{
    record: RoundRecord,
    recordsLength: number
}>();

const hasNext = computed(() => props.record.index !== props.recordsLength -1);
const hasPrev = computed(() => props.record.index !== 0);

const readableDate = (timestamp: number) => {
  const date = new Date(timestamp);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const hour = String(date.getHours()).padStart(2, '0');
  const minute = String(date.getMinutes()).padStart(2, '0');

  return `${day}.${month} ${hour}:${minute}`;
}

</script>

<template>
    <li>
  <hr v-if="hasNext" class="bg-gray-500 py-3" />

  <div
    :class="[
      'timeline-box text-xl text-gray-700 w-45',
      props.record.round.mode === 'study' ? 'timeline-start bg-red-50' : 'timeline-end bg-green-50'
    ]"
  >
    {{ props.record.round.minutes }} min
    <span v-if="props.record.round.mode === 'study'">📖</span>
    <span v-else>😌</span>

    <div class="text-xs text-gray-500 text-end">{{ readableDate(record.date) }}</div>
  </div>

  <div class="timeline-middle">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="text-gray-500 h-5 w-5">
      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd"/>
    </svg>
  </div>

  <hr v-if="hasPrev" class="bg-gray-500" />
</li>
</template>

<style scoped>

</style>