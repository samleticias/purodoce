import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createOrderService = async (
  clientId: number,
  products: { productId: number; quantity: number }[],
  addressId: number
) => {
  const order = await prisma.order.create({
    data: {
      clientId,
      enderecoId: addressId,
      orderItems: {
        create: products.map((item) => ({
          product: { connect: { id: item.productId } },
          quantity: item.quantity,
        })),
      },
    },
    include: {
      orderItems: { include: { product: true } },
      endereco: true,
    },
  });

  return order;
};