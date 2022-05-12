import express, {Request, Response} from 'express';
import { StatusCodes } from 'http-status-codes';

import UsersRouter from './routes/Users'

const app = express();

app.use(express.json());

const PORT = 3001;

app.use(UsersRouter);

app.listen(PORT, () => console.log(`Server listen on port ${PORT}`));
