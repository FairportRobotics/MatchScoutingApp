<template>
    <div class="flex flex-col items-center justify-center">
        <div class="w-96">
            <div class="flex items-center justify-center mb-4">
                <div class="absolute left-16 text-blue-500">
                    <slot name="Navigation"></slot>
                </div>
                <h1>
                    <slot name="Heading"></slot>
                </h1>
            </div>
            <div class="space-y-2">
                <slot name="Content"></slot>
            </div>
        </div>
    </div>
</template>

<script setup>
</script>