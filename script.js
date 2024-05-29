const form = document.getElementById("form");
const inputNome = document.getElementById("inputNome");

form.onsubmit = function (e) {
    e.preventDefault();
    var modoFoiEscolhido = form.summonersRift.checked || form.aram.checked || form.modosRotativos.checked

    if (modoFoiEscolhido == true) {
        
    } else {
        alert("Por favor, escolha pelo menos um modo de jogo");
    }
}
