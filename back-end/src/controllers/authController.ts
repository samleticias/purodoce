import { Request, Response } from 'express';
import { registerService, loginService } from '../services/authService';

export const register = async (req: Request, res: Response) => {
  const { name, email, password, cpf } = req.body;

  try {
    const client = await registerService({ name, email, password, cpf });
    res.status(201).json(client);
  } catch (err: any) {
    res.status(400).json({ error: err.message || 'Error registering user.' });
  }
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const data = await loginService({ email, password });
    res.json(data);
  } catch (err: any) {
    res.status(401).json({ error: err.message || 'Invalid credentials.' });
  }
};