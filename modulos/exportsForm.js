import { Jogador, campeoes, campeoesOption } from "./exportsGerais.js";

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

export function fazNovoCadastro(i1, i2, i3, i4, i5, i6, i7, c1, c2, c3) {
    let vet = JSON.parse(localStorage.getItem("jogador")) || []
    let jogador = new Jogador(i1.value, i2.value, i3.value, i4.value, i5.value,
        insereModos(c1.checked, c2.checked, c3.checked), i6.value, i7.value)
    vet.push(jogador)
    localStorage.setItem("jogador", JSON.stringify(vet))
    alert("Cadastrado com sucesso!")
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
