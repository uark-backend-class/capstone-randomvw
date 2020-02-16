const Product = require('../db').Product;

exports.addProduct = async (req, res) => {
  res.render('add-edit');
}

exports.updateProduct = async (req, res) => {
  await Product.upsert(req.body);
  console.log(req.body);
  res.status(200).send;
}

exports.listProducts = async (req, res) => {
  let products = await Product.findAll();

  res.render('product-list', products);
}