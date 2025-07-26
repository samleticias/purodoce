import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

interface ProductInput {
  productId: number;
  quantity: number;
}

export const createOrderService = async (clientId: number, products: ProductInput[]) => {
  const order = await prisma.order.create({
    data: {
      clientId,
      orderItems: {
        create: products.map(item => ({
          product: { connect: { id: item.productId } },
          quantity: item.quantity,
        })),
      },
    },
    include: {
      orderItems: {
        include: {
          product: true,
        },
      },
    },
  });

  return order;
};