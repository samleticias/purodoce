import { Request as ExpressRequest, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface RequestWithUserId extends ExpressRequest {
  userId?: number;
}

export const auth = (req: RequestWithUserId, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Token não fornecido.' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'default_secret') as { id: number };
    req.userId = decoded.id;
    next();
  } catch (err) {
    return res.status(403).json({ error: 'Token inválido.' });
  }
};