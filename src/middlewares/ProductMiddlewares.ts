import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';
import { Product } from '../interfaces/ProductInterface';

export default class ProductMiddlewares {
  ProductSchema = (body: Product) => Joi.object({
    name: Joi.string().required().min(3),
    amount: Joi.string().required().min(3),
  }).validate(body);

  validateProduct = (req: Request, res: Response, next: NextFunction) => {
    const { error } = this.ProductSchema(req.body);

    if (error?.details[0].type === 'string.min' || error?.details[0].type === 'string.base') {
      return res.status(422).json({ message: error.details[0].message });
    }
    console.log(error?.details[0]);
    if (error?.details[0].type === 'any.required') {
      return res.status(400).json({ message: error.details[0].message });
    }
    next();
  };
}