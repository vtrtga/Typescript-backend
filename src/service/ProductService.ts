import ProductModel from '../models/ProductModel';
import { Product } from '../interfaces/ProductInterface';

export default class ProductService {
  model: ProductModel;

  constructor() {
    this.model = new ProductModel();
  }

  create = async (product: Product) => {
    const newProduct = await this.model.create(product);

    return newProduct;
  };

  getAll = async () => {
    const products = await this.model.getAll();

    return products;
  };
}