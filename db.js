const Sequelize = require('sequelize');
const ProductModel = require('./models/product');
const ProductCategory = require('./models/category');
const OrderModel = require('./models/order');

const sequelize = new Sequelize(process.env.DATABASE_URL);





const Product = ProductModel(sequelize, Sequelize);
const Category = ProductCategory(sequelize, Sequelize);
const Order = OrderModel(sequelize, Sequelize);

Category.hasMany(Product);
Product.belongsTo(Category);
Product.belongsToMany(Order, { through: 'ProductOrder' }); //! DIDN'T WORK ORIGINALLY BECAUSE I DIDN'T RETURN
Order.belongsToMany(Product, { through: 'ProductOrder' }); //! THE ORDER MODEL (./models/order.js)



sequelize.sync({force: true})
  .then( () => console.log('Tables are created!'))
  .then( () => {
    return Category.bulkCreate([
      { id: 0, name: 'Donation' },
      { id: 1, name: 'Hats' },
      { id: 2, name: 'Shirts' },
      { id: 3, name: 'Signs' },
      { id: 4, name: 'Stickers' },
      { id: 5, name: 'Buttons' },
      { id: 6, name: 'Other' },
    ], { updateOnDuplicate: [ 'name' ]},)
  });

  module.exports = {
    Product,
    Category,
    Order,
  }