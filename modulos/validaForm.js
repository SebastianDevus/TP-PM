addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form");
    const checkSummoner = document.getElementById("checkSummoner");
    const checkAram = document.getElementById("checkAram");
    const checkRotativos = document.getElementById("checkRotativos");
    
    form.querySelectorAll('input:not([type="checkbox"]), select').forEach(input => {
        input.addEventListener("change", () => {
            if (input.checkValidity()) {
                input.classList.remove("is-invalid")
                input.classList.add("is-valid")
            } else {
                input.classList.remove("is-valid")
                input.classList.add("is-invalid")
            }
        })
    })
    form.querySelectorAll('input[type="checkbox"]').forEach(input => {
        input.addEventListener("click", () => {
            if (checkSummoner.checked || checkAram.checked || checkRotativos.checked) {
                checkSummoner.classList.remove("is-invalid")
                checkAram.classList.remove("is-invalid")
                checkRotativos.classList.remove("is-invalid")

                checkSummoner.classList.add("is-valid")
                checkAram.classList.add("is-valid")
                checkRotativos.classList.add("is-valid")
            } else {
                checkSummoner.classList.remove("is-valid")
                checkAram.classList.remove("is-valid")
                checkRotativos.classList.remove("is-valid")
                
                checkSummoner.classList.add("is-invalid")
                checkAram.classList.add("is-invalid")
                checkRotativos.classList.add("is-invalid")
            }
        })
    })
})