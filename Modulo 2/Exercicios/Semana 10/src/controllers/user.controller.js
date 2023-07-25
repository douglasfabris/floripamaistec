const { User } = require("../models/user");
const { config } = require("dotenv");
const { sign } = require("jsonwebtoken");

config();

class UserController {
  async createOneUser(req, res) {
    const { traineeId, email, password } = req.body;
    const data = User.create({ traineeId, email, password });
    return res.status(201).send(data);
  }

  async loginUser(req, res) {
    const { email, password } = req.body;
    const user = await User.findOne({
      where: { email: email },
    });
    if (!user) return res.status(404).send("Usuário não encontrado");
    if (user.password == password) {
      const payload = { email: user.email };
      const token = sign(payload, process.env.SECRET_JWT);
      return res.status(200).send({ token });
    }
    return res.status(400).send({ msg: "Usuario ou senha inválidos" });
  }
}

module.exports = new UserController();
