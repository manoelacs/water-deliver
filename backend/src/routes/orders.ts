// routes/orders.ts
import { Router } from 'express';
import { getOrders, createOrder } from '../controllers/orders';

const router = Router();

router.get('/', getOrders);
router.post('/', createOrder);

export default router;
