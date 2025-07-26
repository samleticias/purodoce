import { Request as ExpressRequest, Response } from 'express';
import { createOrderService } from '../services/orderService';

interface RequestWithUserId extends ExpressRequest {
  userId?: number;
}

export const createOrder = async (req: RequestWithUserId, res: Response) => {
  const clientId = req.userId;

  if (typeof clientId !== 'number') {
    return res.status(400).json({ error: 'Client ID not found.' });
  }

  const { products } = req.body;

  try {
    const order = await createOrderService(clientId, products);
    res.status(201).json(order);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error creating order.' });
  }
};
