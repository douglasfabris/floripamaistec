const { Router } = require("express");
/*
 O Router serve para disponibilizar rotas 
 pelo servidor para serem acessíveis por 
 outras APIs/Frontend
*/
const rotasDaEmpresa = Router();
const {
  criarEmpresa,
  verificarEmpresa,
  salvarEmpresa,
  listaEmpresas,
  alterarEmpresas,
  excluirEmpresa,
} = require("./empresa.controller");

rotasDaEmpresa.post("/criarEmpresa", verificarEmpresa, criarEmpresa);
rotasDaEmpresa.post("/salvarEmpresa", salvarEmpresa);
rotasDaEmpresa.get("/listarEmpresas", listaEmpresas);
rotasDaEmpresa.patch("/alterarEmpresa/:cnpj", alterarEmpresas);
rotasDaEmpresa.delete("/excluirEmpresa/:cnpj", excluirEmpresa);

module.exports = rotasDaEmpresa;
