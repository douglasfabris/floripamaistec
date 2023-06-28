const { connection } = require("../database/connection");
const { STRING, DATE, BOOLEAN } = require("sequelize");

const Trainees = connection.define(
  "trainees",
  {
    name: STRING,
    email: {
      validate: {
        isEmail: { msg: "O campo deve ser e-mail" },
      },
      type: STRING,
    },
    rg: {
      type: STRING,
      unique: true,
    },
    cpf: {
      type: STRING,
      validate: {
        len: {
          args: [11, 11],
          msg: "Formato inválido",
        },
      },
      unique: true,
    },
    primary_phone_contact: STRING,
    secondary_phone_contact: { type: STRING, allowNull: true },
    date_birth: DATE,
    father_name: STRING,
    mother_name: STRING,
    have_special_needs: BOOLEAN,
    created_at: DATE,
    updated_at: DATE,
  },
  { underscored: true }
);

module.exports = {
  Trainees,
};
