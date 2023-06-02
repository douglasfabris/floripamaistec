const express = require("express");
const userRotasV1 = express.Router();
const {
  ordenarLista,
  listarDatas,
  salvarJson,
  filtrarDados,
  alterarJson,
  deletarDados,
} = require("../../controllers/user");

userRotasV1.patch("/ordenarLista", ordenarLista);
userRotasV1.get("/listarDatas", listarDatas);
userRotasV1.post("/salvarJson", salvarJson);
userRotasV1.get("/filtrarDados", filtrarDados);
userRotasV1.put("/alterarJson/:id", alterarJson);
userRotasV1.delete("/deletarDados/:id", deletarDados);
module.exports = userRotasV1;
