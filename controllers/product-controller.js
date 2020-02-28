const Product = require("../db").Product;
const Category = require("../db").Category;

exports.addProduct = async (req, res) => {
  res.render("add-edit");
};

exports.updateProduct = async (req, res) => {
  await Product.upsert(req.body);
  console.log(req.body);
  res.redirect("/products");
  //  res.status(200).send;
};

exports.listProducts = async (req, res) => {
  let products = await Product.findAll({ include: [Category] });
  console.log(products);
  res.render("product-list", { products });
};

// exports.addToCart = async (req, res) => {
//   await
// }
