<template>
    <div class="w-screen h-screen flex flex-col items-center justify-center p-8">
        <qrcode-vue 
            class="w-screen h-screen p-8"
            :value="$props.value" 
            :level="level" 
            :render-as="renderAs" 
        />
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import QrcodeVue, { Level, RenderAs } from 'qrcode.vue'
defineProps(["value"])

const level = ref<Level>('Q')
const renderAs = ref<RenderAs>('svg')
</script>
