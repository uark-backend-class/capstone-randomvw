const Product = require("../db").Product;
const Category = require("../db").Category;
const Order = require("../db").Order;

exports.addToCart = async (req, res) => {
  req.body.userId = req.user.id;
  await Order.upsert(req.body);
  console.log(req.body);
  res.redirect("/cart");
  //  res.status(200).send;
};

exports.cart = async (req, res) => {
  let order = await Order.findAll({ where: { userId: req.user.id }});

  res.render('cart', { order })
  
  // let order = await Order.findAll({ where: { userId: req.user.id } });
  // console.log(order);
  // res.render("cart", { order });
};

exports.sum = () => Order.findAll({
  attributes: ['userId', [sequelize.fn('sum', sequelize.col('price')), 'total']],
  group: ['Order.userId'],
  raw: true,
});