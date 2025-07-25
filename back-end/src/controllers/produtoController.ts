import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const listarProdutos = async (_req: Request, res: Response) => {
  const produtos = await prisma.produto.findMany();
  res.json(produtos);
};

export const criarProduto = async (req: Request, res: Response) => {
  const { name, image, details, price } = req.body;

  const produto = await prisma.produto.create({
    data: { name, image, details, price },
  });

  res.status(201).json(produto);
};