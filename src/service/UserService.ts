import jwt from 'jsonwebtoken';
import UserModel from '../models/UserModel';
import User from '../interfaces/UserInterface';
import UserLogin from '../interfaces/UserLoginInterface';

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

  generateToken = (user: User | UserLogin) => {
    const payload = { password: user.password };

    const token = jwt.sign(payload, 'SECRET');

    return token;
  };

  getByUsername = async (user: UserLogin) => {
    const result = await this.model.getByUserName(user);

    return result;
  };
}