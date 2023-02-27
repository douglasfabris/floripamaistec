export class ListaNegociacoes {
    #negociacoes = [];

    adiciona(negociacao) {
        this.#negociacoes.push(negociacao)
    }
}