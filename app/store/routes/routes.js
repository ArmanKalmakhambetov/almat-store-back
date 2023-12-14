const express=require('express')
const router=express.Router()
const {createProduct, getAllProducts, getProductById} = require('../controllers/productContoller')
const {createOrder, getAllOrders, getOrderById} = require('../controllers/orderController')
const {doLogin} = require("../controllers/authController");
const passport = require('passport');


// router.post('/api/resume', passport.authenticate('jwt', {session: false}), isEmployee,validateResume, createResume)
router.get('/api/store/allproducts', getAllProducts);
router.get('/api/store/product/:id', getProductById);
router.get('/api/store/order/:id', getOrderById);
router.get('/api/store/allorders', getAllOrders);
router.post('/api/store/createproduct', createProduct);
router.post('/api/store/createorder', createOrder);

router.post('/api/store/login', doLogin);

module.exports = router;