const passportLocalSequelize = require("passport-local-sequelize");

module.exports = (sequelize, Sequelize) => {
  let Order = sequelize.define(
    "order",
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      productName: Sequelize.STRING,
      description: Sequelize.STRING,
      categoryId: Sequelize.INTEGER,
      size: Sequelize.STRING,
      quantity: Sequelize.INTEGER,
      price: Sequelize.DECIMAL
    },
    { freezeTableName: true }
  );
  return Order;
};
