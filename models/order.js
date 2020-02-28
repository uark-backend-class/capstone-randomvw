const passportLocalSequelize = require("passport-local-sequelize");

module.exports = (sequelize, Sequelize) => {
  let Order = sequelize.define(
    "order",
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      }
      // orderNum: Sequelize.STRING,
    },
    { freezeTableName: true }
  );
  return Order;
};
