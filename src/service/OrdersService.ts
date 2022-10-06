// import Order from '../interfaces/OrderInterface';
import OrdersModel from '../models/OrdersModel';

export default class OrdersService {
  model: OrdersModel;

  constructor() {
    this.model = new OrdersModel();
  }

  getAll = async () => {
    const orders = await this.model.getAll();

    return orders;
  };
}