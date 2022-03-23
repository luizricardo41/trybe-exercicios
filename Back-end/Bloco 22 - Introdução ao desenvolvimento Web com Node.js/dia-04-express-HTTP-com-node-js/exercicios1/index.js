const express = require('express');
const ping = require('./middlewares/ping');
const hello = require('./middlewares/hello');
const greeting = require('./middlewares/greeting');
const getSimpsons = require('./middlewares/getSimpsons');
const getSimpsonById = require('./middlewares/getSimpsonById');

const app = express();

app.use(express.json());

app.get('/ping', ping);

app.post('/hello', hello);

app.post('/greeting', greeting);

app.get('/simpsons', getSimpsons);

app.get('/simpsons/:id', getSimpsonById);

app.listen(3000, () => console.log('Aplicação executando'));