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

module.exports = {
  getAll,
  getById,
}