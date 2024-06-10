import { campeoes, campeoesOption, ranks, ranksOption, rotas, rotasOption } from "./modulos/exportsGerais.js";
import { alteraVisual, alteraVisualChecks, validaForm, validaCadastro, fazNovoCadastro, 
        adicionaOptions, habilitaSelects, carregaTabela } from "./modulos/exportsFuncoes.js"

// Arquivo principal. Criador de eventListeners


addEventListener("DOMContentLoaded", () => {
    // Coisas da tabela
    const corpoTabela = document.getElementById("corpoTabela")
    const temp = document.querySelector("#template")

    
    corpoTabela.onload = carregaTabela(corpoTabela, campeoes, campeoesOption,
        rotas, rotasOption, ranks, ranksOption, temp)
    
    let botoesEdita = corpoTabela.querySelectorAll(".botaoEdita")
    let botoesExclui = corpoTabela.querySelectorAll(".botaoExclui")

    botoesEdita.forEach(elm => {
        elm.addEventListener("click", () => {
            alert("Edita")
        })
    })
    botoesExclui.forEach(elm => {
        elm.addEventListener("click", () => {
            alert("Exclui")
        })
    })

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
        corpoTabela.replaceChildren()
        carregaTabela(corpoTabela, campeoes, campeoesOption, rotas, rotasOption, ranks, ranksOption, temp)
    })
})