const {
  createOneContract,
  listContracts,
  listOneContract,
  deactivateContract,
} = require("../controllers/contract.controller");
const { Router } = require("express");
const { auth } = require("../middleware/auth");

class ContractRouter {
  routesFromContract() {
    const contractRoutes = Router();
    contractRoutes.post("/contracts", auth, createOneContract);
    contractRoutes.get("/contract", auth, listContracts);
    contractRoutes.get("/contract/:id", auth, listOneContract);
    contractRoutes.patch("/contract/:id", auth, deactivateContract);
    return contractRoutes;
  }
}

module.exports = new ContractRouter();
