const {
  createOneContract,
  listContracts,
  listOneContract,
  deactivateContract,
} = require("../controllers/contract.controller");
const { Router } = require("express");

class ContractRouter {
  routesFromContract() {
    const contractRoutes = Router();
    contractRoutes.post("/contracts", createOneContract);
    contractRoutes.get("/contract", listContracts);
    contractRoutes.get("/contract/:id", listOneContract);
    contractRoutes.patch("/contract/:id", deactivateContract);
    return contractRoutes;
  }
}

module.exports = new ContractRouter();
