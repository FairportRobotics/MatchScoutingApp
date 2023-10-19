<template>
    <div v-for="key in Object.keys($props.dictionary)" class="metric-section">

        <div class="flex flex-row items-center justify-between">
            <div>{{ itemsLookup[key].name }}</div>
        </div>

        <MetricsMatches :dictionary="$props.dictionary[key]"/>
    </div>
</template>

<script setup>
defineProps(["dictionary"])

const itemsLookup = ref(null)

const createLookup = (data) => {
    if (!data) { return {} }
    itemsLookup.value = Object.assign({}, ...data.map((x) => ({[x.id]: x}))); 
}

onBeforeMount(async () => {
    try {
        createLookup(getTournamentsFromCache())
    } catch (error) {
        console.error(error)    
    } finally{
    }
})

</script>