module.exports = (sequelize, Sequelize) => {
  return sequelize.define('product', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    // type: {
    //   type: Sequelize.INTEGER,
    //   // 0 = DONATION, 1 = HAT, 2 = SHIRT, 3 = SIGN, 4 = STICKER 5 = BUTTONS
    // },
    productName: Sequelize.STRING,
    description: Sequelize.STRING,
    categoryId: Sequelize.INTEGER,
    size: Sequelize.STRING,
    quantity: Sequelize.INTEGER,
    price: Sequelize.INTEGER,
  }, { freezeTableName: true });
}