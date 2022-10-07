import { Router } from 'express';
import UserController from '../controller/UserController';
import LoginMiddleware from '../middlewares/LoginMiddleware';

const LoginRouter = Router();
const UserControllers = new UserController();
const LoginMiddlewares = new LoginMiddleware();
LoginRouter.post(
  '/', 
  LoginMiddlewares.emptyField,
  LoginMiddlewares.invalidPassword,
  UserControllers.getByUsername,
);

export default LoginRouter;