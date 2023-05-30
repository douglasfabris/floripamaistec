const { Router } = require("express");
const userRotasV1 = require("./v1/user");

const rotas = Router();

rotas.use([userRotasV1]);

module.exports = rotas;
