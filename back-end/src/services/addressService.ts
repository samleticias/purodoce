import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const addAddressService = async (
  clientId: number,
  street: string,
  number: string,
  complement: string | null,
  neighborhood: string,
  city: string,
  state: string,
  zipCode: string,
  type: string
) => {
  // Cria o endereço
  const address = await prisma.endereco.create({
    data: {
      rua: street,
      numero: number,
      complemento: complement ?? null,
      bairro: neighborhood,
      cidade: city,
      estado: state,
      cep: zipCode,
    },
  });

  // Associa ao cliente
  await prisma.clienteEndereco.create({
    data: {
      clientId,
      enderecoId: address.id,
      tipo: type,
    },
  });

  return address;
};

export const getClientAddressesService = async (clientId: number) => {
  const addresses = await prisma.clienteEndereco.findMany({
    where: { clientId },
    include: { endereco: true },
  });
  return addresses;
};