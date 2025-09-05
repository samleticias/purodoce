import { Request as ExpressRequest, Response } from 'express';
import { createOrderService } from '../services/orderService';

interface RequestWithUserId extends ExpressRequest {
  userId?: number;
}

// Criar pedido
export const createOrder = async (req: RequestWithUserId, res: Response) => {
  const clientId = req.userId;
  if (!clientId) return res.status(401).json({ error: 'User not authenticated.' });

  const { products, addressId } = req.body;

  if (!Array.isArray(products) || products.length === 0)
    return res.status(400).json({ error: 'Invalid products list.' });

  if (!addressId)
    return res.status(400).json({ error: 'Delivery address is required.' });

  try {
    const order = await createOrderService(clientId, products, addressId);
    res.status(201).json(order);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error creating order.' });
  }
};