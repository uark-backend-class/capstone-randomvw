const Sequelize = require('sequelize');
const ProductModel = require('./models/product');
const ProductType = require('./models/type');


const sequelize = new Sequelize(process.env.DATABASE_URL);





const Product = ProductModel(sequelize, Sequelize);
const Type = ProductType(sequelize, Sequelize);

sequelize.sync({force: true})
  .then( () => console.log('Tables are created!'))
  .then( () => {
    return Type.bulkCreate([
      { id: 0, name: 'donation' },
      { id: 1, name: 'hat' },
      { id: 2, name: 'shirt' },
      { id: 3, name: 'sign' },
      { id: 4, name: 'sticker' },
      { id: 5, name: 'button' },
    ], { updateOnDuplicate: [ 'name' ]})
  });

  module.exports = {
    Product,
  }