const router = require("express").Router();
const testController = require("../controllers/test-controller");
const product = require("../controllers/product-controller");
const order = require("../controllers/order-controller");
const authController = require("../controllers/auth-controller");

router.get("/", testController.testPage);
router.get("/add", product.addProduct);
router.post("/updateProduct", product.updateProduct);
router.get("/products", product.listProducts);
router.post("/addToCart", order.addToCart);
router.get("/cart", order.cart);

//! WORKING ON LOGIN/AUTHENTICATION
//! MUST ADD authController and adminController
router.get('/register', authController.registerPage);
//router.post('/register', authController.registerUser, authController.loginUser)



module.exports = router;
