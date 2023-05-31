const express = require("express");
const userRotasV1 = express.Router();
const {
  ordenarLista,
  listarDatas,
  salvarJson,
} = require("../../controllers/user");

userRotasV1.patch("/ordenarLista", ordenarLista);
userRotasV1.get("/listarDatas", listarDatas);
userRotasV1.post("/salvarJson", salvarJson);

module.exports = userRotasV1;
