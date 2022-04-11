const express = require('express');
const bodyParser = require('body-parser');

const BooksController = require('./controller/booksController')

const app = express();

app.use(bodyParser.json());

app.get('/books', BooksController.getAll);

app.get('/books/:id', BooksController.getById);

app.post('/books', BooksController.createBook);

app.post('/books/:id', BooksController.updateBook);

app.delete('/books/:id', BooksController.deleteBook);

app.listen(3000, () => console.log('Listening on port 3000'));