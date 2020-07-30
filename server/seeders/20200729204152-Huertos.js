'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Huertos', [
        {
          detalle: 'Huerto Kevin',
          idUsuario: '1',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          detalle: 'Huerto Jazmin',
          idUsuario: '3',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          detalle: 'Huerto Henry',
          idUsuario: '2',
          createdAt: new Date(),
          updatedAt: new Date()
        }
    ], {});
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Huertos', null, {});
  }
};
