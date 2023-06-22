const { connection } = require("../database/connection");

const Trainees = connection.define("Trainees", {
  name: STRING,
  email: STRING,
  rg: STRING,
  cpf: STRING,
  primary_phone_contact: STRING,
  secondary_phone_contact: STRING,
  date_birth: DATE,
  father_name: STRING,
  mother_name: STRING,
  have_special_needs: BOOLEAN,
  created_at: DATE,
  updated_at: DATE,
});
