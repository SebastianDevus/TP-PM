import { campeoes, campeoesOption, rotas, rotasOption, ranks, ranksOption } from "./modulos/exportsGerais.js"
import { adicionaOptions } from "./modulos/exportsForm.js"

addEventListener("DOMContentLoaded", () => {
    let corpoTabela = document.getElementById("corpoTabela")
    
    let vet = JSON.parse(localStorage.getItem("jogador")) || []
    vet.forEach(elm => {
        
        let linha = document.createElement("tr")

        for (let index = 0; index < Object.keys(elm).length; index++) {
            let elemento
            let coluna = document.createElement("td")
            switch (index) {
                case 0:
                    elemento = document.createElement("input")
                    elemento.disabled = true
                    elemento.value = elm.riotID
                    break
                    
                case 1:
                    elemento = document.createElement("input")
                    elemento.disabled = true
                    elemento.value = elm.dataInicio
                    break
            
                case 2:
                    elemento = document.createElement("input")
                    elemento.disabled = true
                    elemento.value = elm.nivel
                    break
            
                case 3:
                    elemento = document.createElement("select")
                    elemento.disabled = true
                    adicionaOptions(elemento, campeoes, campeoesOption)
                    elemento.value = elm.campeaoMain
                    break
            
                case 4:
                    elemento = document.createElement("select")
                    elemento.disabled = true
                    adicionaOptions(elemento, campeoes, campeoesOption)
                    elemento.value = elm.campeaoOdiado
                    break
            
                case 5:
                    elemento = document.createElement("input")
                    elemento.type = "checkbox"
                    elemento.classList.add("a")
                    elemento.disabled = true
                    coluna.append(elemento)
                    elemento = document.createElement("input")
                    elemento.type = "checkbox"
                    elemento.disabled = true
                    coluna.append(elemento)
                    elemento = document.createElement("input")
                    elemento.type = "checkbox"
                    elemento.disabled = true
                    break
            
                case 6:
                    elemento = document.createElement("select")
                    elemento.disabled = true
                    adicionaOptions(elemento, rotas, rotasOption)
                    elemento.value = elm.rotaMain
                    break
            
                case 7:
                    elemento = document.createElement("select")
                    elemento.disabled = true
                    adicionaOptions(elemento, ranks, ranksOption)
                    elemento.value = elm.rank
                    break
                default:
                    break
            }
            coluna.append(elemento)
            linha.appendChild(coluna)
        }
        corpoTabela.appendChild(linha)
    });
})