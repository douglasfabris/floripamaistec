export class Negociacao {
    #data;
    #quantidade;
    #valor;

    constructor(data, quantidade, valor) {
        this.#data = new Date(data).toDateString();
        this.#quantidade = Number(quantidade);
        this.#valor = Number(valor);
    }

    get data() {
        return this.#data;
    }

    get quantidade() {
        return this.#quantidade;
    }
    
    get valor() {
        return this.#valor;
    }
}