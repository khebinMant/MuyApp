'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Usuario', [
        {
          nombre: 'Kevin',
          apellido: 'Guachagmira',
          correoElectronico: 'kevinguachagmira@gmail.com',
          contraseña: '12345678',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nombre: 'Henry',
          apellido: 'Alvarado',
          correoElectronico: 'henryAlvarado@gmail.com',
          contraseña: '12345678',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nombre: 'Jazmin',
          apellido: 'Sanchez',
          correoElectronico: 'jazminSanchez@gmail.com',
          contraseña: '12345678',
          createdAt: new Date(),
          updatedAt: new Date()
        }

    ], {});
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Usuario', null, {});
  }
};
