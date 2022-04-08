const { Book } = require('../models');

const getAll = async () => {
  const books = await Book.findAll({
    attributes: ['id', 'title', 'author', 'pageQuantity', 'createdAt']
  });

  return books;
};

module.exports = {
  getAll,
};