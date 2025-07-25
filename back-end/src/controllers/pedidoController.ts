import { Request as ExpressRequest, Response } from 'express';
import { PrismaClient } from '../generated/prisma';

const prisma = new PrismaClient();

interface RequestWithUserId extends ExpressRequest {
  userId?: number;
}

export const criarPedido = async (req: RequestWithUserId, res: Response) => {
  const clienteId = req.userId;

  if (typeof clienteId !== 'number') {
    return res.status(400).json({ error: 'ID do cliente não encontrado.' });
  }

  const { produtos } = req.body;

  try {
    const pedido = await prisma.pedido.create({
      data: {
        clienteId,
        produtos: {
          create: produtos.map((item: { produtoId: number; quantidade: number }) => ({
            produto: { connect: { id: item.produtoId } },
            quantidade: item.quantidade,
          })),
        },
      },
      include: {
        produtos: {
          include: {
            produto: true,
          },
        },
      },
    });

    res.status(201).json(pedido);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao criar pedido.' });
  }
};
