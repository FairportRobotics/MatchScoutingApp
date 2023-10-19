<template>
    <ScoutTemplate>
        <template #Navigation>
            <NuxtLink to="/scout-setup/team">
                &lt; Back
            </NuxtLink>
        </template>        
        <template #Heading>
            <div>Start Capturing</div>
        </template>
        <template #Content>
            <ItemSelector @click="itemSelected(null)">
                <div>Reset</div>
            </ItemSelector>                   
            <ItemSelector 
                v-for="(item, index) in filteredActions"
                @click="itemSelected(item)"
            >
                <div>{{ item.label }}</div>
            </ItemSelector>        
        </template>        
    </ScoutTemplate>
</template>

<script setup>
const actions = ref(null)
let filteredActions = ref([])

const itemSelected = (action) => {
    if(action == null) {
        // There is no activity being passed in which means this was triggered from
        // the page loading.
        filteredActions.value = actions.value.filter(item => item.parentId == null)
    } else {

        // Filter the actions based on 
        filteredActions.value = actions.value.filter(item => item.parentId == action.id)

        if(action.parentId == null) {
            startAction()
        }

        if(action.isEnd) {
            finishAction(action)
            filteredActions.value = actions.value.filter(item => item.parentId == null)
        }
    }
}

const startAction = () => {
    // Create a new action to persist.
    let newAction = {
        fromDate: new Date(),
    }

    localStorage.setItem("action_current", JSON.stringify(newAction))
}

const finishAction = (action) => {

    // Retrieve the current activity and add the remaining properties to it.
    let currentAction = JSON.parse(localStorage.getItem("action_current")) ?? {}
    currentAction["actionId"] = action.id
    currentAction["throughDate"] = new Date()

    // Retrieve the current array of activities and add the latest.
    saveAction(currentAction)
}

onBeforeMount(async () => {
    try {
        let scope = getScoutScope()
        let cachedActions = getActionsFromCache()
        actions.value = cachedActions.filter((item) => item.seasonId == scope["season"])

        itemSelected(null)
    } catch (error) {
        console.error(error)
    } finally{
    }
})

</script>
