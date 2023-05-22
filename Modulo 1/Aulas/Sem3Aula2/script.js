function adicionarMassa() {
    let massas = document.querySelector("#massa");
    let bordas = document.querySelector("#borda");

    let massasValue = massas.options[massas.selectedIndex].text;
    let bordasValue = bordas.options[bordas.selectedIndex].text;

    localStorage.setItem("Massa", JSON.stringify(massasValue));
    localStorage.setItem("Borda", JSON.stringify(bordasValue));
};

function checarSabores() {
    // Checar se foram selecionados 3 sabores
}

// Adicionar pedido no localStorage

// Criar página com dados do pedido