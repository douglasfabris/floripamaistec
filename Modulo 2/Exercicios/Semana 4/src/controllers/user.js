const fs = require("fs");
const listarDias = require("../utils/getDaysOfTheMonth");

module.exports = {
  async ordenarLista(req, res) {
    const lista = ["Pedro", "José", "Aderbal", "Danilo", "Luisa", "Vitoria"];
    const { id } = req.query;
    const index = parseInt(id);
    if (Number.isNaN(index) || index >= lista.length) {
      return res.status(406).send("Parametro inválido");
    }
    let temp = lista[0];
    lista[0] = lista[index];
    lista[index] = temp;
    return res.status(200).send(lista);
  },

  async listarDatas(req, res) {
    let { mes, ano } = req.query;
    mes = parseInt(mes);
    if (ano) {
      ano = parseInt(ano);
    }
    const dias = listarDias(mes, ano);
    console.log(dias);
    if (!dias) {
      return res.status(406).send("Data inválida");
    }
    return res.status(200).send(dias);
  },

  async salvarJson(req, res) {
    const dadosJson = req.body;
    console.log(dadosJson);
    if (fs.existsSync("ex4.json")) {
      const dadosArquivo = JSON.parse(fs.readFileSync("ex4.json", "utf-8"));
      dadosArquivo.push(dadosJson);
      fs.writeFileSync("ex4.json", JSON.stringify(dadosArquivo));
      return res.status(200).send("Arquivo enviado com sucesso");
    }
    fs.writeFileSync("ex4.json", "[" + JSON.stringify(dadosJson) + "]");
    return res.status(200).send("Arquivo enviado com sucesso");
  },
};
