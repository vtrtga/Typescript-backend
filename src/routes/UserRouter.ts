import { Router } from 'express';
import UserController from '../controller/UserController';

const UserRouter = Router();

const UserControllers = new UserController();

UserRouter.post('/', UserControllers.create);

export default UserRouter;