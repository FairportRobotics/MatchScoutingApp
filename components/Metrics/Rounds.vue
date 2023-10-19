<template>
    <div v-for="key in Object.keys($props.dictionary)" class="metric-section">
        Round {{ key }}

        <MetricsAlliances  :dictionary="$props.dictionary[key]"/>
    </div>
</template>

<script setup>
defineProps(["dictionary"])

</script>