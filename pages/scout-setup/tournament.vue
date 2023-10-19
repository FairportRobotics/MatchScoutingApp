<template>
    <ScoutTemplate>
        <template #Navigation>
            <NuxtLink to="/scout-setup/season">
                &lt; Back
            </NuxtLink>
        </template>
        <template #Heading>
            Select Tournament
        </template>        
        <template #Content>
            <ItemSelector 
                v-for="(item, index) in items"
                :key="index"
                class="next-action-allowed"
                @click="itemSelected(item)"
            >
                <div class="w-12">{{ item.season }}</div>
                <div>{{ item.name }}</div>
            </ItemSelector>        
        </template>        
    </ScoutTemplate>
</template>

<script setup>

const items = ref(null)

const itemSelected = (item) => {
    updateScoutScope("tournament", item.id)
    return navigateTo("/scout-setup/matchType")
}

onBeforeMount(async () => {
    try {
        // Retrieve the Season being scouted and use that to pull the appropriate
        // Tournaments for that season.
        let scope = getScoutScope()
        let cachedTouraments = getTournamentsFromCache()
        items.value = cachedTouraments.filter((item) => item.seasonId == scope["season"])
    } catch (error) {
        console.error(error)    
    } finally{
    }
})

</script>
