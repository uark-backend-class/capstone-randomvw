module.exports = (sequelize, Sequelize) => {
  return sequelize.define('type', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    name: Sequelize.STRING,
  }, { freezeTableName: true });
}