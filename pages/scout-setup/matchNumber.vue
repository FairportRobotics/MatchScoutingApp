<template>
    <ScoutTemplate>
        <template #Navigation>
            <NuxtLink to="/scout-setup/matchType">
                &lt; Back
            </NuxtLink>
        </template>        
        <template #Heading>
            Enter Match Number
        </template>        
        <template #Content>
            <input 
                type="number" 
                placeholder="Number" 
                min="0"
                step="1"
                autocomplete="off"
                onkeypress="return (event.charCode !=8 && event.charCode ==0 || (event.charCode >= 48 && event.charCode <= 57))"
                class="border rounded-lg p-2 w-full"
                v-model="matchNumber"
            />

            <ItemSelector @click="itemSelected()" v-model="nextIsActive">
                <div>Next</div>
            </ItemSelector>        
        </template>        
    </ScoutTemplate>
</template>

<script setup>

const matchNumber = ref(null)
const nextIsActive = ref(false)

watch(() => matchNumber.value, (newValue, oldValue) => {
    if(newValue) {
        nextIsActive.value = true
    } else {
        nextIsActive.value = false
    }
})

const itemSelected = () => {
    if(!nextIsActive.value) {
        return
    }

    updateScoutScope("matchRound", matchNumber.value)
    return navigateTo("/scout-setup/alliance")
}

</script>
