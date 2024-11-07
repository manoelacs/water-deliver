// controllers/orders.ts
import { Request, Response } from 'express';
import Order from '../models/order';

export const getOrders = async (req: Request, res: Response) => {
  try {
    const orders = await Order.find().populate('product');
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: (err as Error).message });
  }
};

export const createOrder = async (req: Request, res: Response) => {
  const { product, quantity, totalPrice } = req.body;

  const order = new Order({
    product,
    quantity,
    totalPrice,
  });

  try {
    const newOrder = await order.save();
    res.status(201).json(newOrder);
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
};
