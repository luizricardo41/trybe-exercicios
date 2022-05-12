import { Router } from 'express';
import UsersController from '../controller/UsersController';

const router = Router();

const userController = new UsersController();

router.get('/users', userController.getAll);

export default router;
