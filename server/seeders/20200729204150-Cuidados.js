'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Cuidados', [
        {
          frecuenciaRiego: 3,
          cantidadRiego: 200,
          resistenciaFrio: 'debil',
          createdAt: new Date(),
          updatedAt: new Date()
        }
    ], {});
    
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Cuidados', null, {});
    
  }
};
