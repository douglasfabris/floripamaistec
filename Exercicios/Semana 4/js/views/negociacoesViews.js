export class NegociacoesViews {
    
    atualizar(negociacoes){
        const tabela = document.querySelector("#tabela");
        
        let newRow = tabela.insertRow(1);
        let dataCell = newRow.insertCell(0);
        let quantidadeCell = newRow.insertCell(1);
        let valorCell = newRow.insertCell(2);

        dataCell.innerHTML = negociacoes[negociacoes.length - 1].data;
        quantidadeCell.innerHTML = negociacoes[negociacoes.length - 1].quantidade;
        valorCell.innerHTML = negociacoes[negociacoes.length - 1].valor;
    }
}