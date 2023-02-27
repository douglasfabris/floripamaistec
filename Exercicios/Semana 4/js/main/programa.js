import { Negociacao } from "../models/negociacao.js";
import { NegociacaoController } from "../controllers/negociacaoController.js";
import { ListaNegociacoes } from "../models/listaNegociacoes.js";

let controller = new NegociacaoController();

// let negociacao = new Negociacao ("2023-02-24", "10", "10.1");
// console.log(negociacao);
document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    controller.criarNegociacao();
    console.log(controller);
})

document.querySelector("#filtrar").addEventListener("click", () => {
    let filtered = controller.listaNegociacoes.filtrar(500);
    console.log(filtered);
})