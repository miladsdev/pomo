<script lang="ts" setup>
const props = defineProps<{
    mode: 'rest'|'study'
}>();
</script>

<template>
    <div class="navbar bg-base-100 shadow-sm mb-3">
    <div class="navbar-start">
        <a class="btn btn-ghost text-base-content text-xl">POMO</a>
    </div>
    <div class="navbar-end">
        <button class="btn" :class="props.mode === 'study' ? 'btn-error bg-red-500 border-red-600 ' : 'btn-success bg-green-500 border-green-600 '">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 4v16m14-8L6 20m14-8L6 4"/></svg>
        </button>
    </div>
    </div>
</template>

<style scoped>

</style>