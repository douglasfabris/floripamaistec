const {
  createOneCompany,
  listCompanies,
  listOneCompany,
  updateCompany,
} = require("../controllers/company.controller");
const { Router } = require("express");

class CompanyRouter {
  routesFromCompany() {
    const companyRoutes = Router();
    companyRoutes.post("/companies", createOneCompany);
    companyRoutes.get("/companies", listCompanies);
    companyRoutes.get("/companies/:id", listOneCompany);
    companyRoutes.put("/companies/:id", updateCompany);

    return companyRoutes;
  }
}

module.exports = new CompanyRouter();
