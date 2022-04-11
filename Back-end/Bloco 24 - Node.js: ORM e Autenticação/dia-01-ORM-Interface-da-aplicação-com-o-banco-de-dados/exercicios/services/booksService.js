const { Book } = require('../models');

const getAll = async () => {
  const books = await Book.findAll();

  return books;
};

const getById = async (id) => {
  const book = await Book.findByPk(id);

  return book;
};

const createBook = async (newBook) => {
  const addBook = await Book.create(newBook);
  return addBook;
};

const updateBook = async (bookModified, id) => {
  const { title, author, pageQuantity } = bookModified;
  await Book.update(bookModified, { where: { id } });
  return {
    id,
    title,
    author,
    pageQuantity
  };
};

const deleteBook = async (id) => {
  await Book.destroy({where: {id}});
  return {
    message: 'Livro deletado!!'
  };
};

module.exports = {
  getAll,
  getById,
  createBook,
  updateBook,
  deleteBook,
};