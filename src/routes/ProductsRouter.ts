import { Router } from 'express';
import ProductController from '../controller/ProductController';

const ProductRouter = Router();

const ProductControllers = new ProductController();

ProductRouter.post('/', ProductControllers.create);

ProductRouter.get('/', ProductControllers.getAll);

export default ProductRouter;