<script lang="ts" setup>
const props = defineProps<{
    hasNext: boolean,
    hasPrev: boolean,
    length: 5|15,
}>();

</script>

<template>
    <li>
        <hr v-if="props.hasNext" class="bg-primary py-4" />
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
        <div class="timeline-end timeline-box text-3xl text-gray-700 bg-green-50">{{ props.length }} min 😌</div>
        <hr v-if="props.hasPrev" class="bg-primary" />
    </li>
</template>

<style scoped>

</style>