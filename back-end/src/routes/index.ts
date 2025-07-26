import express from 'express';
import { register, login } from '../controllers/authController';
import { listProducts, createProduct } from '../controllers/productController';
import { createOrder } from '../controllers/orderController';
import { auth } from '../middleware/auth';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);

router.get('/products', listProducts);
router.post('/products', createProduct); 

router.post('/orders', auth, createOrder);

export default router;