import { Request, Response } from 'express'; 
import ProductService from '../service/ProductService';

export default class ProductController {
  service: ProductService;

  constructor() {
    this.service = new ProductService();
  }

  create = async (req: Request, res: Response) => {
    const newProduct = await this.service.create(req.body);

    return res.status(201).json(newProduct);
  };
}