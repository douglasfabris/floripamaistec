const { config } = require("dotenv");
const { verify } = require("jsonwebtoken");
config();

async function auth(req, res, next) {
  try {
    const { authorization } = req.headers;
    req["payload"] = verify(authorization, process.env.SECRET_JWT);
    next();
  } catch (err) {
    return res.status(400).send({
      message: "Autenticação Falhou",
      cause: err.message,
    });
  }
}

module.exports = { auth };
