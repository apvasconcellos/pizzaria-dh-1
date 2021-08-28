'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('categorias', [
      { nome: 'Doce' },
      { nome: 'Salgade' },
      { nome: 'Vegetariane' }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('categorias', null, {});
  }
};

