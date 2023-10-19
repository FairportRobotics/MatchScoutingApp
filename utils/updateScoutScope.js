export default function (key, value) { 
    // Retrieve the object we will use to capture the progress through the 
    // configuration to capture activities.
    let scope = JSON.parse(localStorage.getItem("scout_scope")) ?? {}

    // Update the scope of the metrics capture.
    switch(key) {
        case "season":
            scope = {}
            scope[key] = value
            break;
        case "tournament":
        case "matchType":
        case "matchRound":
        case "matchAlliance":
        case "team":
            scope[key] = value
            break;
    }

    // Save the scope.
    localStorage.setItem("scout_scope", JSON.stringify(scope))
}