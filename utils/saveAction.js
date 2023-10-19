export default function (action) { 
    
    // Retrieve the objects we'll use to record activities.
    let scope = getScoutScope()
    let actions = JSON.parse(localStorage.getItem("scout_metrics")) ?? []
    
    let newAction = {
        seasonId: scope.season,
        tournamentId: scope.tournament,
        matchTypeId: scope.matchType,
        matchRound: scope.matchRound,
        matchAllianceId: scope.matchAlliance,
        teamId: scope.team,
        actionId: action.actionId,
        fromDate: action.fromDate,
        throughDate: action.throughDate
    }

    // Save the action.
    actions.push(newAction)
    localStorage.setItem("scout_metrics", JSON.stringify(actions))
}
