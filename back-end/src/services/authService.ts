import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();
const secret = process.env.JWT_SECRET || 'default_secret';

interface RegisterInput {
  name: string;
  email: string;
  password: string;
}

interface LoginInput {
  email: string;
  password: string;
}

export const registerService = async ({ name, email, password }: RegisterInput) => {
  const existingUser = await prisma.client.findUnique({ where: { email } });
  if (existingUser) {
    throw new Error('Email already registered.');
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const client = await prisma.client.create({
    data: { name, email, password: hashedPassword },
  });

  return client;
};

export const loginService = async ({ email, password }: LoginInput) => {
  const client = await prisma.client.findUnique({ where: { email } });
  if (!client) {
    throw new Error('Invalid credentials.');
  }

  const isPasswordCorrect = await bcrypt.compare(password, client.password);
  if (!isPasswordCorrect) {
    throw new Error('Invalid credentials.');
  }

  const token = jwt.sign({ id: client.id }, secret, { expiresIn: '1d' });

  return {
    token,
    client: {
      id: client.id,
      name: client.name,
      email: client.email,
    },
  };
};