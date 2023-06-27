const { connection } = require("../database/connection");

const Comapnies = connection.define("Companies", {
  id: { type: INTEGER, autoIncrement: true, primaryKey: true },
  cnpj: STRING,
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
});
