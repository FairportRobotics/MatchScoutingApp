<template>
    <div v-for="metric in $props.metrics" class="metric-section">
        <div class="ml-2 flex flex-row">
            <div class="mr-2 w-12">
                {{ (new Date(metric.throughDate) - new Date(metric.fromDate)) / 1000.0 }}s 
            </div>
            <div class="w-6">
                for
            </div>
            <div class="flex flex-row-reverse">
                <div 
                    v-for="(item, index) in getActionTree(metric.actionId, null)" 
                    class="mr-1"
                >
                    {{ item }} {{ index > 0 ? "&gt;" : "" }} 
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps(["metrics"])

const itemsLookup = ref(null)

const createLookup = (data) => {
    if (!data) { return {} }
    itemsLookup.value = Object.assign({}, ...data.map((x) => ({[x.id]: x}))); 
}

const getActionTree = (actionId, currentElements) => {
    if(!currentElements) { currentElements = new Array() }
    if(!actionId) { return currentElements }

    var action = itemsLookup.value[actionId]
    currentElements.push(action.label)
    return getActionTree(action.parentId, currentElements)
}

onBeforeMount(async () => {
    try {
        createLookup(getActionsFromCache())
    } catch (error) {
        console.error(error)    
    } finally{
    }
})

</script>