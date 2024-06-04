import { campeoes, campeoesFormatados } from "./exports.js"

addEventListener("DOMContentLoaded", () => {
    let select1 = document.getElementById("inputMain")
    let select2 = document.getElementById("inputOdeia")
    
    for (let index = 0; index < campeoes.length; index++) {
        let option = document.createElement("option")
        option.innerText = campeoes[index]
        option.value = campeoesFormatados[index]
        select1.appendChild(option)
    }
    for (let index = 0; index < campeoes.length; index++) {
        let option = document.createElement("option")
        option.innerText = campeoes[index]
        option.value = campeoesFormatados[index]
        select2.appendChild(option)
    }
})