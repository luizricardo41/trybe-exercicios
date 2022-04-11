const ServiceBooks = require('../services/booksService');

const getAll = async (req, res) => {
  try {
    const books = await ServiceBooks.getAll();

    return res.status(200).json(books);
  }
  catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await ServiceBooks.getById(id);

    res.status(200).json(book)
  }
  catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
};

const createBook = async (req, res) => {
  try {
    const { title, author, pageQuantity } = req.body;
    const newBook = await ServiceBooks.createBook({title, author, pageQuantity});
    res.status(201).json({ newBook, message: 'Livro criado com sucesso' });
  }
  catch (e) {
    console.log(e.message);
    res.status(500).json({message: 'Algo deu errado'})
  }
};

const updateBook = async (req, res) => {
  try {
    const { title, author, pageQuantity } = req.body;
    const { id } = req.params;
    const changeBook = await ServiceBooks.updateBook({ title, author, pageQuantity }, id);
    res.status(201).json({ changeBook, message: 'Livro modificado com sucesso' });
  }
  catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
};

module.exports = {
  getAll,
  getById,
  createBook,
  updateBook,
}