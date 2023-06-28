const {
  createOneTrainee,
  listTrainees,
  listOneTrainee,
  updateTrainee,
} = require("../controllers/trainee.controller");
const { Router } = require("express");

class TraineeRouter {
  routesFromTrainee() {
    const traineeRoutes = Router();
    traineeRoutes.post("/trainees", createOneTrainee);
    traineeRoutes.get("/trainees", listTrainees);
    traineeRoutes.get("/trainees/:id", listOneTrainee);
    traineeRoutes.put("/trainees/:id", updateTrainee);

    return traineeRoutes;
  }
}

module.exports = new TraineeRouter();
