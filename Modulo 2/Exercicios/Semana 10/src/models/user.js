const { connection } = require("../database/connection");
const { STRING, INTEGER } = require("sequelize");

const User = connection.define(
  "user",
  {
    traineeId: {
      type: INTEGER,
      references: {
        model: { tableName: "trainees" },
        key: "id",
      },
      allowNull: true,
    },
    name: STRING,
    password: STRING,
  },
  { underscored: true, paranoid: true }
);

module.exports = { User };
