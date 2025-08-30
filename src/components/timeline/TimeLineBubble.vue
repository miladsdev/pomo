<script lang="ts" setup>
import type { RoundRecord } from '@/models/types';
import { computed } from 'vue';

const props = defineProps<{
    record: RoundRecord,
    recordsLength: number
}>();

const hasNext = computed(() => props.record.index !== props.recordsLength -1);
const hasPrev = computed(() => props.record.index !== 0);

</script>

<template>
    <li>
  <hr v-if="hasNext" class="bg-primary py-3" />

  <div
    :class="[
      'timeline-box text-3xl text-gray-700',
      props.record.round.mode === 'study' ? 'timeline-start bg-red-50' : 'timeline-end bg-green-50'
    ]"
  >
    {{ props.record.round.minutes }} min
    <span v-if="props.record.round.mode === 'study'">📖</span>
    <span v-else>😌</span>
  </div>

  <div class="timeline-middle">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="text-primary h-5 w-5">
      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd"/>
    </svg>
  </div>

  <hr v-if="hasPrev" class="bg-primary" />
</li>
</template>

<style scoped>

</style>