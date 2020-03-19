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
      price: Sequelize.DECIMAL,
      total: Sequelize.DECIMAL
    },
    {
      getterMethods: {
        async totalPrice() {
          let total = 0;

          for (let i = 0; i <= this.price; i ++) {
            return total = total + this.price[i];
          }
        }
      }
    },
    { freezeTableName: true }
  );
  return Order;
};
