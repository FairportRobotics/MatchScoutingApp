<template>
    <div class="next-default" :class="props.modelValue ? 'next-action-allowed' : 'next-action-inactive'">
        <div class="ml-2 flex flex-row items-center">
            <slot />
        </div>
        <div class="flex flex-row items-center h-10 w-10">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" viewBox="0 0 24 24"><path fill="currentColor" d="M8 19V5l11 7l-11 7Z"/></svg>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    modelValue: {
        type: Boolean,
        default: true
    }
})
</script>