import { Pool, ResultSetHeader } from 'mysql2/promise';
// import Order from '../interfaces/OrderInterface';
import connection from './connection';

export default class OrdersModel {
  private connection: Pool;
  
  constructor() {
    this.connection = connection;
  }

  getAll = async () => {
    const query = `SELECT Orders.id as id, Orders.userId as userId,
    JSON_ARRAYAGG(pr.id) as productsIds
    FROM Trybesmith.Orders
    JOIN Trybesmith.Products as pr
    ON pr.orderId = Orders.id
    GROUP BY id;`;
    const [data] = await this.connection.execute<ResultSetHeader>(query);
    console.log(data, '-----------------');
    return data;
  };
}