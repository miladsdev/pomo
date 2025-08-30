<script lang="ts" setup>

</script>

<template>
    <div class="bg-red-500 rounded-t-lg flex justify-center">
    <div class="grid auto-cols-max grid-flow-col pt-3 text-center">
        <div class="rounded-box text-white flex flex-col py-8 px-9 text-2xl">
        <span class="countdown font-mono text-9xl font-black">
            <span style="--value:24;" aria-live="polite" aria-label="24">24</span>
        </span>
        min
        </div>
        <div class="rounded-box text-white flex flex-col py-8 px-9 text-2xl">
        <span class="countdown font-mono text-9xl font-black">
            <span style="--value:59;" aria-live="polite" aria-label="59">59</span>
        </span>
        sec
        </div>
    </div>
    </div>
</template>

<style scoped>

</style>