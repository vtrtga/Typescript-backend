import { Router } from 'express';
import ProductController from '../controller/ProductController';

const ProductRouter = Router();

const ProductControllers = new ProductController();

ProductRouter.post('/', ProductControllers.create);

export default ProductRouter;