<template>
    <div class="w-full">
        <div class="border-b mb- border-spacing-x-2 spacing-y-2 flex flex-row items-center justify-between">
            <h1 class="text-xl text-bold">Metrics</h1>

            <button @click="uploadAll" class="p-2 mb-2 button-default">
                Upload All
            </button>
        </div>

        <MetricsSeasons :dictionary="metricsDictionary" />

    </div>
</template>

<script setup>

const metricsDictionary = ref(null)

const uploadAll = async () => {
    let metrics = getMetricsFromCache()

    for(let i = 0; i < metrics.length; i++) {
        let metric = metrics[0]
        await useFetch("/api/prisma/metric/create", {
            method: "POST",
            body: {
                tournamentId: metric.tournamentId,
                matchId: metric.matchTypeId,
                round: metric.matchRound,
                allianceId: metric.matchAllianceId,
                teamId: metric.teamId,
                actionId: metric.actionId,
                fromDate: metric.fromDate,
                throughDate: metric.throughDate,
            }
        })  
    }

    localStorage.removeItem("scout_metrics")
    metricsDictionary.value = null
}

const createMetricsDictionary = (data) => {

    let dictionary = {}
    getDistinctSeasons(data)
        .forEach((seasonId) => {
        dictionary[seasonId] = { }

        getDistinctTournaments(data, seasonId)
            .forEach((tournamentId) => {
            dictionary[seasonId][tournamentId] = { }

            getDistinctMatches(data, seasonId, tournamentId)
                .forEach((matchTypeId) => {
                dictionary[seasonId][tournamentId][matchTypeId] = { }

                getDistinctMatchRounds(data, seasonId, tournamentId, matchTypeId)
                    .forEach((matchRound) => {
                    dictionary[seasonId][tournamentId][matchTypeId][matchRound] = { }

                    getDistinctMatchAlliances(data, seasonId, tournamentId, matchTypeId, matchRound)
                    .forEach((matchAllianceId) => {
                        dictionary[seasonId][tournamentId][matchTypeId][matchRound][matchAllianceId] = { }

                        getDistinctTeams(data, seasonId, tournamentId, matchTypeId, matchRound, matchAllianceId)
                        .forEach((teamId) => {
                            dictionary[seasonId][tournamentId][matchTypeId][matchRound][matchAllianceId][teamId] = []

                            getMetrics(data, seasonId, tournamentId, matchTypeId, matchRound, matchAllianceId, teamId)
                            .forEach((metric) => {
                                dictionary[seasonId][tournamentId][matchTypeId][matchRound][matchAllianceId][teamId].push(metric)
                            })
                        })
                    })
                })
            })

        })
    })

    metricsDictionary.value = dictionary
}

const getDistinctSeasons = (data) => {
    return new Set(data?.map((item) => item.seasonId))
}

const getDistinctTournaments = (data, seasonId) => {
    return new Set(data.
        filter((item) => item.seasonId == seasonId)
        .map((item) => item.tournamentId))
}

const getDistinctMatches = (data, seasonId, tournamentId) => {
    return new Set(data.
        filter((item) => item.seasonId == seasonId && item.tournamentId == tournamentId)
        .map((item) => item.matchTypeId))
}

const getDistinctMatchRounds = (data, seasonId, tournamentId, matchTypeId) => {
    return new Set(data.
        filter((item) => 
            item.seasonId == seasonId && 
            item.tournamentId == tournamentId &&
            item.matchTypeId == matchTypeId
        )
        .map((item) => item.matchRound))
}

const getDistinctMatchAlliances = (data, seasonId, tournamentId, matchTypeId, matchRound) => {
    return new Set(data.
        filter((item) => 
            item.seasonId == seasonId && 
            item.tournamentId == tournamentId &&
            item.matchTypeId == matchTypeId &&
            item.matchRound == matchRound
        )
        .map((item) => item.matchAllianceId))
}

const getDistinctTeams = (data, seasonId, tournamentId, matchTypeId, matchRound, matchAllianceId) => {
    return new Set(data.
        filter((item) => 
            item.seasonId == seasonId && 
            item.tournamentId == tournamentId &&
            item.matchTypeId == matchTypeId &&
            item.matchRound == matchRound &&
            item.matchAllianceId == matchAllianceId
        )
        .map((item) => item.teamId))
}

const getMetrics = (data, seasonId, tournamentId, matchTypeId, matchRound, matchAllianceId, teamId) => {
    return new Set(data.
        filter((item) => 
            item.seasonId == seasonId && 
            item.tournamentId == tournamentId &&
            item.matchTypeId == matchTypeId &&
            item.matchRound == matchRound &&
            item.matchAllianceId == matchAllianceId &&
            item.teamId == teamId
        )
        .map((item) => item))
}

onBeforeMount(async () => {
    try {
        createMetricsDictionary(getScoutMetricsFromCache())
    } catch (error) {
        console.error(error)    
    } finally{
    }
})

</script>
