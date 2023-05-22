export class NegociacoesViews {
    
    atualizar(negociacoes){
        const tabela = document.querySelector("#tabela");
        tabela.innerHTML = ""
        for (let i = negociacoes.length - 1; i >= 0; i--) {
            let newRow = tabela.insertRow();
            let dataCell = newRow.insertCell(0);
            let quantidadeCell = newRow.insertCell(1);
            let valorCell = newRow.insertCell(2);
            dataCell.innerHTML = negociacoes[i].data;
            quantidadeCell.innerHTML = negociacoes[i].quantidade;
            valorCell.innerHTML = negociacoes[i].valor;
        }
    }
}