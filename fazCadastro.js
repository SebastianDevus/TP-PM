// Antes do DOM carregar
import { Jogador } from "./exports.js";
var vet = [];

// Dps do DOM carregar
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

    form.onsubmit = function (e) {
        e.preventDefault();
        let escolheuRift = checkSummoner.checked
        let escolheuAram = checkAram.checked
        let escolheuRotativos = checkRotativos.checked

        if (escolheuRift || escolheuAram || escolheuRotativos) {
            let jogador = new Jogador(inputNome.value, inputComeco.value, inputNivel.value, inputMain.value, inputOdeia.value, 
                escreveModos(escolheuRift, escolheuAram, escolheuRotativos, inputRota.value, inputRank.value))
            vet.push(jogador)
        } else {
            alert("Por favor, escolha pelo menos um modo de jogo");
        }
    }
})

function escreveModos(summonersRift, aram, modosRotativos) {
    let primeiro = true
    let string;

    if (summonersRift) {
        string = "Summoner's Rift"
        primeiro = false;
    }
    if (aram) {
        if (primeiro) {
            string = "ARAM"
            primeiro = false;
        } else {
            string += ", ARAM"
        }
    }
    if (modosRotativos) {
        if (primeiro) {
            string = "Modos Rotativos"
            primeiro = false;
        } else {
            string += ", Modos Rotativos"
        }
    }

    return string
}