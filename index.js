import { campeoes, campeoesOption, ranks, ranksOption, rotas, rotasOption } from "./modulos/exportsGerais.js";
import { alteraVisual, alteraVisualChecks, validaForm, validaCadastro, fazNovoCadastro, 
        adicionaOptions, habilitaSelects, carregaTabela, preencheFormEdicao, mudaModoVisual } from "./modulos/exportsFuncoes.js"

// variável global
var modoEdicao = false

addEventListener("DOMContentLoaded", () => {
    // Coisas da tabela
    const corpoTabela = document.getElementById("corpoTabela")
    const temp = document.querySelector("#template")
    const spanModo = document.getElementById("spanModo")
    const botaoSubmit = document.getElementById("botaoSubmit")
    const botaoReset = document.getElementById("botaoReset")
    
    corpoTabela.onload = carregaTabela(corpoTabela, temp)
    adicionaEventListeners(corpoTabela)

    // Coisas do form
    const form = document.getElementById("form")
    const feedbackChecks = document.getElementById("feedbackChecks")

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
            if (validaCadastro(form.inputNome.value)) {
                fazNovoCadastro(form.inputNome, form.inputComeco, form.inputNivel,
                    form.inputMain, form.inputOdeia, form.inputRota, form.inputRank,
                    form.checkSummoner, form.checkAram, form.checkRotativos)          
            } else {
                alert("ID já cadastrado, entre em modo de edição para alterar dados")
            }
        } else {
            alert("Dados inválidos!")
        }
        form.querySelectorAll("input:not([type='checkbox']), select").forEach(input => {
            alteraVisual(input)
        })
        alteraVisualChecks(form.checkSummoner, form.checkAram, form.checkRotativos, feedbackChecks)
        carregaTabela(corpoTabela, temp)
    })

    form.addEventListener("reset", () => {
        if (modoEdicao) {
            modoEdicao = false
            mudaModoVisual(spanModo, botaoSubmit, botaoReset, false)
        }
    })
})

function adicionaEventListeners(tabela) {
    let botoesEdita = tabela.querySelectorAll(".botaoEdita")
    let botoesExclui = tabela.querySelectorAll(".botaoExclui")

    botoesEdita.forEach(elm => {
        elm.addEventListener("click", () => {
            preencheFormEdicao(elm.parentElement.parentElement, form.inputNome, form.inputComeco, 
                form.inputNivel, form.inputMain, form.inputOdeia, form.inputRota, form.inputRank,
                form.checkSummoner, form.checkAram, form.checkRotativos)
            modoEdicao = true
            mudaModoVisual(spanModo, botaoSubmit, botaoReset, modoEdicao)
        })
    })
    botoesExclui.forEach(elm => {
        elm.addEventListener("click", () => {
            alert("Exclui")
        })
    })
}
