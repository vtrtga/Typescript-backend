import { Router } from 'express';
import OrdersController from '../controller/OrdersController';

const OrdersRouter = Router();
const OrdersControllers = new OrdersController();

OrdersRouter.get('/', OrdersControllers.getAll);

export default OrdersRouter;