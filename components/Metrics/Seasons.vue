<template>
    <div v-for="key in Object.keys($props.dictionary)" class="">
        {{ itemsLookup[key].id }} {{ itemsLookup[key].name }}

        <MetricsTournaments :dictionary="$props.dictionary[key]"/>
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
        createLookup(getSeasonsFromCache())
    } catch (error) {
        console.error(error)    
    } finally{
    }
})

</script>