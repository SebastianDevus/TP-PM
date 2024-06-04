import { campeoes } from "./exports.js"

addEventListener("DOMContentLoaded", () => {
    let select1 = document.getElementById("inputMain")
    let select2 = document.getElementById("inputOdeia")
    
    campeoes.forEach(champion => {
        let option = document.createElement("option")
        option.innerText = champion
        option.value = champion
        select1.appendChild(option)
    })
    campeoes.forEach(champion => {
        let option = document.createElement("option")
        option.innerText = champion
        option.value = champion
        select2.appendChild(option)
    })
})