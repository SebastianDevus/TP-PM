addEventListener("DOMContentLoaded", () => {
    let corpoTabela = document.getElementById("corpoTabela")
    
    let vet = JSON.parse(localStorage.getItem("jogador")) || []
    vet.forEach(element => {
        
        let linha = document.createElement("tr")

        for (let index = 0; index < Object.keys(element).length; index++) {
            let coluna = document.createElement("td")
            let elemento = ""
            switch (index) {
                case 0:
                    elemento = `<input type="text" name="" id="" value="${element.riotID}" disabled>`
                    break
                    
                case 1:
                    elemento = `<input type="date" name="" id="" value="${element.dataInicio}" disabled>`
                    break
            
                case 2:
                    elemento = `<input type="number" name="" id="" value="${element.nivel}" disabled>`
                    break
            
                case 3:
                    elemento = `<select name="" id="" disabled></select>`
                    break
            
                case 4:
                    elemento = `<select name="" id="" disabled></select>`
                    break
            
                case 5:
    
                    break
            
                case 6:
                    elemento = `<select name="" id="" disabled></select>`
                    break
            
                case 7:
                    elemento = `<select name="" id="" disabled></select>`
                    break
                default:
                    break
            }
            coluna.innerHTML = elemento
            linha.appendChild(coluna)
        }
        corpoTabela.appendChild(linha)
    });
})