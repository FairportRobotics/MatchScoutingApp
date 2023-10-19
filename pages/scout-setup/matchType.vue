<template>
    <ScoutTemplate>
        <template #Navigation>
            <NuxtLink to="/scout-setup/tournament">
                &lt; Back
            </NuxtLink>
        </template>        
        <template #Heading>
            Select Match Type
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
    updateScoutScope("matchType", item.id)
    return navigateTo("/scout-setup/matchNumber")
}

onBeforeMount(async () => {
    try {
        items.value = getMatchesFromCache()
    } catch (error) {
        console.error(error)    
    } finally{
    }
})

</script>
