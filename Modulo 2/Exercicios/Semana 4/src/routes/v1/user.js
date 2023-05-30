const express = require("express");
const userRotasV1 = express.Router();
const { ordenarLista } = require("../../controllers/user");

userRotasV1.patch("/ordenarLista", ordenarLista);

module.exports = userRotasV1;
