const Product = require('../db').Product;

exports.addProduct = async (req, res) => {
  res.render('add-edit');
}