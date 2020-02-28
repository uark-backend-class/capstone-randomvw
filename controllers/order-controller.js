const Product = require("../db").Product;
const Category = require("../db").Category;
const Order = require("../db").Order;

exports.addToCart = async (req, res) => {
  await Order.upsert(req.body);
  console.log(req.body);
  res.redirect("/cart");
  //  res.status(200).send;
};

exports.cart = async (req, res) => {
  let order = await Order.findAll();
  console.log(Product);
  res.render("cart", { order });
};
