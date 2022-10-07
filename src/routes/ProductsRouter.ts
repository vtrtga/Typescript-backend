import { Router } from 'express';
import ProductController from '../controller/ProductController';
import ProductMiddlewares from '../middlewares/ProductMiddlewares';

const productMiddleware = new ProductMiddlewares();

const ProductControllers = new ProductController();

const ProductRouter = Router();

ProductRouter.post('/', productMiddleware.validateProduct, ProductControllers.create);

ProductRouter.get('/', ProductControllers.getAll);

export default ProductRouter;