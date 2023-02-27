import { NegociacoesViews } from "../views/negociacoesViews.js";

export class ListaNegociacoes {
    #negociacoes = [];

    adiciona(negociacao) {
        this.#negociacoes.push(negociacao)
    }

    filtrar(filtro) {
        let filtered = this.#negociacoes.filter(valor => valor.valor > filtro)
        
        return filtered
    }

    get negociacoes() {
        return this.#negociacoes;
    }

    get data() {
        return this.#negociacoes.data;
    }

}