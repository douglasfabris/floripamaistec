const { Trainees } = require("../models/trainees");

class TraineeController {
  async createOneTrainee(req, res) {
    const {
      name,
      email,
      rg,
      cpf,
      primary_phone_contact,
      secondary_phone_contact,
      date_birth,
      father_name,
      mother_name,
      have_special_needs,
    } = req.body;
    const data = await Trainees.create({
      name,
      email,
      rg,
      cpf,
      primary_phone_contact,
      secondary_phone_contact,
      date_birth,
      father_name,
      mother_name,
      have_special_needs,
    });
    return res.status(201).send(data);
  }

  async listTrainees(req, res) {
    const data = await Trainees.findAll();
    return res.status(201).send(data);
  }

  async listOneTrainee(req, res) {
    const { id } = req.params;
    const data = await Trainees.findByPk(id);
    if (data === null) {
      return res.status(204).send("Não encontrado");
    } else {
      return res.status(200).send(data);
    }
  }

  async updateTrainee(req, res) {
    const { id } = req.params;
    const dataToUpdate = req.body;
    await Trainees.update(dataToUpdate, { where: { id: id } });
    const updatedData = await Trainees.findByPk(id);
    return res.status(201).send(updatedData);
  }
}

module.exports = new TraineeController();
