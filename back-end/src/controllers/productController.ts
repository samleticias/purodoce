import { Request, Response } from 'express';
import { listProductsService, createProductService } from '../services/productService';

export const listProducts = async (_req: Request, res: Response) => {
  try {
    const products = await listProductsService();
    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error fetching products.' });
  }
};

export const createProduct = async (req: Request, res: Response) => {
  const { name, image, details, price } = req.body;

  try {
    const product = await createProductService({ name, image, details, price });
    res.status(201).json(product);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error creating product.' });
  }
};