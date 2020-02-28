const router = require("express").Router();
const testController = require("../controllers/test-controller");
const product = require("../controllers/product-controller");
const order = require("../controllers/order-controller");

router.get("/", testController.testPage);
router.get("/add", product.addProduct);
router.post("/updateProduct", product.updateProduct);
router.get("/products", product.listProducts);
router.post("/addToCart", order.addToCart);
router.get("/cart", order.cart);

module.exports = router;
