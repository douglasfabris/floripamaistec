const { Router } = require("express");
const { routesFromCategory } = require("./category.routes");
const { routesFromTrainee } = require("./trainee.routes");
const { routesFromCompany } = requires("./company.routes");
const { routesFromContract } = requires("./contract.routes");

const routes = new Router();

routes.use("/api", [
  routesFromCategory(),
  routesFromTrainee(),
  routesFromCompany(),
  routesFromContract(),
]);

module.exports = routes;
