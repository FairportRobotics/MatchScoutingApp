<template>
    <div v-for="key in Object.keys($props.dictionary)" class="metric-section">

        <div class="flex flex-row items-top justify-between">
            <div>Team {{ key }} {{ getTeamName(key) }}</div>
            <button v-if="!showCode" @click="showCode = !showCode" class="button-default">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M3 11V3h8v8H3Zm2-2h4V5H5v4ZM3 21v-8h8v8H3Zm2-2h4v-4H5v4Zm8-8V3h8v8h-8Zm2-2h4V5h-4v4Zm4 12v-2h2v2h-2Zm-6-6v-2h2v2h-2Zm2 2v-2h2v2h-2Zm-2 2v-2h2v2h-2Zm2 2v-2h2v2h-2Zm2-2v-2h2v2h-2Zm0-4v-2h2v2h-2Zm2 2v-2h2v2h-2Z"/></svg>                    
            </button>

        </div>

        <div class="w-full">
            <MetricsActions :metrics="$props.dictionary[key]" />
        </div>        

        <div v-if="showCode" class="absolute -top-10 left-0 z-50 w-screen h-screen bg-gray-100" >
            <QrCode :value="JSON.stringify($props.dictionary[key])" @click="showCode = !showCode" />
        </div>            
    </div>
</template>

<script setup>
defineProps(["dictionary"])

const itemsLookup = ref(null)
const showCode =ref(false)

const getTeamName = (teamId) => {
    if(!teamId) { return null }
    if(teamId in itemsLookup.value) { return itemsLookup.value[teamId].name }
}

const createLookup = (data) => {
    if (!data) { return {} }
    itemsLookup.value = Object.assign({}, ...data.map((x) => ({[x.id]: x}))); 
}

onBeforeMount(async () => {
    try {
        createLookup(getTeamsFromCache())
    } catch (error) {
        console.error(error)    
    } finally{
    }
})

</script>