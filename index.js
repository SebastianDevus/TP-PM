import { campeoes, campeoesOption, ranks, ranksOption, rotas, rotasOption } from "./modulos/exportsGerais.js";
import { alteraVisual, alteraVisualChecks, validaForm, validaCadastro, fazCadastro, 
        adicionaOptions, habilitaSelects, carregaTabela, mudaModoForm, 
        excluiCadastro} from "./modulos/exportsFuncoes.js"

addEventListener("DOMContentLoaded", () => {
    const corpoTabela = document.getElementById("corpoTabela")
    const divModo = document.getElementById("divModo")
    const botaoSubmit = document.getElementById("botaoSubmit")
    const botaoReset = document.getElementById("botaoReset")
    const botaoLimpa = document.getElementById("botaoLimpa")
    const form = document.getElementById("form")
    const feedbackChecks = document.getElementById("feedbackChecks")

    // Coisas da tabela
    corpoTabela.onload = carregaTabela(corpoTabela, form, divModo)
    botaoLimpa.addEventListener("click", () => {
        if (confirm("Excluir TODOS os cadastros?")) {
            localStorage.removeItem("jogador")
            carregaTabela(corpoTabela, form, divModo)
            alert("Todos os cadastros foram excluídos")
        }
    }) 

    // Coisas do form
    adicionaOptions(form.inputMain, campeoes, campeoesOption)
    adicionaOptions(form.inputOdeia, campeoes, campeoesOption)
    adicionaOptions(form.inputRota, rotas, rotasOption)
    adicionaOptions(form.inputRank, ranks, ranksOption)

    form.querySelectorAll("input:not([type='checkbox']), select").forEach(input => {
        ['click', 'input'].forEach(function (evt) {
            input.addEventListener(evt, () => {
                alteraVisual(input)
            })
        });
    })

    form.querySelectorAll("input[type='checkbox']").forEach(input => {
        input.addEventListener("change", () => {
            alteraVisualChecks(form.checkSummoner, form.checkAram, form.checkRotativos, feedbackChecks)
            habilitaSelects(form.checkSummoner, form.inputRota, form.inputRank)
        })
    })

    form.addEventListener("submit", (e) => {
        e.preventDefault()
        if (validaForm(form)) {
            if (divModo.querySelector("#modoForm").value == 1) {
                if (validaCadastro(form.inputNome.value)) {
                    fazCadastro(form.inputNome, form.inputComeco, form.inputNivel,
                        form.inputMain, form.inputOdeia, form.inputRota, form.inputRank,
                        form.checkSummoner, form.checkAram, form.checkRotativos, 1)   
                    carregaTabela(corpoTabela, form, divModo)       
                } else {
                    alert("ID já cadastrado, entre em modo de edição para alterar dados")
                }
            } else {
                if (validaCadastro(form.inputNome.value, divModo.querySelector("#idOriginal").value)) {
                    fazCadastro(form.inputNome, form.inputComeco, form.inputNivel,
                        form.inputMain, form.inputOdeia, form.inputRota, form.inputRank,
                        form.checkSummoner, form.checkAram, form.checkRotativos, 2,
                        divModo.firstElementChild.lastElementChild.value) 
                    carregaTabela(corpoTabela, form, divModo) 
                    mudaModoForm(divModo, botaoSubmit, botaoReset, false)
                    form.reset() 
                } else {
                    alert("ID já cadastrado, entre em modo de edição para alterar dados")
                }
                
            }
            
        } else {
            alert("Dados inválidos!")
        }
        form.querySelectorAll("input:not([type='checkbox']), select").forEach(input => {
            alteraVisual(input)
        })
        alteraVisualChecks(form.checkSummoner, form.checkAram, form.checkRotativos, feedbackChecks)
        form.checkSummoner.dispatchEvent(new Event("change"))
    })

    form.addEventListener("reset", (e) => {
        if (divModo.querySelector("#modoForm").value == 2) {
            if (confirm("Cancelar edição?")) {
                mudaModoForm(divModo, botaoSubmit, botaoReset, false)
                form.reset()
            } else {
                e.preventDefault()
            }
        }
    })
})