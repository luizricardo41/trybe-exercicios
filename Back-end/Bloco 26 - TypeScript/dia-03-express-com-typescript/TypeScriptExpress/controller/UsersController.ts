import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import User from '../interfaces/user.interface';
import UserService from '../services/UsersServices';

export default class {
  private userService = new UserService();

  public getAll = async (req: Request, res: Response) => {
    const users = await this.userService.getAll();
    return res.status(StatusCodes.OK).json(users);
  }
}