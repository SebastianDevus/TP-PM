import { Jogador } from "./modulos/exports.js"
import { alteraVisual, alteraVisualChecks, validaForm, fazNovoCadastro } from "./modulos/funcoesForm.js"

addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form")
    const feedbackChecks = document.getElementById("feedbackChecks")

    form.querySelectorAll("input:not([type='checkbox']), select").forEach(input => {
        ['click', 'input'].forEach(function (evt) {
            input.addEventListener(evt, () => {
                alteraVisual(input)
            })
        });
    })

    form.querySelectorAll("input[type='checkbox']").forEach(input => {
        input.addEventListener("change", () => {
            alteraVisualChecks(checkSummoner, checkAram, checkRotativos, feedbackChecks)
        })
    })

    form.addEventListener("submit", (e) => {
        e.preventDefault()
        if (validaForm(form)) {
            fazNovoCadastro(form.inputNome, form.inputComeco, form.inputNivel,
                form.inputMain, form.inputOdeia, form.inputRota, form.inputRank,
                form.checkSummoner, form.checkAram, form.checkRotativos)          
        } else {
            alert("Dados inválidos!")
        }
        form.querySelectorAll("input:not([type='checkbox']), select").forEach(input => {
            alteraVisual(input)
        })
        alteraVisualChecks(form.checkSummoner, form.checkAram, form.checkRotativos, feedbackChecks)
    })
})