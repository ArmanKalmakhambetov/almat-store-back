const express=require('express')
const router=express.Router()
const {createProduct, getAllProducts, getProductById} = require('../controllers/productContoller')
const {createOrder} = require('../controllers/orderController')


// router.post('/api/resume', passport.authenticate('jwt', {session: false}), isEmployee,validateResume, createResume)
router.get('/api/store/allproducts', getAllProducts);
router.get('/api/store/product/:id', getProductById);
router.post('/api/store/createproduct', createProduct);
router.post('/api/store/createorder', createOrder);

module.exports = router;