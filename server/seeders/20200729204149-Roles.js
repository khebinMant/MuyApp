'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Roles', [
        {
          rol: 'Usuario',
          estado:true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          rol: 'Administrador',
          estado:true,
          createdAt: new Date(),
          updatedAt: new Date()
        }
    ], {});

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Roles', null, {});
  }
};
