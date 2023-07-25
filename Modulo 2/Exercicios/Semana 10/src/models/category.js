const { connection } = require("../database/connection");
const { STRING, DATE } = require("sequelize");

const Category = connection.define(
  "category",
  {
    name: STRING,
    created_at: DATE,
    updated_at: DATE,
  },
  { underscored: true }
);

module.exports = {
  Category,
};
