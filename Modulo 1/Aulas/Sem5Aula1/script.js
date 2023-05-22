let convidados = JSON.parse(localStorage.getItem("convidados")) || [];

let elLista = document.querySelector("#listaConvidados");
let elBotao = document.getElementById("botao");
let elCampo = document.querySelector("#campo");

elBotao.onclick = function () {
    let nome = elCampo.value;
    convidados.push({nome: nome});
    elCampo.value = "";
    console.log(convidados)
    salvarConvidados();
};

function salvarConvidados() {
    localStorage.setItem("convidados", JSON.stringify(convidados));
}

function listarConvidades() {
    for(const convidado of convidados){
        let elConvidado = document.createElement("li");
        var elNome = document.createTextNode(convidado.nome);
    }
}