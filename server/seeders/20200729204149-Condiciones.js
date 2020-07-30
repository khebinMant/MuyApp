'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Condiciones', [
        {
          exposicionSol: 'Soleado o con un poco de sombra',
          tipoSuelo: 'Arcilloso Caliza Humus Arenoso',
          espacioRecomendado: 80,
          profundidadSemilla: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        }
    ], {});

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Condiciones', null, {});
    
  }
};
