const router = require('express').Router();
const testController = require('../controllers/test');
const product = require('../controllers/products');

router.get('/', testController.testPage);
router.get('/add', product.addProduct);


module.exports = router;