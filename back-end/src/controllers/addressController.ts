import { Request, Response } from 'express';
import { addAddressService, getClientAddressesService } from '../services/addressService';

// Adicionar endereço
export const addAddress = async (req: Request, res: Response) => {
  const clientId = req.userId;
  if (!clientId) return res.status(401).json({ error: 'User not authenticated.' });

  const { street, number, complement, neighborhood, city, state, zipCode, type } = req.body;

  try {
    const address = await addAddressService(
      clientId,
      street,
      number,
      complement,
      neighborhood,
      city,
      state,
      zipCode,
      type
    );
    res.status(201).json({ message: 'Address successfully added.', address });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error adding address.' });
  }
};

// Listar endereços do cliente
export const getClientAddresses = async (req: Request, res: Response) => {
  const clientId = req.userId;
  if (!clientId) return res.status(401).json({ error: 'User not authenticated.' });

  try {
    const addresses = await getClientAddressesService(clientId);
    res.json(addresses);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error fetching addresses.' });
  }
};
