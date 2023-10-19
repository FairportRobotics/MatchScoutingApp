<template>
    <div>
        <h1 class="text-2xl">Cache Status</h1>

        <div class="relative overflow-x-auto">
            <table class="">
                <thead class="">
                    <tr>
                        <th scope="col" class="px-1 py-1">
                            Data Type
                        </th>
                        <th scope="col" class="px-1 py-1">
                            Number of Records
                        </th>
                        <th scope="col" class="px-1 py-1">
                            Last Updated in Database
                        </th>
                        <th scope="col" class="px-1 py-1">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="b">
                        <th scope="row" class="">
                            <NuxtLink to="/caches/seasons">
                                Seasons
                            </NuxtLink>
                        </th>
                        <td class="px-1 py-1">
                            {{ seasons?.length }}
                        </td>
                        <td class="px-1 py-1">
                            {{ formatDate(seasonLastUpdated) }}
                        </td>
                        <td class="px-1 py-1">
                            <button @click="cacheSeasons()" class="rounded-lg bg-gray-200 p-2 border hover:bg-green-200">
                                Refresh
                            </button>  
                        </td>
                    </tr>
                    <tr class="b">
                        <th scope="row" class="">
                            <NuxtLink to="/caches/tournaments">
                                Tournaments
                            </NuxtLink>
                        </th>
                        <td class="px-1 py-1">
                            {{ tournaments?.length }}
                        </td>
                        <td class="px-1 py-1">
                            {{ formatDate(tournamentsLastUpdated) }}
                        </td>
                        <td class="px-1 py-1">
                            <button @click="cacheTournaments()" class="rounded-lg bg-gray-200 p-2 border hover:bg-green-200">
                                Refresh
                            </button>                            
                        </td>
                    </tr>
                    <tr class="b">
                        <th scope="row" class="">
                            <NuxtLink to="/caches/matches">
                                Matches
                            </NuxtLink>                            
                        </th>
                        <td class="px-1 py-1">
                            {{ matches?.length }}
                        </td>
                        <td class="px-1 py-1">
                            {{ formatDate(matchesLastUpdated) }}
                        </td>
                        <td class="px-1 py-1">
                            <button @click="cacheMatches()" class="rounded-lg bg-gray-200 p-2 border hover:bg-green-200">
                                Refresh
                            </button>                            
                        </td>
                    </tr>
                    <tr class="b">
                        <th scope="row" class="">
                            <NuxtLink to="/caches/alliances">
                                Alliances
                            </NuxtLink>                               
                        </th>
                        <td class="px-1 py-1">
                            {{ alliances?.length }}
                        </td>
                        <td class="px-1 py-1">
                            {{ formatDate(alliancesLastUpdated) }}
                        </td>
                        <td class="px-1 py-1">
                            <button @click="cacheAlliances()" class="rounded-lg bg-gray-200 p-2 border hover:bg-green-200">
                                Refresh
                            </button>                            
                        </td>
                    </tr>
                    <tr class="b">
                        <th scope="row" class="">
                            <NuxtLink to="/caches/teams">
                                Teams
                            </NuxtLink>    
                        </th>
                        <td class="px-1 py-1">
                            {{ teams?.length }}
                        </td>
                        <td class="px-1 py-1">
                            {{ formatDate(teamsLastUpdated) }}
                        </td>
                        <td class="px-1 py-1">
                            <button @click="cacheTeams()" class="rounded-lg bg-gray-200 p-2 border hover:bg-green-200">
                                Refresh
                            </button>                            
                        </td>
                    </tr>
                    <tr class="b">
                        <th scope="row" class="">
                            <NuxtLink to="/caches/actions">
                                Actions
                            </NuxtLink>    
                        </th>
                        <td class="px-1 py-1">
                            {{ actions?.length }}
                        </td>
                        <td class="px-1 py-1">
                            {{ formatDate(actionsLastUpdated) }}
                        </td>
                        <td class="px-1 py-1">
                            <button @click="cacheActions()" class="rounded-lg bg-gray-200 p-2 border hover:bg-green-200">
                                Refresh
                            </button>
                        </td>
                    </tr>                                                          
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup>

const seasons = ref(null)
const seasonLastUpdated = ref(null)

const tournaments = ref(null)
const tournamentsLastUpdated = ref(null)

const matches = ref(null)
const matchesLastUpdated = ref(null)

