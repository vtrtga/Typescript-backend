import express, { NextFunction, Request, Response } from 'express';
import LoginRouter from './routes/LoginRouter';
import OrdersRouter from './routes/OrdersRouter';
import ProductRouter from './routes/ProductsRouter';
import UserRouter from './routes/UserRouter';

const app = express();

app.use(express.json());

app.use('/products', ProductRouter);

app.use('/users', UserRouter);

app.use('/orders', OrdersRouter);

app.use('/login', LoginRouter);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  const { name, message, details } = err as any;
  console.log(`name: ${name}`);
  
  switch (name) {
    case 'ValidationError':
      res.status(400).json({ message: details[0].message });
      break;
    case 'NotFoundError':
      res.status(404).json({ message });
      break;
    case 'ConflictError':
      res.status(409).json({ message });
      break;
    default:
      console.error(err);
      res.sendStatus(500);
  }
  
  next();
});

export default app;
