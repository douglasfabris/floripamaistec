const express = require("express");
const userRotasV1 = express.Router();
const { ordenarLista, listarDatas } = require("../../controllers/user");

userRotasV1.patch("/ordenarLista", ordenarLista);
userRotasV1.get("/listarDatas", listarDatas);

module.exports = userRotasV1;
