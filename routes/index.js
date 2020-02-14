const router = require('express').Router();
const testController = require('../controllers/test');
const product = require('../controllers/product-controller');

router.get('/', testController.testPage);
router.get('/add', product.addProduct);
router.post('/updateProduct', product.updateProduct);


module.exports = router;