import { Jogador, campeoes, campeoesOption, rotas, rotasOption, ranks, ranksOption } from "./exportsGerais.js";

export function validaForm(form) {
    let validade = true
    let checks = 0
    form.querySelectorAll('input, select').forEach(input => {
        if (!input.checkValidity()) {
            validade = false
        }
    })
    form.querySelectorAll('input[type="checkbox"]').forEach(input => {
        if (input.checked == true) {
            checks++
        }
    })
    if (checks == 0) {
        validade = false
    }
    return validade
}

export function validaCadastro(id, idOr = "") {
    let vet = JSON.parse(localStorage.getItem("jogador")) || []
    let validade = true
    vet.forEach(elm => {
        if (elm.riotID == id) {
            if (elm.riotID != idOr) {
                validade = false
            }
        }
    })
    return validade
}

export function alteraVisual(input) {
    if (input.checkValidity()) {
        input.classList.remove("is-invalid")
        input.classList.add("is-valid")
    } else {
        input.classList.remove("is-valid")
        input.classList.add("is-invalid")
    }
}

export function alteraVisualChecks(c1, c2, c3, cd) {
    if (c1.checked || c2.checked || c3.checked) {
        c1.classList.remove("is-invalid")
        c2.classList.remove("is-invalid")
        c3.classList.remove("is-invalid")

        c1.classList.add("is-valid")
        c2.classList.add("is-valid")
        c3.classList.add("is-valid")

        cd.style.display = "none"
    } else {
        c1.classList.remove("is-valid")
        c2.classList.remove("is-valid")
        c3.classList.remove("is-valid")

        c1.classList.add("is-invalid")
        c2.classList.add("is-invalid")
        c3.classList.add("is-invalid")

        cd.style.display = "block"
    }
}

// op = operação. 1 = cadastra, 2 = edita
export function fazCadastro(i1, i2, i3, i4, i5, i6, i7, c1, c2, c3, op, id = "") {
    let vet = JSON.parse(localStorage.getItem("jogador")) || []
    let jogador = new Jogador(i1.value, i2.value, i3.value, i4.value, i5.value,
        insereModos(c1.checked, c2.checked, c3.checked), i6.value, i7.value)
    if (op == 1) {
        vet.push(jogador)
    } else {
        vet[vet.findIndex(j => j.riotID == id)] = jogador
    }    
    localStorage.setItem("jogador", JSON.stringify(vet))
    alert("Cadastrado com sucesso!")
}

export function excluiCadastro(id) {
    let vet = JSON.parse(localStorage.getItem("jogador")) || []
    vet.splice(vet.findIndex(j => j.riotID == id), 1)
    localStorage.setItem("jogador", JSON.stringify(vet))
    alert("Cadastro excluído com sucesso!")
}

export function adicionaOptions(s, v1, v2) {
    for (let index = 0; index < v1.length; index++) {
        let option = document.createElement("option")
        option.innerText = v1[index]
        option.value = v2[index]
        s.appendChild(option)
    }
}

export function habilitaSelects(c, s1, s2) {
    if (c.checked == true) {
        s1.disabled = false
        s2.disabled = false
    } else {
        s1.disabled = true
        s1.value = "n"
        s2.disabled = true
        s2.value = "ne"
    }
}

