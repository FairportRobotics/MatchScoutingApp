<template>
    <div>Hello World!</div>
    <!-- <pre>{{ itemsLookup }}</pre> -->

    <div v-for="item in getActionTree(24, null)">
        {{ item }}
    </div>
</template>

<script setup>
const itemsLookup = ref(null)


const getActionTree = (actionId, currentElements) => {
    if(!currentElements) { currentElements = new Array() }
    if(!actionId) { return currentElements }

    var action = itemsLookup.value[actionId]
    currentElements.push(action.label)
    return getActionTree(action.parentId, currentElements)
}

const createLookup = (data) => {
    if (!data) { return {} }
    itemsLookup.value = Object.assign({}, ...data.map((x) => ({[x.id]: x}))); 
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