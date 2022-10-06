import { Request, Response } from 'express';
import UserService from '../service/UserService';

export default class UserController {
  service: UserService;

  constructor() {
    this.service = new UserService();
  }

  create = async (req: Request, res: Response) => {
    const token = await this.service.create(req.body);

    return res.status(201).json({ token });
  };
}