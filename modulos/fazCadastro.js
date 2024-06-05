import { Jogador } from "./exports.js"

function insereModos(summonersRift, aram, modosRotativos) {
    let vet = []

    if (summonersRift) {
        vet.push("SR")
    }
    if (aram) {
        vet.push("ARAM")
    }
    if (modosRotativos) {
        vet.push("MR")
    }

    return vet
}

addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form");
    const inputNome = document.getElementById("inputNome");
    const inputComeco = document.getElementById("inputComeco");
    const inputNivel = document.getElementById("inputNivel");
    const inputMain = document.getElementById("inputMain");
    const inputOdeia = document.getElementById("inputOdeia");
    const checkSummoner = document.getElementById("checkSummoner");
    const checkAram = document.getElementById("checkAram");
    const checkRotativos = document.getElementById("checkRotativos");
    const inputRota = document.getElementById("inputRota");
    const inputRank = document.getElementById("inputRank");
    let vet = JSON.parse(localStorage.getItem("")) || [];

    form.onsubmit = function (e) {
        e.preventDefault();
        let escolheuRift = checkSummoner.checked
        let escolheuAram = checkAram.checked
        let escolheuRotativos = checkRotativos.checked

        if (escolheuRift || escolheuAram || escolheuRotativos) {
            let jogador = new Jogador(inputNome.value, inputComeco.value, inputNivel.value, inputMain.value, inputOdeia.value,
                insereModos(escolheuRift, escolheuAram, escolheuRotativos), inputRota.value, inputRank.value)
            vet.push(jogador)
            localStorage.setItem("jogador", JSON.stringify(vet))
        } else {
            alert("Por favor, escolha pelo menos um modo de jogo");
        }
    }
})