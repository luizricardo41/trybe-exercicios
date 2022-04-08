'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.bulkInsert('Books', [
      {
        title: 'Encontro Marcado',
        author: 'Fernando Sabino',
        pageQuantity: 242,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        title: 'Geração de Valor',
        author: 'Flavio Augusto',
        pageQuantity: 231,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        title: 'O Alquimista',
        author: 'Paulo Coelho',
        pageQuantity: 245,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        title: 'O Monge e o Executivo',
        author: 'James C. Hunter',
        pageQuantity: 253,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.bulkDelete('Books', null, {});
  }
};