const alliances = ref(null)
const alliancesLastUpdated = ref(null)

const teams = ref(null)
const teamsLastUpdated = ref(null)

const actions = ref(null)
const actionsLastUpdated = ref(null)


const formatDate = (date) => {
    if(!date) { return null }
    let dateValue = new Date(date)
    return `${dateValue.toLocaleDateString()} at ${dateValue.toLocaleTimeString()}`
}

const getMostRecentUpdatedDate = (data) => {
    if (!data) { return null }
    if (data.length == 0) { return null }
    return new Date(Math.max(...data.map(item => new Date(item.updatedDate))))
}

const cacheSeasons = async () => {
    await useFetch("/api/prisma/season/get-all", {
        onResponse({ request, response, options }) {
            seasons.value = refreshCache(response._data, "cached_seasons")
            seasonLastUpdated.value = getMostRecentUpdatedDate(seasons.value)
        }
    })
}

const cacheTournaments = async () => {
    await useFetch("/api/prisma/tournament/get-all", {
        onResponse({ request, response, options }) {
            tournaments.value = refreshCache(response._data, "cached_tournaments")
            tournamentsLastUpdated.value = getMostRecentUpdatedDate(seasons.tournaments)
        }
    })
}

const cacheMatches = async () => {
    await useFetch("/api/prisma/match/get-all", {
        onResponse({ request, response, options }) {
            matches.value = refreshCache(response._data, "cached_matches")
            matchesLastUpdated.value = getMostRecentUpdatedDate(seasons.matches)
        }
    })
}

const cacheAlliances = async () => {
    await useFetch("/api/prisma/alliance/get-all", {
        onResponse({ request, response, options }) {
            alliances.value = refreshCache(response._data, "cached_alliances")
            alliancesLastUpdated.value = getMostRecentUpdatedDate(seasons.alliances)
        }
    })
}

const cacheTeams = async () => {
    await useFetch("/api/prisma/team/get-all", {
        onResponse({ request, response, options }) {
            teams.value = refreshCache(response._data, "cached_teams")
            teamsLastUpdated.value = getMostRecentUpdatedDate(seasons.teams)
        }
    })
}

const cacheActions = async () => {
    await useFetch("/api/prisma/action/get-all", {
        onResponse({ request, response, options }) {
            actions.value = refreshCache(response._data, "cached_actions")
            actionsLastUpdated.value = getMostRecentUpdatedDate(seasons.actions)
        }
    })
}

const retrieveFromCache = () => {
    seasons.value = getSeasonsFromCache()
    seasonLastUpdated.value = getMostRecentUpdatedDate(seasons.value)

    tournaments.value = getTournamentsFromCache()
    tournamentsLastUpdated.value = getMostRecentUpdatedDate(tournaments.value)

    matches.value = getMatchesFromCache()
    matchesLastUpdated.value = getMostRecentUpdatedDate(matches.value)

    alliances.value = getAlliancesFromCache()
    alliancesLastUpdated.value = getMostRecentUpdatedDate(alliances.value)

    teams.value = getTeamsFromCache()
    teamsLastUpdated.value = getMostRecentUpdatedDate(teams.value)

    actions.value = getActionsFromCache()
    actionsLastUpdated.value = getMostRecentUpdatedDate(actions.value)           
}

const refreshCache = (apiData, cacheKey) => {

    // Invalidate the cache.
    localStorage.removeItem(cacheKey)

    // Retrieve the most recent updated date from the API call data.
    let apiLastUpdated = new Date(Math.max(...apiData?.map(item => new Date(item.updatedDate))))

    // If there is no cached version of the data, store the API data.
    let cachedData = JSON.parse(localStorage.getItem(cacheKey))
    if (!cachedData) {
        localStorage.setItem(cacheKey, JSON.stringify(apiData))
        return apiData
    }

    // If there is a cached version of the data, compare the most recent
    // updated dates and optionally update the cache.
    let cacheLastUpdated = new Date(Math.max(...cachedData.map(item => new Date(item.updatedDate)))) ?? 0
    if (apiLastUpdated > cacheLastUpdated) {
        localStorage.setItem(cacheKey, JSON.stringify(apiData))
        return apiData
    }

    // The cached data is current.
    return cachedData
}

onBeforeMount(async () => {
    try {
        retrieveFromCache()
    } catch (error) {
        console.error(error)
    } finally {
    }
})

</script>
