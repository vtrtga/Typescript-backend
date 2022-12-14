import { Pool, ResultSetHeader } from 'mysql2/promise';
import User from '../interfaces/UserInterface';
import UserLogin from '../interfaces/UserLoginInterface';
import connection from './connection';

export default class UserModel {
  private connection: Pool;

  constructor() {
    this.connection = connection;
  }

  create = async (user: User) => {
    const query = `INSERT INTO Trybesmith.Users (username, classe, level, password)
    VALUES (?, ?, ?, ?)`;
    const values = [user.username, user.classe, user.level, user.password];
    await this.connection.execute<ResultSetHeader>(query, values);

    return { username: user.username, 
      classe: user.classe, 
      level: user.level, 
      password: user.password };
  };

  getByUserName = async (user: UserLogin) => {
    const query = 'SELECT * FROM Trybesmith.Users WHERE username = ?';
    const values = [user.username];
    const data = await this.connection.execute<ResultSetHeader>(query, values);

    const [rows] = data;

    return rows;
  };
}