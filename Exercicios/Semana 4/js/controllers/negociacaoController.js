import { Negociacao } from "../models/negociacao.js";
import { ListaNegociacoes } from "../models/listaNegociacoes.js";

export class NegociacaoController {
    #campoData;
    #campoQuantidade;
    #campoValor;
    #listaNegociacoes

    constructor() {
        this.#campoData = document.querySelector("#data");
        this.#campoQuantidade = document.querySelector("#quantidade");
        this.#campoValor = document.querySelector("#valor");
        this.#listaNegociacoes = new ListaNegociacoes();
    }

    criarNegociacao() {
        let data = Date(this.#campoData.value);
        let quantidade = this.#campoQuantidade.value;
        let valor = this.#campoValor.value;
        let negociacao = new Negociacao(data, quantidade, valor)
        this.#listaNegociacoes.adiciona(negociacao);
        console.log(negociacao)
        console.log(this.#listaNegociacoes.negociacao)
    }
}