import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';
import User from '../interfaces/UserInterface';

export default class UserMiddlewares {
  UserSchema = (body: User) => Joi.object({
    username: Joi.string().required().min(3),
    classe: Joi.string().required().min(3),
    level: Joi.number().required().greater(0),
    password: Joi.string().required().min(8),
  }).validate(body);

  validateUser = (req: Request, res: Response, next: NextFunction) => {
    const { body } = req;
    const { error } = this.UserSchema(body);

    if (error?.details[0].type === 'string.min' || error?.details[0].type === 'string.base') {
      return res.status(422).json({ message: error.details[0].message });
    }
    if (error?.details[0].type === 'any.required') {
      return res.status(400).json({ message: error.details[0].message });
    }
    if (error?.details[0].type === 'number.greater') {
      return res.status(422).json({ message: '"level" must be greater than or equal to 1' });
    } 
    next();
  };

  validateLevelType = (req: Request, res: Response, next: NextFunction) => {
    const { body } = req;
    const { error } = this.UserSchema(body);
    if (error?.details[0].type === 'number.base') {
      return res.status(422).json({ message: error.details[0].message });
    }
    next();
  };
}