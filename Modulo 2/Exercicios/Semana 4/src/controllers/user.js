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
    if (!dias) {
      return res.status(406).send("Data inválida");
    }
    return res.status(200).send(dias);
  },

  async salvarJson(req, res) {
    const dadosJson = req.body;
    if (fs.existsSync("ex4.json")) {
      const dadosArquivo = JSON.parse(fs.readFileSync("ex4.json", "utf-8"));
      dadosArquivo.push(dadosJson);
      fs.writeFileSync("ex4.json", JSON.stringify(dadosArquivo));
      return res.status(200).send("Arquivo enviado com sucesso");
    }
    fs.writeFileSync("ex4.json", "[" + JSON.stringify(dadosJson) + "]");
    return res.status(200).send("Arquivo enviado com sucesso");
  },

  async filtrarDados(req, res) {
    const { ageMin = 0, ageMax = 199, state = "", job = "" } = req.query;
    const dados = JSON.parse(fs.readFileSync("./src/database/user.json"));
    const filtered = dados
      .filter((user) => user.age >= ageMin && user.age <= ageMax)
      .filter((user) => user.job.toLowerCase().includes(job.toLowerCase()))
      .filter((user) => user.state.toLowerCase().includes(state.toLowerCase()));
    return res.status(200).send(filtered);
  },

  async alterarJson(req, res) {
    const id = req.params.id;
    const dados = req.body;
    const dadosArquivo = JSON.parse(
      fs.readFileSync("./src/database/user.json", "utf-8")
    );
    const index = dadosArquivo.findIndex((usuario) => usuario.id == id);
    if (index === -1) {
      return res.status(400).send("Usuário não encontrado");
    }
    const keys = Object.keys(dados);
    let alterado = false;
    let alterouId = false;
    keys.forEach((key) => {
      if (dados[key] != dadosArquivo[index][key]) {
        if (key === "id") {
          alterouId = true;
          return;
        }
        dadosArquivo[index][key] = dados[key];
        alterado = true;
      }
    });
    console.log(dadosArquivo);
    if (alterouId) return res.status(400).send("Não é possível alterar a ID");
    if (alterado) return res.status(200).send("Usuário alterado com sucesso");
    return res.status(400).send("Não há nada para alterar");
  },
};
