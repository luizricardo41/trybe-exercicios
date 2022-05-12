import connection from "./connection";
// import { ResultSetHeader } from "mysql2/promise";
import User from '../interfaces/user.interface';

export default class UserModel {

  public async getAll(): Promise<User[]> {
    const [result] = await connection.execute('SELECT * FROM Users');
    return result as User[];
  }
}