export function carregaTabela(tabela, form, d) { 
    let temp1 = document.createElement("template")
    temp1.innerHTML = '<td><button class="btn btn-warning botaoEdita">Editar</button></td>'
    let temp2 = document.createElement("template")
    temp2.innerHTML = '<td><button class="btn btn-danger botaoExclui">Excluir</button></td>'
    tabela.replaceChildren()
    let vet = JSON.parse(localStorage.getItem("jogador")) || []
    vet.forEach(elm => {
        let linha = document.createElement("tr")
        for (let index = 0; index < Object.keys(elm).length; index++) {
            let coluna = document.createElement("td")
            switch (index) {
                case 0:
                    coluna.innerHTML = elm.riotID
                    break
                    
                case 1:
                    coluna.innerHTML = elm.dataInicio
                    break
            
                case 2:
                    coluna.innerHTML = elm.nivel
                    break
            
                case 3:
                    coluna.innerHTML = campeoes[campeoesOption.indexOf(elm.campeaoMain)]
                    break
            
                case 4:
                    coluna.innerHTML = campeoes[campeoesOption.indexOf(elm.campeaoOdiado)]
                    break
            
                case 5:
                    coluna.style.whiteSpace = "nowrap"
                    if (elm.modos.includes("SR")) {
                        coluna.innerHTML += "<span id='SR'>Summoner's Rift</span> <br>"
                    }
                    if (elm.modos.includes("ARAM")) {
                        coluna.innerHTML += "<span id='ARAM'>ARAM</span> <br>"
                    }
                    if (elm.modos.includes("MR")) {
                        coluna.innerHTML += "<span id='MR'>Modos Rotativos</span> <br>"
                    }
                    break
            
                case 6:
                    coluna.innerHTML = rotas[rotasOption.indexOf(elm.rotaMain)]
                    break
            
                case 7:
                    coluna.innerHTML = ranks[ranksOption.indexOf(elm.rank)]

                    break
                default:
                    break
            }
            linha.appendChild(coluna)
        }
        linha.appendChild(temp1.content.cloneNode(true))
        linha.appendChild(temp2.content.cloneNode(true))
        tabela.appendChild(linha)
        
        let btnEd = linha.lastChild.previousSibling.firstChild
        let btnEx = linha.lastChild.firstChild
        btnEd.addEventListener("click", () => {
            preencheFormEdicao(btnEd.parentElement.parentElement, form.inputNome, form.inputComeco, 
                form.inputNivel, form.inputMain, form.inputOdeia, form.inputRota, form.inputRank,
                form.checkSummoner, form.checkAram, form.checkRotativos)
            mudaModoForm(d, botaoSubmit, botaoReset, true)
            d.querySelector("#idOriginal").value = btnEd.parentElement.parentElement.firstElementChild.innerText
        })
    
        btnEx.addEventListener("click", () => {
            if (confirm("Excluir cadastro?")) {
                let id = btnEx.parentElement.parentElement.firstChild.innerText
                excluiCadastro(id)
                carregaTabela(corpoTabela)   
            }
        })
    });
}

export function preencheFormEdicao(tr, i1, i2, i3, i4, i5, i6, i7, c1, c2, c3) {
    let tds = tr.children
    for (let index = 0; index < tds.length; index++) {
        const filho = tds[index];
        switch (index) {
            case 0:
                i1.value = filho.innerText
                i1.dispatchEvent(new Event("click"))
                i1.dispatchEvent(new Event("input"))
                break
            case 1:
                i2.value = filho.innerText
                i2.dispatchEvent(new Event("click"))
                i2.dispatchEvent(new Event("input"))                
                break
            case 2:
                i3.value = filho.innerText
                i3.dispatchEvent(new Event("click"))
                i3.dispatchEvent(new Event("input"))
                break
            case 3:
                i4.value = campeoesOption[campeoes.indexOf(filho.innerText)]
                i4.dispatchEvent(new Event("click"))
                i4.dispatchEvent(new Event("input"))
                break
            case 4:
                i5.value = campeoesOption[campeoes.indexOf(filho.innerText)]
                i5.dispatchEvent(new Event("click"))
                i5.dispatchEvent(new Event("input"))
                break
            case 5:
                if (filho.querySelector("#SR") != null) {
                    c1.checked = true
                } else {
                    c1.checked = false
                }
                if (filho.querySelector("#ARAM") != null) {
                    c2.checked = true
                } else {
                    c2.checked = false
                }
                if (filho.querySelector("#MR") != null) {
                    c3.checked = true
                } else {
                    c3.checked = false
                }
                c1.dispatchEvent(new Event("change"))
                c2.dispatchEvent(new Event("change"))
                c3.dispatchEvent(new Event("change"))
                break
            case 6:
                i6.value = rotasOption[rotas.indexOf(filho.innerText)]
                i6.dispatchEvent(new Event("click"))
                i6.dispatchEvent(new Event("input"))
                break
            case 7:
                i7.value = ranksOption[ranks.indexOf(filho.innerText)]
                i7.dispatchEvent(new Event("click"))
                i7.dispatchEvent(new Event("input"))
                break
        
            default:
                break
        }
    }
}

export function mudaModoForm(d, b1, b2, edicao) {
    let sp = d.querySelector("#spanModo")
    let i1 = d.querySelector("#modoForm")
    let i2 = d.querySelector("#idOriginal")
    if (edicao) {
        sp.innerText = "edição"
        i1.value = 2
        i2.value = "aaaaaaa"
        b1.innerText = "Editar"
        b2.innerText = "Cancelar"
    } else {        
        sp.innerText = "inserção"
        i1.value = 1
        i2.value = "bbbbbb"
        b1.innerText = "Cadastrar"
        b2.innerText = "Limpar"
    }    
}

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