import UserModel from '../models/UsersModel';
import User from '../interfaces/user.interface';

export default class UserService {
  public model = new UserModel();

  public async getAll(): Promise<User[]> {
    const users = await this.model.getAll();
    return users;
  }
}
