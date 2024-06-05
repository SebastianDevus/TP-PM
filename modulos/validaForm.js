function validaForm(form) {
    let validade = true
    let checks = 0
    form.querySelectorAll('input, select').forEach(input => {
        if (input.checkValidity() == false) {
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

function alteraVisual(input) {
    if (input.checkValidity()) {
        input.classList.remove("is-invalid")
        input.classList.add("is-valid")
    } else {
        input.classList.remove("is-valid")
        input.classList.add("is-invalid")
    } 
}

function alteraVisualChecks(c1, c2, c3, cd) {
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

export { alteraVisual, alteraVisualChecks, validaForm }