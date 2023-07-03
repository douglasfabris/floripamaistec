const { connection } = require("../database/connection");
const { STRING, DATE } = require("sequelize");

const Companies = connection.define(
  "companies",
  {
    id: { type: INTEGER, autoIncrement: true, primaryKey: true },
    cnpj: {
      type: STRING,
      unique: true,
    },
    company_name: STRING,
    contact: STRING,
    cep: STRING,
    address: STRING,
    neighbourhood: STRING,
    city: STRING,
    state: STRING,
    number: STRING,
    complement: STRING,
    rh_analyst_name: STRING,
    supervisor_name: STRING,
    created_at: DATE,
    updated_at: DATE,
  },
  { underscored: true, paranoid: true }
);

module.exports = {
  Companies,
};
