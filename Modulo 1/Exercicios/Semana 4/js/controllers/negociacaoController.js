import { Negociacao } from "../models/negociacao.js";
import { ListaNegociacoes } from "../models/listaNegociacoes.js";
import { NegociacoesViews } from "../views/negociacoesViews.js";

export class NegociacaoController {
    #campoData;
    #campoQuantidade;
    #campoValor;
    #listaNegociacoes;
    #negociacoesView = new NegociacoesViews();

    constructor() {
        this.#campoData = document.querySelector("#data");
        this.#campoQuantidade = document.querySelector("#quantidade");
        this.#campoValor = document.querySelector("#valor");
        this.#listaNegociacoes = new ListaNegociacoes();
    }

    criarNegociacao() {
        let data = new Date(this.#campoData.value + "T00:00:00-03:00");
        let quantidade = this.#campoQuantidade.value;
        let valor = this.#campoValor.value;
        let negociacao = new Negociacao(data, quantidade, valor);
        this.#listaNegociacoes.adiciona(negociacao);
        let negociacoes = this.#listaNegociacoes.negociacoes;
        this.#negociacoesView.atualizar(negociacoes);
        console.log(negociacoes);
    }

    get listaNegociacoes() {
        return this.#listaNegociacoes
    }

    get negociacoesView() {
        return this.#negociacoesView
    }
}