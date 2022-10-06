import jwt from 'jsonwebtoken';
import UserModel from '../models/UserModel';
import User from '../interfaces/UserInterface';

export default class UserService {
  model: UserModel;

  constructor() {
    this.model = new UserModel();
  }

  create = async (user: User) => {
    const newUser = await this.model.create(user);

    if (!newUser) { throw new Error('User cannot be created'); }
    const token = this.generateToken(user);

    return token;
  };

  generateToken = (user: User) => {
    const payload = { password: user.password };

    const token = jwt.sign(payload, 'SECRET');

    return token;
  };
}