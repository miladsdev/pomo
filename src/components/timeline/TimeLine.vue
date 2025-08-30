<script lang="ts" setup>
import RestBubble from './RestBubble.vue';
import StudyBubble from './StudyBubble.vue';
</script>

<template>
    <div class="timeline-overlay"></div>
    <ul class="timeline timeline-vertical mt-3">
        <RestBubble :has-next="false" :has-prev="true" :length="15" />
        <RestBubble :has-next="false" :has-prev="true" :length="15" />
        <StudyBubble :has-next="true" :has-prev="true" />
        <RestBubble :has-next="true" :has-prev="true" :length="5" />
        <StudyBubble :has-next="true" :has-prev="false" />
    </ul>
</template>

<style scoped>
.timeline-overlay {
  position: absolute;
  z-index: 9;
  width: 390px;
  height: 340px;
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  pointer-events: none;
}
</style>