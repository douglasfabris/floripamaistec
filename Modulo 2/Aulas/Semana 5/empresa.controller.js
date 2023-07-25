const fs = require("fs");

module.exports = {
  async verificarEmpresa(requisicao, resposta, proximo) {
    console.log(requisicao.body.cnpj);
    if (!requisicao.body.cnpj) {
      return resposta.status(400).send({ erro: "A empresa não é verídica!" });
    }
    console.log("Essa empresa é véridica!");
    proximo();
  },

  async criarEmpresa(requisicao, resposta) {
    return resposta.status(200).send({ mensagem: "Criou uma empresa!" });
  },

  async salvarEmpresa(req, res) {
    if (!(req.body.cnpj && req.body.nomeFantasia && req.body.dataDeCriacao)) {
      return res.status(204).send({ erro: "Dados inválidos" });
    }
    try {
      let empresas = JSON.parse(fs.readFileSync("empresa.json", "utf-8"));
      empresas.push(req.body);
      fs.writeFileSync("empresa.json", JSON.stringify(empresas));
      return res
        .status(200)
        .send({ mensagem: "Cadastro realizado com sucesso" });
    } catch (error) {
      throw error;
    }
  },

  async listaEmpresas(req, res) {
    const { filtro } = req.query;
    console.log(filtro);
    try {
      let resultado = JSON.parse(fs.readFileSync("empresa.json", "utf8"));
      if (filtro) {
        resultado = resultado.filter((item) => item.nomeFantasia == filtro);
      }
      if (resultado) return res.status(200).send(resultado);
      else return res.status(204).send([]);
    } catch (error) {
      throw error;
    }
  },

  async alterarEmpresas(req, res) {
    const { nomeFantasia, dataDeCriacao } = req.query;
    const cnpj = req.params.cnpj;
    try {
      let empresas = JSON.parse(fs.readFileSync("empresa.json", "utf-8"));
      const index = empresas.findIndex((item) => item.cnpj == cnpj);
      if (index == -1) {
        return res.status(400).send("CNPJ não encontrado");
      }
      if (!(nomeFantasia || dataDeCriacao))
        return res.status(400).send("Envie pelo menos um parametro");
      if (nomeFantasia) {
        empresas[index].nomeFantasia = nomeFantasia;
      }
      if (dataDeCriacao) {
        empresas[index].dataDeCriacao = dataDeCriacao;
      }
      fs.writeFileSync("empresa.json", JSON.stringify(empresas));
      return res
        .status(200)
        .send({ mensagem: "Atualização realizada com sucesso" });
    } catch (error) {
      throw error;
    }
  },

  async excluirEmpresa(req, res) {
    const cnpj = req.params.cnpj;
    try {
      const empresas = JSON.parse(fs.readFileSync("empresa.json", "utf-8"));
      const filtered = empresas.filter((item) => item.cnpj != cnpj);
      if (empresas.length == filtered.length) {
        return res.status(400).send("CNPJ não encontrado");
      }
      fs.writeFileSync("empresa.json", JSON.stringify(filtered));
      return res.status(200).send("Empresa deletada");
    } catch (error) {
      throw error;
    }
  },
};
