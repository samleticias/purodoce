import express from 'express';
import { register, login } from '../controllers/authController';
import { listarProdutos, criarProduto } from '../controllers/produtoController';
import { criarPedido } from '../controllers/pedidoController';
import { auth } from '../middleware/auth';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);

router.get('/produtos', listarProdutos);
router.post('/produtos', criarProduto); 

router.post('/pedidos', auth, criarPedido);

export default router;