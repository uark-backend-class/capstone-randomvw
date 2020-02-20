module.exports = (sequelize, Sequelize) => {
  return sequelize.define('product', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    productName: Sequelize.STRING,
    description: Sequelize.STRING,
    // categoryId: Sequelize.INTEGER,
    size: Sequelize.STRING,
    quantity: Sequelize.INTEGER,
    price: Sequelize.DECIMAL,
  }, { freezeTableName: true });
}