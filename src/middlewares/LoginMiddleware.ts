import { NextFunction, Request, Response } from 'express';
import UserService from '../service/UserService';

export default class LoginMiddleware {
  service: UserService;

  constructor() {
    this.service = new UserService();
  }

  emptyField = (req: Request, res: Response, next: NextFunction) => {
    const { username, password } = req.body;

    if (username === undefined || username === null) {
      return res.status(400).json({ message: '"username" is required' });
    }
    if (password === undefined || password === null) {
      return res.status(400).json({ message: '"password" is required' });
    }
    next();
  };

  invalidPassword = async (req:Request, res: Response, next: NextFunction) => {
    const { password } = req.body;
    const findUser = await this.service.getByUsername(req.body);
    const usersJson = JSON.stringify(findUser);
    const usersArr = JSON.parse(usersJson);

    console.log(usersArr, 'userarr');

    if (usersArr.length === 0) {
      return res.status(401).json({ message: 'Username or password invalid' });
    }

    if (usersArr[0].password !== password) {
      return res.status(401).json({ message: 'Username or password invalid' });
    }
    next();
  };
}