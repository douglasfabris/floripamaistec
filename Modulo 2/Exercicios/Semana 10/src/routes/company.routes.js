const {
  createOneCompany,
  listCompanies,
  listOneCompany,
  updateCompany,
} = require("../controllers/company.controller");
const { Router } = require("express");
const { auth } = require("../middleware/auth");

class CompanyRouter {
  routesFromCompany() {
    const companyRoutes = Router();
    companyRoutes.post("/companies", auth, createOneCompany);
    companyRoutes.get("/companies", auth, listCompanies);
    companyRoutes.get("/companies/:id", auth, listOneCompany);
    companyRoutes.put("/companies/:id", auth, updateCompany);

    return companyRoutes;
  }
}

module.exports = new CompanyRouter();
