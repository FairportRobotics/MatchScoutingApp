<template>
    <div>
        <div class="border-b mb-4">
            <div class="flex flex-row items-center justify-center">
                <div class="absolute left-2">
                    <NuxtLink to="/caches" class="text-blue-500">
                        &lt; Back to Cache Status
                    </NuxtLink>
                </div>
                <h1 class="text-xl text-bold">Alliances</h1>
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

        <div 
            v-if="items"
            v-for="item in items" 
            class="flex flex-row border-b p-2 mb-2"
        >
            <div class="">{{ item.name }}</div>
        </div>
        <div v-else>
            Loading...
        </div>
    </div>

</template>

<script setup>

const status = ref(null)
const items = ref(null)
const queryTimeout = ref(null)

const handleRefreshCache = async () => {
    status.value = null
    items.value = null

    clearTimeout(queryTimeout.value)
    queryTimeout.value = setTimeout(async () => {
        status.value = await refreshCache("/api/prisma/alliance/get-all", "cached_alliances")
        items.value = getAlliancesFromCache()
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
