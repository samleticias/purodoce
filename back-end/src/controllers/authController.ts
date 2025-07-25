import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();
const secret = process.env.JWT_SECRET || 'default_secret';

export const register = async (req: Request, res: Response) => {
  const { nome, email, senha } = req.body;

  const existente = await prisma.cliente.findUnique({ where: { email } });
  if (existente) return res.status(400).json({ error: 'Email já cadastrado.' });

  const senhaHash = await bcrypt.hash(senha, 10);

  const cliente = await prisma.cliente.create({
    data: { nome, email, senha: senhaHash },
  });

  res.status(201).json(cliente);
};

export const login = async (req: Request, res: Response) => {
  const { email, senha } = req.body;

  const cliente = await prisma.cliente.findUnique({ where: { email } });
  if (!cliente) return res.status(401).json({ error: 'Credenciais inválidas.' });

  const senhaCorreta = await bcrypt.compare(senha, cliente.senha);
  if (!senhaCorreta) return res.status(401).json({ error: 'Credenciais inválidas.' });

  const token = jwt.sign({ id: cliente.id }, secret, { expiresIn: '1d' });

  res.json({ token, cliente: { id: cliente.id, nome: cliente.nome, email: cliente.email } });
};