<template>
    <div v-for="key in Object.keys($props.dictionary)" class="metric-section mt-2">
        {{ itemsLookup[key].name }} Match
        
        <MetricsRounds :dictionary="$props.dictionary[key]"/>
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
        createLookup(getMatchesFromCache())
    } catch (error) {
        console.error(error)    
    } finally{
    }
})

</script>