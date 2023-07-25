const { createOneUser, loginUser } = require("../controllers/user.controller");
const { Router } = require("express");

class UserRouter {
  routesFromUser() {
    const userRoutes = Router();
    userRoutes.post("/user", createOneUser);
    userRoutes.get("/user", loginUser);
    return userRoutes;
  }
}

module.exports = new UserRouter();
