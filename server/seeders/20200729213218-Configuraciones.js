'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Configuraciones', [
      {
        idUsuario: 1,
        region: 'Costa',
        fruta: true,
        legumbre: true,
        hierba: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        idUsuario: 2,
        region: 'Sierra',
        fruta: true,
        legumbre: false,
        hierba: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        idUsuario: 3,
        region: 'Oriente',
        fruta: true,
        legumbre: true,
        hierba: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
    
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Configuraciones', null, {});
    
  }
};
