const { connection } = require("../database/connection");

const Category = connection.define("Category", {
  name: STRING,
  created_at: DATE,
  updated_at: DATE,
});
