<template>
    <ScoutTemplate>
        <template #Navigation>
            <NuxtLink to="/scout-setup/alliance">
                &lt; Back
            </NuxtLink>
        </template>        
        <template #Heading>
            Select or Enter Team
        </template>        
        <template #Content>
            <form>   
                <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div class="relative">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </div>
                    <input 
                        type="search" 
                        id="default-search" 
                        placeholder="Search..." 
                        class="border rounded-lg p-2 pl-10  w-full" 
                        required
                        autocomplete="off"
                        v-model="searchTerm"
                        @input="getSearchResults"
                    >
                </div>
                <div class="text-xs ml-1 mt-1 text-gray-400">
                    {{searchMessage}}
                </div>
            </form> 
            
            <ItemSelector 
                v-for="(item, index) in filteredTeams"
                :key="index"
                @click="itemSelected(item)"
            >
                <div class="w-12">{{ item.id }}</div>
                <div>{{ item.name }}</div>
            </ItemSelector>  
            
            <!-- Divider -->
            <div class="flex flex-row items-center justify-center my-4 w-full">
                <div class="border w-full"></div>
                <div class="mx-2">or</div>
                <div class="border w-full"></div>
            </div>
           
            <!-- Team Manual Entry -->
            <div>
                <input 
                    type="number" 
                    placeholder="Enter team number manually" 
                    min="0"
                    step="1"
                    autocomplete="off"
                    onkeypress="return (event.charCode !=8 && event.charCode ==0 || (event.charCode >= 48 && event.charCode <= 57))"
                    class="border rounded-lg p-2 w-full"
                    v-model="teamId"
                />

                <ItemSelector @click="itemEntered()" v-model="nextIsActive">
                    <div>Next</div>
                </ItemSelector>                  
            </div>            
        </template>        
    </ScoutTemplate>
</template>

<script setup>

// Support for filtering and selecting an existing team.
const teams = ref(null)
const filteredTeams = ref(null)
const searchTerm = ref("")
const searchMessageDefault = "Enter a term above to search for teams."
const searchMessage = ref(searchMessageDefault)
const queryTimeout = ref(null)

// Support for entering a team manually.
const teamId = ref(null)
const nextIsActive = ref(false)

watch(() => teamId.value, (newValue, oldValue) => {
    if(newValue) {
        nextIsActive.value = true
    } else {
        nextIsActive.value = false
    }
})

const getSearchResults = () => {
    clearTimeout(queryTimeout.value)

    queryTimeout.value = setTimeout(async () => {
        if(searchTerm?.value.length > 0) {
            searchMessage.value = "Searching..."
            filteredTeams.value = teams.value.filter((item) => item.search.toLowerCase().includes(searchTerm.value.toLowerCase())).slice(0, 5)

            if(filteredTeams.value) {
                searchMessage.value = "Displaying only the first 5 results."
            } else {
                searchMessage.value = "No results found matching your search term. Please try again and make your search term more general."
            }
        } else {
            searchMessage.value = searchMessageDefault
            filteredTeams.value = null
        }
    }, 250)
}

const itemSelected = (item) => {
    updateScoutScope("team", item.id)
    return navigateTo("/scout-setup/capture")
}

const itemEntered = () => {
    if(!nextIsActive.value) {
        return
    }

    itemSelected({ id: teamId.value, name: null })
}

onBeforeMount(async () => {
    try {
        teams.value = getTeamsFromCache()
    } catch (error) {
        console.error(error)    
    } finally{
    }
})

</script>
