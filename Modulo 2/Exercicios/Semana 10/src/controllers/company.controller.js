const { Companies } = require("../models/companies");

class CompanyController {
  async createOneCompany(req, res) {
    const {
      id,
      cnpj,
      company_name,
      contact,
      cep,
      address,
      neighbourhood,
      city,
      state,
      number,
      complement,
      rh_analyst_name,
      supervisor_name,
    } = req.body;
    const data = await Companies.create({
      id,
      cnpj,
      company_name,
      contact,
      cep,
      address,
      neighbourhood,
      city,
      state,
      number,
      complement,
      rh_analyst_name,
      supervisor_name,
    });
    return res.status(201).send(data);
  }
  async listCompanies(req, res) {
    const data = await Companies.findAll();
    return res.status(201).send(data);
  }
  async listOneCompany(req, res) {
    const { id } = req.params;
    const data = await Companies.findByPk(id);
    if (data === null) {
      return res.status(204).send("Não encontrado");
    } else {
      return res.status(200).send(data);
    }
  }
  async updateCompany(req, res) {
    const { id } = req.params;
    const dataToUpdate = req.body;
    await Companies.update(dataToUpdate, { where: { id: id } });
    const updatedData = await Companies.findByPk(id);
    return res.status(201).send(updatedData);
  }
}

module.exports = new CompanyController();
