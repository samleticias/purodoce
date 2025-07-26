import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const listProductsService = async () => {
  const products = await prisma.product.findMany();
  return products;
};

interface CreateProductInput {
  name: string;
  image: string;
  details: string;
  price: number;
}

export const createProductService = async (data: CreateProductInput) => {
  const product = await prisma.product.create({
    data,
  });
  return product;
};