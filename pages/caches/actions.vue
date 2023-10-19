<template>
    <div>
        <div class="border-b mb-4">
            <div class="flex flex-row items-center justify-center">
                <div class="absolute left-2">
                    <NuxtLink to="/caches" class="text-blue-500">
                        &lt; Back to Cache Status
                    </NuxtLink>
                </div>
                <h1 class="text-xl text-bold">Actions</h1>
            </div>

            <div class="my-2 h-12 flex flex-row items-center justify-start">
                <button 
                    class="bg-gray-100 hover:bg-blue-100 border rounded-lg p-2 mr-2" 
                    @click="handleRefreshCache"
                >
                    Refresh Cache
                </button>                     
                <div v-if="status">
                    <span class="">Cache Status: {{status.statusMessage}}</span>
                </div>
                <div v-else>
                    <span class="">Refreshing...</span>
                </div>
            </div>
        </div>

        <suspense>
            <ActivityItem 
                v-for="activity in rootActivities" 
                :activity="activity" 
                :activities="items" 
            />
        </suspense>
        <div>
            Loading...
        </div>
    </div>

</template>

<script setup>

const status = ref(null)
const items = ref(null)
const queryTimeout = ref(null)
let rootActivities = ref(null)

watch(() => items, (newValue, oldValue) => {
    if(!items.value) {
        return
    }

    rootActivities.value = items.value
        .filter((item) => item.parentId == null)
        .sort((a, b) => a.ordinal - b.ordinal)
        .sort((a, b) => a.seasonId - b.seasonId)
},
{ deep: true }
)

const handleRefreshCache = async () => {
    status.value = null
    items.value = null

    clearTimeout(queryTimeout.value)
    queryTimeout.value = setTimeout(async () => {
        status.value = await refreshCache("/api/prisma/action/get-all", "cached_actions")
        items.value = getActionsFromCache()
    }, 250)
}

onBeforeMount(async () => {
    try {
        await handleRefreshCache()
    } catch (error) {
        console.error(error)    
    } finally{
    }
})

</script>
