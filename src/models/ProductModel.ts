import { Pool, ResultSetHeader } from 'mysql2/promise';
import { Product } from '../interfaces/ProductInterface';
import connection from './connection';

export default class ProductModel {
  private connection: Pool;

  constructor() {
    this.connection = connection;
  }

  create = async (product: Product) => {
    const query = 'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)';
    const values = [product.name, product.amount];
    const data = await this.connection.execute<ResultSetHeader>(query, values);

    return { id: data[0].insertId, name: product.name, amount: product.amount };
  };
}