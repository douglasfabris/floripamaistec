const { Contract } = require("../models/contract");
const { Category } = require("../models/category");
const { Companies } = require("../models/companies");
const { Trainees } = require("../models/trainees");

class ContractController {
  async createOneContract(req, res) {
    const {
      trainee_id,
      category_id,
      company_id,
      start_validity,
      end_validity,
      remuneration,
      extra,
    } = req.body;
    const data = await Contract.create({
      trainee_id,
      category_id,
      company_id,
      start_validity,
      end_validity,
      status: true,
      remuneration,
      extra,
    });
    return res.status(201).send(data);
  }
  async listContracts(req, res) {
    const data = await Contract.findAll({
      include: [
        {
          model: Trainees,
          attributes: ["name", "primaryPhoneContact"],
        },
        {
          model: Companies,
          attributes: ["companyName", "supervisorName"],
        },
        {
          model: Category,
          attributes: ["name"],
        },
      ],
      order: [["id", "ASC"]],
    });
    return res.status(201).send(data);
  }

  async listOneContract(req, res) {
    const { id } = req.params;
    const data = await Contract.findByPk(id, {
      include: [
        {
          model: Trainees,
          attributes: ["name", "primaryPhoneContact"],
        },
        {
          model: Companies,
          attributes: ["companyName", "supervisorName"],
        },
        {
          model: Category,
          attributes: ["name"],
        },
      ],
    });
    if (data === null) {
      return res.status(204).send("Não encontrado");
    } else {
      return res.status(200).send(data);
    }
  }
  async deactivateContract(req, res) {
    const { id } = req.params;
    await Contract.update({ status: false }, { where: { id: id } });
    const updatedData = await Contract.findByPk(id);
    return res.status(201).send(updatedData);
  }
}

module.exports = new ContractController();
