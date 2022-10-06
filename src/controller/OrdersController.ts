// import Order from "../interfaces/OrderInterface";
import { Request, Response } from 'express';
import OrdersService from '../service/OrdersService';

export default class OrdersController {
  service: OrdersService;

  constructor() {
    this.service = new OrdersService();
  }

  getAll = async (_req: Request, res: Response) => {
    const orders = await this.service.getAll();

    return res.status(200).json(orders);
  };
}