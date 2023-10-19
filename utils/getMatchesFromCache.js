export default function () { 
    return JSON.parse(localStorage.getItem("cached_matches")) ?? []
}