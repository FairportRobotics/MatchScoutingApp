<template>
    <ScoutTemplate>
        <template #Heading>
            Select Competition Season
        </template>        
        <template #Content>
            <ItemSelector 
                v-for="(item, index) in items"
                :key="index"
                @click="itemSelected(item)"
            >
                <div class="w-12">{{ item.id }}</div>
                <div>{{ item.name }}</div>
            </ItemSelector>        
        </template>        
    </ScoutTemplate>
</template>

<script setup>
const items = ref(null)

const itemSelected = (item) => {
    updateScoutScope("season", item.id)
    return navigateTo("/scout-setup/tournament")
}

onBeforeMount(async () => {
    try {
        items.value = getSeasonsFromCache()
    } catch (error) {
        console.error(error)    
    } finally{
    }
})

</script>
