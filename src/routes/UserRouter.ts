import { Router } from 'express';
import UserController from '../controller/UserController';
import UserMiddlewares from '../middlewares/UserMiddlewares';

const userMiddlewares = new UserMiddlewares();
const UserRouter = Router();

const UserControllers = new UserController();

UserRouter.post(
  '/', 
  userMiddlewares.validateUser,
  userMiddlewares.validateLevelType, 
  UserControllers.create,
);

export default UserRouter;