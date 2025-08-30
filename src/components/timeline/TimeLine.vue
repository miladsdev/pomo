<script lang="ts" setup>
import RestBubble from './RestBubble.vue';
import StudyBubble from './StudyBubble.vue';


</script>

<template>
    <ul class="timeline timeline-vertical mt-3">
        <RestBubble :opacity="1" :has-next="false" :has-prev="true" :length="15" />
        <StudyBubble :opacity=".6" :has-next="true" :has-prev="true" />
        <RestBubble :opacity=".4" :has-next="true" :has-prev="true" :length="5" />
        <StudyBubble :opacity=".2" :has-next="true" :has-prev="false" />
    </ul>
</template>

<style scoped>

</style>