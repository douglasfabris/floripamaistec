const {
  createOneTrainee,
  listTrainees,
  listOneTrainee,
  updateTrainee,
} = require("../controllers/trainee.controller");
const { Router } = require("express");
const { auth } = require("../middleware/auth");

class TraineeRouter {
  routesFromTrainee() {
    const traineeRoutes = Router();
    traineeRoutes.post("/trainees", auth, createOneTrainee);
    traineeRoutes.get("/trainees", auth, listTrainees);
    traineeRoutes.get("/trainees/:id", auth, listOneTrainee);
    traineeRoutes.put("/trainees/:id", auth, updateTrainee);

    return traineeRoutes;
  }
}

module.exports = new TraineeRouter();
