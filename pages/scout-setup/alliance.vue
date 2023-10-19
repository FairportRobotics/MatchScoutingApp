<template>
    <ScoutTemplate>
        <template #Navigation>
            <NuxtLink to="/scout-setup/matchNumber">
                &lt; Back
            </NuxtLink>
        </template>        
        <template #Heading>
            Select Alliance
        </template>        
        <template #Content>
            <ItemSelector 
                v-for="(item, index) in items"
                :key="index"
                @click="itemSelected(item)"
            >
                <div>{{ item.name }}</div>
            </ItemSelector>        
        </template>        
    </ScoutTemplate>
</template>

<script setup>

const items = ref(null)

const itemSelected = (item) => {
    updateScoutScope("matchAlliance", item.id)
    return navigateTo("/scout-setup/team")
}

onBeforeMount(async () => {
    try {
        items.value = getAlliancesFromCache()
    } catch (error) {
        console.error(error)    
    } finally{
    }
})

</script>
