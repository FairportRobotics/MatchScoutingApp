export default function () { 
    return JSON.parse(localStorage.getItem("scout_metrics")) ?? []
}